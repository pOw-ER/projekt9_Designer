let subscribeSection = document.getElementById('subscribe-section')
let attention = document.getElementById('attention')

function confirmFunction(){
  let email = document.getElementById('email')
  if (email.value === "") {
    attention.style.display= "block"
  }
  else {
    console.log("Your email is "+ email.value);
    subscribeSection.innerHTML = '<h2>YOUR EMAIL HAS BEEN CONFIRMED.</h2><h2><img src="./assets/img/love.png" alt="Heart"></h2><h2>THANKS FOR SUBSCRIBING!</h2><p>Now we just need to confirm your email address - please click the link in the email we sent you. Thanks!</p><form action=""><input type="button" id="return-button" value="BACK TO DESIGNER.COM" onClick="returnFunction()"></form>'
    email.value = "";
  }

}

function returnFunction (){
  subscribeSection.innerHTML ='<h2>Do you like this challenge?</h2><p>Subscribe to be the first to hear about updates, tips and recommendations!</p><!-- SUBSCRIBE FORM  --><form action=""><input type="email" name="email" id="email" placeholder="Write your email here" required><br><h5>*Bitte geben Sie Ihre Email an</h5><input type="button" id="subscribe-button" value="Subscribe" onClick="confirmFunction()"></form>'
}
