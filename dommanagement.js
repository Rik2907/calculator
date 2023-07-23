ans="";
var id;
var cnt=1;

let element=document.getElementsByClassName("buttonclass");
let mydiv=document.getElementsByClassName("styletext");

//console.log(mydiv);
var i=0;
for( i=0;i<element.length;i++){
element[i].addEventListener("click", function() {
    const buttonContent = this.textContent;
    //console.log(buttonContent);
    const color=this.style.backgroundColor;
    this.style.backgroundColor = "red";
    var self = this;
    setTimeout(function(){
      
      self.style.backgroundColor = color;
    },100);
    if(buttonContent=="=")
     {
      try{
        ans=eval(ans);
        if(ans==Infinity)
         ans="ERROR";
      }catch(e){
        ans="ERROR";
      }
        //console.log(ans);
     }
     else if(buttonContent=="C"){
      ans=""
      mydiv[0].innerHTML=ans;
     }
     else
      ans=ans+buttonContent;
      //console.log(ans);
      mydiv[0].innerHTML=(mydiv[0].innerHTML=="ERROR")?"ERROR":ans;
      
  });
}