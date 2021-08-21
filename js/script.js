// // Total Without Coupon
const total = document.getElementById('total-price');

// // Base Price
const baseTotal = document.getElementById('base-total');

// // Total After Discount
const discountTotal = document.getElementById('discount-total');


// // Extra Memory 
const ram8Gb = document.getElementById('ram8gb-memory');
const ram16Gb = document.getElementById('ram16gb-memory');
const extraMemory = document.getElementById('price-memory');
ram8Gb.addEventListener('click', function () {
    extraMemory.innerText = "0";
    UpdateTotal();
});
ram16Gb.addEventListener('click', function () {
    extraMemory.innerText = "180";
    UpdateTotal();
});

// // storage Memory 
const storage256Gb = document.getElementById('ssd256-storage');
const storage512Gb = document.getElementById('ssd512-storage');
const storage1024Gb = document.getElementById('ssd1tb-storage');
const extraStorage = document.getElementById('storage-memory');
storage256Gb.addEventListener('click', function () {
    extraStorage.innerText = "0";
    UpdateTotal();
});
storage512Gb.addEventListener('click', function () {
    extraStorage.innerText = "100";
    UpdateTotal();
});
storage1024Gb.addEventListener('click', function () {
    extraStorage.innerText = "180";
    UpdateTotal();
});

// // Extra Memory 
const freeCharge = document.getElementById('free-delivery');
const withCostDelivery = document.getElementById('cost-delivery');
const deliveryCost = document.getElementById('delivery-cost');
freeCharge.addEventListener('click', function () {
    deliveryCost.innerText = "0";
    UpdateTotal();
});
withCostDelivery.addEventListener('click', function () {
    deliveryCost.innerText = "20";
    UpdateTotal();
});

// // Update Total
function UpdateTotal() {
    total.innerText = parseInt(deliveryCost.innerText) + parseInt(extraStorage.innerText) + parseInt(extraMemory.innerText) + parseInt(baseTotal.innerText);

    const totalPrice = total.innerText;
    discountTotal.innerText = totalPrice;
};

document.getElementById('coupon-button').addEventListener('click', function () {
    const getInputButton = document.getElementById('coupon-field');
    const getInputValue = getInputButton.value;

    if (getInputValue == 'stevekaku') {
        const getDiscount20 = discountTotal.innerText * (20 / 100);
        const getDiscount = discountTotal.innerText - getDiscount20;
        discountTotal.innerText = getDiscount;

        document.getElementById('coupon-button').setAttribute('disabled', true);
        // Clear
        getInputButton.value = '';
    }
});