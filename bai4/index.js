// Tính tiền cáp

function loaiKhach() {
  var khachHang = document.getElementById("khach").value;
  if (khachHang == "hd") {
    document.getElementById("nhap_so_lieu").style.display = "block";
    document.getElementById("ket-noi").style.display = "none";
  }
  if (khachHang == "dn") {
    document.getElementById("nhap_so_lieu").style.display = "block";
    document.getElementById("ket-noi").style.display = "block";
  }
}

function tinhTien() {
  var khachHang = document.getElementById("khach").value;
  var phyXuLyHoaDon = 0;
  var phyDichVuCoBan = 0;
  var phy1KenhCaoCap = 0;
  var soKenhCaoCap = document.getElementById("so-kenh-cao-cap").value * 1;

  function tinhTienCap(khachHang) {
    if (khachHang == "hd") {
      phyXuLyHoaDon = 4.5;
      phyDichVuCoBan = 20.5;
      phy1KenhCaoCap = 7.5;
      return phyXuLyHoaDon + phyDichVuCoBan + phy1KenhCaoCap * soKenhCaoCap;
    }
    if (khachHang == "dn") {
      phyXuLyHoaDon = 15;
      phy1KenhCaoCap = 50;
      var soKetnoi = document.getElementById("so-ket-noi").value * 1;
      if (soKetnoi <= 10) {
        phyDichVuCoBan = 75;
      } else {
        phyDichVuCoBan = 75 + (soKetnoi - 10) * 5;
      }
      return phyXuLyHoaDon + phyDichVuCoBan + phy1KenhCaoCap * soKenhCaoCap;
    }
  }
  var tienCap = tinhTienCap(khachHang);
  document.getElementById("ketquatiencap").innerHTML = `
  <h2>Số tiền cáp bạn cần phải trả là: ${tienCap}$</h2>`;
}
