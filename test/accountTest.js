var chai = require('chai'),
    account = require('./../src/account.js');

chai.should();

describe('Adapter', function(){

  it('should change the password', function( done ){

    var validateUsername = function( credentials, callback ){
      callback( credentials.username && /\w/gi.test( credentials.username ) );
    }

    var validateNewPassword = function( credentials, callback ){
      callback( credentials.new.password && /\w/gi.test( credentials.new.password ) );
    }

    var strategy = function( credentials, callback ){
      console.log('in');
      setTimeout( function(){ console.log('strategy'); callback(true); }, 1000 );
    }

    var login = account.changePassword( strategy, validateUsername, validateNewPassword );
    login({
      username: 'daniele',
      password: {
        old: '123',
        new: '456'
      }
    });
    console.log('done');
    done();

  });

});
