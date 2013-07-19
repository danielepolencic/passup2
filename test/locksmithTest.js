var chai = require('chai'),
    Locksmith = require('../src/locksmith.js');

chai.should();

// describe('Locksmith', function(){

//   var door;

//   it('should select the right door', function( done ){
//     door = Locksmith('dummy-door');
//     done();
//   });

//   it('should ask for username and password', function( done ){
//     var username = door.set('username', 'my-username');
//     var password = door.set('password', '123456');
//     username.should.be.ok;
//     password.should.be.ok;
//     done();
//   });

//   it('should change the password for the door', function( done ){
//     door.lock( function( response ){
//       response.should.be.ok;
//       done();
//     });
//   });

// });
