export interface NodeConfiguration {
    core: {
        version: string;
    };
    nethash: string;
    slip44: number;
    wif: number;
    token: string;
    symbol: string;
    explorer: string;
    version: number;
    ports: Record<string, number>;
    constants: {
        height: number;
        activeDelegates: number;
        block: {
            version: number;
            maxTransactions: number;
            maxPayload: number;
        };
        blocksToRevokeDelegateResignation: number;
        blockTime: number;
        burn: {
            feePercent: number;
            txAmount: number;
        };
        epoch: string;
        fees: {
            staticFees: {
                burn: number;
                delegateRegistration: number;
                delegateResignation: number;
                htlcClaim: number;
                htlcLock: number;
                htlcRefund: number;
                ipfs: number;
                legacyTransfer: number;
                legacyVote: number;
                multiSignature: number;
                secondSignature: number;
                transfer: number;
                vote: number;
            };
        };
        legacyTransfer: boolean;
        p2p: {
            minimumVersions: string[];
        };
        transfer: {
            maximum: number;
            minimum: number;
        };
        reward: number;
        dynamicReward: {
            enabled: boolean;
            ranks: {
                [rank: string]: number;
            };
            secondaryReward: number;
        };
        bip340: boolean;
        donations: {
            [address: string]: {
                percent: number;
                purpose: string;
            };
        };
    };
    pool: {
        dynamicFees: {
            enabled: boolean;
            addonBytes?: {
                burn: number;
                delegateRegistration: number;
                delegateResignation: number;
                htlcClaim: number;
                htlcLock: number;
                htlcRefund: number;
                ipfs: number;
                legacyTransfer: number;
                legacyVote: number;
                multiSignature: number;
                secondSignature: number;
                transfer: number;
                vote: number;
            };
            minFeeBroadcast?: number;
            minFeePool?: number;
        };
        maxTransactionsInPool: number;
        maxTransactionsPerSender: number;
        maxTransactionsPerRequest: number;
        maxTransactionAge: number;
        maxTransactionBytes: number;
    };
}

export interface NodeCryptoConfiguration {
    exceptions: Record<string, any>;
    genesisBlock: {
        version: number;
        totalAmount: string;
        totalFee: string;
        reward: string;
        payloadHash: string;
        timestamp: number;
        numberOfTransactions: number;
        payloadLength: number;
        previousBlock?: string;
        generatorPublicKey: string;
        transactions: [
            {
                id: string;
                network: number;
                nonce: string;
                type: number;
                typeGroup: number;
                amount: string;
                fee: string;
                recipientId?: string;
                asset?: Record<string, any>;
                senderPublicKey: string;
                signature: string;
                version: number;
                headerType: number;
            },
        ];
        height: number;
        id: string;
        blockSignature: string;
    };
    milestones: object[];
    network: {
        name: string;
        messagePrefix: string;
        addressCharacter: string;
        bip32: {
            public: number;
            private: number;
        };
        pubKeyHash: number;
        nethash: string;
        wif: number;
        slip44: number;
        client: {
            token: string;
            symbol: string;
            explorer: string;
        };
    };
}

export interface NodeFeeStatisticsBody {
    [typegroup: string]: {
        [type: string]: {
            min: string;
            max: string;
            avg: string;
            sum: string;
            burned: string;
        };
    };
}
export interface NodeFeeStatisticsMeta {
    days?: number;
}

export interface NodeStatus {
    synced: boolean;
    now: number;
    blocksCount: number;
    timestamp: number;
}

export interface NodeSyncingStatus {
    syncing: boolean;
    blocks: number;
    height: number;
    id: string;
}
