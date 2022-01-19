
// Closure
function kucing(nama1, kelas1){
    var b = 'Nama:' + nama1 + "\nKelas: " + kelas1
    return function(){
        console.log(b)
    

    }
}

var t = kucing(' Danish Maula Hasbi', 'X RPL B')
t()