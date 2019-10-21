const http = require('http');
const url = require('url');
const { isAllowed } = require('./utils/url');
const { createConfig } = require('./utils/config');


function createServer({
    port,
    proxyParam,
    allow,
} = createConfig()) {
    const server = http.createServer((req, res) => {
        const parsedURL = url.parse(req.url);
        const search = new URLSearchParams(parsedURL.search);

        const proxyTo = search.get(proxyParam);
        search.delete(proxyParam);

        if (isAllowed(proxyTo, allow)) {
            res.writeHead(302, { 'Location': `${proxyTo}?${search}` });
            res.end();
            return;
        }

        res.writeHead(401);
        res.end();
    });

    server.listen(port, () => {
        console.log(`Server was started on port ${port}`);
    });
}


module.exports = {
    createServer,
}
