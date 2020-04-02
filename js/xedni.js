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

      console.log(cursor);

      if (cursor) {
        document.querySelector(".offline__houses").innerHTML += `
              <div>
                TODO: put here house card HTML
              </div>
            `;
      }
    };
  }
});
