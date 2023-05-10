var page1=document.querySelectorAll(".page1 a")
var page=document.querySelector(".ea")
var check1=document.querySelectorAll(".ea .page1:nth-of-type(1) span:first-child")
var check2=document.querySelectorAll(".ea .page1:nth-of-type(2) span:first-child")
var check3=document.querySelectorAll(".ea .page1:nth-of-type(3) span:first-child")
var check4=document.querySelectorAll(".ea .page1:nth-of-type(4) span:first-child")
var jdt=document.querySelectorAll(".conter_AL ul li")
var las_t=document.querySelectorAll(".ea .page1:nth-of-type(5) input")
var tijiao=document.querySelector(".tj")

//控制细节
var ul=document.querySelector(".conter_AL ul")
var begin=document.querySelector(".page .button")
var pa=document.querySelector(".page")
var ok=document.querySelector(".thanks")

begin.onclick=function(){
    ul.style.display="block"
    pa.style.display="none"
}
for(var i=0;i<las_t.length;i++){
    las_t[i].onblur=function(){
        if (document.querySelectorAll(".ea .page1:nth-of-type(5) input")[0].value!=""&&
        document.querySelectorAll(".ea .page1:nth-of-type(5) input")[1].value!=""&&
        document.querySelectorAll(".ea .page1:nth-of-type(5) input")[2].value!=""
        ) {
            jdt[4].className="check";
        }
        else{
            jdt[4].className="";
        }
    }
}


jdt[0].onclick=function(){
    page.className="ea"
}
jdt[1].onclick=function(){
    page.className="ea pag_1"
}
jdt[2].onclick=function(){
    page.className="ea pag_2"
}
jdt[3].onclick=function(){
    page.className="ea pag_3"
}
jdt[4].onclick=function(){
    page.className="ea pag_4"
}


for(var i=0;i<check1.length;i++){
    check1[i].onclick=function(){
        var flag=0;
        if(this.className!="check")
        {
            flag=1;
        }
        for(var i=0;i<4;i++){
            check1[i].className="";
        }
        
        if(flag==1)
        {
            this.className="check";
            jdt[0].className="check";
        }
        else{
            jdt[0].className="";
        }
    }
}
for(var i=0;i<check2.length;i++){
    check2[i].onclick=function(){
        var flag=0;
        if(this.className!="check")
        {
            flag=1;
        }
        for(var i=0;i<check2.length;i++){
            check2[i].className="";
        }

        if(flag==1)
        {
            this.className="check";
            jdt[1].className="check";
        }
        else{
            jdt[1].className="";
        }
    }
}
for(var i=0;i<check3.length;i++){
    check3[i].onclick=function(){
        var flag=0;
        if(this.className!="check")
        {
            flag=1;
        }
        for(var i=0;i<check3.length;i++){
            check3[i].className="";
        }
        if(flag==1)
        {
            this.className="check";
            jdt[2].className="check";
        }
        else{
            jdt[2].className="";
        }
    }
}
for(var i=0;i<check4.length;i++){
    check4[i].onclick=function(){
        var flag=0;
        if(this.className!="check")
        {
            flag=1;
        }
        for(var i=0;i<check4.length;i++){
            check4[i].className="";
        }
        if(flag==1)
        {
            this.className="check";
            jdt[3].className="check";
        }
        else{
            jdt[3].className="";
        }
    }
}




for(var i=0;i<page1.length;i++){
    page1[i].onclick=function(){
        
        if(this.className=="n1"){
            page.className="ea pag_1"
            
        }
        else if(this.className=="n2"){
            page.className="ea pag_2"
        }
        else if(this.className=="n3"){
            page.className="ea pag_3"
        }
        else if(this.className=="n4"){
            page.className="ea pag_4"
        }
        else if(this.className=="t1"){
            page.className="ea "
        }
        else if(this.className=="t2"){
            page.className="ea pag_1"
        }
        else if(this.className=="t3"){
            page.className="ea pag_2"
        }
        else if(this.className=="t4"){
            page.className="ea pag_3"
        }
        else if(this.className=="t0"){
            ul.style.display="none"
            pa.style.display="block"
        }
    }
}

tijiao.onclick=function(params) {
    
    if (jdt[0].className!="check"){
        page.className="ea";
        return false;
    }
    else if(jdt[1].className!="check"){
        page.className="ea pag_1";
        return false;
    }
    else if(jdt[2].className!="check"){
        page.className="ea pag_2";
        return false;
    }
    else if(jdt[3].className!="check"){
        page.className="ea pag_3";
        return false;
    }
    else if(jdt[4].className!="check") {
        page.className="ea pag_4";
        return false;
    }
    
    page.className="ea pag_5";
    ok.className="thanks th_ok"
    ul.style.display="none";

}