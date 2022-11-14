import { ApiQuery, ApiQueryRange } from "../interfaces.js";

export interface Block {
    id: string;
    version: number;
    height: number;
    previous: string;
    forged: {
        reward: string;
        donations: { [address: string]: string };
        fee: string;
        burnedFee: string;
        amount: string;
        total: string;
    };
    payload: {
        hash: string;
        length: number;
    };
    generator: {
        username?: string;
        publicKey: string;
    };
    signature: string;
    transactions: number;
    confirmations: number;
    timestamp: {
        epoch: number;
        unix: number;
        human: string;
    };
}

export interface MissedBlock {
    height: number;
    timestamp: {
        epoch: number;
        unix: number;
        human: string;
    };
    username: string;
}

export interface AllBlockApiQuery extends ApiQuery {
    /** Type by which it orders blocks */
    orderBy?: string;
    /** The identifier of the block to be retrieved */
    id?: string;
    version?: number;
    timestamp?: number | ApiQueryRange;
    previousBlock?: string;
    /** The height of the block to be retrieved */
    height?: number | ApiQueryRange;
    numberOfTransactions?: number | ApiQueryRange;
    totalAmount?: number | ApiQueryRange;
    totalFee?: number | ApiQueryRange;
    burnedFee?: number | ApiQueryRange;
    reward?: number | ApiQueryRange;
    payloadLength?: number | ApiQueryRange;
    payloadHash?: string;
    generatorPublicKey?: string;
    username?: string;
    blockSignature?: string;
}

export interface TransactionsInBlockApiQuery extends ApiQuery {
    /** Type by which it orders transactions of a block */
    orderBy?: string;
    address?: string;
    senderId?: string;
    recipientId?: string;
    id?: string;
    version?: number;
    blockHeight?: number | ApiQueryRange;
    blockId?: string;
    sequence?: number | ApiQueryRange;
    timestamp?: number | ApiQueryRange;
    nonce?: number | ApiQueryRange;
    senderPublicKey?: string;
    type?: number;
    typeGroup?: number;
    memo?: string;
    amount?: number | ApiQueryRange;
    fee?: number | ApiQueryRange;
    burnedFee?: number | ApiQueryRange;
    asset?: object;
}

export interface MissedBlockApiQuery extends ApiQuery {
    timestamp?: number | ApiQueryRange;
    height?: number | ApiQueryRange;
    username?: string;
}
