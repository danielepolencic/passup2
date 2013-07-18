exports = module.exports = Locksmith;

function Locksmith(adapter){
  try {
    var Door = require('./../doors/' + adapter.toString());
    return new Door();
  } catch (e) {
    throw('Cannot load the door');
  }
}
