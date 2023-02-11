const movies = document.querySelector('.movies');
let mov = [];
const jsonData = '/static/js/movies.json';

//fetching data from json file
const getData = async()=>{
    try{//response
        let response = await fetch(jsonData);
        let data = await response.json();
        console.log(data)
        data.movies.forEach(m => mov.push(m));
        //DOM
        renderMovies(mov);

    }catch(err){
        if(err) console.log(err);
    }
}

//Run function
getData()

//It loops the array and gets the values inside the DOM
const renderMovies = (arr) => {
    movies.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        movies.innerHTML += `
        <div class="card ${arr[i].genre}" id="cardy">
             <div class="movie" data-top="${i}">
                  <button class="box" id="${arr[i].codex}" onclick="ShowDetails(this.id); GoToBottom();">
                      <img src="${arr[i].img}" alt="${arr[i].name}" class="picture">
                      <p class="title">${arr[i].name}</p>
                  </button>
                   
             </div>
             <div class="fav_heart" id="love">
                 <button class="fav_heart_btn" id="${arr[i].id}" onclick="AddMovies(this.id)"><img src="/static/images/heart.png" alt="Heart"></button>
             </div>
        </div>
        `
    }
}

//Search movie
let input = document.getElementById('search-text'); //search bar

let button_search = document.getElementById('search-submit'); //sending

let button_menupane = document.getElementById('cerca'); //search button

let button_close_menupane = document.getElementById('close_lateral'); //close button

input.addEventListener('input', (e) =>{
    let search = e.target.value.toLowerCase(); //insert values

    console.log(search); //outputs results to console

    e.preventDefault();


    if (search === ''){
        renderMovies(mov); //if you cancel words, all movies come back
        return
    }

    if (e.key === 'Enter' || e.keyCode === 13){ //if you push send button or submit
        //document.getElementById('hamburger-label2').click();
        button_close_menupane.click();
    }


    let results = mov.filter(m => {
        return m.name.toLowerCase().match(search); //movies starting with that letter will be released
    });



    renderMovies(results); //here are results

    //moviesList();
})

button_search.onclick = function(e){
    e.preventDefault();
    //document.getElementById('close_lateral').click();
    button_close_menupane.click(); //if you click, close the lateral
}

button_menupane.onclick = function (){ //if I click the search button it connects to the anonymous variable and the menu_pane2 opens
    document.getElementById('lateralio').classList.add('is_open');

}

button_close_menupane.onclick = function (){ //if I click the X button it connects to the anonymous variable and menu_pane2 opens
    document.getElementById('lateralio').classList.remove('is_open');
}

window.onload = function() {
    var divElements = document.getElementsByClassName("card");
    for (var i = 0; i < divElements.length; i++) {
        divElements[i].style.display = "flex";
    }
};