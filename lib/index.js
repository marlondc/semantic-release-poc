const greet = (name) => {
    return console.log(`hello ${name}`);
}

const ask = (name) => {
    return console.log(`why $name?`);
}

module.exports = {
    ask,
    greet
};
