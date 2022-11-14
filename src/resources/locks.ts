import { ApiResponse, ApiResponseWithPagination } from "../interfaces.js";
import { Transaction } from "../resourcesTypes/index.js";
import {
    AllLocksApiQuery,
    Lock,
    SearchLocksUnlockedApiBody,
    SearchLocksUnlockedApiQuery,
} from "../resourcesTypes/locks.js";
import { Resource } from "./resource.js";

/**
 * HTLC locks are not operational on mainnet
 */
export class Locks extends Resource {
    /**
     * List all locks
     */
    public async all(query?: AllLocksApiQuery): Promise<ApiResponseWithPagination<Lock[]>> {
        return this.sendGet("locks", query);
    }

    /**
     * Return lock by id
     *
     * @param id Lock id
     */
    public async get(id: string): Promise<ApiResponse<Lock>> {
        return this.sendGet(`locks/${id}`);
    }

    /**
     * Search for locks that are now unlocked
     */
    public async unlocked(
        payload?: SearchLocksUnlockedApiBody,
        query?: SearchLocksUnlockedApiQuery,
    ): Promise<ApiResponseWithPagination<Transaction[]>> {
        return this.sendPost("locks/unlocked", payload, query);
    }
}
