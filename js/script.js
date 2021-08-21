// extra cost counting
function extraCost(accessories, price){
    const extraMemory=document.getElementById(accessories +'-cost');
        extraMemory.innerText = price; 
        //total price
        totalPrice();
}
document.getElementById('memory-16gb').addEventListener('click', function(){  
    extraCost('memory', 180);    
})
document.getElementById('memory-8gb').addEventListener('click', function(){  
    extraCost('memory', 0);    
})
document.getElementById('storage-256gb').addEventListener('click', function(){  
    extraCost('storage', 0);    
})
document.getElementById('storage-1tb').addEventListener('click', function(){  
    extraCost('storage', 180);    
})
document.getElementById('storage-512gb').addEventListener('click', function(){  
    extraCost('storage', 100);      
})
document.getElementById('delivery-charge').addEventListener('click', function(){  
    extraCost('delivery', 20);    
})
document.getElementById('delivery-free').addEventListener('click', function(){  
    extraCost('delivery', 0);    
})
function totalPrice(){
        const BestPrice = document.getElementById('bestPrice').innerText;
        const ExtraMemoryCost = document.getElementById('memory-cost').innerText;
        const ExtraStorageCost = document.getElementById('storage-cost').innerText;
        const DeliveryCharge = document.getElementById('delivery-cost').innerText;
        const totalCost=parseInt(BestPrice) + parseInt(ExtraMemoryCost) + parseInt(ExtraStorageCost) +parseInt(DeliveryCharge);
        document.getElementById('total-price').innerText=totalCost;
        document.getElementById('total').innerText=totalCost;
}
function myFunction(){
    const promoInput=document.getElementById('promo-input');
    let promoInputValue=promoInput.value;
    if(promoInputValue== 'stevekaku'){
        const totalPrice= document.getElementById('total-price').innerText;
        const discountPrice=totalPrice - totalPrice*20/100 ;
        document.getElementById('total').innerText=discountPrice;  
    }
    promoInput.value='';
}
