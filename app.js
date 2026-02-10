/*****************************
 * CONFIG
 *****************************/
const API_URL = "https://script.google.com/macros/s/AKfycbzHDdpY_mSTVOh3LtUP41Exz8jV20IQkI7pe42UYKqKoWqposAKBNkSMvkRO17D1l76/exec";

/*****************************
 * STOCK ENTRY
 *****************************/
function saveStockEntry() {
  const date = document.getElementById("date").value;
  const item = document.getElementById("item").value;
  const category = document.getElementById("category").value;
  const quantity = document.getElementById("quantity").value;

  if (!date || !item || !category || !quantity) {
    alert("All fields are required");
    return;
  }

  const data = {
    type: "entry",          // 👈 important
    date: date,
    item: item,
    category: category,
    quantity: quantity
  };

  sendData(data);
}

/*****************************
 * STOCK USED
 *****************************/
function saveStockUsed() {
  const date = document.getElementById("date").value;
  const item = document.getElementById("item").value;
  const category = document.getElementById("category").value;
  const quantity = document.getElementById("quantity").value;

  if (!date || !item || !category || !quantity) {
    alert("All fields are required");
    return;
  }

  const data = {
    type: "used",           // 👈 important
    date: date,
    item: item,
    category: category,
    quantity: quantity
  };

  sendData(data);
}

/*****************************
 * COMMON SEND FUNCTION
 *****************************/
function sendData(data) {
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    if (res.status === "success") {
      alert("Saved Successfully ✅");
      clearForm();
    } else {
      alert("Error: " + res.message);
    }
  })
  .catch(err => {
    console.error(err);
    alert("Network / Server Error ❌");
  });
}

/*****************************
 * CLEAR FORM
 *****************************/
function clearForm() {
  document.getElementById("date").value = "";
  document.getElementById("item").value = "";
  document.getElementById("category").value = "";
  document.getElementById("quantity").value = "";
}
