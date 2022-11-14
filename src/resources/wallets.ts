import { ApiQuery, ApiResponse, ApiResponseWithPagination } from "../interfaces.js";
import { Lock, Transaction } from "../resourcesTypes/index.js";
import { AllWalletsApiQuery, Wallet, WalletsTransactionsApiQuery } from "../resourcesTypes/wallets.js";
import { Resource } from "./resource.js";

/**
 * Wallets are addresses containing, or previously having contained SXP
 *
 * A wallet's public key may be unknown to the network, in that case, it is referred to as a `cold wallet`
 */
export class Wallets extends Resource {
    /**
     * List all wallets
     *
     * A paginated API is provided to obtain all wallets
     */
    public async all(query?: AllWalletsApiQuery): Promise<ApiResponseWithPagination<Wallet[]>> {
        return this.sendGet("wallets", query);
    }

    /**
     * Retrieve a wallet
     *
     * Specific wallets can be obtained either by their `publicKey` or `address`
     *
     * @param addressOrPublicKey The identifier of the wallet to be retrieved
     */
    public async get(addressOrPublicKey: string): Promise<ApiResponse<Wallet>> {
        return this.sendGet(`wallets/${addressOrPublicKey}`);
    }

    /**
     * List all transactions of a wallet
     *
     * All transactions belonging to a wallet can be obtained using this API
     *
     * Equivalent to `transactions/all` with parameters `senderId` and `recipientId`
     *
     * @param addressOrPublicKey The identifier of the wallet to be retrieved
     */
    public async transactions(
        addressOrPublicKey: string,
        query?: WalletsTransactionsApiQuery,
    ): Promise<ApiResponseWithPagination<Transaction[]>> {
        return this.sendGet(`wallets/${addressOrPublicKey}/transactions`, query);
    }

    /**
     * List all received transactions of a wallet
     *
     * Incoming transactions can be obtained as well
     *
     * Equivalent to `transactions/all` with parameter `recipientId` set
     *
     * @param addressOrPublicKey The identifier of the wallet to be retrieved
     */
    public async transactionsReceived(
        addressOrPublicKey: string,
        query?: WalletsTransactionsApiQuery,
    ): Promise<ApiResponseWithPagination<Transaction[]>> {
        return this.sendGet(`wallets/${addressOrPublicKey}/transactions/received`, query);
    }

    /**
     * List all sent transactions of a wallet
     *
     * The inverse of `transactions/received`
     *
     * The balance of a wallet does not equal `totalIncoming - totalOutgoing` if the wallet is a delegate, as you must then also add the total reward from transaction fees and forged blocks to their balance
     *
     * @param addressOrPublicKey The identifier of the wallet to be retrieved
     */
    public async transactionsSent(
        addressOrPublicKey: string,
        query?: WalletsTransactionsApiQuery,
    ): Promise<ApiResponseWithPagination<Transaction[]>> {
        return this.sendGet(`wallets/${addressOrPublicKey}/transactions/sent`, query);
    }

    /**
     * List all votes by a wallet
     *
     * Returns all votes made by the wallet
     *
     * @param addressOrPublicKey The identifier of the wallet to be retrieved
     */
    public async votes(
        addressOrPublicKey: string,
        query?: ApiQuery,
    ): Promise<ApiResponseWithPagination<Transaction[]>> {
        return this.sendGet(`wallets/${addressOrPublicKey}/votes`, query);
    }

    /**
     * List all top wallets
     *
     * Sort the wallets by their balance
     */
    public async top(query?: ApiQuery): Promise<ApiResponseWithPagination<Wallet[]>> {
        return this.sendGet("wallets/top", query);
    }

    /**
     * List all locks in a wallet
     *
     * @param addressOrPublicKey The identifier of the wallet to be retrieved
     */
    public async locks(addressOrPublicKey: string, query?: ApiQuery): Promise<ApiResponseWithPagination<Lock[]>> {
        return this.sendGet(`wallets/${addressOrPublicKey}/locks`, query);
    }
}
