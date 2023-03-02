let container = document.querySelector(".container");
let cards = document.querySelector(".cards");
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let card4 = document.querySelector(".card4");
let card5 = document.querySelector(".card5");
let card6 = document.querySelector(".card6");
let card7 = document.querySelector(".card7");
let card8 = document.querySelector(".card8");
let card9 = document.querySelector(".card9");
let x = document.querySelector(".x1");
let x1 = document.querySelector(".x2");
let x2 = document.querySelector(".x3");
let x3 = document.querySelector(".x4");
let x4 = document.querySelector(".x5");
let x5 = document.querySelector(".x6");
let x6 = document.querySelector(".x7");
let x7 = document.querySelector(".x8");
let x8 = document.querySelector(".x9");

let o = document.querySelector('.o1') ;
let o1 = document.querySelector('.o2') ;
let o2 = document.querySelector('.o3') ;
let o3 = document.querySelector('.o4') ;
let o4 = document.querySelector('.o5') ;
let o5 = document.querySelector('.o6') ;
let o6 = document.querySelector('.o7') ;            let o7 = document.querySelector('.o8') ;
let o8 = document.querySelector('.o9') ;        

card1.addEventListener("click", function(){
     x.style.display = "block";
     o.style.display = "none";
});

card1.addEventListener("dblclick", function(){
    o.style.display = "block";
    x.style.display = "none";
});


card2.addEventListener("click", function(){
    x1.style.display = "block";
    o1.style.display = "none";
});

card2.addEventListener("dblclick", function(){
    o1.style.display = "block";
    x1.style.display = "none";
});
card3.addEventListener("click", function(){
    x2.style.display = "block";
    o2.style.display = "none";
});
card3.addEventListener("dblclick", function(){
    o2.style.display = "block";
    x2.style.display = "none";
});

card4.addEventListener("click", function(){
    x3.style.display = "block";
    o3.style.display = "none";

});
card4.addEventListener("dblclick", function(){
    o3.style.display = "block";
    x3.style.display = "none";
});
card5.addEventListener("click", function(){
    x4.style.display = "block";
    o4.style.display = "none";
});
card5.addEventListener("dblclick", function(){
    o4.style.display = "block";
    x4.style.display = "none";
});

card6.addEventListener("click", function(){
    x5.style.display = "block";
    o5.style.display = "none";
});
card6.addEventListener("dblclick", function(){
    o5.style.display = "block";
    x5.style.display = "none";
});

card7.addEventListener("click", function(){
    x6.style.display = "block";
    o6.style.display = "none";
});
card7.addEventListener("dblclick", function(){
    o6.style.display = "block";
    x6.style.display = "none";
});

card8.addEventListener("click", function(){
    x7.style.display = "block";
    o7.style.display = "none";
});
card8.addEventListener("dblclick", function(){
    o7.style.display = "block";
    x7.style.display = "none";
});

card9.addEventListener("click", function(){
    x8.style.display = "block";
    o8.style.display = "none";
});
card9.addEventListener("dblclick", function(){
    o8.style.display = "block";
    x8.style.display = "none";
});


