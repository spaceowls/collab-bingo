// Update with your config settings.

module.exports = {

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: `./src/database/migrations`
    },
    seeds: {
      directory: `./src/database/seeds`
    }
  }
}
