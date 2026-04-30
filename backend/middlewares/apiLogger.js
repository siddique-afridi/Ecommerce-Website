// middlewares/logger.js
import morgan from 'morgan';
import chalk from 'chalk';

// Custom time token (clean format)
morgan.token('time', () => {
  return new Date().toLocaleTimeString(); // local time
});

// Status styles
const getStatusStyle = (status) => {
  if (status >= 500) return chalk.bgRed.white.bold;
  if (status >= 400) return chalk.red.bold;
  if (status >= 300) return chalk.cyan;
  if (status >= 200) return chalk.green;
  return chalk.gray;
};

// Method styles
const getMethod = (method) => {
  switch (method) {
    case 'GET': return chalk.blue('📘 GET');
    case 'POST': return chalk.green('📗 POST');
    case 'PUT': return chalk.yellow('📝 PUT');
    case 'DELETE': return chalk.red('🗑 DELETE');
    default: return chalk.white(`🔹 ${method}`);
  }
};

const loggerFormat = (tokens, req, res) => {
  const status = Number(tokens.status(req, res));
  const method = tokens.method(req, res);
  const url = tokens.url(req, res);
  const time = tokens['response-time'](req, res);
  const ip = req.ip || req.connection?.remoteAddress;
  const timestamp = tokens.time(req, res);

  const isError = status >= 400;

  return [
    chalk.gray(`🕒 ${timestamp}`),        // request time
    chalk.gray('➜'),
    getMethod(method),
    chalk.white(url),

    chalk.gray('=>'),
    getStatusStyle(status)(` ${status} `),

    chalk.gray('→'),
    chalk.magenta(` ${time} ms`),

    chalk.gray('→'),
    chalk.cyan(`📍 ${ip}`),

    isError && chalk.red('⚠️ ERROR')
  ]
    .filter(Boolean)
    .join('  ');
};

const logger = morgan(loggerFormat);

export default logger;