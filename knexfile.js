// Update with your config settings.

module.exports = {

  production: {
    client: 'pg',
    connection: {
      host: "ec2-52-7-159-155.compute-1.amazonaws.com",
      port: "5432",
      user: 'cncylttkibfjyx',
      password: '18b50217c059769ba98673874c8e0b928aa7aa13b4351c8f10e0a39bb85fc277'    
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
