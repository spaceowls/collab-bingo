exports.up = function(knex) {
    return knex.schema.createTable('bingo', function (tbl) {
        
        tbl.increments('BingoID');

        tbl.integer('FKuserID').references('UserID').inTable('users').notNullable().onDelete('CASCADE');
    
        tbl.integer('premiacao');
    
        tbl.boolean('private');
    
        tbl.string('code');});
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("bingo");
};
