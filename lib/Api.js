const axios = require("axios");
const User = require("./User.js");
const Record = require("./Record.js");
const News = require("./News.js");
class Api {
  /**
   * Creates a new tetrio-node object
   * @param {String} token your tetrio user token
   * @param {Boolean} [options.notFoundAsError=true] Throw an error on not found instead of returning nothing
   */
  constructor(token, options = {}) {
    this.token = token;
    this.baseUrl = "https://tetr.io/api";
    this.notFoundAsError =
      options.notFoundAsError === undefined ? true : !!options.notFoundAsError;
  }

  get config() {
    return {
      notFoundAsError: this.notFoundAsError,
    };
  }

  get header() {
    return {
      headers: { Authorization: "Bearer " + this.token },
    };
  }

  async apiCall(endpoint) {
    if (!this.token) throw new Error("token not set");

    try {
      const res = await axios.get(this.baseUrl + endpoint, this.header);

      return res.data;
    } catch (error) {
      throw new Error(error.response.data.errors[0].msg || error);
    }
  }

  /**
   * Returns a not found error or the response, depending on the config
   * @param {Object} response
   * @returns {Object}
   */

  notFound(response) {
    if (this.notFoundAsError) throw new Error("Not found");

    return response;
  }

  /**
   * Returns an User object
   * @param {Object} options
   * @param {String} options.user Specify an user to return data from
   * @param {"username"|"id"} [options.type] Specify if `uuser` is a userId or a username
   * @returns {Promise<User{}>}
   */

  async getUser(options) {
    const type = options.type || "username";
    let id = options.user;
    if (type == "username") {
      id = await this.getUserId(options.user);
    }

    const res = await this.apiCall("/users/" + id);

    if (res.length === 0) return this.notFound(res);

    return new User(res.user);
  }

  /**
   * Return an userId
   * @param {String} username
   */

  async getUserId(username) {
    const r = await this.apiCall("/users/" + username + "/resolve");
    return r._id;
  }

  /**
   * Returns 10 Record in Array
   * @param {Object} options
   * @param {String} options.user Specify an user to return data from
   * @param {"username"|"id"} [options.type] Specify if `user` is a userId or a username
   * @param {"40l"|"blitz"} [options.gameType]
   * @returns {Promise<User{}>}
   */

  async getTopScores(options) {
    const gameType = options.gameType || "40l";
    const type = options.type || "username";
    let id = options.user;
    if (type == "username") {
      id = await this.getUserId(options.user);
    }

    const res = await this.apiCall("/records/" + gameType + "_userbest_" + id);

    if (res.length === 0) return this.notFound(res);
    return res.records.map((i) => new Record(i));
  }

  /**
   * @param {Object} options
   * @param {String} options.replayId
   */
  async getReplayShort(options) {
    const id = options.replayId;

    const res = await this.apiCall("/games/" + id);

    if (res.length === 0) return this.notFound(res);
    return res.game.shortid;
  }

  /**
   * Returns 10 Record in Array
   * @param {Object} options
   * @param {String} options.user Specify an user to return data from
   * @param {"username"|"id"} [options.type] Specify if `user` is a userId or a username
   * @returns {Promise<User{}>}
   */

  async getRecentScores(options) {
    const type = options.type || "username";
    let id = options.user;
    if (type == "username") {
      id = await this.getUserId(options.user);
    }

    const res = await this.apiCall("/records/any_userrecent_" + id);

    if (res.length === 0) return this.notFound(res);
    return res.records.map((i) => new Record(i));
  }

  /**
   * Returns 10 Record in Array
   * @param {Object} options
   * @param {"40l"|"blitz"} [options.gameType]
   * @returns {Promise<User{}>}
   */

  async getGlobalLeaderboard(options) {
    const gameType = options ? options.gameType || "40l" : "40l";

    const res = await this.apiCall("/records/" + gameType + "_global");

    if (res.length === 0) return this.notFound(res);
    return res.records.map((i) => new Record(i));
  }

  /**
   * Returns 10 Record in Array
   * @param {Object} options
   * @param {"xp"|"league"} [options.by]
   * @returns {Promise<User{}>}
   */

  async getGlobalUsers(options) {
    const type = options ? options.by || "league" : "league";

    const res = await this.apiCall("/users/by/" + type);

    if (res.length === 0) return this.notFound(res);
    return res.users.map((i) => new User(i));
  }

/**
 * Return News
 */

  async getNews() {
    const res = await this.apiCall("/tetra/news");
    if (res.length === 0) return this.notFound(res);
    console.log(res)
    return res.news.map((i) => new News(i));
  }
}

module.exports = Api;
