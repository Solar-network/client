import { Block } from "./blocks.js";
import { Transaction } from "./transactions.js";
import { Wallet } from "./wallets.js";

export interface BlockchainInfo {
    block: {
        height: number;
        id: string;
    };
    burned: {
        fees: string;
        transactions: string;
        total: string;
    };
    supply: string;
}

export interface BlockchainSearch {
    blocks: Block[];
    transactions: Transaction[];
    wallets: Wallet[];
}
