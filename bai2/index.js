// Bài 2 Tính nộp tiền điện

function tinhDienDuoi50(soDien) {
  var donGiaduoi50 = 500;
  if (soDien <= 50) {
    return soDien * donGiaduoi50;
  } else {
    return 50 * donGiaduoi50;
  }
}
function tinhDien50Den100(soDien) {
  var donGia50Den100 = 650;
  if (soDien <= 50) {
    return 0;
  } else if (soDien <= 100) {
    return (soDien - 50) * donGia50Den100;
  } else {
    return 50 * donGia50Den100;
  }
}
function tinhDien100Den200(soDien) {
  var donGia100Den200 = 850;
  if (soDien <= 100) {
    return 0;
  } else if (soDien <= 200) {
    return (soDien - 100) * donGia100Den200;
  } else {
    return 100 * donGia100Den200;
  }
}
function tinhDien200Den350(soDien) {
  var donGia200Den350 = 1100;
  if (soDien <= 200) {
    return 0;
  } else if (soDien <= 350) {
    return (soDien - 200) * donGia200Den350;
  } else {
    return 150 * donGia200Den350;
  }
}
function tinhDienTren350(soDien) {
  var donGiaTren350 = 1300;
  if (soDien <= 350) {
    return 0;
  } else {
    return (soDien - 350) * donGiaTren350;
  }
}

function tinhDien() {
  var soDien = document.getElementById("so-kw").value * 1;
  var tienDienDuoi50 = tinhDienDuoi50(soDien);
  var tienDien50Den100 = tinhDien50Den100(soDien);
  var tienDien100Den200 = tinhDien100Den200(soDien);
  var tienDien200Den350 = tinhDien200Den350(soDien);
  var tienDienTren350 = tinhDienTren350(soDien);
  var tongTienDien =
    tienDienDuoi50 +
    tienDien50Den100 +
    tienDien100Den200 +
    tienDien200Den350 +
    tienDienTren350;

  document.getElementById("kquatiendien").innerHTML = `
    <h2>Tiên điện bạn phải trả là: ${tongTienDien.toLocaleString()}</h2>`;
}
