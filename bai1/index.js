/** tính điểm tuyển sinh */

function tinhDiemKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "X": {
      return 0;
    }
    case "A": {
      return 2;
    }
    case "B": {
      return 1;
    }
    case "C": {
      return 0.5;
    }
  }
}

function tinhDiemDoiTuong(doiTuong) {
  if (doiTuong == 0) {
    return 0;
  } else if (doiTuong == 1) {
    return 2.5;
  } else if (doiTuong == 2) {
    return 1.5;
  } else {
    return 1;
  }
}

// uuTienKhuVuc + uuTienDoiTuong;

function tuyensinh() {
  var diem1 = document.getElementById("diem-mon-1").value * 1;
  var diem2 = document.getElementById("diem-mon-2").value * 1;
  var diem3 = document.getElementById("diem-mon-3").value * 1;
  var diemChuan = document.getElementById("diem-chuan").value * 1;

  var khuVuc = document.getElementById("khu-vuc").value;
  var doiTuong = document.getElementById("doi-tuong").value;

  var diemKhuVuc = tinhDiemKhuVuc(khuVuc);
  var diemDoituong = tinhDiemDoiTuong(doiTuong);

  var tongSoDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoituong;

  var kqua = "";
  if (diem1 > 0 && diem2 > 0 && diem3 > 0 && tongSoDiem >= diemChuan) {
    kqua = "Đậu";
  } else {
    kqua = "Rớt";
  }

  document.getElementById("kquatuyensinh").innerHTML = `
    <p class="alert alert-warning">Bạn đã: ${kqua} với tổng số điểm : ${tongSoDiem}</p>`;
}
