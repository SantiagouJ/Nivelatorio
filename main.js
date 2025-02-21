const studentGrades = [100, 50, 65, 70, 85, 96, 45];
const result = computerGrades(studentGrades)
console.log(result)

var approved = 0
var reproved = 0

function computerGrades(){

    if(notas>=90){
        console.log("gola")
        approved++
    }else if(notas>=80 && notas<=89) {
        console.log("oliwiza")
        approved++
    }else if(notas>=70 && notas<=79){
        console.log("f")
        approved++
    }else if(notas>=60 && notas<=69){
        console.log("terri")
        reproved++
    }

    console.log(approved, reproved)
}

console.log(objetico.nota1[0].nota2)

const finalGrades = {
    parsed: [],
    passed: 0,
    lose: 0

}