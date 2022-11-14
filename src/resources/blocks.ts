import { ApiResponse, ApiResponseWithPagination } from "../interfaces.js";
import {
    AllBlockApiQuery,
    Block,
    MissedBlock,
    MissedBlockApiQuery,
    Transaction,
    TransactionsInBlockApiQuery,
} from "../resourcesTypes/index.js";
import { Resource } from "./resource.js";

/**
 * All state changes to the blockchain are in the form of blocks; they contain a set of transactions and metadata
 */
export class Blocks extends Resource {
    /**
     * List all blocks
     *
     * The Public API may be used to query for blocks
     *
     */
    public async all(query?: AllBlockApiQuery): Promise<ApiResponseWithPagination<Block[]>> {
        return this.sendGet("blocks", query);
    }

    /**
     * Retrieve first block
     */
    public async first(): Promise<ApiResponse<Block>> {
        return this.sendGet("blocks/first");
    }

    /**
     * Retrieve last block
     */
    public async last(): Promise<ApiResponse<Block>> {
        return this.sendGet("blocks/last");
    }

    /**
     * Retrieve a block
     *
     * Blocks may be retrieved by id or by height, the latter being an incremental integer
     *
     * @param idOrHeight The id or height of the block to be retrieved
     */
    public async get(idOrHeight: string): Promise<ApiResponse<Block>> {
        return this.sendGet(`blocks/${idOrHeight}`);
    }

    /**
     * List all transactions in a block
     *
     * Instead of deserialising the block's payload, you can also obtain the transactions of each block as proper transaction objects directly
     *
     * @param idOrHeight The identifier of the block to be retrieved
     */
    public async transactions(
        idOrHeight: string,
        query?: TransactionsInBlockApiQuery,
    ): Promise<ApiResponseWithPagination<Transaction[]>> {
        return this.sendGet(`blocks/${idOrHeight}/transactions`, query);
    }

    /**
     * List recent missed blocks
     *
     * Shows all the missed blocks by all delegates in the last 30 days
     */
    public async missed(query?: MissedBlockApiQuery): Promise<ApiResponseWithPagination<MissedBlock[]>> {
        return this.sendGet(`blocks/missed`, query);
    }
}
