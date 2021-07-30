exports.up = function(knex) {
    return knex.schema.createTable('cartelas', function (tbl) {
        
        tbl.string('id').primary();
    
        tbl.string('numeros');

        tbl.integer('FKbingoID').references('id').inTable('bingo').notNullable().onDelete('CASCADE');

        tbl.integer('FKuserID').references('id').inTable('users').notNullable().onDelete('CASCADE');
    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cartelas");
};
