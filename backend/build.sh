echo 'STOPING AND DELETING PREVIOUS DOCKERS'
docker stop twitter-data-backend
docker rm twitter-data-backend
clear

echo 'BUILDING DOCKER'
docker build -t twitter-data-backend:latest .

echo 'RUNNING DOCKER'
docker run -d -p 5000:4040 --env-file=../.env --name=twitter-data-backend twitter-data-backend:latest
clear

docker logs -f twitter-data-backend
