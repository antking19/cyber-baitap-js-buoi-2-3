/**
 * Bài 1: Tính tiền lương nhân viên
 * Mô hình 3 khối
 * ** Đầu vào
 *  - Lương ngày là: 100000
 *  - Số ngày làm: 24
 *
 * ** Xử lý
 *  - Tính lương = lương ngày * số ngày làm
 *
 * ** Đầu ra
 *  - Xuất lương ra màn hình
 */

const btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {
    const luongNgayLam = document.getElementById("txtLuongNgayLam").value * 1;
    const soNgayLam = document.getElementById("txtsoNgayLam").value * 1;

    const tinhLuong = luongNgayLam * soNgayLam;

    const hienLuong = document.getElementById("hienLuong");
    hienLuong.innerHTML = "Tiền lương: " + tinhLuong;
};
