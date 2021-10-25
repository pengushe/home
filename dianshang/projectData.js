// 电商作品
//fetch data from API
// const titles = '';
// const authors= '';
// const imagePath = '';
// const productID = 0;
(async () => {
  const data = await axios
    .get(
      "https://myblogexpress-5g5un7us668f0ddc-1306452037.ap-shanghai.service.tcloudbase.com/api/v1.0/avatar"
    )
    .then((res) => res.data.data);
  const names = data.map((product) => product.name);
  const descriptions = data.map((product) => product.description);
  const avatars = data.map((product) => product.avatar);

  const placeToAddProfile = document.getElementById("addProfile");

  avatars.forEach((avatar, index) => {
    return placeToAddProfile.innerHTML += placeToAddString(avatar, index);
  });
  
  function placeToAddString(avatar, index) {
    return (
      `	<div class="col-md-3 col-xs-6 designer-list">
      <div class=designer-img>
        <img loading=lazy src=${avatar} alt=avatar>
      </div>
      <div class=designer-info>
        <h2>${names[index]}</h2>
        <p>${descriptions[index]}</p>
      </div>
    </div>`
    );
  }
})();
(async () => {
  const data = await axios
    .get(
      "https://myblogexpress-5g5un7us668f0ddc-1306452037.ap-shanghai.service.tcloudbase.com/api/v1.0/image_database"
    )
    .then((res) => res.data.data);
  const authors = data.map((product) => product.author);
  const titles = data.map((product) => product.title);
  const imagePaths = data.map((product) => product.ImagePath);

  // image_optimization only in cloudinary
  //for (let i = 0; i < imagePaths.length; i++) {
  //  imagePaths[i] = imagePaths[i].replace('upload/', 'upload/q_auto/');
  //}
  const placeToAdd1 = document.getElementById("addEcommerceProjects");
  const placeToAdd2 = document.getElementById("addPosters");
  const placeToAdd3 = document.getElementById("addLogo");
  const placeToAdd4 = document.getElementById("addWeb");
  const placeToAdd5 = document.getElementById("addNameCard");
  const placeToAdd6 = document.getElementById("addPackingImage");
  const placeToAdd7 = document.getElementById("addPeriodical");
  const placeToAdd8 = document.getElementById("addStudioImage");

  console.log(imagePaths);
  titles.forEach((title, i) => {
    if (title === "电商") {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return (placeToAdd1.innerHTML += placeToAddString(e, j));
        }
      });
    } else if (title === "海报") {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return (placeToAdd2.innerHTML += placeToAddString(e, j));
        }
      });
    } else if (title === "logo") {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return (placeToAdd3.innerHTML += placeToAddString(e, j));
        }
      });
    } else if (title === "网页") {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return (placeToAdd4.innerHTML += placeToAddString(e, j));
        }
      });
    } else if (title === "名片") {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return (placeToAdd5.innerHTML += placeToAddString(e, j));
        }
      });
    } else if (title === "产品包装") {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return (placeToAdd6.innerHTML += placeToAddString(e, j));
        }
      });
    } else if (title === "期刊") {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return (placeToAdd7.innerHTML += placeToAddString(e, j));
        }
      });
    } else if (title === "影楼") {
      imagePaths.filter(function (e, j) {
        if (i === j) {
          return (placeToAdd8.innerHTML += placeToAddString(e, j));
        }
      });
    }
    function placeToAddString(e, num) {
      return (
        "" +
        `<div class="workList">
      <!-- modal start -->
      <a class="button" href="#${title}${num + 7}">
        <div class="imgBox">
          <img loading="lazy" src=${e} alt=${title}>
        </div>
      </a>
      <div class="popup" id="${title}${num + 7}">
        <div class="popup-inner">
          <div class="popup__fullSize">
            <img loading="lazy" src=${e} alt=${title}>
          </div>
          <a class="popup__close" href="#work">X</a>
        </div>
      </div>`
      );
    }
  });
})();

(async () => {
  const data = await axios
    .get(
      "https://myblogexpress-5g5un7us668f0ddc-1306452037.ap-shanghai.service.tcloudbase.com/api/v1.0/video_database"
    )
    .then((res) => res.data.data);
  const authors = data.map((product) => product.author);
  const videoPaths = data.map((product) => product.video);
  const authorImages = data.map((product) => product.authorImage);
  const types = data.map((product) => product.type);

  const placeToAddVideo = document.getElementById("addVideo");

  videoPaths.forEach((video, index) => {
    console.log(video.slice(0,-51));
    return placeToAddVideo.innerHTML += placeToAddString(video, index);
  });
  
  function placeToAddString(video, index) {
    return (
      `<div class="col-md-3 col-xs-6 text-center workList">
        <div class="imgBox">
          <!-- modal start -->
          <a class="work" href="#premiere${index + 8}" style="text-decoration: none; background-image: url(img/portfolio-1.jpg)">
            <div>
              <h3>${authors[index]}</h3>
              <div class="designer-img">
                <img class="rounded" src="${authorImages[index]}">
              </div>
            </div>
          </a>
          <div class="popup" id="premiere${index + 8}">
            <div class="popup-inner">
            <video class="video" controls>
            <source src="${video}"> Your browser does not support the video tag.
          </video>
          <a class="popup__close" href="#work" onclick="pauseVideo()">X</a>
            </div>
          </div>
          <!-- modal end -->
        </div>
      </div>`
    );
  }
})();
