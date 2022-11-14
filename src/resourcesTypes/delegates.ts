import { ApiQuery, ApiQueryRange } from "../interfaces.js";

export interface Delegate {
    username: string;
    address: string;
    publicKey: string;
    votesReceived: {
        percent: number;
        votes: string;
        voters: number;
    };
    rank: number;
    isResigned: boolean;
    resignationType?: string;
    blocks: {
        produced: number;
        missed?: number;
        productivity?: number;
        last?: string;
    };
    forged: {
        fees: string;
        burnedFees: string;
        rewards: string;
        donations: string;
        total: string;
    };
    version?: string;
}

export interface Voter {
    address: string;
    publicKey: string;
    balance: string;
    nonce: string;
    attributes: Record<string, any>;
    votingFor: {
        [username: string]: {
            percent: number;
            votes: string;
        };
    };
}

export interface AllDelegatesApiQuery extends ApiQuery {
    /** Type by which it orders delegates */
    orderBy?: string;
    username?: string;
    address?: string;
    publicKey?: string;
    votesReceived?: {
        percent?: number | ApiQueryRange;
        votes?: number | ApiQueryRange;
        voters?: number | ApiQueryRange;
    };
    rank?: number | ApiQueryRange;
    isResigned?: boolean;
    resignationType?: "permanent" | "temporary";
    blocks?: {
        missed?: number | ApiQueryRange;
        produced?: number | ApiQueryRange;
        productivity?: number | ApiQueryRange;
        last?: {
            id?: string;
            height?: number | ApiQueryRange;
            timestamp?: {
                epoch?: number | ApiQueryRange;
                unix?: number | ApiQueryRange;
                human?: string;
            };
        };
    };
    forged?: {
        fees?: number | ApiQueryRange;
        burnedFees?: number | ApiQueryRange;
        rewards?: number | ApiQueryRange;
        donations?: number | ApiQueryRange;
        total?: number | ApiQueryRange;
    };
    version?: number | ApiQueryRange;
}

export interface DelegateBlocksApiQuery extends ApiQuery {
    /** Type by which it orders blocks */
    orderBy?: string;
    id?: string;
    version?: number;
    timestamp?: number | ApiQueryRange;
    previousBlock?: string;
    height?: number | ApiQueryRange;
    numberOfTransactions?: number | ApiQueryRange;
    totalAmount?: number | ApiQueryRange;
    totalFee?: number | ApiQueryRange;
    burnedFee?: number | ApiQueryRange;
    reward?: number | ApiQueryRange;
    payloadLength?: number | ApiQueryRange;
    payloadHash?: string;
    blockSignature?: string;
}

export interface DelegateVotersApiQuery extends ApiQuery {
    /** Type by which it order voters */
    orderBy?: string;
    address?: string;
    publicKey?: string;
    balance?: number | ApiQueryRange;
    nonce?: number | ApiQueryRange;
    attributes?: object;
}

export interface DelegateBlockMissedApiQuery extends ApiQuery {
    orderBy?: string;
    id?: string;
    version?: number;
    timestamp?: number | ApiQueryRange;
    previousBlock?: string;
    height?: number | ApiQueryRange;
    numberOfTransactions?: number | ApiQueryRange;
    totalAmount?: number | ApiQueryRange;
    totalFee?: number | ApiQueryRange;
    burnedFee?: number | ApiQueryRange;
    reward?: number | ApiQueryRange;
    payloadLength?: number | ApiQueryRange;
    payloadHash?: string;
    blockSignature?: string;
}
