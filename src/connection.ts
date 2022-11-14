import got from "got";
import isUrl from "is-url-superb";

import { RequestError } from "./errors.js";
import { IResponse } from "./interfaces.js";
import { AvailableResource, AvailableResourcesName, Resources } from "./resources/index.js";

export class Connection {
    private opts: Record<string, any>;

    public constructor(private readonly host: string) {
        if (!isUrl(host)) {
            throw new Error(`${host} is not a valid URL.`);
        }
    }

    public api<T extends AvailableResourcesName>(name: T) {
        // Convert to lower case to be backward-compatible
        const selectedResourceClass = Resources[name.toLowerCase() as AvailableResourcesName];
        return new selectedResourceClass(this) as AvailableResource<T>;
    }

    public withOptions(opts: Record<string, any>): this {
        this.opts = opts;

        return this;
    }

    public async get<T = any>(url: string, opts?: Record<string, any>): Promise<IResponse<T>> {
        return this.sendRequest("GET", url, opts);
    }

    public async post<T = any>(url: string, opts?: Record<string, any>): Promise<IResponse<T>> {
        return this.sendRequest("POST", url, opts);
    }

    private async sendRequest<T>(
        method: "GET" | "POST",
        url: string,
        opts?: Record<string, any>,
    ): Promise<IResponse<T>> {
        opts = { ...this.opts, ...(opts || {}) };

        // Do not retry unless explicitly stated
        if (!opts.retry) {
            opts.retry = { limit: 0 };
        }

        if (!opts.timeout) {
            opts.timeout = { request: 1500 };
        }

        try {
            const response = await got(`${this.host}/${url}`, {
                ...opts,
                responseType: "json",
                method,
            });

            return {
                body: response.body as T,
                headers: response.headers as IResponse<T>["headers"],
                status: response.statusCode,
            };
        } catch (error: any) {
            // Inject the JSON body in the error
            if (error.response) {
                error.response = {
                    body: await error.response.body,
                    headers: error.response.headers,
                    status: error.response.status,
                };
            }
            throw new RequestError(error);
        }
    }
}
