import { ApiQuery } from "../interfaces.js";

export interface Peer {
    ip: string;
    port: number;
    ports: {
        [service: string]: number;
    };
    version: string;
    height: number;
    latency: number;
    plugins: {
        [plugin: string]: {
            port: number;
            enabled?: boolean;
        };
    };
}

export interface AllPeersApiQuery extends ApiQuery {
    ip?: string;
    version?: string;
    orderBy?: string;
}
