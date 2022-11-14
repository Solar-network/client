import { Block } from "../index.js";
import { ApiResponse, ApiResponseWithPagination } from "../interfaces.js";
import { MissedBlock } from "../resourcesTypes/blocks.js";
import {
    AllDelegatesApiQuery,
    Delegate,
    DelegateBlockMissedApiQuery,
    DelegateBlocksApiQuery,
    DelegateVotersApiQuery,
    Voter,
} from "../resourcesTypes/delegates.js";
import { Resource } from "./resource.js";

/**
 * Delegate wallets are regular wallets which have registered themselves eligible to become a delegate by a registration transaction
 *
 * If a delegate is amongst the top 53 highest voted (by staked SXP), it may produce a block once every ~7 minutes, awarding the delegate between ~6 and ~13 SXP + the transaction fees
 *
 */
export class Delegates extends Resource {
    /**
     * List all delegates
     *
     * You can obtain all registered delegates through this paginated API
     *
     * If an active delegate is offline, it is still returned through this API as the `delegate` resource is not concerned with the actual nodes, only with the on-chain registrations and wallets
     */
    public async all(query?: AllDelegatesApiQuery): Promise<ApiResponseWithPagination<Delegate[]>> {
        return this.sendGet("delegates", query);
    }

    /**
     * Retrieve a delegate
     *
     * You can query for a specific delegate by username, address, or public key
     *
     * @param usernameOrAddressOrPublicKey The identifier of the delegate to be retrieved
     */
    public async get(usernameOrAddressOrPublicKey: string): Promise<ApiResponse<Delegate>> {
        return this.sendGet(`delegates/${usernameOrAddressOrPublicKey}`);
    }

    /**
     * List all blocks produced by a delegate
     *
     * The `delegate` resource allows you to obtain blocks from a specific delegate
     *
     * This is the equivalent of searching for blocks using the `generatorPublicKey`
     *
     * @param usernameOrAddressOrPublicKey The identifier of the delegate to be retrieved
     */
    public async blocks(
        usernameOrAddressOrPublicKey: string,
        query?: DelegateBlocksApiQuery,
    ): Promise<ApiResponseWithPagination<Block[]>> {
        return this.sendGet(`delegates/${usernameOrAddressOrPublicKey}/blocks`, query);
    }

    /**
     * List recent missed blocks of a delegate
     *
     * The `delegate` resource allows you to obtain missed blocks from a specific delegate
     *
     * @param usernameOrAddressOrPublicKey The identifier of the delegate to be retrieved
     */
    public async missed(
        usernameOrAddressOrPublicKey: string,
        query?: DelegateBlockMissedApiQuery,
    ): Promise<ApiResponseWithPagination<MissedBlock[]>> {
        return this.sendGet(`delegates/${usernameOrAddressOrPublicKey}/blocks/missed`, query);
    }

    /**
     * List all voters of a delegate
     *
     * This endpoint returns **current** voters of a specific delegate
     *
     * @param usernameOrAddressOrPublicKey The identifier of the delegate to be retrieved
     */
    public async voters(
        usernameOrAddressOrPublicKey: string,
        query?: DelegateVotersApiQuery,
    ): Promise<ApiResponseWithPagination<Voter[]>> {
        return this.sendGet(`delegates/${usernameOrAddressOrPublicKey}/voters`, query);
    }
}
