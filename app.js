const API_URL = "https://script.google.com/macros/s/AKfycbxcyX9v4CoA4iVsG85mOb7xOnNpUuvB6x7Bo-D2ja9JjkP5GxW1ULU9-iUYXIBthbUl/exec";

function saveStockEntry() {
  const data = {
    type: "Stock Entry",
    date: document.getElementById("date").value,
    item: document.getElementById("item").value,
    category: document.getElementById("category").value,
    quantity: document.getElementById("quantity").value
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(txt => alert(txt))
  .catch(err => alert("Error"));
}
function saveStockUsed() {
  const data = {
    type: "Stock Used",
    date: document.getElementById("used_date").value,
    item: document.getElementById("used_item").value,
    quantity: document.getElementById("used_quantity").value
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(txt => alert(txt))
  .catch(err => alert("Error"));
}

