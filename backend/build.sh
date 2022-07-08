echo 'STOPING AND DELETING PREVIOUS DOCKERS'
docker stop twitter-data-backend
docker rm twitter-data-backend

echo 'BUILDING DOCKER'
docker build -t twitter-data-backend:latest .
clear

echo 'RUNNING DOCKER'
docker run -d --name twitter-data-backend --env-file .env -p 4040:4041 twitter-data-backend:latest
clear

docker logs -f twitter-data-backend
