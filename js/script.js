function getProducts(url){
    return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest();
        xhr.open("get",url,true);
        xhr.onreadystatechange = function(){ //by handling event on finish
            if(xhr.readyState == 4){
                if(xhr.status == 200)//done successfully
                    resolve(JSON.parse(xhr.responseText)); //call back in success
                else//something went wrong
                    reject("something went wrong"); //call back in fail
            }
        }
        xhr.send();
    })
}
var productsView = document.getElementById("footwear");
getProducts("/js/json/products.json")
.then((data)=>{
var len = data.prodcuts.length;
for(let i = 0; i < len; i++){
    productsView.innerHTML += `<div class="card">
    <div class="card-image"> <img src="img/${data.prodcuts[i].photo}" width="300px" height="180px" alt=""><span class="save">SAVE 25%</span> <span
    class="shose_name">AVALANCHE</span></div>
    <h3>${data.prodcuts[i].productName}</h3>
    <div class="old_salary">$${data.prodcuts[i].old_price}</div>
    <div class="new_salary">$${data.prodcuts[i].price}</div>
    <i class="fas fa-shopping-cart"></i>
     </div>`
}

},()=>{})

var bikesName = document.getElementById("bikes");
getProducts("/js/json/bikes.json")
.then((data)=>{
var len = data.bikes.length;
for(let i = 0; i < len; i++){
    bikesName.innerHTML += `<div class="card">
    <div class="card-image"> <img src="img/${data.bikes[i].photo}" width="300px" height="180px" alt=""><span class="save">SAVE 25%</span> <span
            class="shose_name">AVALANCHE</span></div>
    <h3>${data.bikes[i].productName}</h3>
    <div class="old_salary">$${data.bikes[i].old_price}</div>
    <div class="new_salary">$${data.bikes[i].price}</div>
    <i class="fas fa-shopping-cart"></i>
     </div>`
} 

},()=>{}) 
var caridoName = document.getElementById("Cardio");
getProducts("/js/json/cardio.json")
.then((data)=>{
var len = data.cardio.length;
for(let i = 0; i < len; i++){
    caridoName.innerHTML += `<div class="card">
    <div class="card-image"> <img width="300px" height="180px" src="img/${data.cardio[i].photo}"  alt=""><span class="save">SAVE 25%</span> <span
    class="shose_name">AVALANCHE</span></div>
    <h3>${data.cardio[i].productName}</h3>
    <div class="old_salary">$${data.cardio[i].old_price}</div>
    <div class="new_salary">$${data.cardio[i].price}</div>
    <i class="fas fa-shopping-cart"></i>
     </div>`
} 

},()=>{}) 
var strengthName = document.getElementById("Strength");
getProducts("/js/json/strength.json")
.then((data)=>{
var len = data.strength.length;
for(let i = 0; i < len; i++){
    strengthName.innerHTML += `<div class="card">
    <div class="card-image"> <img width="300px" height="180px" src="img/${data.strength[i].photo}"  alt=""><span class="save">SAVE 25%</span> <span
    class="shose_name">AVALANCHE</span></div>
    <h3>${data.strength[i].productName}</h3>
    <div class="old_salary">$${data.strength[i].old_price}</div>
    <div class="new_salary">$${data.strength[i].price}</div>
    <i class="fas fa-shopping-cart"></i>
     </div>`
} 

},()=>{}) 
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
   window.scrollTo({top: 0, behavior: 'smooth'});
  }