function update() {
    let total = Number(document.getElementById('yourBill').value)
    let tip = Number(document.getElementById('tipInput').value)
    let tip_display = tip + '%'
    document.getElementById('tipPercent').innerHTML = tip_display
    let result = total + total * tip/100
    document.getElementById('tipValue').innerHTML = total * tip/100
    document.getElementById('totalWithTip').innerHTML = result
    let people = Number(document.getElementById('splitInput').value)
    document.getElementById('splitValue').innerHTML = people
    let totalPerPerson = result / people
    document.getElementById('billEach').innerHTML = totalPerPerson
}