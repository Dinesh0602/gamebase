
var firebaseConfig = {
 
  apiKey: "AIzaSyDptTWf--nlTNfIOEjn6Bry-hyDZCI-SC0",
    authDomain: "gamebase-2ead4.firebaseapp.com",
    projectId: "gamebase-2ead4",
    storageBucket: "gamebase-2ead4.appspot.com",
    messagingSenderId: "13800363077",
    appId: "1:13800363077:web:7fa39de574402683aebf2c",
    measurementId: "G-5EYF0322F4" 
    };
    // Initialize Firebasesadaeds
    firebase.initializeApp(firebaseConfig);
    

    firebase.auth();
    
    function login()
    {
     
      var email = document.getElementById("email_field").value;
      var password = document.getElementById("password_field").value;
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    
        window.alert("Error : " + errorMessage);
    
        // ...
      });
    
    }
//       const promise = firebase.auth().signInWithEmailAndPassword(email, password);
//  promise.catch(e => alert(e.message));
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   alert("ERROR: " +errorMessage);
  //   alert("ERROR: " +errorCode);
  // });
  //   }
    
    function signUp()
    {
      
      const email = document.getElementById("email_field").value;
      const password = document.getElementById("password_field").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("ERROR: " +errorCode);
      alert("ERROR: " +errorMessage)
      // ..
    });
  }
  const auth = firebase.auth();
  auth.onAuthStateChanged(function(user){
    
    if(user){
    document.getElementsById(Home).style.display = "block";
    document.getElementsById(Login).style.display = "none";


    }else{
      
      document.getElementsById(Home).style.display = "none";
      document.getElementsById(Login).style.display = "block";

      
    }
    
    
    
  });
  
    
    function signOut(){
      
      auth.signOut();
      alert("Signed Out");
      
    }
    
    
    
 
  
  


  
  


