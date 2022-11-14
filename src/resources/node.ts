import { ApiExtendedResponse, ApiResponse } from "../interfaces.js";
import {
    NodeConfiguration,
    NodeCryptoConfiguration,
    NodeFeeStatisticsBody,
    NodeFeeStatisticsMeta,
    NodeStatus,
    NodeSyncingStatus,
} from "../resourcesTypes/node.js";
import { Resource } from "./resource.js";

/**
 * The `node` resource is useful for service discovery, health checks and obtaining network configurations such as fees, API, and coin information
 *
 */
export class Node extends Resource {
    /**
     * Retrieve the configuration
     *
     * Used to access a node's configuration and the network it is attached to (identified by the `nethash`)
     */
    public async configuration(): Promise<ApiResponse<NodeConfiguration>> {
        return this.sendGet("node/configuration");
    }

    /**
     * Retrieve the cryptography configuration
     *
     * Used to access a node's configuration for the `@solar-network/crypto` package that handles all cryptography operations
     */
    public async crypto(): Promise<ApiResponse<NodeCryptoConfiguration>> {
        return this.sendGet("node/configuration/crypto");
    }

    /**
     * Retrieve the fee statistics
     *
     * Used to access a node's fee statistics
     *
     * @param days The number of days which will be regarded
     */
    public async fees(days: number): Promise<ApiExtendedResponse<NodeFeeStatisticsBody, NodeFeeStatisticsMeta>> {
        return this.sendGet("node/fees", { days });
    }

    /**
     * Retrieve the status
     *
     * The status allows for health checking, showing if the node is in sync with the network
     */
    public async status(): Promise<ApiResponse<NodeStatus>> {
        return this.sendGet("node/status");
    }

    /**
     * Retrieve the syncing status
     *
     * The `syncing` resource is very much alike `node/status`, providing information on the syncing progress
     *
     * If a node is not syncing but significantly behind in blocks, it might be time to perform a check
     */
    public async syncing(): Promise<ApiResponse<NodeSyncingStatus>> {
        return this.sendGet("node/syncing");
    }
}
