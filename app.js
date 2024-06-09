
// -----------------------------------------q1

let fruits =[
"apple.webp"
,"orange.jpg"
,"banana.webp"
,"watermelon.webp",
"blueberry.jpg"];
let fruitsul=document.getElementById("fruitsul");

fruits.forEach(a => {
    
    let li1 = document.createElement("li");
    let imgg =document.createElement("img");
    imgg.src = a;
    li1.textContent =`${a}`;
    
       imgg.style.width = "100px";
       imgg.style.height="100px"
       li1.style.listStyle ="none";
       li1.appendChild(imgg);
       fruitsul.appendChild(li1);
 
    
});


// --------------------------------------------q2
let myarray = [1,2,3,4,5,6,7,8,9,10];
function checker(arrr, num){
for(i=0 ; i<=myarray.length ; i++){
    if(arrr[i]===num){
        return console.log(i) ;
    }
    
}
return console.log("-1");
}
checker(myarray,5);
