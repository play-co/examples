var path = require('path'),
		fs = require('fs'),
		examples_root = path.join(__dirname, 'src');

//directly import the basil register command, at least until a proper module is set up
var basil = {
	register: require(path.join(__dirname, '../..', 'src/register/index')).register
};


/* Directory structure of examples:
 *   src/
 *    |-- category1/
 *          |-- project1/
 *          |     |-- manifest.json
 *          |     |-- etc.
 *          |-- project2/
 *                |-- manifest.json
 *                |-- etc.
 */

/* Called 
 */
exports.load = function () {
	//get category list
	fs.readdir(examples_root, function (err, categories) {
		if (err) { throw err; }
		//collect all paths
		var project_paths = [];
		
		async_forEach(categories, function (category, iter) {
			var category_path = path.join(examples_root, category);
			//get project list in each category
			fs.readdir(category_path, function (err, cat_projects) {
				for (var i = 0, len = cat_projects.length; i < len; i++) {
					// If path is a "normal" directory,
					if (cat_projects[i].substring(0, 1) != '.') {
						project_paths.push(path.join(category_path, cat_projects[i]));
					}
				}
				iter();
			});
		}, function (err) {
			if (err) { throw err; }
			basil.register(project_paths);
		});
	});
};

/*
 * From async.js <https://github.com/caolan/async>
 */
var async_forEach = function (arr, iterator, callback) {
  callback = callback || function () {};
  if (!arr.length) {
    return callback();
  }
  var completed = 0;
  _forEach(arr, function (x) {
    iterator(x, function (err) {
      if (err) {
        callback(err);
        callback = function () {};
      }
      else {
        completed += 1;
        if (completed === arr.length) {
          callback(null);
        }
      }
    });
  });
};

var _forEach = function (arr, iterator) {
  if (arr.forEach) {
    return arr.forEach(iterator);
  }
  for (var i = 0; i < arr.length; i += 1) {
    iterator(arr[i], i, arr);
  }
};
