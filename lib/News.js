/**
 * A news
 * @prop {String} id
 * @prop {String} type
 * @prop {Object} data
 * @prop {String} data.username
 * @prop {String} data.gameType
 * @prop {String} data.rank
 * @prop {String} data.result
 * @prop {String} data.replayId
 * @prop {Date} date
 */

class News {
    constructor (data) {
        this.id = data._id
        this.type = data.type
        this.data = {
            username: data.data.username,
            gameType: data.data.gametype,
            rank: data.data.rank,
            result: data.data.result,
            replayId: data.data.replayid
        }
        this.date = data.ts
    }
}

module.exports = News