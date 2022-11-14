import { Blockchain } from "./blockchain.js";
import { Blocks } from "./blocks.js";
import { Delegates } from "./delegates.js";
import { Locks } from "./locks.js";
import { Node } from "./node.js";
import { Peers } from "./peers.js";
import { Rounds } from "./rounds.js";
import { Transactions } from "./transactions.js";
import { Votes } from "./votes.js";
import { Wallets } from "./wallets.js";

export * from "./resource.js";

// tslint:disable-next-line: variable-name
export const Resources = {
    blockchain: Blockchain,
    blocks: Blocks,
    delegates: Delegates,
    locks: Locks,
    node: Node,
    peers: Peers,
    rounds: Rounds,
    transactions: Transactions,
    votes: Votes,
    wallets: Wallets,
};

export type AvailableResourcesName = keyof typeof Resources;
export type AvailableResource<T extends AvailableResourcesName> = InstanceType<typeof Resources[T]>;
