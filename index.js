#!/usr/bin/env node

var Locksmith = require('./src/locksmith.js');
var program = require('commander');

program
  .version('0.0.1')
  .parse(process.argv);

console.log(program.args);
program.args.forEach( function( adapter ){
  var door = Locksmith(adapter);
  program.prompt('Username: ', function(name){
    program.password('Password: ', function(password){
      console.log('hi %s', name);
      console.log('password %s', password);
      door.set('username', name);
      door.set('password', password);
      door.lock( function( isValid ){
        console.log( isValid );
      })
    });
  });
});
