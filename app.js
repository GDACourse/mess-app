const API_URL = "https://script.google.com/macros/s/AKfycbx5m0g0RAvGqSD2f7z9L8dD0_BZTvp2pb2Q5PAhIwxMXpPJrZUGXIyLza_SbYR_D4S7/exec";

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
