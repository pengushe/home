// 电商作品
//fetch data from API
// const titles = '';
// const authors= '';
// const imagePath = '';
// const productID = 0;
(async ()=> {
  const data = await axios.get('https://pengushe.herokuapp.com/products').then(res => res.data);
  const authors = data.map(product => product.author);
  const titles = data.map(product => product.title);
  const imagePaths = data.map(product => product.imagePath);
  console.log('authors: ', authors, 'images path: ', imagePaths);

  const ecommerce = imagePaths;
  const placeToAdd = document.getElementById('addEcommerceProjects');
  ecommerce.forEach(function (e, i) {
    return placeToAdd.innerHTML +=
      `<div class="workList">
    <!-- modal start -->
    <a class="button" href="#${titles}${i + 7}">
      <div class="imgBox">
        <img loading="lazy" src=${e} alt=${authors[i]}>
      </div>
    </a>
    <div class="popup" id="${titles}${i + 7}">
      <div class="popup-inner">
        <div class="popup__fullSize">
          <img loading="lazy" src=${e} alt=${authors[i]}>
        </div>
        <a class="popup__close" href="#work">X</a>
      </div>
    </div>`
  });
})();
