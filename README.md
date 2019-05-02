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

Note: Ultrasignup is dumb and if you ask for a runner by ID without a first name and last name, it will tell you their name is "a a":
```
$node index.js -i 944702
1 matches for (name: null null, age: null, gender: null, id: 944702)
944702: a a
 • Hardrock 100 Endurance Run - 100 Miler 0 place in 0
 • Golden Gate Dirty 30 - 50K 0 place in 0
 • High Lonesome 100 - 100 Miler 1 place in 21:02:59
 • Quad Rock 50 - 25 Miler 2 place in 3:34:16
 • Ultra-Trail Du Mont-Blanc - UTMB 22 place in 25:37:33
 • Golden Gate Dirty 30 - 50K 4 place in 4:58:47
 • Quad Rock 50 - 50 Miler 1 place in 7:20:27
 • Gorge Waterfalls 100K - 100K 31 place in 11:52:30
 • North Face Endurance Challenge - San Francisco - 50 Miler 5 place in 6:32:50
 • Ultra-Trail Du Mont-Blanc - UTMB 9 place in 23:10:07
 • Pikes Peak Ultra - 50 Miler 1 place in 8:09:56
 • Western States - 100 Miler 16 place in 18:16:30
 • Sean O'Brien 50M/50K/26.2 - 100K 1 place in 8:41:41
 • Pinhoti - 100 Miler 1 place in 17:19:55
 • Pikes Peak Ascent - 1/2 Marathon 23 place in 2:29:37
 • San Juan Solstice 50 - 50 Miler 3 place in 9:17:12
 • Thunder Rock 100 - 100 Miler 1 place in 17:47:55
 • Zane Grey 50 - 50K 1 place in 5:13:12
 • Behind the Rocks Ultra - 50 Miler 1 place in 8:18:20
 • Mountain Masochist Trail Run - 50 Miler 2 place in 7:19:47
 • Imogene Pass Run - 17.1 Miler 4 place in 2:32:23
 • Speedgoat - 50K 10 place in 5:53:51
 • San Juan Solstice 50 - 50 Miler 7 place in 9:33:42
 • Golden Gate Dirty 30 - 50K 5 place in 4:50:11
 • Moab Trail Marathon - Marathon 14 place in 3:34:05
 • Speedgoat - 50K 14 place in 6:11:16
 • HURL Elkhorn - 50K 3 place in 4:54:48
 • Turkey Track Trail - 1/2 Marathon 2 place in 1:35:50
 • Mountain Masochist Trail Run - 50 Miler 27 place in 8:52:37
 • Timberline Marathon - Marathon 1 place in 2:53:58
 • Wakely Dam Ultra - 32.6 Miler 2 place in 5:16:51
 • North Face Endurance Challenge - New York - 50K 1 place in 4:39:10
 • Curly's Trail Marathon - Marathon 2 place in 4:15:34
 • North Face Endurance Challenge - Bellingham - 50K 2 place in 5:30:25
```

Get some help with `--help`
```
$node index.js --help

Usage: node index.js [options]

Options:
  -n, --name [name]               search by runner name (first and last required)
  -b, --birthday [YYYY-MM-DD]     filter search by birthday
  -g, --gender [male|female]      filter search by gender
  -i, --id [id]                   search (or filter) by runner ID (not exactly easy to find)
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
