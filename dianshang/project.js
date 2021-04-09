let placeToAdd = document.getElementById('addEcommerceProjects');
ecommerce.forEach(function (e,i) {
  return placeToAdd.innerHTML +=
  `<div class="workList">
  <!-- modal start -->
  <a class="button" href="#e-commerce${i+7}">
    <div class="imgBox">
      <img loading="lazy" src=${e} alt="电商作品">
    </div>
  </a>
  <div class="popup" id="e-commerce${i+7}">
    <div class="popup-inner">
      <div class="popup__fullSize">
        <img loading="lazy" src=${e} alt="电商作品">
      </div>
      <a class="popup__close" href="#work">X</a>
    </div>
  </div>`
});
fetch('https://v1.nocodeapi.com/evanapi/google_sheets/qWTHUWXJFlNMRjPPtabId=sheet1')
  .then(response => response.json())
  .then(data => console.log(data));
