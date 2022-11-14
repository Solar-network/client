import { ApiResponse, ApiResponseWithPagination } from "../interfaces.js";
import { AllPeersApiQuery, Peer } from "../resourcesTypes/peers.js";
import { Resource } from "./resource.js";

/**
 * The `peers` resource is much like the `node` resource, but only exposes the IPs and ports of connected peers
 *
 * Recursively traversing this API and its responses allow you to inspect the entire public network
 */
export class Peers extends Resource {
    /**
     * List all peers
     *
     * Returns all peers known by the node, which may not necessarily be exhaustive since only public nodes appear here
     */
    public async all(query?: AllPeersApiQuery): Promise<ApiResponseWithPagination<Peer[]>> {
        return this.sendGet("peers", query);
    }

    /**
     * Retrieve a peer
     *
     * Specific peers can be found by IP address
     *
     * @param ip The IP address of the peer to be retrieved
     */
    public async get(ip: string): Promise<ApiResponse<Peer>> {
        return this.sendGet(`peers/${ip}`);
    }
}
