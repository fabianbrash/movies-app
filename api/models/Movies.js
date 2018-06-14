/**
 * Movies.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'movies',
  

  attributes: {
    
      title: { 
	      type: 'string',
              columnName: 'title'
      },
      year: { 
	      type: 'number',
              columnName: 'year'
      },
      director: { 
	      type: 'string', 
	      columnName: 'director',
	      allowNull: true 
      },
      cast: { 
	      type: 'string', 
	      columnName: 'cast',
	      allowNull: true 
      },
      genre: { 
	      type: 'string', 
	      columnName: 'genre',
	      allowNull: true 
      },
      notes: { 
	      type: 'string', 
	      columnName: 'notes',
	      allowNull: true 
      }

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

