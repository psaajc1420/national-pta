module.exports = ({ env }) => ({
  host: env('APP_HOST', '0.0.0.0'),
  port: env.int('NODE_PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '9462ee378673309b9d627b9bbbee042c'),
    },
  },
});
