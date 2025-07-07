   const title= document.getElementById("title");
   const name = document.getElementById("userName")
   const signInBtn= document.getElementById("signInBtn")
   const signUnBtn= document.getElementById("signUpBtn")

   signUnBtn.onclick=function(){
    title.innerHTML="Sign Up";
    userName.style.display="block";

   } 
      signInBtn.onclick=function(){
    title.innerHTML="Log In";
    userName.style.display="none";

   } 