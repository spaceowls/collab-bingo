// Update with your config settings.

module.exports = {
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/src/database/collab-bingo.sqlite`
    },
    useNullAsDefault: true,
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
}
