 function ShowDetails(movies){

        var genreSelected = movies;

        var  xhttp = new XMLHttpRequest;

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(xhttp.responseText);

                var movies = response.movies;

                var item = '';

                var photo_plot = '';

                var trailer = '';

                var cast = '';

                for (var i = 0; i < movies.length; i++) {

                    console.log(movies);

                    if (genreSelected == movies[i].codex) {

                        item += `<h2 class="title">${movies[i].name}</h2>`

                        photo_plot += `<nav class="photo">
                                     <img src="${movies[i].img}" alt="${movies[i].name}" id="henko">
                                   </nav>

                                   <article>
                                     <h1>Trama</h1>
                                     <p class="plot">${movies[i].plot}</p>
                                   </article>`

                        trailer += `<div class="trailer">
                                   <h1>Trailer</h1>
                                   <video controls>
                                       <source src="${movies[i].trailer_mp4}" type="video/mp4">
                                       <source src="${movies[i].trailer_ogg}" type="video/ogg">
                                   </video>
                                </div>`

                        cast += `  <h1>Cast</h1>
                                   <div class="actors" id="cast_actors">
                                   <button class="previous" onclick="previous()"><img src="/static/images/left.png" alt="Left"></button>
                                 <div class="actor">
                                    <div class="boxy"><img src="${movies[i].profile1}" alt="" class="image"></div>
                                    <p class="name">${movies[i].name_actor1}</p>
                                 </div>
                                 <div class="actor">
                                    <div class="boxy"><img src="${movies[i].profile2}" alt="" class="image"></div>
                                    <p class="name">${movies[i].name_actor2}</p>
                                 </div>
                                 <div class="actor">
                                    <div class="boxy"><img src="${movies[i].profile3}" alt="" class="image"></div>
                                    <p class="name">${movies[i].name_actor3}</p>
                                 </div>
                                 <div class="actor">
                                    <div class="boxy"><img src="${movies[i].profile4}" alt="" class="image"></div>
                                    <p class="name">${movies[i].name_actor4}</p>
                                 </div>
                                 <div class="actor">
                                    <div class="boxy"><img src="${movies[i].profile5}" alt="" class="image"></div>
                                    <p class="name">${movies[i].name_actor5}</p>
                                 </div>
                                 <button class="next" onclick="next()"><img src="/static/images/right.png" alt="Right"></button>
                                 </div>`
                    }
                }

                var result = document.getElementById("heady");

                var res_pp = document.getElementById("flex_section");

                var res_tl = document.getElementById("footer");

                var res_cast = document.getElementById("casty")

                result.innerHTML = item;

                res_pp.innerHTML = photo_plot;

                res_tl.innerHTML = trailer;

                res_cast.innerHTML = cast;

            }
        };

        xhttp.open("GET", "/static/js/movies.json", true);
        xhttp.send();

}

 function GoToBottom() {
     document.body.scrollTop = 1500;
     document.documentElement.scrollTop = 1500;
 }
