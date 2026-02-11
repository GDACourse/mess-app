const API_URL = "https://script.google.com/macros/s/AKfycbw4D5a0VfouI5aRR9H12zhZnofhrVFZZ59WrOrEtf5JBhFSWKrgqI3_uNucAa3p2ePP/exec";

function saveStockEntry() {

  const date = document.getElementById("entryDate").value;
  const item = document.getElementById("entryItem").value;
  const category = document.getElementById("entryCategory").value;
  const quantity = document.getElementById("entryQuantity").value;

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      date: date,
      item: item,
      category: category,
      quantity: quantity
    })
  })
  .then(res => res.text())
  .then(data => {
    alert(data);
  })
  .catch(err => {
    alert("Network Error");
  });
}
