const API_URL = "https://script.google.com/macros/s/AKfycbwi1Gh-G1jpxM-me1iM0hdbtGoNsoZT2Mchyf795tAqmjcZEAoIi4sVzhWCx7H9WDZX/exec";

// Stock Entry
function saveStockEntry() {
  const data = {
    type: "stockEntry",
    date: document.getElementById("date").value,
    item: document.getElementById("item").value,
    category: document.getElementById("category").value,
    quantity: document.getElementById("quantity").value
  };

  sendData(data);
}

// Stock Used
function saveStockUsed() {
  const data = {
    type: "stockUsed",
    date: document.getElementById("u_date").value,
    item: document.getElementById("u_item").value,
    quantity: document.getElementById("u_quantity").value
  };

  sendData(data);
}

function sendData(data) {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.text())
  .then(msg => {
    document.getElementById("msg").innerText = msg + " ✅";
  })
  .catch(err => {
    document.getElementById("msg").innerText = "Error ❌";
    console.error(err);
  });
}
