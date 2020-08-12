// SELEKSI NILAI
function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal > nilaiAkhir) {
    return "Nilai akhir harus lebih besar dari Nilai Awal";
  } else if (dataArray.length < 5) {
    return "data array kurang";
  } else {
    let arayBaru = dataArray.filter((data) => {
      return data > nilaiAwal && data < nilaiAkhir;
    });
    return arayBaru.sort((a, b) => a - b);
  }
}
console.log(seleksiNilai(25, 20, [2, 25, 2, 14, 17, 30, 8]));