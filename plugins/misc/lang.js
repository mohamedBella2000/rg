const {LANGUAGE} = require('../../config');
const {existsSync,readFileSync} = require('fs');
var json = existsSync('./lang/' + LANGUAGE + '.json') ? JSON.parse(readFileSync('./lang/' + LANGUAGE + '.json')) : JSON.parse(readFileSync('./lang/english.json'));
function getString(file) { return '```'+json['STRINGS'][file]+'```'; }
module.exports = {language: json, getString: getString }