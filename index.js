const http = require('http');
const url = require('url');


function createServer({
    port,
    proxyParam,
} = createConfig()) {

    const server = http.createServer((req, res) => {
        const parsedURL = url.parse(req.url);
        const search = new URLSearchParams(parsedURL.search);

        const proxyTo = search.get(proxyParam);
        search.delete(proxyParam);

        res.writeHead(302, { 'Location': `${proxyTo}?${search}` });
        res.end();
    });

    server.listen(port, () => {
        console.log(`Server was started on port ${port}`);
    });
}


module.exports = {
    createServer,
}