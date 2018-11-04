# Speedtest

This is an app build upon [Sindre Sorhus](https://github.com/sindresorhus) app [Fast-cli](https://github.com/sindresorhus/fast-cli) and put into a container which pipes the result to a given influxDB.

### How to run

`docker run \
	-d \
	-e HOST=192.168.1.108 \
	-e PORT=8086 \
	-e DATABASE=mydatabase \
	jcbl/speedtest`

### Links
* [Docker](https://hub.docker.com/r/jcbl/speedtest/)