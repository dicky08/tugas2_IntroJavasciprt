// Buat dan jelaskan 10 Method (Built-in Function pada Js) dan jelaskan kegunaanya

// 1 . Pada Array
//     a) push // Menambah element terakhir pada array
let arrPush = ["Dicky"];
arrPush.push("Budi");
// console.log(arr1);

//     b) pop // Menghapus element terakhir pada array
let arrPop = ["Dicky", "Budi"];
arrPop.pop();
console.log(arrPop);

//     c) shift // Menghapus element di awal array
let arrShift = ["Dicky", "Budi"];
arrShift.shift();
// console.log(arrShift);

//     d) unshift // Menambah element di awal array
let arrUnShift = ["Dicky"];
arrUnShift.unshift("Budi");
// console.log(arrUnShift);

//     e) sort // Mengurutkan isi array
let angkaSort = [1, 3, 5, 2, 7, 4, 9];
angkaSort.sort();
// console.log(angkaSort);

//     f) map // perulangan pada array, tapi map mengembalikan array baru
const angkaMap = [1, 3, 5, 2, 7, 4, 9, 10];
let angkaMapBaru = angkaMap.map((m) => m * 2);
// console.log(angkaMapBaru);

//     g) forEach // Perulangan pada array, tidak mengembalikan array baru
const forec = ["Dicky", "Budi", "ilham", "joko"];
// forec.forEach(result => console.log(result));

//     h) find  // Mencari nilai pada array dan hanya mengembalikan 1 nilai saja, tidak menghasilkan array
const angkaFind = [1, 3, 5, 2, 7, 4, 9, 10];
let angkaFindBaru = angkaFind.find((results) => results > 5);
// console.log(angkaFindBaru);

//     i) filter // Mencari nilai pada array dan mengembalikan lebih dari satu nilai dalam bentuk array
const angkaFilter = [1, 3, 5, 2, 7, 4, 9, 10];
let angkaFilterBaru = angkaFilter.filter((result) => result > 5);
// console.log(angkaFilterBaru);

//     j) slice // Mengambil sebuah array menjadi array baru
// Rumus = (awal,akhir)
const slicess = ["Dicky", "Budi", "ilham", "joko"];
let sliceBaru = slicess.slice(0, 2);
// console.log(sliceBaru);