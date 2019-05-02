# ultrascrape

Query runner data from UltraSignup

## Finding runners

There are two ways to use UltraScrape: a CLI and an HTTP app.
```
$node index.js

CLI: node cli --help
API: node api [-p 3000]
```

### Using the CLI

Specify runner by first and last name using `-n` or `--name` flag:
```
$node cli -n Nicholas Kovacevic
1 matches for (name: Nicholas Kovacevic, age: null, gender: null, id: null)
985290: Nicholas Kovacevic
 • The Bear - 100 Miler 51 place in 26:43:43
 • Devil on the Divide - 50K 16 place in 5:50:39
 • Quad Rock 50 - 25 Miler 28 place in 4:14:40
...
```

Sometimes, more information is needed to specify a single runner:
```
$node cli -n Daniel Harris
11 matches for (name: Daniel Harris, age: null, gender: null, id: null)
989771: Daniel Harris
 • High Lonesome 100 - 100 Miler 0 place in 0
 • The Broken Arrow Skyrace - 26K 0 place in 0
 • Run the Rut - 28K 31 place in 4:13:36
 • Quad Rock 50 - 25 Miler 59 place in 4:47:00
 • The Bear - 100 Miler 163 place in 32:52:13
 • Run the Rut - 28K 36 place in 4:25:02
 • Telluride Mountain Run - 38 Miler 10 place in 8:03:31
 • Never Summer 100km - 100K 16 place in 14:48:44
 • Ultra Trail Mount Fuji - 100 Miler 465 place in 44:22:24
 • Telluride Mountain Run - 38 Miler 39 place in 12:01:24
 • Ultra-Trail Du Mont-Blanc - CCC 980 place in 24:19:34
 • Run Rabbit Run - 100 Miler 0 place in 0
1434225: Daniel Harris
 • Sleepy Hollow Hourly Ultra - 24hrs 11 place in 54
 • SweetH2O 50K - 50K 24 place in 7:00:19
 • Bigfoot 50k - 50K 84 place in 7:57:35
 • Stour Valley Path 100km Ultra Run - 100K 49 place in 13:40:45
 • Rocky Mountain Double Marathon - Marathon 46 place in 5:05:45
 • Rocky Raccoon - 100 Miler 0 place in 0
1057479: Daniel Harris
 • Crown King Scramble - 50K 148 place in 8:27:42
1048033: Daniel Harris
 • Knickerbocker Canyon Trail Run - 1/2 Marathon 79 place in 3:20:56
...
```

Use `-b` or `--birthday`, `-g` or `--gender`, or `-i` or `--id` to limit the list:
```
$node cli -n Daniel Harris -g male -b 1983-01-01
1 matches for (name: Daniel Harris, age: 36, gender: M, id: null)
989771: Daniel Harris
 • High Lonesome 100 - 100 Miler 0 place in 0
 • The Broken Arrow Skyrace - 26K 0 place in 0
 • Run the Rut - 28K 31 place in 4:13:36
 ...
```

The number to the left of the runner's name is their ID.

Note: Ultrasignup is dumb and if you ask for a runner by ID without a first name and last name, it will tell you their name is "a a":
```
$node cli -i 944702
1 matches for (name: null null, age: null, gender: null, id: 944702)
944702: a a
 • Hardrock 100 Endurance Run - 100 Miler 0 place in 0
 • Golden Gate Dirty 30 - 50K 0 place in 0
 • High Lonesome 100 - 100 Miler 1 place in 21:02:59
 ...
```

Get some help with `--help`
```
$node cli --help

Usage: node cli [options]

Options:
  -n, --name [name]               search by runner name (first and last required)
  -b, --birthday [YYYY-MM-DD]     filter search by birthday
  -g, --gender [male|female]      filter search by gender
  -i, --id [id]                   search (or filter) by runner ID (not exactly easy to find)
```

### Using the app

Start the app. Use `-p` to select a port if you don't like the default `3000`:
```
$node api
UltraScrape listening on port 3000
```
```
$node api -p 5000
UltraScrape listening on port 5000
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

Install npm packages
```
$npm install
```
