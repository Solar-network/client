import { ApiResponse } from "../interfaces.js";
import { BlockchainInfo, BlockchainSearch } from "../resourcesTypes/index.js";
import { Resource } from "./resource.js";

/**
 * Get information about the blockchain
 *
 */
export class Blockchain extends Resource {
    /**
     * Get information about the blockchain
     *
     */
    public async blockchain(): Promise<ApiResponse<BlockchainInfo>> {
        return this.sendGet("blockchain");
    }

    /**
     * Search for a block, transaction and/or wallet that corresponds to the id provided
     */
    public async search(id: string): Promise<ApiResponse<BlockchainSearch>> {
        return this.sendGet(`blockchain/search/${id}`);
    }
}
