const fs = require('fs')

exports.get_config = function() {
    return JSON.parse(fs.readFileSync('config.json'));
};