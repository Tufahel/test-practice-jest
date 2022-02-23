const capitalizedString = (string) => {
    const capitalizedStr = string[0].toUpperCase();
    const sliceStr = string.slice(1);
    const joinStr = capitalizedStr + sliceStr;
    return joinStr;
}

module.exports = capitalizedString;