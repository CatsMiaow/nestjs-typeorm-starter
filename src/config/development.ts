export const config = {
  db: {
    type: 'mysql',
    synchronize: true,
    logging: true,
    replication: {
      master: {
        host: '127.0.0.1',
        port: 3306,
        username: 'username',
        password: 'password',
        database: 'dbname',
      },
      slaves: [{
        host: '127.0.0.1',
        port: 3306,
        username: 'username',
        password: 'password',
        database: 'dbname',
      }],
    },
    extra: {
      connectionLimit: 10,
    },
  },
};
