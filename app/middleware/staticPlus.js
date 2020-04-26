'use strict';
module.exports = function(options, app) {
  const staticMid = require('egg-static/app/middleware/static.js')(options, app);
  const staticPlusMid = async function(ctx, next) {
    if (typeof options.pathRewrite === 'function') {
      ctx.path = await options.pathRewrite(ctx) || ctx.path;
    }
    let isStaticFile = true;
    if (typeof options.staticFileFilter === 'function') {
      isStaticFile = await options.staticFileFilter(ctx);
    }

    if (isStaticFile) {
      await staticMid(ctx, next);
    } else {
      await next();
    }
  };

  return staticPlusMid;
};
