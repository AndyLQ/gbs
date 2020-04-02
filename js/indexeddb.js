let db;

window.onload = () => {
  let request = window.indexedDB.open("estates", 1);

  request.onerror = function() {
    console.log("Database failed to open");
  };

  request.onsuccess = function() {
    console.log("Database opened successfully");

    db = request.result;
    addData();
  };

  request.onupgradeneeded = function(e) {
    let db = e.target.result;

    let objectStore = db.createObjectStore("estates", {
      keyPath: "id",
      autoIncrement: true
    });

    /*        objectStore.createIndex('price', 'price', { unique: false});
        objectStore.createIndex('street', 'street', { unique: false});
        objectStore.createIndex('city', 'city', { unique: false});
        objectStore.createIndex('size', 'size', { unique: false});
        objectStore.createIndex('imgURL', 'imgURL', { unique: false});
        objectStore.createIndex('saved', 'saved', { unique: false});
        objectStore.createIndex('desc', 'desc', { unique: false});
        objectStore.createIndex('type', 'type', { unique: false});
        objectStore.createIndex('rooms', 'rooms', { unique: false}); */

    console.log("Database setup complete");
  };

  async function addData() {
    let idToBeLookedUp = localStorage.getItem("currenthouse");
    if (idToBeLookedUp) idToBeLookedUp = Number(idToBeLookedUp);
    let housesJson = await fetch("../json/houses.json");
    let houses = await housesJson.json();
    let newItem = houses.houses.filter(house => house.id === idToBeLookedUp);

    let isHouseAlreadyIncluded = checkIfInDB(newItem);

    if (!isHouseAlreadyIncluded) {
      let transaction = db.transaction(["estates"], "readwrite");
      let objectStore = transaction.objectStore("estates");
      console.log(newItem);
      let something = objectStore.add(newItem);

      something.oncomplete = () => {
        console.log("Worked like a charm!", objectStore);
      };

      console.log(objectStore);

      transaction.oncomplete = () => {
        console.log("Transaction completed on the database");
      };

      transaction.onerror = () => {
        console.log("Transaction not completed, error!!!");
      };
    } else {
      console.log("already in the DB");
    }
  }

  function checkIfInDB(itemToBeLookedUp) {
    let transaction = db.transaction(["estates"], "readonly");
    let objectStore = transaction.objectStore("estates");
    objectStore.openCursor().onsuccess = function(e) {
      let cursor = e.target.result;

      if (cursor && cursor === itemToBeLookedUp) {
        return true;
      } else {
        return false;
      }
    };
  }

  // function deleteItem(e) {

  //     let contactId = Number(e.target.parentNode.getAttribute('data-contact-id'));

  //     let transaction = db.transaction(['contacts'], 'readwrite');
  //     let objectStore = transaction.objectStore('contacts');
  //     let request = objectStore.delete(contactId);

  //     transaction.oncomplete = () => {
  //         e.target.parentNode.parentNode.removeChild(e.target.parentNode);

  //         console.log(`Contact ${contactId} is deleted!`);

  //         if(!list.firstChild) {
  //             let listItem = document.createElement('li');
  //             listItem.textContent = 'No contacts store.';
  //             list.appendChild(listItem);
  //         }
  //     }
  // }
};
