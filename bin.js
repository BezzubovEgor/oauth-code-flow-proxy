const { createConfig } = require('./utils/config');
const { createServer } = require('./index');


const CONFIG = '--config';


const argvs = process.argv;
const args = argvs.slice(2)
    .reduce((res, arg) => {
        const [key, value] = arg.split('=');
        return {
            ...res,
            [key]: value,
        }
    }, { });


const config = createConfig(args[CONFIG]);
createServer(config);
