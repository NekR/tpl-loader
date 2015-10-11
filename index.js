var loaderUtils = require("loader-utils");
var _ = require('lodash');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  // var options = loaderUtils.parseQuery(this.query);

  var template = _.template(source, null, {
    interpolate : /<%=([\s\S]+?)%>/g
  });

  return 'module.exports = ' + template;
}