export = Api;
declare class Api {
    /**
     * Creates a new tetrio-node object
     * @param {String} token your tetrio user token
     * @param {Boolean} [options.notFoundAsError=true] Throw an error on not found instead of returning nothing
     */
    constructor(token: string, options?: {});
    token: string;
    baseUrl: string;
    notFoundAsError: boolean;
    get config(): {
        notFoundAsError: boolean;
    };
    get header(): {
        headers: {
            Authorization: string;
        };
    };
    apiCall(endpoint: any): Promise<any>;
    /**
     * Returns a not found error or the response, depending on the config
     * @param {Object} response
     * @returns {Object}
     */
    notFound(response: any): any;
    /**
     * Returns an User object
     * @param {Object} options
     * @param {String} options.user Specify an user to return data from
     * @param {"username"|"id"} [options.type] Specify if `uuser` is a userId or a username
     * @returns {Promise<User{}>}
     */
    getUser(options: {
        user: string;
        type: "username" | "id";
    }): Promise<User>;
    /**
     * Return an userId
     * @param {String} username
     */
    getUserId(username: string): Promise<any>;
    /**
     * Returns 10 Record in Array
     * @param {Object} options
     * @param {String} options.user Specify an user to return data from
     * @param {"username"|"id"} [options.type] Specify if `user` is a userId or a username
     * @param {"40l"|"blitz"} [options.gameType]
     * @returns {Promise<User{}>}
     */
    getTopScores(options: {
        user: string;
        type: "username" | "id";
        gameType: "40l" | "blitz";
    }): Promise<User>;
    /**
     * @param {Object} options
     * @param {String} options.replayId
     */
    getReplayShort(options: {
        replayId: string;
    }): Promise<any>;
    /**
     * Returns 10 Record in Array
     * @param {Object} options
     * @param {String} options.user Specify an user to return data from
     * @param {"username"|"id"} [options.type] Specify if `user` is a userId or a username
     * @returns {Promise<User{}>}
     */
    getRecentScores(options: {
        user: string;
        type: "username" | "id";
    }): Promise<User>;
    /**
     * Returns 10 Record in Array
     * @param {Object} options
     * @param {"40l"|"blitz"} [options.gameType]
     * @returns {Promise<User{}>}
     */
    getGlobalLeaderboard(options: {
        gameType: "40l" | "blitz";
    }): Promise<User>;
    /**
     * Returns 10 Record in Array
     * @param {Object} options
     * @param {"xp"|"league"} [options.by]
     * @returns {Promise<User{}>}
     */
    getGlobalUsers(options: {
        by: "xp" | "league";
    }): Promise<User>;
    /**
     * Return News
     */
    getNews(): Promise<any>;
}
import User = require("./User.js");
