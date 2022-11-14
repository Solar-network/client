import { ApiQuery, ApiQueryRange } from "../interfaces.js";

export interface Wallet {
    address: string;
    publicKey: string;
    nonce: string;
    balance: string;
    votingFor: {
        [username: string]: {
            percent: number;
            votes: string;
        };
    };
    attributes: {
        secondPublicKey?: string;
        delegate?: {
            username: string;
            voteBalance: string;
            forgedFees: string;
            burnedFees: string;
            forgedRewards: string;
            donations: string;
            producedBlocks: number;
            rank: number;
            voters: number;
            lastBlock?: string;
            missedBlocks?: number;
            productivity?: number;
            version?: string;
        };
        htlc?: {
            locks: {};
            lockedBalance: string;
        };
    } & Record<string, any>;
}

export interface AllWalletsApiQuery extends ApiQuery {
    /** Type by which it orders wallets */
    orderBy?: string;
    address?: string;
    publicKey?: string;
    balance?: number | ApiQueryRange;
    nonce?: number | ApiQueryRange;
    attributes?: object;
}

export interface WalletsTransactionsApiQuery extends ApiQuery {
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
