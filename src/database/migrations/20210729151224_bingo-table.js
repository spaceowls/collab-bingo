exports.up = function(knex) {
    return knex.schema.createTable('bingo', function (tbl) {
        
        tbl.string('id').primary();

        tbl.string('user_id');

        tbl.string('name');

        tbl.integer('max_members');
    
        tbl.boolean('private');
    
        tbl.string('code');});
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("bingo");
};
