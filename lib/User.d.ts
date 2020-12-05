export = User;
/**
 * A user.
 * @prop {String} id
 * @prop {String} username
 * @prop {String} role
 * @prop {Array} badges
 * @prop {Number} exp
 * @prop {Number} gamesPlayed
 * @prop {Number} gamesWon
 * @prop {Number} secondsPlayed
 * @prop {String} country
 * @prop {Boolean} isSupporter
 * @prop {Boolean} isVerified
 * @prop {Object} records
 * @prop {Record} records.sprint
 * @prop {Number} records.sprintRank
 * @prop {Record} records.blitz
 * @prop {Number} records.blitzRank
 * @prop {Object} tetraLeague
 * @prop {Number} tetraLeague.gamesPlayed
 * @prop {Number} tetraLeague.gamesWon
 * @prop {Number} tetraLeague.rating
 * @prop {Number} tetraLeague.glicko
 * @prop {Number} tetraLeague.rd
 * @prop {String} tetraLeague.rank
 * @prop {Number} tetraLeague.apm
 * @prop {Number} tetraLeague.pps
 * @prop {Number} tetraLeague.vs
 * @prop {Number} tetraLeague.standing
 * @prop {String} joinDate
 */
declare class User {
    constructor(data: any);
    id: any;
    username: any;
    role: any;
    badges: any;
    exp: any;
    gamesPlayed: any;
    gamesWon: any;
    secondsPlayed: any;
    country: any;
    isVerified: any;
    isSupporter: any;
    records: {
        sprint: Record;
        sprintRank: any;
        blitz: Record;
        blitzRank: any;
    };
    tetraLeague: {
        gamesPlayed: any;
        gamesWon: any;
        rating: any;
        glicko: any;
        rd: any;
        rank: any;
        apm: any;
        pps: any;
        vs: any;
        standing: any;
    };
    joinDate: any;
}
import Record = require("./Record.js");
