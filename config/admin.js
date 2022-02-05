module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b0659a222a6e0cb19b5e7a7cda2aea1'),
  },
});
