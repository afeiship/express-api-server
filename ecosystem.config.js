module.exports = {
  apps: [
    {
      name: 'koa-api-server',
      script: 'babel-node src/app.js',
      output: './log/access.log',
      error: './log/error.log',
      args: '',
      ignore_watch: ['node_modules', 'log', 'apis'],
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      merge_logs: true,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
