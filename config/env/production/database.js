const parse = require('pg-connection-string').parse;
const config = parse('postgres://vgrqmkanrnzcix:a6eede8db5b88fe43d210e0cfb303974a42093413d066975dc36a6cad6b7bd1f@ec2-44-197-136-81.compute-1.amazonaws.com:5432/d8hcsvi1qcb9tu');
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});