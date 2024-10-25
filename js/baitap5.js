/**
 * Bài 5: Tính tổng 2 ký số
 * Đầu vào
 *  - Tạo biến number có 2 ký số
 *
 * Xử lý
 * Công thức lấy số hàng đơn vị
 *  - soHangDV = number % 10
 *
 * Công thức lấy số hàng chục
 *  - soHangChuc = parseInt(number / 10)
 *
 * Công thức tính tổng 2 ký số
 *  - tongHaiKySo = soHangChuc + soHangDV
 *
 * Đầu ra
 *  Xuất tongHaiKySo ra màn hình
 */

const btnTinhTong = document.getElementById("btnTinhTong");
btnTinhTong.onclick = function () {
    const number = document.getElementById("txtNumber").value * 1;

    const soHangDV = number % 10;
    const soHangChuc = parseInt(number / 10);
    const tongHaiKySo = soHangChuc + soHangDV;

    const showTinhTong = document.getElementById("showTinhTong");
    showTinhTong.innerHTML = "Tổng hai ký số là: " + tongHaiKySo;
};
