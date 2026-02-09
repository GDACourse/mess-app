const API_URL = "https://script.google.com/macros/s/AKfycbx1aB2xQNJO6tHnIZXssbKnq5hSNhDViyChv1SaMcR07AAXefrTBdq99KTW-QgbVTHw/exec";

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
