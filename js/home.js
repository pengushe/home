// This class is not used in index.html. This class is just simple a backup all the js code.
//导航高亮
$(".nav-container a").click(function () {
  // $(this).parents("li").addClass("active");
  // $(this).parents("li").siblings().removeClass("active");
  var boo1 = $(this).parents("ul").hasClass("nav-xl-ul");
  if (boo1) {
    $(".nav-xl-ul").slideUp(300);
    $(".nav-xl").removeClass("nav-xl-m");
  }
  $("body,html").animate({ scrollTop: $($(this).attr("href")).offset().top - 80 }, 300);
});
// 作品
$(".works-nav li").click(function () {
  var x = $(this).index();
  $(this).addClass("current").siblings("li").removeClass("current");
  $(".works-container .works-img").fadeOut();
  $(".works-container .works-img").eq(x).fadeIn();
});
//导航点击slideup
$(".nav-xl").bind("click", function () {
  isok();
});
$(window).scroll(function () {
  pagescroll();
});
function pagescroll() {
  var top1 = $(".contain1").offset().top - 180;
  var top2 = $(".contain2").offset().top - 180;
  var top3 = $(".contain3").offset().top - 180;
  var top4 = $(".contain4").offset().top - 180;
  var top5 = $(".contain5").offset().top - 180;
  var top6 = $(".contain6").offset().top - 180;
  //页面滚动
  $(window).scroll(function () {
    var s = $(window).scrollTop();
    s > top1 ? $(".nav-container").addClass("fixed") : $(".nav").removeClass("fixed");
    if (s >= top1 && s <= top2) {
      $(".nav li").eq(0).addClass("active").siblings().removeClass("active");
    }
    else if (s >= top2 && s < top3) {
      $(".nav li").eq(1).addClass("active").siblings().removeClass("active");
    }
    else if (s >= top3 && s < top4) {
      $(".nav li").eq(2).addClass("active").siblings().removeClass("active");
    }
    else if (s >= top4 && s < top5) {
      $(".nav li").eq(3).addClass("active").siblings().removeClass("active");
    }
    else if (s >= top5 && s < top6) {
      $(".nav li").eq(4).addClass("active").siblings().removeClass("active");
    }
    else if (s >= top6) {
      $(".nav li").eq(5).addClass("active").siblings().removeClass("active");
    }
  });
}
function isok() {
  if (true) {
    onOff = false;
    $(".nav-xl").toggleClass("nav-xl-m");
    $(".nav-xl-ul").slideToggle(300);
  }
  else {
    onOff = true;
    $(".nav-xl").toggleClass("nav-xl-m");
    $(".nav-xl-ul").slideToggle(300);
  }
}
ispcmobile();
function ispcmobile() {
  var wid = $(window).width();
  if (wid > 768) {
    $(".nav-container ul").removeClass("nav-xl-ul").show();
  }
  else {
    $(".nav-container ul").addClass("nav-xl-ul").hide();
    $(".nav-xl").removeClass("nav-xl-m");
  }
}
$(window).resize(function () {
  ispcmobile();
});
$("#met-weixin").bind("click", function () {
  $("#met-weixin-content").toggleClass("hide");
});