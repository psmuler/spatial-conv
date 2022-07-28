const canvas = document.querySelectorAll('canvas')[0]
const context = canvas.getContext('2d')
let isMousedown = false
context.fillStyle = 'green';
context.fillRect(20, 20, canvas.width - 40, canvas.height - 40);
console.log(canvas)
console.log(context)

const requestIdleCallback = window.requestIdleCallback || function (fn) { setTimeout(fn, 1) };
drawCircle = (canvas, x, y) => {
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2, true);
    context.fillStyle = "lightskyblue";
    context.fill();
    context.strokeStyle = 'deepskyblue';
    context.lineWidth = 5;
    context.stroke();
}

drawCircle(canvas, canvas.width / 2, canvas.height / 2)

canvas.addEventListener(["mousedown"], function (e) {
    let x, y;
    pressure = 1.0
    x = e.offsetX
    y = e.offsetY
    isMousedown = true
    console.log(e)
    drawCircle(canvas, x, y)
})
canvas.addEventListener('mousemove', function (e) {
    if (!isMousedown) return
    e.preventDefault()

    let x, y
    pressure = 1.0
    x = e.offsetX
    y = e.offsetY
    drawCircle(canvas, x, y)

    // requestIdleCallback(() => {
    //     $force.textContent = 'force = ' + pressure


    //     const touch = e.touches ? e.touches[0] : null
    //     if (touch) {
    //         $touches.innerHTML = `
    //       touchType = ${touch.touchType} ${touch.touchType === 'direct' ? '👆' : '✍️'} <br/>
    //       radiusX = ${touch.radiusX} <br/>
    //       radiusY = ${touch.radiusY} <br/>
    //       rotationAngle = ${touch.rotationAngle} <br/>
    //       altitudeAngle = ${touch.altitudeAngle} <br/>
    //       azimuthAngle = ${touch.azimuthAngle} <br/>
    //       z depth = ${zdepth}<br/>
    //     `
    //     }
    // })
})
canvas.addEventListener('mouseup', function (e) {
    isMousedown = false
})

