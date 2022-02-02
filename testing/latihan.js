/** Function
 * Block kode yang digunakan untuk membungkus suatu proses agar tidak ditulis kembali secara berulang - ulang
 * 
 * 
 * Penulisan function, ada yang memiliki parameter dan ada yang tidak memiliki parameter
 */

// function example(parameter){
//     console.log(parameter)
// }

// example('function dengan parameter')

/** Arrow function */

// const example = (parameter) =>{
//     console.log(parameter)
// }
// example('ini function dengan parameter menggunaka arrowo function')

// let hitung = (angka1, angka2) => `${angka1} dikali ${angka2} = ${angka1 * angka2}` 
// console.log(hitung(10, 2))

/**
 * High Order Function
 * Function yang menerima argumen berupa function lain
 * 
 * 
 * callback function
 * function yang akan menjadi argumen dalam pemanggilan high order function
 */


function genap(number){
    return number % 2 == 0
}

function printGenap(number, callback){
    let isTrue = callback(number)
    if(isTrue){
        console.log(`${number} adalah bilangan Genap`)
    }else{
        console.log(`${number} adalah bilangan Ganjil`)
    }
}
printGenap(3, genap)