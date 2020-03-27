document.addEventListener("DOMContentLoaded", () => {
  let like = document.querySelector(".like-button");
  like.addEventListener("click", () => {
    let likeButton = document.querySelector("[data-id]");
    let houseId = likeButton.dataset.id;
    fetch("json/houses.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
  });
});
