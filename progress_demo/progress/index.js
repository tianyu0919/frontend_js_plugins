(() => {
  "use strict";
  function ltyProgress(selector, config) {
    if (!new.target) {
      throw new Error('The new keyword must be used');
    }
    let el = this.dq(selector);
    if (!el) {
      throw new Error(`${selector} dom is null`);
    }
    let defaultConfig = {
      height: '20px',
      width: '150px',
    };

    let _val = 0;
    Object.defineProperty(this, 'val', {
      get: () => _val,
      set: val => {
        _val = val;
        console.log(this, this.val);
        if (val == 100) {
          this.dom.classList.add('done');
        } else if (this.dom.classList.contains('done')) {
          this.dom.classList.remove('done');
        }
        this.dom.style.setProperty('--val', `${val}%`);
      },
    });

    defaultConfig = { ...defaultConfig, ...config };
    let frm = document.createDocumentFragment();
    let dom = document.createElement('div');
    this.dom = dom;
    dom.style.cssText = `width:${defaultConfig.width}; height:${defaultConfig.height}`;
    dom.setAttribute('id', 'progress-outBox');
    frm.appendChild(dom);
    el.appendChild(frm);
  }

  // * 查找 dom 元素
  ltyProgress.prototype.dq = selector => document.querySelector(selector);

  // * 设置值
  ltyProgress.prototype.setValue = function (val) {
    if (val >= 100) {
      val = 100;
    } else if (val <= 0) {
      val = 0;
    }
    this.val = val;
  };

  // * 设置完毕
  ltyProgress.prototype.done = function () {
    this.val = 100;
  };
  
  window.ltyProgress = ltyProgress;
})();
