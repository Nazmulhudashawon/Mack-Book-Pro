// extra cost counting function
function extraCost(accessories, price, button) {
  document.getElementById(button).addEventListener('click', function () {
    const extraMemory = document.getElementById(accessories + '-cost');
    extraMemory.innerText = price;
    //total price
    totalPrice();
  });
}
// total price function
function totalPrice() {
  const BestPrice = document.getElementById('bestPrice').innerText;
  const ExtraMemoryCost = document.getElementById('memory-cost').innerText;
  const ExtraStorageCost = document.getElementById('storage-cost').innerText;
  const DeliveryCharge = document.getElementById('delivery-cost').innerText;
  const totalCost =
    parseInt(BestPrice) +
    parseInt(ExtraMemoryCost) +
    parseInt(ExtraStorageCost) +
    parseInt(DeliveryCharge);
  console.log(totalCost);
  document.getElementById('total-price').innerText = totalCost;
  document.getElementById('total').innerText = totalCost;
}
//function calling
extraCost('memory', 180, 'memory-16gb');
extraCost('memory', 0, 'memory-8gb');
extraCost('storage', 0, 'storage-256gb');
extraCost('storage', 100, 'storage-512gb');
extraCost('storage', 180, 'storage-1tb');
extraCost('delivery', 0, 'delivery-free');
extraCost('delivery', 20, 'delivery-charge');

// dicount price function
function myFunction() {
  const promoInput = document.getElementById('promo-input');
  let promoInputValue = promoInput.value;
  if (promoInputValue == 'stevekaku') {
    const totalPrice = document.getElementById('total-price').innerText;
    const discountPrice = totalPrice - (totalPrice * 20) / 100;
    document.getElementById('total').innerText = discountPrice;
  }
  promoInput.value = '';
}
