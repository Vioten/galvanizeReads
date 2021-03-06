exports.seed = function( knex, Promise ) {
	// Deletes ALL existing entries
	return knex( 'bridge' ).del()
		.then( function() {
			return Promise.all( [
        // Inserts seed entries
        knex( 'bridge' ).insert( {
					id: 1,
					author_id: 1,
					book_id: 1
				} ),
        knex( 'bridge' ).insert( {
					id: 2,
					author_id: 2,
					book_id: 1
				} ),
        knex( 'bridge' ).insert( {
					id: 3,
					author_id: 3,
					book_id: 1
				} ),
				knex( 'bridge' ).insert( {
					id: 4,
					author_id: 4,
					book_id: 2
				} ),
				knex( 'bridge' ).insert( {
					id: 5,
					author_id: 5,
					book_id: 3
				} ),
				knex( 'bridge' ).insert( {
					id: 6,
					author_id: 6,
					book_id: 4
				} ),
				knex( 'bridge' ).insert( {
					id: 7,
					author_id: 6,
					book_id: 5
				} ),
				knex( 'bridge' ).insert( {
					id: 8,
					author_id: 6,
					book_id: 6
				} )
      ] );
		} );
};
