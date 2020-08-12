// SELEKSI NILAI
function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (
    typeof nilaiAwal !== "number" ||
    typeof nilaiAkhir !== "number" ||
    typeof dataArray !== "object"
  ) {
    return "Tipe data salah";
  } else if (nilaiAwal > nilaiAkhir) {
    return "Nilai akhir harus lebih besar dari Nilai Awal";
  } else if (dataArray.length <= 5) {
    return "data array kurang";
  } else {
    let arayBaru = dataArray.filter((data) => {
      return data > nilaiAwal && data < nilaiAkhir;
    });
    if (arayBaru < 1) {
      return "Data array tidak ada";
    }
    return arayBaru.sort((a, b) => a - b);
  }
}
console.log(seleksiNilai(5, 20, [2, 25, 2, 30, 8, 2]));
