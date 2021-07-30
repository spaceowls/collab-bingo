exports.up = function(knex) {
    return knex.schema.createTable("users", tbl => {
      tbl.string('id').primary();
  
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
  
  