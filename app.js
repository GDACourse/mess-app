const ENTRY_API = "https://script.google.com/macros/s/AKfycbw4D5a0VfouI5aRR9H12zhZnofhrVFZZ59WrOrEtf5JBhFSWKrgqI3_uNucAa3p2ePP/exec";
const USED_API = "https://script.google.com/macros/s/AKfycbyOUvFvhmKNNxooDytJu3D9zIoH0MN1uavFe5fBaI0mHB6TOvEZXe9yrEw1knnQOThSnw/exec";

function saveStockEntry() {

  const date = document.getElementById("entryDate").value;
  const item = document.getElementById("entryItem").value;
  const category = document.getElementById("entryCategory").value;
  const quantity = document.getElementById("entryQuantity").value;

  fetch(ENTRY_API, {
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


function saveStockUsed() {

  const date = document.getElementById("usedDate").value;
  const item = document.getElementById("usedItem").value;
  const category = document.getElementById("usedCategory").value;
  const quantity = document.getElementById("usedQuantity").value;

  fetch(USED_API, {
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
