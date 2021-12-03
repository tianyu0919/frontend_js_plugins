// 获取颜色盘
// 获取颜色盘并取值
let color = document.getElementsByTagName('input')[0];
let inner = document.getElementsByClassName('inner')[0];
let more = document.getElementsByClassName('more')[0];
let less = document.getElementsByClassName('less')[0];
// 设置值
function setNum(x) {
  inner.style.width = `${x}px`;
}
// 清空值
function delNum() {
  inner.style.width = `${0}px`;
}
color.addEventListener('change', function (e) {
  inner.style.background = this.value;
});

more.addEventListener('click', () => {
  inner.style.width = `${Math.random() * 200}px`;
});

less.addEventListener('click', () => {
  let w = getComputedStyle(inner).width;
  if (w) {
    let round = parseFloat(w.split('px')[0]);
    w = Math.random() * round;
  }
  inner.style.width = `${w}px`;
});
