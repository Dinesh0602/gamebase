
var firebaseConfig = {
 
  apiKey: "AIzaSyDptTWf--nlTNfIOEjn6Bry-hyDZCI-SC0",
    authDomain: "gamebase-2ead4.firebaseapp.com",
    projectId: "gamebase-2ead4",
    storageBucket: "gamebase-2ead4.appspot.com",
    messagingSenderId: "13800363077",
    appId: "1:13800363077:web:7fa39de574402683aebf2c",
    measurementId: "G-5EYF0322F4" 
    };
    
    firebase.initializeApp(firebaseConfig);
    

   
    
    function login()
    {
     
      var email = document.getElementById("email_field").value;
      var password = document.getElementById("password_field").value;
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {

       console.log(user);
      
        alert("Welcome " +email);
        
        window.location.href = "Home.html";
        var email = document.getElementById("email_field").value;
  // if (email = "buruboyinadinesh@gmail.com"){
  //   document.getElementById("gameurl").style.display="block";
  //  document.getElementById("gameimg").style.display="block";
  //   document.getElementById("gamename").style.display="block";
  // }else{
  //   document.getElementById("gameurl").style.display="none";
  //   document.getElementById("gameimg").style.display="none";
  //   document.getElementById("gamename").style.display="none";
  // }
      }).catch(function(error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
    
        window.alert("Error : " + errorMessage);
     });
  }
  

    
    function signUp()
    {
      
      const email = document.getElementById("email_field").value;
      const password = document.getElementById("password_field").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("ERROR: " +errorCode);
      alert("ERROR: " +errorMessage)
      
    });
  }
 
   function signOut(){
      
      firebase.auth().signOut();
      alert("Signed out");
      window.location.href = "Login.html";
  }
  // let search = document.getElementById("search");
  // search.addEventListener("keyup",filternames);
  function filternames() {
    const filtervalue = document.getElementById('search').value.toUpperCase();
    
    const ul = document.getElementById('ul');
    const li = ul.querySelectorAll('li.names');
    for(var i=0;i< li.length;i++)
    {
      
      let a = li[i].getElementsByTagName("a")[0];
    
      if(a.innerText.toUpperCase().indexOf(filtervalue)>-1){
        li[i].style.display="block";
      } else  {
        li[i].style.display="none";
      }
      }
      if (filtervalue.length==0) {
      for(var i=0;i<li.length;i++){
      
        li[i].style.display="none";
      } } }
      // to initialize firestore


    
    
    
 
  
  


  
  


