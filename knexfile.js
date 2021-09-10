// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: "localhost",
      port: "5432",
      user: 'postgres',
      password: 'root'    
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
