db = db.getSiblingDB('admin');

db.createUser({
  user: 'myuser',
  pwd: 'mysecret',
  roles: [
    { role: 'root', db: 'admin' },
    { role: 'readWriteAnyDatabase', db: 'admin' },
  ],
});
