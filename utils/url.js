function isAllowed(url, allow) {
    console.log([].concat(allow));
    return [].concat(allow)
        .map(createRegExp)
        .some(testUrl(url));
}


function testUrl(url) {
    return regExp => regExp && regExp.test(url);
}

function createRegExp(str) {
    return new RegExp(str);
}


module.exports = {
    isAllowed,
};
