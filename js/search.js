document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#search__input");

  function performSearch() {
    const query = searchInput.value;
    let allHouses = [];
    document.querySelectorAll(".post").forEach(house => allHouses.push(house));
    const searchResults = allHouses.filter(house => {
      if (
        house
          .querySelector(".post__textbox__street")
          .innerText.toLowerCase()
          .includes(searchInput.value.toLowerCase()) ||
        house
          .querySelector(".post__textbox__city")
          .innerText.toLowerCase()
          .includes(searchInput.value.toLowerCase())
      ) {
        house.classList.remove("hidden");
        return house;
      } else {
        house.classList.add("hidden");
        return;
      }
    });
    document.querySelector("#search__query").innerText =
      "You searched for '" +
      query +
      "', which returned exactly " +
      searchResults.length +
      " results!";
  }

  document.querySelector("#search__submit").addEventListener("click", () => {
    if (searchInput.value) {
      performSearch();
    }
  });
  document.addEventListener("keydown", key => {
    if (
      key.keyCode === 13 &&
      searchInput === document.activeElement &&
      searchInput.value
    )
      performSearch();
  });
});
