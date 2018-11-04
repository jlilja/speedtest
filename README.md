# Speedtest

This is an app build upon [Sindre Sorhus](https://github.com/sindresorhus) app [Fast-cli](https://github.com/sindresorhus/fast-cli) and put into a container which pipes the result to a given influxDB.

The service is invoked every five minutes.

### How to run

Set the enviroment variables of your InfluxDB

`docker run \
	-d \
	-e HOST=192.168.1.108 \
	-e PORT=8086 \
	-e DATABASE=mydatabase \
	jcbl/speedtest`

### What is still left
* Functionality to set admin and password credentials
* Set frequency of invocation
* Log both upload and download speeds

### Links
* [Docker](https://hub.docker.com/r/jcbl/speedtest/)