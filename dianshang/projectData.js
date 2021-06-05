// 电商作品
//fetch data from API
// const titles = '';
// const authors= '';
// const imagePath = '';
// const productID = 0;
(async () => {
  const data = await axios.get('https://pengushe.herokuapp.com/products').then(res => res.data);
  const authors = data.map(product => product.author);
  const titles = data.map(product => product.title);
  const imagePaths = data.map(product => product.imagePath);
  // console.log('authors: ', authors, 'titles: ', titles, 'images path: ', imagePaths);

  // image_optimization 
  for (let i = 0; i < imagePaths.length; i++) {
    imagePaths[i] = imagePaths[i].replace('upload/', 'upload/q_auto/');
  }
  const placeToAdd1 = document.getElementById('addEcommerceProjects');
  const placeToAdd2 = document.getElementById('addPosters');
  const placeToAdd3 = document.getElementById('addLogo');
  const placeToAdd4 = document.getElementById('addWeb');
  const placeToAdd5 = document.getElementById('addNameCard');
  const placeToAdd6 = document.getElementById('addPosters');
  const placeToAdd7 = document.getElementById('addPosters');
  const placeToAdd8 = document.getElementById('addPosters');

  console.log(imagePaths);
  titles.forEach((title, i) => {
    if (title === '电商') {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return placeToAdd1.innerHTML +=
            `<div class="workList">
          <!-- modal start -->
          <a class="button" href="#${title}${j + 7}">
            <div class="imgBox">
              <img loading="lazy" src=${e} alt=${authors[i]}>
            </div>
          </a>
          <div class="popup" id="${title}${j + 7}">
            <div class="popup-inner">
              <div class="popup__fullSize">
                <img loading="lazy" src=${e} alt=${authors[j]}>
              </div>
              <a class="popup__close" href="#work">X</a>
            </div>
          </div>`
        }
      });
    }
    else if (title === '海报' || title === '宣传海报') {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return placeToAdd2.innerHTML +=
            `<div class="workList">
          <!-- modal start -->
          <a class="button" href="#${title}${j + 7}">
            <div class="imgBox">
              <img loading="lazy" src=${e} alt=${authors[i]}>
            </div>
          </a>
          <div class="popup" id="${title}${j + 7}">
            <div class="popup-inner">
              <div class="popup__fullSize">
                <img loading="lazy" src=${e} alt=${authors[j]}>
              </div>
              <a class="popup__close" href="#work">X</a>
            </div>
          </div>`
        }
      });
    }
    else if (title === 'logo' || title === 'Logo设计' || title === 'LOGO' || 'LOGO设计') {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return placeToAdd3.innerHTML +=
            `<div class="workList">
          <!-- modal start -->
          <a class="button" href="#${title}${j + 7}">
            <div class="imgBox">
              <img loading="lazy" src=${e} alt=${authors[i]}>
            </div>
          </a>
          <div class="popup" id="${title}${j + 7}">
            <div class="popup-inner">
              <div class="popup__fullSize">
                <img loading="lazy" src=${e} alt=${authors[j]}>
              </div>
              <a class="popup__close" href="#work">X</a>
            </div>
          </div>`
        }
      });
    }
    else if (title === '网页') {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return placeToAdd4.innerHTML +=
            `<div class="workList">
          <!-- modal start -->
          <a class="button" href="#${title}${j + 7}">
            <div class="imgBox">
              <img loading="lazy" src=${e} alt=${authors[i]}>
            </div>
          </a>
          <div class="popup" id="${title}${j + 7}">
            <div class="popup-inner">
              <div class="popup__fullSize">
                <img loading="lazy" src=${e} alt=${authors[j]}>
              </div>
              <a class="popup__close" href="#work">X</a>
            </div>
          </div>`
        }
      });
    }
    else if (title === '名片') {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return placeToAdd5.innerHTML +=
            `<div class="workList">
          <!-- modal start -->
          <a class="button" href="#${title}${j + 7}">
            <div class="imgBox">
              <img loading="lazy" src=${e} alt=${authors[i]}>
            </div>
          </a>
          <div class="popup" id="${title}${j + 7}">
            <div class="popup-inner">
              <div class="popup__fullSize">
                <img loading="lazy" src=${e} alt=${authors[j]}>
              </div>
              <a class="popup__close" href="#work">X</a>
            </div>
          </div>`
        }
      });
    }
    else if (title === '产品包装') {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return placeToAdd6.innerHTML +=
            `<div class="workList">
          <!-- modal start -->
          <a class="button" href="#${title}${j + 7}">
            <div class="imgBox">
              <img loading="lazy" src=${e} alt=${authors[i]}>
            </div>
          </a>
          <div class="popup" id="${title}${j + 7}">
            <div class="popup-inner">
              <div class="popup__fullSize">
                <img loading="lazy" src=${e} alt=${authors[j]}>
              </div>
              <a class="popup__close" href="#work">X</a>
            </div>
          </div>`
        }
      });
    }
    else if (title === '期刊') {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return placeToAdd7.innerHTML +=
            `<div class="workList">
          <!-- modal start -->
          <a class="button" href="#${title}${j + 7}">
            <div class="imgBox">
              <img loading="lazy" src=${e} alt=${authors[i]}>
            </div>
          </a>
          <div class="popup" id="${title}${j + 7}">
            <div class="popup-inner">
              <div class="popup__fullSize">
                <img loading="lazy" src=${e} alt=${authors[j]}>
              </div>
              <a class="popup__close" href="#work">X</a>
            </div>
          </div>`
        }
      });
    }
    else if (title === '影楼') {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return placeToAdd8.innerHTML +=
            `<div class="workList">
          <!-- modal start -->
          <a class="button" href="#${title}${j + 7}">
            <div class="imgBox">
              <img loading="lazy" src=${e} alt=${authors[i]}>
            </div>
          </a>
          <div class="popup" id="${title}${j + 7}">
            <div class="popup-inner">
              <div class="popup__fullSize">
                <img loading="lazy" src=${e} alt=${authors[j]}>
              </div>
              <a class="popup__close" href="#work">X</a>
            </div>
          </div>`
        }
      });
    }
  })
})();
