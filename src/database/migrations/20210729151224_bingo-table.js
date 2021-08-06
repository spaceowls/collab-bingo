exports.up = function(knex) {
    return knex.schema.createTable('bingo', function (tbl) {
        
        tbl.string('id').primary();

        tbl.string('name');

        tbl.string('password');

        tbl.integer('members');

        tbl.integer('max_members');

        tbl.integer('FKuserID').references('id').inTable('users').notNullable().onDelete('CASCADE');
    
        tbl.integer('premiacao');
    
        tbl.boolean('private');
    
        tbl.string('code');});
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("bingo");
};
