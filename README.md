# oauth-code-flow-proxy

This is small tool to provide possibility to use different host and port when using OAuth2 code flow.

## Get started

1. Install package:

```
$ npm i --save oauth-code-flow-proxy
$ yarn add oauth-code-flow-proxy
```

2. Create `oatuh-proxy.config.js` in the porject root folder

3. Start command via your trminal:

```
$ oauth-code-flow-proxy
```

## Workflow

This tool works next way:

1. Configure OAuth service to use deployed proxy uri as `redirect_uri` parameter.
2. Your application should send `auth` request to retrieve auth code to the OAuth Service and use `[proxyUri]?[proxyParam]=[yourAppUri]` as `redirect_uri`.
3. You application should send code (request for token) to the OAuth Service and again use the same `redirect_uri`.
4. Done!!! Now you have your token.

## CLI params

1. --config=path_to_configuration_file // you can specify path to your configuration file and not use default.

## Configuration (`oauth-proxy.config.js`)

```js
module.exports = {
  port = 8888, // port to run proxy server, default is 8888
  proxyParam = 'proxy_to', // param to redirect after proxy recieved request, it should be used when you will do request to OAuth2 API
  allow = '.*', // regexp or array of regexps to protect your proxy. You can specify rools to which urls proxy can redirect after request from OAuth2 service  
}
```
