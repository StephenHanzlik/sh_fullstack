// Update with your config settings.
'use strict';

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/mdev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/mtest'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_url
  }

};
