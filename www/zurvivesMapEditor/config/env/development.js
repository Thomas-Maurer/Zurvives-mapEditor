/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
//Node module isn't accessible, so we must create a custom Middleware to allow
// our angular2 file to be loaded
  http: {
    customMiddleware: function (app) {
      console.log('test');
      var express = require('express');
      app.use('/node_modules', express.static(process.cwd() + '/node_modules'));
    }
  }

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }

};
