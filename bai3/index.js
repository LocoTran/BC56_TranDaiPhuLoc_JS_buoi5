/** Tính thuế thu nhập cá nhân */

function tinhThue() {
  var nguoiPhuThuoc = document.getElementById("nguoi-phu-thuoc").value * 1;
  var thuNhapNam = document.getElementById("thu-nhap-nam").value * 1;

  var thuNhapChiuThue = thuNhapNam - 4 - nguoiPhuThuoc * 1.6;

  function tinhThueDuoi60(thuNhapChiuThue) {
    var thueSuatDuoi60 = 0.05;
    if (thuNhapChiuThue <= 60) {
      return thuNhapChiuThue * thueSuatDuoi60;
    } else {
      return 60 * thueSuatDuoi60;
    }
  }
  function tinhThue60Den120(thuNhapChiuThue) {
    var thueSuat60Den120 = 0.1;
    if (thuNhapChiuThue <= 60) {
      return 0;
    } else if (thuNhapChiuThue <= 120) {
      return (thuNhapChiuThue - 60) * thueSuat60Den120;
    } else {
      return 60 * thueSuat60Den120;
    }
  }
  function tinhThue120Den210(thuNhapChiuThue) {
    var thueSuat120Den210 = 0.15;
    if (thuNhapChiuThue <= 120) {
      return 0;
    } else if (thuNhapChiuThue <= 210) {
      return (thuNhapChiuThue - 120) * thueSuat120Den210;
    } else {
      return 90 * thueSuat120Den210;
    }
  }
  function tinhThue210Den384(thuNhapChiuThue) {
    var thueSuat210Den384 = 0.2;
    if (thuNhapChiuThue <= 210) {
      return 0;
    } else if (thuNhapChiuThue <= 384) {
      return (thuNhapChiuThue - 210) * thueSuat210Den384;
    } else {
      return 174 * thueSuat210Den384;
    }
  }
  function tinhThue384Den624(thuNhapChiuThue) {
    var thueSuat384Den624 = 0.25;
    if (thuNhapChiuThue <= 384) {
      return 0;
    } else if (thuNhapChiuThue <= 624) {
      return (thuNhapChiuThue - 384) * thueSuat384Den624;
    } else {
      return 240 * thueSuat384Den624;
    }
  }
  function tinhThue624Den960(thuNhapChiuThue) {
    var thueSuat624Den960 = 0.3;
    if (thuNhapChiuThue <= 624) {
      return 0;
    } else if (thuNhapChiuThue <= 960) {
      return (thuNhapChiuThue - 624) * thueSuat624Den960;
    } else {
      return 336 * thueSuat624Den960;
    }
  }
  function tinhThueTren960(thuNhapChiuThue) {
    var thueSuatTren960 = 0.35;
    if (thuNhapChiuThue <= 960) {
      return 0;
    } else {
      return (thuNhapChiuThue - 960) * thueSuatTren960;
    }
  }

  var tienThueDuoi60 = tinhThueDuoi60(thuNhapChiuThue);
  var tienThue60Den120 = tinhThue60Den120(thuNhapChiuThue);
  var tienThue120Den210 = tinhThue120Den210(thuNhapChiuThue);
  var tienThue210Den384 = tinhThue210Den384(thuNhapChiuThue);
  var tienThue384Den624 = tinhThue384Den624(thuNhapChiuThue);
  var tienThue624Den960 = tinhThue624Den960(thuNhapChiuThue);
  var tienThueTren960 = tinhThueTren960(thuNhapChiuThue);

  var tongTienThue =
    tienThueDuoi60 +
    tienThue60Den120 +
    tienThue120Den210 +
    tienThue210Den384 +
    tienThue384Den624 +
    tienThue624Den960 +
    tienThueTren960;

  document.getElementById("kquatinhthue").innerHTML = `
    <h2 class="text-info">Số tiền thuế bạn phải trả là: ${tongTienThue.toLocaleString()} triệu VND</h2>`;
}
