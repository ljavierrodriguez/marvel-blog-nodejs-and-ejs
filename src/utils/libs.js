const md5 = require("md5");

const generateHash = (ts, api_key, api_secret_key) => {
    /* console.log(ts);
    console.log(api_key);
    console.log(api_secret_key); */
    return md5(ts+api_secret_key+api_key);
}

module.exports = {
    generateHash
}