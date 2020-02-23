document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#search__input");

  function performSearch() {
    const query = searchInput.value;
    let allHouses = [];
    document.querySelectorAll(".post").forEach(house => allHouses.push(house));
    const searchResults = allHouses.filter(house => {
      return house.querySelector(".post__textbox__address").innerText.toLowerCase().includes(searchInput.value.toLowerCase());
    });
    document.querySelector("#search__query").innerText = "You searched for '" + query + "', which returned exactly " + searchResults.length + " results!";
  }


  document.querySelector("#search__submit").addEventListener("click", () => {
    if (searchInput.value) {
      performSearch();
    }
  });
  document.addEventListener("keydown", key => {
    if (key.keyCode === 13 && searchInput === document.activeElement && searchInput.value) performSearch();
  });
});