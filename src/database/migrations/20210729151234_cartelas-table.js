exports.up = function(knex) {
    return knex.schema.createTable('cartelas', function (tbl) {
        
        tbl.string('id').primary();
    
        tbl.string('numeros');

        tbl.integer('FKbingoID').references('id').inTable('bingo').notNullable().onDelete('CASCADE');

        tbl.string('owner_user');
    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cartelas");
};
