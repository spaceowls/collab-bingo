exports.up = function(knex) {
    return knex.schema.createTable('cartelas', function (tbl) {
        
        tbl.increments('CartelasID');
    
        tbl.string('numeros');

        tbl.integer('FKbingoID').references('BingoID').inTable('bingo').notNullable().onDelete('CASCADE');

        tbl.integer('FKuserID').references('UserID').inTable('users').notNullable().onDelete('CASCADE');
    
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cartelas");
};
