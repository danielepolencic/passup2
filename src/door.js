exports = module.exports = Door;

function Door(){
  this.keys = {};
  this.validate = {};
}

Door.prototype.set = function( key, value ){
  if( !this.validate.hasOwnProperty(key) ){ return false; }
  var isValid = this.validate[key]( value );
  if(isValid){
    this.keys[key] = value;
  }
  return isValid;
};

Door.prototype.lock = function(){
  throw('Method not implemented');
};
