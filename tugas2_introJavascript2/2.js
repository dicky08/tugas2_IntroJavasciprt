const angka = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function searchName(cari, limit, callback) {
  let sercing = angka.filter((m) => {
    return m.toLowerCase()
      .includes(cari.toLowerCase());
  });
  //[Alexandra,Amanda,Angela,Diana]
  let str = [];
  for (let i = 0; i < sercing.length; i++) {
    if (i + 1 <= limit) {
      str.push(sercing[i]);
    }
  }
  callback(str, sercing);
}

function showCall(result) {
  console.log(result);
}
searchName("an", 1, showCall);

// const angka = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

// function searchName(cari, limit, callback) {

//   let sercing = angka.filter((m) => {
//     return m.toLowerCase()
//       .includes(cari.toLowerCase());
//   });

//   // Slice Rumusnya (awal,akhir)
//   let limits = sercing.slice(0, limit);
//   callback(limits, sercing);
// }

// function showCall(result) {
//   console.log(result);
// }
// searchName("an", 1, showCall);