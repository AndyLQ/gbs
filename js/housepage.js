let showPost;

document.addEventListener("DOMContentLoaded", () => {
  fetch("json/houses.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      showPost = parseInt(postID);

      const topPrice = document.getElementById("topPrice");
      const topStreet = document.getElementById("street");
      const topCity = document.getElementById("city");
      const topSize = document.getElementById("topSize");
      const desc = document.getElementById("desc");
      const type = document.getElementById("type");
      const size = document.getElementById("size");
      const rooms = document.getElementById("rooms");
      const price = document.getElementById("price");

      var postID = parseInt(localStorage.getItem("currenthouse"));
      showPost = parseInt(postID);

      topPrice.innerHTML = data.houses[showPost].price;
      topStreet.innerHTML = data.houses[showPost].street;
      topCity.innerHTML = data.houses[showPost].city;
      topSize.innerHTML = data.houses[showPost].size;
      desc.innerHTML = data.houses[showPost].desc;
      type.innerHTML = data.houses[showPost].type;
      size.innerHTML = data.houses[showPost].size;
      rooms.innerHTML = data.houses[showPost].rooms;
      price.innerHTML = data.houses[showPost].price;
    });
});
