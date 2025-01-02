
// Q1
let fruits =["Apple", "Banana", "Cherry","kiwi","watermelon"];
let fruitsImges=["red-apple-with-green-leaf-white-background.jpg",
                 "closeup-shot-bunch-banana.jpg",
                 "red-cherries-isolated-white-background.jpg",
                 "fresh-kiwi-fruit-slices-white-backdrop.jpg",
                 "watermelon-grey-grunge-table.jpg",
                ];
let fruitsList = document.querySelector("ul");
for(let i= 0;i<fruits.length;i++){
let item = document.createElement("li");
let img = document.createElement("img");
img.src=fruitsImges[i];
img.alt=fruits[i];
item.textContent =  fruits[i];

img.style.setProperty("width","400px");
img.style.setProperty("height","400px");
img.style.setProperty("padding","50px");
item.style.setProperty("text-align","center");
item.style.setProperty("list-style-type","none");

item.appendChild(img);
fruitsList.appendChild(item)


}

// Q2
function indexargu (array, num){
   
    for(let i=0 ; i< array.length; i++)  
     {
         if(array[i] === num){
            return i; 
         }
     }   
     return -1;
 }
 console.log(indexargu([50, 60, 70, 80], 70));
 console.log(indexargu([50, 60, 70, 80], 30));
 