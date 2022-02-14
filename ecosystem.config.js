module.exports = {
  apps: [
    {
      name: 'smart-talk-api',
      cwd: './server/strapi-app',
      script: 'npm',
      args: 'start',
    },
    {
      name: 'smart-talk-client',
      cwd: './client',
      script: 'serve',
      env: {
      	PM2_SERVE_PATH: './build',
	PM2_SERVE_PORT: 3000,
      },
     },
  ],
};

