/**
 * Bài 3: Quy đổi tiền
 * Đầu vào
 * Tạo biến oneUSD = 23500
 * Tạo biến soVND
 *
 * Xử lý
 *  showUSDToVND = oneUSD * soVND
 *
 * Đầu ra
 * Xuất showUSDToVND ra màn hình
 */

const btnChangeMoney = document.getElementById("btnChangeMoney");
btnChangeMoney.onclick = function () {
    const oneUSD = 23500;
    const soVND = document.getElementById("txtMoney").value * 1;

    // Công thức đổi tiền
    const showUSDToVND = oneUSD * soVND;

    // Xuất ra màn hình
    const showChangeMoney = document.getElementById("showChangeMoney");
    showChangeMoney.innerHTML = "Số tiền quy đổi là: " + showUSDToVND + " VNĐ";
};
