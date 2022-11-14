import { ApiResponse } from "../interfaces.js";
import { Resource } from "./resource.js";

export class Rounds extends Resource {
    /**
     * List rounds data
     *
     * @param roundNumber The number of the requested round
     */
    public async delegates(roundNumber: number): Promise<ApiResponse<{ publicKey: string; votes: string }[]>> {
        return this.sendGet(`rounds/${roundNumber}/delegates`);
    }
}
