// Update with your config settings.

module.exports = {
  production: {
    client: 'mysql',
    connection: {
      //dados das conexoes e tudo mais eh so falar com o joao, Att: joao
      host: 'sql10.freesqldatabase.com',
      port : 3306,
      user : 'sql10437264',
      password : 'CDgMlukCka',
      database : 'sql10437264',
    },
    useNullAsDefault: true,
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
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
