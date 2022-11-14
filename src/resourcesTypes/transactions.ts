import { ApiQuery, ApiQueryRange } from "../interfaces.js";

export interface Transaction {
    id: string;
    blockHeight: number;
    blockId: string;
    version: number;
    type: number;
    typeGroup: number;
    amount: string;
    fee: string;
    burnedFee?: string;
    sender: string;
    senderPublicKey: string;
    recipient?: string;
    signature: string;
    signSignature?: string;
    signatures?: string[];
    memo?: string;
    asset?: TransactionAssets;
    confirmations: number;
    nonce: string;
    timestamp?: {
        epoch: number;
        unix: number;
        human: string;
    };
}

export type TransactionAssets = {
    ipfs?: string;
    votes?: string[] | { [delegate: string]: number };
    delegate?: {
        username: string;
    };
    lock?: {
        secretHash: string;
        expiration: {
            type: number;
            value: number;
        };
    };
    claim?: {
        lockTransactionId: string;
        unlockSecret: string;
    };
    refund?: {
        lockTransactionId: string;
    };
    transfers?: [
        {
            amount: string;
            recipientId: string;
        },
    ];
} & Record<string, any>;

export interface CreateTransactionApiResponse {
    accept: string[];
    broadcast: string[];
    excess: string[];
    invalid: string[];
}

export interface TransactionTypes extends Record<number, Record<string, number>> {
    1: {
        LegacyTransfer: number;
        SecondSignature: number;
        DelegateRegistration: number;
        Ipfs: number;
        Transfer: number;
        DelegateResignation: number;
    };
    2: {
        Burn: number;
        Vote: number;
    };
}

export interface TransactionFees extends Record<number, Record<string, string>> {
    1: {
        LegacyTransfer: string;
        SecondSignature: string;
        DelegateRegistration: string;
        Ipfs: string;
        Transfer: string;
        DelegateResignation: string;
    };
    2: {
        Burn: string;
        Vote: string;
    };
}

export interface AllTransactionsApiQuery extends ApiQuery {
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
    orderBy?: string;
}
