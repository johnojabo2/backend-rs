docker run -d   --name mongodb   -e MONGO_INITDB_ROOT_USERNAME=admin   -e MONGO_INITDB_ROOT_PASSWORD=adminpassword   -v /home/john/ridesmart/backend/mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro   -v /home/john/ridesmart/backend/mongo-keyfile:/etc/mongo-keyfile:ro   -p 27017:27017   mongo   --replSet rs0   --keyFile /etc/mongo-keyfile
docker exec -ti mongodb mongosh admin --username admin --password adminpassword

rs.initiate({
  _id: "rs0",
  version: 1,
  members: [
    { _id: 0, host: "localhost:27017" }
  ]
})

db.createUser({
  user: 'myuser',
  pwd: 'mysecret',
  roles: [
    { role: 'root', db: 'admin' },
    { role: 'readWriteAnyDatabase', db: 'admin' }
  ]
});
