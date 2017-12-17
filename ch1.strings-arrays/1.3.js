/*
 * Time: 2N
 * Space: N
 * This is dumb, but the given string gives you a buffer 🤔, whats the point in that?
 */
function urlIfy(url, len) {
    if (!url || url.length === 0) return url;
    url = url.split('');
    let spaces = 0;
    for (let i = 0; i < len; i++) {
        if (url[i] === ' ') spaces++;
    }

    // endLength = length with %20 inserted in spaces,
    // x 2 because there already exists ONE space as a blank
    let endLength = (len - 1) + (spaces * 2);
    for (let i = len - 1; i >= 0; i--) {
        if (url[i] === ' ') {
            url[endLength--] = '0';
            url[endLength--] = '2';
            url[endLength--] = '%';
        } else {
            url[endLength--] = url[i];
        }
    }
    return url.join('')
}

/*
 * This one is much smarter about it, it can take strings like `hello   good    world`;
 * But it uses extra space :/
 */
function urlIfySmart(url) {
    if (!url || url.length === 0) return url;
    url = url.split('');
    const newUrl = [];
    for (let i = 0; i < url.length; i++) {
        if (url[i] === ' ') {
            if (i !== 0) { // protect against leading white space
                newUrl.push('%20');
            }
            while (url[i + 1] === ' ') {
                i++;
            }
        } else {
            newUrl.push(url[i]);
        }
    }
    // protect against trailing whitespace
    if (newUrl[newUrl.length - 1] === '%20') {
        newUrl.pop();
    }
    return newUrl.join('');
}

module.exports = {
    urlIfy,
    urlIfySmart
}