

let arr=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg",
"images/5.jpg"];
let image=document.getElementById("image")


function hello(arr){
    'use strict'


    setInterval(function(){
        let randm=Math.floor(Math.random()* arr.length);  // 0 ==> 4

        image.src=arr[randm]


     }, 1000);

}
hello(arr)