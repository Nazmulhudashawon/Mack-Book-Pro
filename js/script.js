// memory cost
function memory(costChange){
    const extraMemory=document.getElementById('memory-cost');
    if(costChange){
        extraMemory.innerText = 180;  
    }
    else{
        extraMemory.innerText = 0;
    }
}
document.getElementById('memory-16gb').addEventListener('click', function(){  
    memory(true);    
})
document.getElementById('memory-8gb').addEventListener('click', function(){  
    memory(false);    
})

// storage cost
function storage(costChange){
    const extraMemory=document.getElementById('storage-cost');
    if(costChange){
        extraMemory.innerText = 100;  
    }
    else{
        extraMemory.innerText = 0;
    }
}
document.getElementById('storage-256gb').addEventListener('click', function(){  
    storage(false);    
})
document.getElementById('storage-512gb').addEventListener('click', function(){  
    storage(true);    
})
document.getElementById('storage-1tb').addEventListener('click', function(){  
    storage(true);    
})

// deliverycost
function delivery(costChange){
    const extraMemory=document.getElementById('delivery-cost');
    if(costChange){
        extraMemory.innerText = 20;  
    }
    else{
        extraMemory.innerText = 0;
    }
}
document.getElementById('delivery-charge').addEventListener('click', function(){  
    delivery(true);    
})
document.getElementById('delivery-free').addEventListener('click', function(){  
    delivery(false);    
})