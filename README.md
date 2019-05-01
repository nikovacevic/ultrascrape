# ultrascrape

Query runner data from UltraSignup

## Finding runners

### Using the CLI

Specify runner by first and last name using `-n` or `--name` flag:
```
$node index.js -n Nicholas Kovacevic
{ Age: 28,
  AgeRank: 0.8349,
  FirstName: 'Nicholas',
  Gender: 'M',
  Id: 985290,
  ImageId: '27622edf-049c-41e1-b145-3805786b8924',
  LastName: 'Kovacevic',
  Rank: 0.7665,
  Results:
   [ { age: 27,
       age_rank: 0,
       city: 'Logan',
       drilldown: 1,
       event_distance_id: 50900,
       eventdate: '9/28/2018 12:00:00 AM',
       eventname: 'The Bear - 100 Miler',
       formattime: '26:43:43',
       gender_place: 46,
       photo_count: 0,
       place: 51,
       prior_count: 0,
       race_count: 0,
       runner_rank: 0.744,
       state: 'UT',
       status: 1,
       time: '26:43:43' },
     ... ],
  RowId: 0,
  Status: 0,
  TrophyCount: 0 }
```

Sometimes, more information is needed to specify a single runner:
```
$node index.js -n Daniel Harris
Too many matches (11) for (name: Daniel Harris, age: null, gender: null)
```

Use `-b` or `--birthday` and `-g` or `--gender` to limit the list:
```
$node index.js -n Daniel Harris -g male -b 1983-01-01
{ Age: 36,
  AgeRank: 0.6679,
  FirstName: 'Daniel',
  Gender: 'M',
  Id: 989771,
  ImageId: '27622edf-049c-41e1-b145-3805786b8924',
  LastName: 'Harris',
  Rank: 0.661,
  Results:
   [ { age: 37,
       age_rank: 0,
       city: 'Salida',
       drilldown: 1,
       event_distance_id: 59671,
       eventdate: '7/26/2019 12:00:00 AM',
       eventname: 'High Lonesome 100 - 100 Miler',
       formattime: '0',
       gender_place: 0,
       photo_count: 0,
       place: 0,
       prior_count: 0,
       race_count: 0,
       runner_rank: 0,
       state: 'CO',
       status: -1,
       time: '0' },
     ... ],
  RowId: 0,
  Status: 0,
  TrophyCount: 0 }
```

## Development

### Set up

Clone the project
```
$git clone git@github.com:nikovacevic/ultrascrape.git
$cd ultrascrape
```

Install [nvm](https://github.com/nvm-sh/nvm) and use the specified node version
```
$nvm use
Found '/Users/niko/Code/Javascript/ultrascrape/.nvmrc' with version <lts/dubnium>
Now using node v10.15.3 (npm v6.4.1)
```
