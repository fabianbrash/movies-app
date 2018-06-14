/**
 * MoviesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	raw: function(req, res) {
		Movies.find({}).exec(function(err, Movies) {
			if(err) {
				 res.send(500, {error: 'Database error'});
			}

			res.json(Movies);
		});
	},

	ui: function(req, res) {
		Movies.find({}).exec(function(err, Movies) {
			if(err) {
				res.send(500, {error: 'Database error'});
			}	
				
			res.view('pages/ui', {Movies:Movies});

		});		
	}
};

