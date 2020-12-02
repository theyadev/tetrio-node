export = Record;
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
declare class Record {
    constructor(data: any);
    id: any;
    user: {
        username: any;
        id: any;
    };
    stream: any;
    replayId: any;
    date: any;
    gameType: any;
    score: any;
    finalTime: any;
    endcontext: {
        seed: any;
        lines: any;
        inputs: any;
        level: any;
        topCombo: any;
        topBtb: any;
        tspins: any;
        piecesPlaced: any;
        clears: {
            singles: any;
            doubles: any;
            triples: any;
            quads: any;
            tspinSingles: any;
            tspinDoubles: any;
            tspinTriples: any;
            allClear: any;
        };
    };
}
