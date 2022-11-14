import { ApiResponse } from "../interfaces.js";
import { AllTransactionsApiQuery, Transaction } from "../resourcesTypes/index.js";
import { Resource } from "./resource.js";

/**
 * A vote is a specific type of transaction
 *
 * A wallet votes for one or more delegates
 */
export class Votes extends Resource {
    /**
     * List all votes
     */
    public async all(query?: AllTransactionsApiQuery): Promise<ApiResponse<Transaction[]>> {
        return this.sendGet("votes", query);
    }

    /**
     * Retrieve a vote
     *
     * Votes may be retrieved using their transaction id
     *
     * Note the `asset` field, which contains the `votes` object
     *
     * @param id The identifier of the vote to be retrieved
     */
    public async get(id: string): Promise<ApiResponse<Transaction>> {
        return this.sendGet(`votes/${id}`);
    }
}
