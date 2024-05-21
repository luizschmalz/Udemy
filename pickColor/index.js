const colors = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Pink', 'Orange', 'Gray', 'Black']
const pickColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}
let btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    let color = pickColor()
    document.body.style.backgroundColor = color
    document.getElementById('color').textContent = color
    if (color === 'Black') {
        document.getElementById('colorHead').style.color = 'white'
    }else{
        document.getElementById('colorHead').style.color = 'black'
    }
})