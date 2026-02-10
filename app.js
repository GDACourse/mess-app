const API_URL = "https://script.google.com/macros/s/AKfycbwB9lIzkd0pU0AOg9gMAuW78nq1K8D2V9zM07CSFxpref8OYVw2vG1aeHtnYtXkV6ZU/exec";

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
