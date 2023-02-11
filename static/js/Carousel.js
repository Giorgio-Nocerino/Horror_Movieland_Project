var n_blocks = 5;
var current = 1;

function next(){
    current++;
    if(current > n_blocks){
        current = 1;
    }

    for(var i = n_blocks; i > 0; i--){
        document.querySelector(".cast .actors .actor:nth-of-type(" + i + ")").style.display = "none";
    }
    document.querySelector(".cast .actors .actor:nth-of-type(" + current + ")").style.display = "block";
}

function previous(){
    current--;
    if(current == 0){
        current = n_blocks;
    }

    for(var i = n_blocks; i > 0; i--){
        document.querySelector(".cast .actors .actor:nth-of-type(" + i + ")").style.display = "none";
    }
    document.querySelector(".cast .actors .actor:nth-of-type(" + current + ")").style.display = "block";

    //setInterval(next, 10000);
}
