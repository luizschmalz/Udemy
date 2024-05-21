function outcome(){
    let num1 = Number(document.getElementById('num-one').value)
    let num2 = Number(document.getElementById('num-two').value)
    let add = document.getElementById('box1').checked
    let sub = document.getElementById('box2').checked
    let mul = document.getElementById('box3').checked
    let div = document.getElementById('box4').checked
    let result = 0
    if(add == true){
        result = num1 + num2
    }else if(sub == true){
        result = num1 - num2
    }else if(mul == true){
        result = num1 * num2
    }else if(div == true){
        result = num1 / num2
    }
    console.log(result)
    document.getElementById('result').innerHTML = result
}
