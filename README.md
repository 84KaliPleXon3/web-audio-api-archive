# The Web Audio API archive

## Description

This project attempts to archive the Web Audio API Specification as it's
evolved through time.  It does so by collecting all the commits from the
[webaudio/web-audio-api](https://github.com/webaudio/web-audio-api/) git
repository and analyzing them.  It tries to create a snapshot of the page
as it existed at that time, as well as let's you preview the state of the
spec using 3rd Party tools like
[Rawgit](https://rawgit.com/) and
[The Internet Archive's Wayback Machine](https://archive.org/web/web.php).


## Links

- [Web Audio API Archive: Website](http://projects.skratchdot.com/web-audio-api-archive/)
- [Web Audio API Archive: Source Code](https://github.com/skratchdot/web-audio-api-archive/)
- [Web Audio API: Latest Spec](https://webaudio.github.io/web-audio-api/)
- [Web Audio API: Source Code](https://github.com/webaudio/web-audio-api/)


## Developers

To contribute, or build yourself, first clone the repo by running:
```bash
git clone git@github.com:skratchdot/web-audio-api-archive.git
```

Then update the submodules:
```bash
cd web-audio-api-archive
git submodules update --init
```

Then install dependencies:
```bash
npm install
```

Then build the commit data:
```bash
./scripts/getCommits.js
```

Then start developing by using gulp:
```bash
gulp
```


## TODO

- Make the site responsive
- Allow archives to be viewed in iframe or in new window
- Add a stats page
- Add a timeline browser
- Implement local archive pages
- Add commit search/filter
- Update urls with commit hash so deep linking works


## License
Copyright (c) 2016 [skratchdot](http://skratchdot.com/)  
Licensed under the [MIT license](LICENSE-MIT).
