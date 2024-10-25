/**
 * Bài 2: Tính giá trị trung bình
 * * Đầu vào
 *  - Tạo biến num_1
 *  - Tạo biến num_2
 *  - Tạo biến num_3
 *  - Tạo biến num_4
 *  - Tạo biến num_5
 *
 * * Xử lý
 *  - Tạo biến average
 *  - Công thức tính trung bình
 *  - average = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;
 *
 * * Đầu ra
 *  - Xuất tính trung bình ra màn hình
 */

const btnAvg = document.getElementById("btnAvg");
btnAvg.onclick = function () {
    const num_1 = document.getElementById("number_1").value * 1;
    const num_2 = document.getElementById("number_2").value * 1;
    const num_3 = document.getElementById("number_3").value * 1;
    const num_4 = document.getElementById("number_4").value * 1;
    const num_5 = document.getElementById("number_5").value * 1;

    // Tính trung bình
    const average = (num_1 + num_2 + num_3 + num_4 + num_5) / 5;

    const showAvg = document.getElementById("showAvg");
    showAvg.innerHTML = "Giá trị trung bình là: " + average;
};
