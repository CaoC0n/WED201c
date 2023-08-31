
function calTotal() {
    // Lấy giá tiền từ chuyến tham quan được chọn
    var tourSelect = document.getElementById("TourId");
    var tourPrice = tourSelect.options[tourSelect.selectedIndex].value;

    // Lấy số lượng người tham gia
    var numOfPeople = document.querySelector('input[type="text"][name="people"]').value;
    console.log(numOfPeople);
    // Tính tổng tiền
    var totalPrice = tourPrice * numOfPeople;

    // Hiển thị tổng tiền
    var myDiv = document.getElementById('Total');
    myDiv.innerHTML = `Total:${totalPrice}$`;

}
function updatePrice() {
    // Lấy giá trị của tour đã chọn
    var tourPrice = document.getElementById("TourId").value;

    // Hiển thị giá tiền tương ứng
    var priceText = tourPrice + "$/Person";
    document.getElementById("mm").innerHTML = priceText;
}

// Lắng nghe sự kiện click của nút Book Tour
var bookBtn = document.querySelector('.book button');
bookBtn.addEventListener('click', calTotal);
