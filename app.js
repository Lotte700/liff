
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getFirestore ,collection ,getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyALLJBsXLUsSySdesIMPL47HMtMNyHYxFA",
    authDomain: "myproject-jed-2823d.firebaseapp.com",
    projectId: "myproject-jed-2823d",
    storageBucket: "myproject-jed-2823d.appspot.com",
    messagingSenderId: "841224569722",
    appId: "1:841224569722:web:48605274eb4bc8b0130cc3",
    measurementId: "G-S3YR67ZV6T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function getCutomers(db){
    const cusCol = collection(db,'customers')
    const cusSnapshot = await getDocs(cusCol)
    return cusSnapshot
  }


const data = await getCutomers(db)
data.foreach(customer=>{
  console.log(employee.data()
})
  
