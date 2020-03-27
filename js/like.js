document.addEventListener("DOMContentLoaded", () => {
  let like = document.querySelector(".like-button");

  fetch("json/liked.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      like.addEventListener("click", () => {
        let houseId = document.querySelector("[data-house]");
      });

      let likedHousesList = document.querySelector(".liked__list");
    });
});
