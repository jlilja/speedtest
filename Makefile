run-speedtest:
	./node_modules/fast-cli/cli.js > data.txt

run-job:
	node index.js

docker-build:
	docker build -t speedtest .