exports.up = function(knex) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments('UserID');
  
        tbl.string('username');
  
      tbl.string('password');
  
      tbl.string('avatar');
  
      tbl.integer('coins');
  
      tbl.boolean('role');
  
      tbl.integer('victories');
    }); 
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists("users");
  };
  
  