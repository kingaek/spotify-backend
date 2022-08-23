build:
	docker build -t spotify-api-server .

run:
	docker run -i -d spotify-api-server