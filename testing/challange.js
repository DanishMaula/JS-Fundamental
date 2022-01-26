let a = 'danish'
let b = true
var c  
let d = null

console.log('ini tipe data', typeof a)
console.log('ini tipe data',typeof b)
console.log('ini tipe data',typeof c)
console.log('ini tipe data',typeof d)

let text1 = 'Hello'
for (let i = 0; i<text1.length; i++)
    console.log(text1[i])
    console.log('Panjang Hello', text1.length)


let text2 = 'Assalamualaikum'
for (let r = 0; r<text2.length; r++)
    console.log(text2[r])
    console.log('Panjang Salam',text2.length)

let text3 = 'Selamat Datang'
for (let v = 0; v<text3.length; v++)
    console.log(text3[v])
    console.log('panjang selamat datang',text3.length)

let text4 = 'semangat!!'
for (let q = 0;q<text4.length; q++)
    console.log(text4[q])
    console.log('panjang semangat',text4.length)

let identity = {
    firstName: 'almerio',
    lastName : 'setiawan',
    kelas : '10',
    keahlian : 'Rekayasa Perangkat Lunak',
    sekolah : 'IDN Boarding School',
    nilai : {
        diniyah : 'B+',
        IT : 'A',
        BahasaInggris : 'B',
    },
    alamat : {
        jalan : 'jalan raya dayeuh',
        kecamatan: 'jonggol',
        kabupaten : 'bogor',
    }    
}

let dataRio = `
Data Siswa: 

nama lengkap : ${identity.firstName} ${identity.lastName}.
Kelas : ${identity.kelas}
kompetensi keahlian : ${identity.keahlian}
asal kota: ${identity.alamat.kabupaten}
nilai : Diniyyah (${identity.nilai.diniyah}), IT (${identity.nilai.IT}), Bahasa Inggris : (${identity.nilai.BahasaInggris}) `
console.log(dataRio)

let nama =' john'
let kelas = '10'
let jurusan = 'RPL'

var orang = `
hallo nama saya ${nama} saya berasal dari kelas ${kelas} Jurusan ${jurusan}`
console.log(orang)







