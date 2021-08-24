exports.up = function(knex) {
    return knex.schema.createTable('bingo', function (tbl) {
        
        tbl.string('id').primary();

        tbl.string('name');

        tbl.integer('members');

        tbl.integer('max_members');
    
        tbl.boolean('private');
    
        tbl.string('code');});
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("bingo");
};
