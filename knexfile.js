// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
        directory: __dirname + '/db/migrations'
    },
    seeds: {
        directory: __dirname + '/db/seeds'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'mysql',
    connection: {
        host: 'localhost',
        database: 'quetzal_db',
        user: 'root',
        password: 'root',
        port: 3306
    },
    pool: {
        min: 2,
        max: 10,
        ping: function (conn, cb) { conn.query('SELECT 1', cb); }
    },
    migrations: {
        directory: __dirname + '/db/migrations'
    },
    seeds: {
        directory: __dirname + '/db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
