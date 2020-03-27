document.addEventListener("DOMContentLoaded", () => {
  let like = document.querySelector(".like-button");
  like.addEventListener("click", () => {
    let houseId = like.dataset.id;
    fetch("json/houses.json")
      .then(response => {
        return response.json();
      })
      .then(data => {});
    console.log(houseId);
    fetch("json/houses.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        saved: saved
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
  });
});
