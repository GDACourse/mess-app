const API_URL = "https://script.google.com/macros/s/AKfycbzgDcwd2_ZONDCbQD4mC-qj5WmIFAlpLuKd55Yl1ph9xQm9C8rkE3-npuN_YX7mEYAq/exec?action=getStockReport";

// Stock Report Load
function loadStockReport() {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      let table = document.getElementById("stockTable");
      table.innerHTML = "";

      data.forEach(item => {
        let row = `
          <tr>
            <td>${item.item}</td>
            <td>${item.added}</td>
            <td>${item.used}</td>
            <td>${item.remaining}</td>
          </tr>
        `;
        table.innerHTML += row;
      });
    })
    .catch(error => {
      alert("Error loading data");
      console.error(error);
    });
}
