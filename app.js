const API_URL = "https://script.google.com/macros/s/AKfycbz-xaN1aO0ZRIfqdRzvgAaqVQFwpHotxD_Em6Rq_1qNCXT057hi-V2Xavw6hppb2pLe/exec";

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
