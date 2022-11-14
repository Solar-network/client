// @ts-ignore - Could not find a declaration file for module 'node-dotify'.
import dotify from "node-dotify";

import { Connection } from "../connection.js";
import { IResponse } from "../interfaces.js";

export class Resource {
    private opts: Record<string, any> = {};

    public constructor(protected readonly connection: Connection) {}

    public withOptions(opts: Record<string, any>): this {
        this.opts = opts;

        return this;
    }

    public resetOptions(): this {
        this.opts = {};

        return this;
    }

    public async sendGet<T = any>(url: string, query?: Record<string, any>): Promise<IResponse<T>> {
        const response =
            query !== undefined
                ? await this.connection.get(url, { ...this.opts, ...{ searchParams: dotify(query) } })
                : await this.connection.get(url, this.opts);

        this.resetOptions();

        return response;
    }

    public async sendPost<T = any>(
        url: string,
        body?: Record<string, any>,
        query?: Record<string, any>,
    ): Promise<IResponse<T>> {
        const response = await (query !== undefined
            ? this.connection.post(url, {
                  ...this.opts,
                  ...{ json: body },
                  ...{ searchParams: dotify(query) },
              })
            : this.connection.post(url, { ...this.opts, ...{ json: body } }));

        this.resetOptions();

        return response;
    }
}
