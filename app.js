const API_URL = "https://script.google.com/macros/s/AKfycbz-xaN1aO0ZRIfqdRzvgAaqVQFwpHotxD_Em6Rq_1qNCXT057hi-V2Xavw6hppb2pLe/exec";

function saveStockEntry() {
  const data = {
    type: "Stock Entry",
    date: document.getElementById("date").value,
    item: document.getElementById("// ====== API URLs ======
const STOCK_ENTRY_API = "https://script.google.com/macros/s/AKfycbyQ9Ix2-RX4ajGb8hOt57-ro-sSgmGbccWuOb9QFSJYf2cg6XVx3_SaFJ7fXoSX5aBV/exec";
const STOCK_USED_API  = "https://script.google.com/macros/s/AKfycbxGwOG6idXi1EFiv8H3XIeJ5u77lNRfm3pBa_Yr3453cMkje2JMPqH0kZDdjdgj115F/exec";

// ====== STOCK ENTRY ======
function saveStockEntry() {
  const date = document.getElementById("entryDate").value;
  const item = document.getElementById("entryItem").value;
  const category = document.getElementById("entryCategory").value;
  const quantity = document.getElementById("entryQuantity").value;

  fetch(STOCK_ENTRY_API, {
    method: "POST",
    body: JSON.stringify({
      date: date,
      item: item,
      category: category,
      quantity: quantity
    })
  })
  .then(res => res.text())
  .then(data => alert(data))
  .catch(err => alert("Network Error"));
}

// ====== STOCK USED ======
function saveStockUsed() {
  const date = document.getElementById("usedDate").value;
  const item = document.getElementById("usedItem").value;
  const category = document.getElementById("usedCategory").value;
  const quantity = document.getElementById("usedQuantity").value;

  fetch(STOCK_USED_API, {
    method: "POST",
    body: JSON.stringify({
      date: date,
      item: item,
      category: category,
      quantity: quantity
    })
  })
  .then(res => res.text())
  .then(data => alert(data))
  .catch(err => alert("Network Error"));
}
item").value,
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
