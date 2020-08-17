



var bg=document.querySelectorAll("#bg circle");
bg.forEach(function(item){
    console.log(item);
    item.addEventListener('click',function(){
        console.log(item.getAttribute('fill'));
    })
    /*
    item.on('click',function(){
        console.log(item.getAttribute('fill'));
    });*/
});

