let aImg = document.querySelectorAll('img');
aImg.forEach(v => {
  v.addEventListener('click', ev => {
    // if (v.src.includes('http')) {
    //     v.setAttribute('crossOrigin', 'anonymous');
    // }
    // 弹窗
    let oDiv = document.createElement('div');
    oDiv.className = 'layerBox GraffitiBox';
    document.body.appendChild(oDiv);

    // 渲染
    Graffiti.render({
      el: oDiv, // 渲染的盒子
      img: v, // 传入的img
      success(data) {
        // 成功后的回调。可以在这里写关闭弹窗等操作
        console.log(data);
      },
      error(err) {
        // 失败后的回调。
        console.log(err);
      },
    });
  });
});
