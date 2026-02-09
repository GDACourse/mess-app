const API_URL = "https://script.google.com/macros/s/AKfycbzlUu8zmtpvEvnQPX8EytVRKQA_uiYP7aWuxavxO9JxzEcFmH8cr7X4NjsiLc__gsUo/exec";

function saveStockEntry() {
  const data = {
    date: document.getElementById("date").value,
    item: document.getElementById("item").value,
    category: document.getElementById("category").value,
    quantity: document.getElementById("quantity").value
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    alert("Stock Entry Saved Successfully");
  })
  .catch(err => {
    alert("Error saving data");
  });
}
