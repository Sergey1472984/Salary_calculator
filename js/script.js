function salaryCalculator(){
    let salary = []
    let lastEntered;
    let salarySum = 0,
        salaryAv = 0,
        salaryHist = ""
    while (true) {
        lastEntered = prompt(`Введите зарплату №${salary.length+1}. \nСумма:${salarySum}. \nСредняя ЗП:${salaryAv} \nИстория:${salaryHist}`)
        salary.push(Number(lastEntered))
        console.log(Number(lastEntered))
        if (isNaN(lastEntered) || (Number(lastEntered) === 0)) {
            if (confirm("Неверное значение. Продолжить?") === false){
                break;
            }else{
                salary.pop()
            }

        }else {
            salarySum += Number(lastEntered)
            salaryHist += ` ${salary.length}) ${lastEntered} руб`
        }
        salaryAv = salarySum/salary.length

    }
    return salary
}
function myNameEnding(num){
    let myName = "Серг"
    if (isNaN(Number(num))){
        alert('Неверное значение')
    }else{
        num = num%10
        switch(true){
            case num === 1:
                myName += "ей"
                break
            case (num === 0) || (num >= 5 ):
                myName += "еев"
                break
            case (num >= 2) && (num <= 4):
                myName += "ея"
                break
            default:
                alert("Что-то не так")
                break
        }
    }
    alert(myName)
}
(function(){
    let entered,
        number
    entered = prompt("Введите 1, чтобы посчитать зарплату. Введите 2, чтобы вывести имя автора")
    if (isNaN(Number(entered))) {
        alert("Неверное значение")
    }else if (Number(entered) === 1){
        salaryCalculator()
    }else if (Number(entered) === 2){
        number = prompt("Введите число имени автора")
        if (isNaN(Number(entered))) {
            alert("Неверное значение")
        }else{
            myNameEnding(number)
        }
    }
})()