const API_URL = "https://script.google.com/macros/s/AKfycbxf4i-TLzvs1XWyQrKbH_MVq9hoOWo-qYx5z4ItSZd9pI0Tuex1x44sC8b9oFeqaSCm/exec";

function saveStockEntry() {
  const date = document.getElementById("date").value;
  const item = document.getElementById("item").value;
  const category = document.getElementById("category").value;
  const quantity = document.getElementById("quantity").value;

  fetch(API_URL, {
    method: "POST",
    mode: "no-cors",   // 🔥 THIS FIXES CORS
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: date,
      item: item,
      category: category,
      quantity: quantity
    })
  })
  .then(() => {
    alert("Saved Successfully ✅");
    document.querySelector("form").reset();
  })
  .catch(() => {
    alert("Error ❌");
  });
}
