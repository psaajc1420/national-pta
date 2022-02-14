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
      script: 'npm',
      args: 'start',
  ],
};

