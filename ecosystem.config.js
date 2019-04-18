module.exports = {
  apps: [
    {
      name: 'koapp',
      script: 'src/app.js',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      output: './logs/access.log',
      error: './logs/error.log',
      merge_logs: true,
      args: '',
      ignore_watch: ['node_modules'],
      instances: 2,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
