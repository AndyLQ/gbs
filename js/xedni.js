document.addEventListener("DOMContentLoaded", () => {
  let db;
  let request = window.indexedDB.open("estates", 1);

  request.onerror = function() {
    console.log("Database failed to open");
  };

  request.onsuccess = function() {
    console.log("Database opened successfully");

    db = request.result;
    renderHouses();
  };

  function renderHouses() {
    let transaction = db.transaction(["estates"], "readonly");
    let objectStore = transaction.objectStore("estates");
    objectStore.openCursor().onsuccess = function(e) {
      let cursor = e.target.result;

      if (cursor) {
        console.log(cursor);
        let savedHouse = cursor.value[0];
        const cardList = document.querySelector(".offline__houses");
        const cardContainer = document.createElement("a");
        const cardIMG = document.createElement("div");
        const cardText = document.createElement("div");
        const price = document.createElement("div");
        const street = document.createElement("p");
        const city = document.createElement("p");
        const size = document.createElement("p");
        const id = savedHouse.id;
        cardList.appendChild(cardContainer);
        cardContainer.setAttribute("class", "post");
        cardContainer.setAttribute("data-id", id);
        cardContainer.setAttribute("href", "housepage.html");
        cardContainer.setAttribute(
          "onclick",
          "getID(this.getAttribute('data-id'))"
        );
        cardContainer.append(cardIMG);
        cardIMG.setAttribute("class", "post__imgbox");
        cardIMG.append(cardText);
        cardText.setAttribute("class", "post__textbox");
        cardText.append(price);
        cardText.append(street);
        cardText.append(city);
        cardText.append(size);
        price.innerHTML = savedHouse.price;
        price.setAttribute("class", "post__textbox__price");
        street.innerHTML = savedHouse.street;
        street.setAttribute("class", "post__textbox__street");
        city.innerHTML = savedHouse.city;
        city.setAttribute("class", "post__textbox__city");
        size.innerHTML = savedHouse.size;
        size.setAttribute("class", "post__textbox__size");

        cursor.continue();
      }
    };
  }
});
