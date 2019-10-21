const path = require('path');


const DEFAULT_CONFIG_PATH = path.join(process.cwd(), './oauth-proxy.config');


function createConfig(path = DEFAULT_CONFIG_PATH) {
    const {
        port = 8888,
        proxyParam = 'proxy_to',
        allow = '.*',
    } = require(path);

    return {
        port,
        proxyParam,
        allow,
    };
}


module.exports = {
    createConfig,
};
