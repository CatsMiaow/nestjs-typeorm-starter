export const config = {
  db: {
    type: 'mysql',
    synchronize: false,
    logging: false,
    replication: {
      master: {
        host: 'masterHost',
        port: 3306,
        username: 'username',
        password: 'password',
        database: 'dbname',
      },
      slaves: [{
        host: 'slaveHost',
        port: 3306,
        username: 'username',
        password: 'password',
        database: 'dbname',
      }],
    },
    extra: {
      connectionLimit: 30,
    },
  },
};
