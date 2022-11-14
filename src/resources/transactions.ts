import { ApiQuery, ApiResponse, ApiResponseWithPagination } from "../interfaces.js";
import {
    AllTransactionsApiQuery,
    CreateTransactionApiResponse,
    Transaction,
    TransactionFees,
    TransactionTypes,
} from "../resourcesTypes/transactions.js";
import { Resource } from "./resource.js";

/**
 * Transactions are signed and serialised payloads, batched together to form a block
 */
export class Transactions extends Resource {
    /**
     * List all transactions
     *
     * The paginated API is used to query for multiple transactions, and _filters_ can be applied through the query parameter to search for specific transactions
     */
    public async all(query?: AllTransactionsApiQuery): Promise<ApiResponseWithPagination<Transaction[]>> {
        return this.sendGet("transactions", query);
    }

    /**
     * Create a transaction
     *
     * Creating the correct payload for a transaction is non-trivial, as it requires cryptographic functions and a specific serialisation protocol
     *
     * @param payload The list of transactions to create
     */
    public async create(
        payload: { transactions: object[] } & Record<string, any>,
    ): Promise<ApiResponse<CreateTransactionApiResponse> & { errors?: any }> {
        return this.sendPost("transactions", payload);
    }

    /**
     * Retrieve a transaction
     *
     * Obtaining a transaction by id does not require advanced logic as the API does not return a serialised transaction, but a human-readable object
     *
     * @param id The identifier of the transaction to be retrieved
     */
    public async get(id: string): Promise<ApiResponse<Transaction>> {
        return this.sendGet(`transactions/${id}`);
    }

    /**
     * List all unconfirmed transactions
     *
     * Unconfirmed transactions have not been incorporated in the blockchain, but reside in the pool
     *
     * Although the pool is usually cleared within minutes, during high network load a transaction with a low fee will live here for a considerable time
     *
     * If you have set the transaction with a fee of near zero, it might not be picked up by a delegate and will eventually be removed from the pool
     */
    public async allUnconfirmed(query?: ApiQuery): Promise<ApiResponseWithPagination<Transaction[]>> {
        return this.sendGet("transactions/unconfirmed", query);
    }

    /**
     * Get an unconfirmed transaction
     *
     * As with confirmed transactions, you may query for unconfirmed transactions directly
     *
     * @param id The identifier of the transaction to be retrieved
     */
    public async getUnconfirmed(id: string): Promise<ApiResponse<Transaction>> {
        return this.sendGet(`transactions/unconfirmed/${id}`);
    }

    /**
     * Get transaction types
     */
    public async types(): Promise<ApiResponse<TransactionTypes>> {
        return this.sendGet("transactions/types");
    }

    /**
     * Get default transaction fees
     *
     * The default transaction fees are significantly higher than the dynamic transaction fees, so you should use the `node` resource to find dynamic fees and prefer using these
     */
    public async fees(): Promise<ApiResponse<TransactionFees>> {
        return this.sendGet("transactions/fees");
    }

    /**
     * Get transaction schemas
     */
    public async schemas(): Promise<ApiResponse<Record<string, object>>> {
        return this.sendGet("transactions/schemas");
    }
}
