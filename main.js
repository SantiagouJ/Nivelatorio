const studentGrades = [100, 50, 65, 70, 85, 96, 45];
// const result = computeGrades(studentGrades)
// console.log(result)

let approved = 0
let reproved = 0

function computerGrades(notas = [100, 50, 65, 70, 85, 96, 45]){

    if(notas>=90){
        console.log("gola")
    }else if(notas>=80 && notas<=89) {
        console.log("oliwiza")
    }else if(notas>=70 && notas<=79){
        console.log("f")
    }else if(notas>=60 && notas<=69){
        console.log("terri")
    }
    

}

// const result = computerGrades(studentGrades)
// console.log(result)

console.log("hls")
console.log(computerGrades())