fetch("/static/js/fav_movies.json")
    .then(function(response){
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
    })
    .then(function(data) {
        localStorage.setItem("products", JSON.stringify(data));

        var cartia = localStorage.getItem("cart")
        console.log(cartia);
        if (!cartia) {
            localStorage.setItem("cart", "[]");
        }
        ReleaseWL();
    })
    .catch(function(error) {
        console.log(error);
    });


// SETTING GLOBAL VARIABLES SO WE CAN ACCESS THEM FROM INSIDE THE FUNCTIONS.
let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

// ADDING A MOVIE IN THE WISH LIST
function AddMovies(productId){

    let product = products.find(function(product){
        return product.id == productId;
    });

    if(cart.length == 0){
        cart.push(product);
    }else{
        let res = cart.find(element => element.id == productId);
        if(res === undefined){
            cart.push(product);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.reload();
}



// REMOVING A MOVIE FROM THE WISH LIST
function RemoveMovies(productId){
    let temp = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(temp));

    window.location.reload();
}

function ReleaseWL(){
    let cartList = document.getElementById("favourites");
    let cartHtml = "";

    for (let i = 0; i < cart.length; i++) {
        cartHtml += `<div class="card" id="cardy">
             <div class="movie" data-top="${i}">
                  <button class="box" id="${cart[i].codex}" onclick="ShowDetails(this.id)">
                      <img src="${cart[i].img}" alt="${cart[i].name}" class="immagine">
                      <p class="title">${cart[i].name}</p>
                  </button>
                   
             </div>
             <div class="fav_bin">
                 <button class="fav_bin_btn" id="${cart[i].id}" onclick="RemoveMovies(this.id)"><img src="/static/images/bin.png"></button>
             </div>
         </div>`;
    }
    cartList.innerHTML = cartHtml;
}