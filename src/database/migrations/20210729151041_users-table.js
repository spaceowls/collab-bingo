exports.up = function(knex) {
    return knex.schema.createTable("users", tbl => {
      tbl.string('id').primary();
  
      tbl.string('username');
  
      tbl.string('password');
  
      tbl.string('role');
  
      tbl.integer('points');
    }); 
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists("users");
  };
  
  