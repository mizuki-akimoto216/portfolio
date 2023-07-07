const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql2',
    connection: {
      host: env('DATABASE_HOST', '167.172.100.229'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapiadminweb23'),
      password: env('DATABASE_PASSWORD', 'aDministrator@321b'),
      ssl: false
    },
    debug: false,
  },
});