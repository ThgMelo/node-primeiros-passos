module.exports = x => {
    const par = () => x % 2 == 0 ? true : false;
    return {
        msg: 'O valor é par? ',
        value: par()
    };
};