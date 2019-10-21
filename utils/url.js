function isAllowed(url, allow) {
    if (Array.isArray(allow)) {
        return allow.map(RegExp)
            .some(testUrl(url));
    }
    return new RegExp(allow).test(url);
}

function testUrl(url) {
    return regExp => regExp && regExp.test(url);
}


module.exports = {
    isAllowed,
};
