// Your web app's Firebase configuration
var firebaseConfig = {
  //firebase config stuff
  apiKey: "AIzaSyDptTWf--nlTNfIOEjn6Bry-hyDZCI-SC0",
    authDomain: "gamebase-2ead4.firebaseapp.com",
    projectId: "gamebase-2ead4",
    storageBucket: "gamebase-2ead4.appspot.com",
    messagingSenderId: "13800363077",
    appId: "1:13800363077:web:7fa39de574402683aebf2c",
    measurementId: "G-5EYF0322F4" 
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    const auth = firebase.auth();
    
    
    function signUp(){
      
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      
      alert("Signed Up");
    }
    
    
    
    function signIn(){
      
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      
      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      
      
      
      
    }
    
    
    function signOut(){
      
      auth.signOut();
      alert("Signed Out");
      
    }
    
    
    
    auth.onAuthStateChanged(function(user){
      
      if(user){
        
        var email = user.email;
        alert("Active User " + email);
        
        //Take user to a different or home page
  
        //is signed in
        
      }else{
        
        alert("No Active User");
        //no user is signed in
      }
      
      
      
    });
    
  
  


  
  


