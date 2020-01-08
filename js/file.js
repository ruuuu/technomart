
   var link = document.querySelector(".write-us-button");

   var popup = document.querySelector(".modal-login");
   var close = popup.querySelector(".modal-close");

   var form = popup.querySelector("form");


   var login = popup.querySelector("[name=login]");

   var email = popup.querySelector("[name=mail]");
   var text = popup.querySelector("[name=area-text]");



   var isStorageSupport = true;
   var storage = "";



   try {
      storage = localStorage.getItem("login");
   }
   catch (err) {
       isStorageSupport = false;
   }




  link.addEventListener("click", function (evt) {
          evt.preventDefault();
          popup.classList.add("modal-show");

          if (storage) {
              login.value = storage;
              email.focus();
          }
          else{
              login.focus();
          }

   });


   close.addEventListener("click", function (evt) {
         evt.preventDefault();
         popup.classList.remove("modal-show");
         popup.classList.remove("modal-error");

   });


  form.addEventListener("submit", function (evt) {
        if (!login.value || !email.value || !text.value) {
              evt.preventDefault();
              popup.classList.add("modal-error");
        }
        else {
              if (isStorageSupport) {
                  localStorage.setItem("login", login.value);
              }
          }
  });


  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("modal-show")) {
              popup.classList.remove("modal-show");
              popup.classList.remove("modal-error");
          }
      }
  });



  var buyButton = document.querySelector(".buy");
  var addTrash = document.querySelector(".modal-trash");


  buyButton.addEventListener("click", function (evt) {
      evt.preventDefault();
          addTrash.classList.add("modal-show");
  });









  var mapLink = document.querySelector(".contacts-button-map");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close-for-map");

  mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
  });


  mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
  });


  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
          evt.preventDefault();
          if (mapPopup.classList.contains("modal-show")) {
              mapPopup.classList.remove("modal-show");
              }
      }
  });
