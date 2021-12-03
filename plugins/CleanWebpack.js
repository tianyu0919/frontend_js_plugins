const fs = require('fs');
module.exports = class cleanWebpack {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('cleanWebpack', compilation => {
      const { path } = compilation.outputOptions;
      console.log(fs);
      fs.access(path, err => {
        console.log('x1');
        if (!err) {
          console.log('x2')
          fs.rmdirSync(path);
        }
      });
      // console.log(compilation);
      return true;
    });
  }
};
