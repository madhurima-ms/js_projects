const reviews=[
    {
      id:1,
      name: "Anna Johnson",
      job: "WEB DEVELOPER",
      image: ""  ,
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottleDisrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal",
    },
    {
        id:2,
        name:"Peter Jones",
        job: "Intern",
        image: "",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag",
     
    },
    {
        id:3,
        name:"Bill Anderson",
        job: "THE BOSS",
        image: "",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic",
    },
    {
        id:4,
        name:"Susan Smith",
        job: "WEB DEVELOPER",
        image: "",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },

    {
        id:5,
        name:"Bill Anderson",
        job: "The Boss",
        image: "",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic",
    },


],
//Select items
const img= document.getElementById("person-img");
const id= document.getElementById("id");
const author= document.getElementById("author");
const info= document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn= document.querySelector(".next-btn");
const randomBtn= document.querySelector(".random-btn");

//set items
let currentItem=0;

// load initial value
window.addEventListener("DOMContentLoaded", function(){
    showPerson();
});
function showPerson(){
    const item=reviews[currentItem];
    img.src =item.image;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}
//Show Next Person

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
});
//Show Prev Person

prevBtn.addEventListener("click",function(){
currentItem--;
if(currentItem < 0){
    currentItem =reviews.length-1;
}
showPerson();
});
//Show Random Person

randomBtn.addEventListener("click",function(){
    currentItem=Math.floor(Math.random()*reviews.length)
    console.log(currentItem);
    showPerson();
});