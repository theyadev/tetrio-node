const Record = require("./Record.js");
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
class User {
  constructor(data) {
    this.id = data._id;
    this.username = data.username;
    this.role = data.role;
    this.badges = data.badges;
    this.exp = data.xp;
    this.gamesPlayed = data.gamesplayed;
    this.gamesWon = data.gameswon;
    this.secondsPlayed = data.gametime;
    this.country = data.country;
    this.isVerified = data.verified || undefined;
    this.isSupporter = data.supporter || undefined;
    if(data.records) {
      this.records = {
        sprint: new Record(data.records["40l"].record),
        sprintRank: data.records["40l"].rank,
        blitz: new Record(data.records.blitz.record),
        blitzRank: data.records.blitz.rank,
      };
    }
    if(data.league) {
      this.tetraLeague = {
        gamesPlayed: data.league.gamesplayed,
        gamesWon: data.league.gameswon,
        rating: data.league.rating,
        glicko: data.league.glicko,
        rd: data.league.rd,
        rank: data.league.rank,
        apm: data.league.apm,
        pps: data.league.pps,
        vs: data.league.vs,
        standing: data.league.standing,
      };
    }
    this.joinDate = data.ts;

    Object.keys(this).forEach(key => this[key] === undefined ? delete this[key] : {});
  }
}

module.exports = User;
