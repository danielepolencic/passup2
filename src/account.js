var _ = require('lodash');

function andify(/* preds */) {
  var preds = _.toArray(arguments);

  return function(/* args */) {
    var args = _.toArray(arguments);

    var everything = function(ps, truth) {
      if (_.isEmpty(ps))
        return truth;
      else
        return _.every(args, _.partialRight(_.first(ps), function(val){ return val; })) && everything(_.rest(ps), truth);
    };

    return everything(preds, true);
  };
}

function changePassword( strategy ){

  var args = Array.prototype.splice( arguments, 1 );

  var validateCredentials = andify.apply( args );
  var changePassword = andify( validateCredentials, strategy );
  return function( credentials ){
    return changePassword( credentials );
  }

}

exports = module.exports = {
  changePassword : changePassword
}
