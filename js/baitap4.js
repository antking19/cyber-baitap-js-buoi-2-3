/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 * Đầu vào
 *  - Tạo biến chieuDai
 *  - Tạo biến chieuRong
 *
 * Xử lý
 *  - Công thức tính diện tích hình chữ nhật
 *  - dienTich = chieuDai * chieuRong
 *
 *  - Công thức tính chu vi hình chữ nhật
 *  - chuVi = (chieuDai + chieuRong) * 2
 *
 * Đầu ra
 *  Xuất dienTich và chuVi ra màn hình
 */

const btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function () {
    const chieuDai = document.getElementById("txtChieuDai").value * 1;
    const chieuRong = document.getElementById("txtChieuRong").value * 1;

    // Tính diện tích và chu vi hình chữ nhật
    const dienTich = chieuDai * chieuRong;
    const chuVi = (chieuDai + chieuRong) * 2;

    // Xuất ra màn hình
    const showKetQuaCVDT = document.getElementById("showKetQuaCVDT");
    showKetQuaCVDT.innerHTML = "Diện tích: " + dienTich + ", Chu vi: " + chuVi;
};
