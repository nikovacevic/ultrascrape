# ultrascrape

Query runner data from UltraSignup

## Finding runners

### Using the CLI

Specify runner by first and last name using `-n` or `--name` flag:
```
$node index.js -n Nicholas Kovacevic
1 matches for (name: Nicholas Kovacevic, age: null, gender: null, id: null)
985290: Nicholas Kovacevic
 • The Bear - 100 Miler 51 place in 26:43:43
 • Devil on the Divide - 50K 16 place in 5:50:39
 • Quad Rock 50 - 25 Miler 28 place in 4:14:40
 • West Virginia Trilogy - 50K 4 place in 5:23:50
 • West Virginia Trilogy - 50 Miler 6 place in 10:55:36
 • West Virginia Trilogy - 1/2 Marathon 5 place in 1:46:38
 • West Virginia Trilogy - 94 Miler 5 place in 18:06:04
 • Steamboat Stinger - Marathon 14 place in 3:53:42
 • Golden Gate Dirty 30 - 50K 37 place in 6:01:29
 • Quad Rock 50 - 50 Miler 56 place in 12:35:38
 • Tussey mOUnTaiNBACK 50 Mile Relay and Ultramarathon - 50 Miler 39 place in 9:15:01
 • Crown King Scramble - 50K 48 place in 6:21:00
 • McDowell Mountain Frenzy - 50K 33 place in 6:21:26
 • Flagstaff Marathon - Marathon 11 place in 4:11:19
```

Sometimes, more information is needed to specify a single runner:
```
$node index.js -n Daniel Harris
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
28191: Daniel Harris
 • Imogene Pass Run - 17.1 Miler 600 place in 4:13:43
 • Ice Age Trail - 50 Miler 282 place in 11:51:43
 • Greenland Trail - 8 Miler 84 place in 1:12:44
 • Pikes Peak Ascent - 1/2 Marathon 495 place in 3:53:45
 • Speedgoat - 50K 106 place in 9:36:13
 • Leadville Trail Marathon and Heavy Half - Marathon 150 place in 6:07:17
 • Sapper Joe Trail Race - 50K 15 place in 6:04:02
 • Kat'cina Mosa 100K Mountain Run - 100K 22 place in 16:48:22
 • Squaw Peak 50 Mile Trail Run - 50 Miler 58 place in 11:23:27
 • Pikes Peak Ascent - 13.32 Miler 451 place in 3:52:45
 • NCR Marathon - Marathon 35 place in 3:14:05
 • Imogene Pass Run - 17.1 Miler 317 place in 3:47:12
 • Mississippi Trail 50 - 50K 52 place in 6:33:51
 • Sunmart Texas Trails - 50K 425 place in 6:57:27
 • Mississippi Trail 50 - 50K 30 place in 6:21:04
 • Mississippi Trail 50 - 50K 19 place in 6:27:00
193323: Daniel Harris
 • Timp Trail Marathon - Marathon 45 place in 6:02:20
 • Timp Trail Marathon - Marathon 30 place in 5:36:07
 • Wasatch 100 - 100 Miler 140 place in 32:57:32
 • Timp Trail Marathon - Marathon 25 place in 5:22:35
 • The Bear - 100 Miler 91 place in 33:18:10
 • The Bear - 100 Miler 81 place in 34:04:13
863559: Daniel Harris
 • Tunnel Hill 100 - 50 Miler 59 place in 9:53:37
 • Ridge to River Run - 10 Miler 57 place in 1:58:42
 • KT Moonlight Madness - 7 Miler 15 place in 1:20:48
 • Dirty Dog - 15K 182 place in 2:05:35
711035: Daniel Harris
 • Central Oregon Thanksgiving Classic - 10K 40 place in 51:40
351475: Daniel Harris
 • Nashville Ultra - 50K 8 place in 4:21:37
 • Lapham Peak Trail Race - Marathon 7 place in 4:10:22
 • Dances with Dirt - Devil's Lake - Marathon 21 place in 4:41:59
 • Run for Regis - 50K 12 place in 5:53:20
314160: Daniel Harris
 • Trail Triple Crown - Marathon 59 place in 5:06:59
138504: Daniel Harris
 • Mississippi Trail 50 - 50 Miler 33 place in 11:06:58
```

Use `-b` or `--birthday`, `-g` or `--gender`, or `-i` or `--id` to limit the list:
```
$node index.js -n Daniel Harris -g male -b 1983-01-01
1 matches for (name: Daniel Harris, age: 36, gender: M, id: null)
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
```

The number to the left of the runner's name is their ID.

*Note: Ultrasignup is dumb and if you ask for a runner by ID without a first name and last name, it will tell you their name is "a a"*

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
