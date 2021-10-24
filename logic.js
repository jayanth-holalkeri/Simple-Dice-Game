var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;
var randomimg1="images/dice"+random1+".png";
var randomimg2="images/dice"+random2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimg1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimg2);
if(random1>random2){
    document.querySelector("h1").innerText="Player 1 wins!!!";
}
else if(random2>random1){
    document.querySelector("h1").innerText="Player 2 wins!!";
}
else{
    document.querySelector("h1").innerText="Draw..."
}
