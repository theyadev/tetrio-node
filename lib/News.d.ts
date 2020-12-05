export = News;
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
declare class News {
    constructor(data: any);
    id: any;
    type: any;
    data: {
        username: any;
        gameType: any;
        rank: any;
        result: any;
        replayId: any;
    };
    date: any;
}
