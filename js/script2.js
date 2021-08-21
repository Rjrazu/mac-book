//Update With RAM
function getMemoryPrice(memory) {
    const memoryPrice = document.getElementById('price-memory');
    let memoryPriceText = memoryPrice.innerText;

    if (memory == true) {
        memoryPriceText = 10;
    } else {
        memoryPriceText = 20;
    }
    memoryPrice.innerText = memoryPriceText;

    // update total on web
    const updateWithRamWeb = document.getElementById('total-price');
    updateWithRamWeb.innerText = memoryPriceText + 1280;
};


// Storage Price

function getStoragePrice(storage) {
    const storagePrice = document.getElementById('storage-memory');
    let StoragePriceText = storagePrice.innerText;

    if (storage == 256) {
        StoragePriceText = 30;
    } else if (storage == 512) {
        StoragePriceText = 40;
    } else {
        StoragePriceText = 50;
    }
    storagePrice.innerText = StoragePriceText;
    //
    // // update total on web
};

// delivery

function getDeliveryPrice(delivrey) {
    const deliveryCost = document.getElementById('delivery-time');
    let deliveryCostText = deliveryCost.innerText;

    if (delivrey == true) {
        deliveryCostText = 60;
    } else {
        deliveryCostText = 70;
    }
    deliveryCost.innerText = deliveryCostText;

    // // update total on web
};

// calculate 

// Memory

document.getElementById('ram8gb-memory').addEventListener('click', function () {

    getMemoryPrice(true);
});

document.getElementById('ram16gb-memory').addEventListener('click', function () {

    getMemoryPrice(false);
});

// Storage

document.getElementById('ssd256-storage').addEventListener('click', function () {

    getStoragePrice(256);
});

document.getElementById('ssd512-storage').addEventListener('click', function () {

    getStoragePrice(512);
});
document.getElementById('ssd1tb-storage').addEventListener('click', function () {

    getStoragePrice(1024);
});

// Delivary

document.getElementById('free-delivery').addEventListener('click', function () {

    getDeliveryPrice(true);
});

document.getElementById('cost-delivery').addEventListener('click', function () {

    getDeliveryPrice(false);
});