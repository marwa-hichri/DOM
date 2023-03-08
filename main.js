let  btnRemove = Array.from(document.getElementsByClassName('fa')) 

for(let btn of btnRemove){
    btn.addEventListener('click', function(){
        btn.parentNode.remove()
        CalcultotalPrice ()
    })
}


function CalcultotalPrice (){
let PriceOfElement = Array.from(document.getElementsByClassName("priceNumber"))
let QtyOfElement = Array.from(document.getElementsByClassName('Qty'))
let TotalPrice = 0 
    for (let i=0 ; i<PriceOfElement.length ; i++) {
    TotalPrice += (PriceOfElement[i].innerHTML*QtyOfElement[i].innerHTML)
    }
return document.getElementById('tp').innerHTML = TotalPrice
}
 


let plus = document.getElementsByClassName('add') 
console.log (plus) ;
for(let btn of plus){
    btn.addEventListener('click', function(){
        btn.previousElementSibling.innerHTML++
        CalcultotalPrice ()

    });
}
let substract = Array.from(document.getElementsByClassName('moins'))
for(let btn of substract){
    btn.addEventListener('click', function(){
        if(btn.nextElementSibling.innerHTML>0){
            btn.nextElementSibling.innerHTML--;
            CalcultotalPrice ();
        }
    })
}


let deletes = Array.from(document.querySelectorAll("#delete"));
for(let i in deletes){
    deletes[i].addEventListener("click",function(){
        arrOfQuantitys[i] = 0;
        updateTotal();
        parents[i].remove();
    });
}


let hearts = Array.from(document.querySelectorAll('#heart'));
for (let i of hearts ){
    hearts[i].addEventListener("click", function(){
        if (hearts[i.getAttribute('src')=="heartNull.png"]) {
            hearts[i].setAttribute('src','heartLike.png');
        } else {
            hearts[i].setAttribute('src','heartNull.png');
        }
    
    })
}
