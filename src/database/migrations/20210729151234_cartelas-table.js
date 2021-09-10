exports.up = function(knex) {
    return knex.schema.createTable('cartelas', function (tbl) {
        
        tbl.string('id').primary();
    
        tbl.string('numeros');

        tbl.integer('bingo_id');

        tbl.string('owner_user');
    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cartelas");
};
