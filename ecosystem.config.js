module.exports = {
  apps: [
    {
      name: 'smart-talk-api',
      cwd: './server/strapi-app',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: "development",  
      },
      env_production: {
        NODE_ENV: "production",
      }
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

