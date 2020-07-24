# Start
Get your token :
- Go on https://tetr.io/
- Press F12
- Go in "Application" then "Local Storage" and "https://tetr.io"
- You userToken is here.

Install tetrio-node:
`npm i tetrio-node`

# Documentation
Require tetrio-node
```javascript
const tetrio = require('tetrio-node')
```

### tetrio.Api

```javascript
const tetrioApi = new tetrio.Api("your_token_goes_here", {
  notFoundAsError: true, // Throw an error on not found instead of returning nothing. (default: true)
});
```

#### getUser(options)
Return an User object.
```javascript
tetrioApi.getUser({ user: 'theya' }).then((user) => {
      console.log(user.username)
})
```

#### getTopScores(options)
Return a Record array.
```javascript
tetrioApi.getTopScores({ user: 'theya', gameType: "blitz" }).then((records) => {
      console.log(records[0].score)
})
```

#### getRecentScores(options)
Return a Record array.
```javascript
tetrioApi.getRecentScores({ user: 'theya'}).then((records) => {
      console.log(records[0].finalTime)
})
```

#### getGlobalLeaderboard(options)
Return a Record array.
```javascript
tetrioApi.getGlobalLeaderboard({ gameType: '40l'}).then((records) => {
      console.log(records[0].user.username)
})
```

#### getGlobalUsers(options)
Return an User array.
```javascript
tetrioApi.getGlobalUsers({ by: 'league'}).then((users) => {
      console.log(users[0].tetraLeague.rank)
})
```

#### getNews()
Return a News array.
```javascript
tetrioApi.getNews().then((news) => {
      console.log(news[0])
})
```

#### getReplayShort(options)
Return the short id of a replay.
```javascript
tetrioApi.getReplayShort({ replayId: '5f1874cb21c4235e39a3726e'}).then((shortId) => {
      console.log(shortId)
})
```

### tetrio.User

```javascript
User {
  id: '5e7813e47dae9d30827f0d47',
  username: 'theya',
  role: 'user',
  badges: [
    {
      id: 'secretgrade',
      label: 'Achieved the full Secret Grade',
      ts: '2020-05-24T15:27:57.269Z'
    }
  ],
  exp: 597449,
  gamesPlayed: 683,
  gamesWon: 416,
  secondsPlayed: 241045.91972666729,
  country: 'FR',
  records: {
    sprint: Record,
    sprintRank: null,
    blitz: Record,
    blitzRank: 717
    },
  tetraLeague: {
    gamesPlayed: 101,
    gamesWon: 62,
    rating: 20402.35426159558,
    glicko: 1894,
    rd: 93,
    rank: 's+',
    apm: 50.66,
    pps: 1.64,
    vs: 107.36,
    standing: 965
  },
  joinDate: '2020-03-23T01:41:56.301Z'
}
```

### tetrio.Record

```javascript
Record {
  id: '5f1874cb21c4235e39a37270',
  user: { username: 'theya', id: '5e7813e47dae9d30827f0d47' },
  stream: 'blitz_userbest_5e7813e47dae9d30827f0d47',
  replayId: '5f1874cb21c4235e39a3726e',
  date: '2020-07-22T17:18:03.223Z',
  gameType: 'blitz',
  score: 206121,
  finalTime: 120010,
  endcontext: {
    seed: 513264759,
    lines: 68,
    inputs: 788,
    level: 8,
    topCombo: 3,
    topBtb: 10,
    tspins: 20,
    piecesPlaced: 192,
    clears: {
      singles: 6,
      doubles: 2,
      triples: 0,
      quads: 4,
      tspinSingles: 0,
      tspinDoubles: 18,
      tspinTriples: 2,
      allClear: 0
    },
    finesse: { faults: 92, perfectPieces: 150, percentage: 78.1 }
  }
}
```

### tetrio.News

```javascript
News {
  id: '5f17b219fe510e4477d0c657',
  type: 'leaderboard',
  data: {
    username: 'jimothyjimothy',
    gameType: 'blitz',
    rank: 1,
    result: 886591,
    replayId: 'un6sDpaqT'
  },
  date: '2020-07-22T03:27:21.923Z'
}
```