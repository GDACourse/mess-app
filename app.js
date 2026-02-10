const API_URL = "https://script.google.com/macros/s/AKfycbyfe-yJ4QHNP9me2Q1va5m13eMstgXZKH2bSrRtfUcofE7djkQErKCD0i5naf1KRjyB/exec";

function sendData(payload) {
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(resp => {
      if (resp.status === "success") {
        alert("Saved Successfully");
      } else {
        alert("ERROR: " + resp.message);
      }
    })
    .catch(err => {
      alert("Network / Server Error");
      console.error(err);
    });
}
