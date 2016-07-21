exports.up = function( knex, Promise ) {
	return knex.schema.createTable( 'books', function( table ) {
		table.increments();
		table.string( 'title' );
		table.string( 'genre' );
		table.varchar( 'desc', 5000 );
		table.string( 'coverurl' );
	} )
};

exports.down = function( knex, Promise ) {
	return knex.schema.dropTable( 'books' );
};
