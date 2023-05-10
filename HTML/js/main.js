var list=document.querySelectorAll(".conter_B li")
var page=document.querySelectorAll(".page_A")
var flex=document.querySelector(".flex_A")
var close_A=document.querySelectorAll(".flex_A span")

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

for(var i=0;i<list.length;i++){
    list[i].onclick=function(event){ 
         
        flex.className="flex_A flex_A_A";
        if (this.className=="p1") {
            page[0].style.display="block";
        }
        else if (this.className=="p2") {
            page[1].style.display="block";
        }
        else if (this.className=="p3") {
            page[2].style.display="block";
        }
        else{
            page[3].style.display="block";
        }
        
    }
}

for(var i=0;i<close_A.length;i++){
    close_A[i].onclick=function(event){
        flex.className="flex_A";
        
        for(var i=0;i<close_A.length;i++){
            page[i].style.display="none"
           
        }
    }
}