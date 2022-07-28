const canvas = document.querySelectorAll('canvas')[0]
const context = canvas.getContext('2d')
let isMousedown = false
if (context == null) throw TypeError('context is not defined')
context.fillStyle = 'green';
context.fillRect(20, 20, canvas.width - 40, canvas.height - 40);
console.log(canvas)
console.log(context)

const requestIdleCallbacks = window.requestIdleCallback || function (fn) { setTimeout(fn, 1) };
const drawCircle = (context: CanvasRenderingContext2D, x: number, y: number) => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2, true);
    context.fillStyle = "lightskyblue";
    context.fill();
    context.strokeStyle = 'deepskyblue';
    context.lineWidth = 5;

    context.stroke();
}
const changeText = (ids: Array<string>, texts: Array<string>) => {
    for (let i = 0; i < ids.length; i++) {
        const element = document.getElementById(ids[i]);
        if (element != null) element.innerText = texts[i]
    }
}

drawCircle(context, canvas.width / 2, canvas.height / 2)

canvas.addEventListener('mousedown', function (e: MouseEvent) {
    let x, y;
    x = e.offsetX
    y = e.offsetY
    isMousedown = true
    console.log(e)
    drawCircle(context, x, y)


})
canvas.addEventListener('mousemove', function (e: MouseEvent) {
    if (!isMousedown) return
    e.preventDefault()

    let x, y

    x = e.offsetX
    y = e.offsetY
    drawCircle(context, x, y)

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

