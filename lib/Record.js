/**
 * A record.
 * @prop {String} id
 * @prop {Object} user
 * @prop {String} user.username
 * @prop {String} user.id
 * @prop {String} stream
 * @prop {String} replayId
 * @prop {String} date
 * @prop {Object} endcontext
 * @prop {Number} endcontext.seed
 * @prop {Number} endcontext.lines
 * @prop {Number} endcontext.inputs
 * @prop {Number} endcontext.topCombo
 * @prop {Number} endcontext.topBtb
 * @prop {Number} endcontext.tspins
 * @prop {Number} endcontext.piecesPlaced
 * @prop {Object} endcontext.clears
 * @prop {Number} endcontext.clears.singles
 * @prop {Number} endcontext.clears.doubles
 * @prop {Number} endcontext.clears.triples
 * @prop {Number} endcontext.clears.quads
 * @prop {Number} endcontext.clears.tspinsSingles
 * @prop {Number} endcontext.clears.tspinsDoubles
 * @prop {Number} endcontext.clears.tspinsTriples
 * @prop {Number} endcontext.clears.allClear
 * @prop {Object} endcontext.finesse
 * @prop {Number} endcontext.finesse.faults
 * @prop {Number} endcontext.finesse.perfectPieces
 * @prop {Number} endcontext.finesse.percentage
 * @prop {Number} score
 * @prop {Number} finalTime
 * @prop {String} gameType
 * @prop {Number} rank
 */
class Record {
  constructor(data) {
    function finesse(perfectPieces, piecesPlaced) {
      let finesse = Math.round((perfectPieces / piecesPlaced) * 1000) / 10;
      return finesse;
    }
    this.id = data._id;
    this.user = {
      username: data.user.username,
      id: data.user._id
    }
    this.stream = data.stream;
    this.replayId = data.replayid;
    this.date = data.ts;
    this.gameType = data.endcontext.gametype;
    this.score = data.endcontext.score;
    this.finalTime = data.endcontext.finalTime;
    this.endcontext = {
      seed: data.endcontext.seed,
      lines: data.endcontext.lines,
      inputs: data.endcontext.inputs,
      level: data.endcontext.level,
      topCombo: data.endcontext.topcombo,
      topBtb: data.endcontext.topbtb,
      tspins: data.endcontext.tspins,
      piecesPlaced: data.endcontext.piecesplaced,
      clears: {
        singles: data.endcontext.clears.singles,
        doubles: data.endcontext.clears.doubles,
        triples: data.endcontext.clears.triples,
        quads: data.endcontext.clears.quads,
        tspinSingles: data.endcontext.clears.tspinsingles,
        tspinDoubles: data.endcontext.clears.tspindoubles,
        tspinTriples: data.endcontext.clears.tspintriples,
        allClear: data.endcontext.clears.allclear,
      },
      
    };
    if (data.endcontext.finesse) {
      this.endcontext.finesse = {
        faults: data.endcontext.finesse.faults || null,
        perfectPieces: data.endcontext.finesse.perfectpieces || null,
        percentage: finesse(
          data.endcontext.finesse.perfectpieces || 0,
          data.endcontext.piecesplaced || 0
        ),
      }
    }
  }
}

module.exports = Record;
