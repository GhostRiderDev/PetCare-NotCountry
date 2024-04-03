const info = (message) => {
  console.info(`\n\x1b[34m--[INFO]\t\nMessage ${message}\n\x1b[0m`);
};

const warn = (name, message, stackTrace) => {
  console.warn(
    `\n\n\n\x1b[33m--[WARNING]\t${name}\n\nMessage\t ${message}\n\nStack Trace\t ${stackTrace}\n\n\n\x1b[0m`
  );
};

const err = (name, message, stackTrace) => {
  console.error(
    `\n\n\n\x1b[31m--[ERROR]\t${name}\n\nMessage\t ${message}\n\nStack Trace\t ${stackTrace}\n\n\n`
  );
};

export default { info, warn, err };
