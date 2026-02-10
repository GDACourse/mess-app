const API_URL = "https://script.google.com/macros/s/AKfycbysyzH9RTgonAmETMOpSAuWstY2MqJOF7Y9svGcyB4vcLow52u10ahpeD22r5zikX0/exec";

function saveStockEntry() {
  const data = {
    date: document.getElementById("date").value,
    item: document.getElementById("item").value,
    category: document.getElementById("category").value,
    quantity: document.getElementById("quantity").value
  };

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(res => {
    alert("Stock Entry Saved Successfully");
    console.log(res);
  })
  .catch(err => {
    alert("Error saving data");
    console.error(err);
  });
}
