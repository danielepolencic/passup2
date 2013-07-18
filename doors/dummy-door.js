var Door = require('./../src/door.js');

exports = module.exports = DummyDoor;

function DummyDoor(){
  Door.call(this);
  this.validate = {

    username : function( username ){
      return /\w/gi.test(username);
    },

    password : function( password ){
      return /[0-9]/gi.test(password);
    }

  };
}

DummyDoor.prototype = Object.create( Door.prototype, { constructor: { value: Door } } );

DummyDoor.prototype.lock = function( callback ){
  if( this.keys.length !== this.validate.length ) { return true; }
  callback && callback( true );
};
