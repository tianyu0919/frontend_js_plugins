module.exports = class RemoveStrict {
  apply(compiler) {
    let reg = /"use strict";/g;
    compiler.hooks.emit.tap('removeStrict', (compilation) => {
      Object.keys(compilation.assets).forEach((data) => {
        let content = compilation.assets[data].source();
        content = content.replace(reg, '');
        compilation.assets[data] = {
          source() {
            return content;
          },
          size() {
            return content.length;
          }
        }
      })
    })
  }
}