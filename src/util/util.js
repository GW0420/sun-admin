export const sRandomColor = () => {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16)
}

function generateRandomColor() {
  // 生成随机的 RGB 颜色值
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)

  // 将 RGB 颜色值转换为十六进制表示
  var hexColor = "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)

  return hexColor
}

export const generateRandomGradient = () => {
  // 生成随机的起始和结束颜色
  var startColor = generateRandomColor()
  var endColor = generateRandomColor()

  // 创建渐变样式
  var gradient = "linear-gradient(to right, " + startColor + ", " + endColor + ")"

  return gradient
}

// 生成随机HSL颜色
export const randomColor = () => {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)

  // 生成随机的起始和结束颜色
  var startColor = "rgba(" + r + "," + g + "," + b + ",1)"
  var endColor = "rgba(" + r + "," + g + "," + b + ",0.6)"

  // 创建渐变样式
  var gradient = "linear-gradient(to right, " + startColor + ", " + endColor + ")"

  return gradient
  // return "rgba(" + r + "," + g + "," + b + ",0.8)"
}

// 拖拽元素
export const useDrag = className => {
  
  const dom = document.querySelector(className)
  let x = 0;
  let y = 0;
  let l = 0;
  let t = 0;
  let isDown = false;
  //鼠标按下事件
  document.onmousedown = function (e) {
    //去掉浏览器默认东西
    e.preventDefault && e.preventDefault() 
    
    //获取x坐标和y坐标
     x = e.clientX;
     y = e.clientY;

    //获取左部和顶部的偏移量
     l = dom.offsetLeft;
     t = dom.offsetTop;
   
    dom.onmousemove = function(e) {
      //获取x和y
      let nx = e.clientX;
      let ny = e.clientY;
      //计算移动后的左偏移量和顶部的偏移量
      let nl = nx - (x - l);
      let nt = ny - (y - t);
      dom.style.left = nl + 'px';
      dom.style.top = nt + 'px';
    }
  
    dom.onmouseout = (e) => {
      dom.onmousemove = null
    }

  }

  document.onmouseup = function () {
    dom.onmousemove = null
  }
}


// 旋转元素
export const useRotate = (className, rotateDeg) => {
  let dom = document.querySelector(className)
  dom.style.transform = `rotate(${rotateDeg}deg)`
}

// 缩小放大元素
export const useScale = (className, rotateScale) => {
  let dom = document.querySelector(className)
  dom.style.transform = `scale(${rotateScale})`
}

// 拖拽元素
export const useDrag1 = className => {
  const done = document.querySelector(className)
  done.onmousedown = function (e) {
    e.preventDefault && e.preventDefault() //去掉浏览器默认东西
    //e 代表事件触发是鼠标与绑定元素之间的信息
    //获取鼠标按下时获取鼠标到绑定元素的X轴坐标和Y轴坐标
    //后续代码中如果对其进行拖拽则需要减去鼠标在该元素内的X和Y轴坐标
    //否则进行赋值时鼠标在该元素内的坐标就会为0
    let offsetX = e.offsetX
    let offsetY = e.offsetY

    //需要将该事件放在上一个鼠标在该元素内按下的事件的里面
    //鼠标需要通过按下和移入事件的配合来实现拖拽效果
    document.onmousemove = e => {
      //这个地方的 e 为鼠标移入事件触发时鼠标与整个浏览器页面之间的信息
      //还需要获取鼠标在浏览器页面移动是的X和Y的坐标
      //同时需要保留鼠标在该元素内的X和Y轴坐标
      //所以需要将鼠标在整个浏览器页面的X和Y轴的坐标减去鼠标在元素内的X和Y轴坐标
      let left = e.clientX - offsetX
      let top = e.clientY - offsetY

      //通过获取的坐标修改div的位置
      //然后将当前鼠标移动时的坐标赋值给当前done元素从而来实现效果
      //这里一定要对该元素的赋值拼接一个字符串'px'
      //因为获取的X和Y轴的坐标都是Number数据类型还没有px单位
      done.style.left = left + "px"
      done.style.top = top + "px"
    }
    document.onmouseout = e => {
      document.onmousemove = null
    }
  }
  // 为元素绑定鼠标抬起事件
  //最后在鼠标在该元素内抬起时进行鼠标在浏览器内移动事件进行解绑
  done.onmouseup = function () {
    //在鼠标在该元素内抬起的时候把鼠标在整个浏览器中进行移入的效果置空解绑
    //停止操作
    document.onmousemove = null
  }
}
