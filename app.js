
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getFirestore ,collection ,getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 
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
const form = document.getElementById("addForm")
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  addDoc(collection(db,'customers'),{
      dn:form.dnf.value,
      email:form.emailf.value,
      ud:form.udf.value,
      purl:form.purlf.value,
})
  alert("susecess")

// Correct the method name to getElementById
const table = document.getElementById("table");

async function getCustomers(db) {
  const cusCol = collection(db, 'customers');
  const cusSnapshot = await getDocs(cusCol);
  return cusSnapshot;
}

async function populateTable() {
  const data = await getCustomers(db);

  data.forEach((customer) => {
    // Assuming customer.data() returns an object with the fields: DisplayName, idUser, email, purl
    const { dn, email, ud, purl } = customer.data();

    // Create a new row for each customer and populate the cells with data
    const newRow = table.insertRow();
    newRow.innerHTML = `
      <td>${dn}</td>
      <td>${email}</td>
      <td>${ud}</td>
      <td>${purl}</td>
    `;
  });
}

// Call the populateTable function to populate the table with customer data
populateTable();

