document.addEventListener("DOMContentLoaded", function(){
document.getElementById ("registration-form").addEventListener("submit",function(event){
  event.preventDefault()

  const username= document.getElementById("username").value.trim();
  const email= document.getElementById("email").value.trim();
  const password= document.getElementById("password").value.trim();
  const feedbackDiv= document.getElementById("form-feedback");
  
  let isValid = true;
  const messages = [];
  
  if(username.length< 3){
     isValid = false;
     messages.push("username characters must be more than three.");
 }
  if(!email.includes("@") || !email.includes("."))
{
     isValid = false;
     messages.push("email must have '@' and '.'");
    
  }
  if(password.length<8){
     isValid = false;
     messages.push("password characters must be more than eight.");
     
  }
 
  feedbackDiv.style.display= "block";
  if(isValid){
    feedbackDiv.textContent= "Registration successful!";
    feedbackDiv.style.color= "#28a745";
  }
  else{
    feedbackDiv.innerHTML = messages.join("<br>");
     feedbackDiv.style.color= "#dc3545";

  }
   


});});