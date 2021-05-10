async function getUpcomingEvents(index) {
  let data = await (
    await fetch("https://spacelaunchnow.me/api/ll/2.2.0/event/upcoming/?format=json")
  ).json();

  if (index && Math.ceil(data.count / 10) > index) {
    data = await (
      await fetch(
        `https://spacelaunchnow.me/api/ll/2.2.0/event/upcoming/?format=json&limit=10&offset=${
          index * 10
        }`
      )
    ).json();
  }
}

async function getPastEvents(index) {
  let data = await (
    await fetch("https://spacelaunchnow.me/api/ll/2.2.0/event/previous/?format=json")
  ).json();

  if (index && Math.ceil(data.count / 10) > index) {
    data = await (
      await fetch(
        `https://spacelaunchnow.me/api/ll/2.2.0/event/previous/?format=json&limit=10&offset=${
          index * 10
        }`
      )
    ).json();
  }
}

async function getUpcomingLaunches(index) {
  let data = await (
    await fetch("https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?format=json")
  ).json();

  if (index && Math.ceil(data.count / 10) > index) {
    data = await (
      await fetch(
        `https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?format=json&limit=10&offset=${
          index * 10
        }`
      )
    ).json();
  }

  console.log(data);
}

async function getPastLaunches(index) {
  let data = await (
    await fetch("https://spacelaunchnow.me/api/ll/2.2.0/launch/previous/?format=json")
  ).json();

  if (index && Math.ceil(data.count / 10) > index) {
    data = await (
      await fetch(
        `https://spacelaunchnow.me/api/ll/2.2.0/launch/previous/?format=json&limit=10&offset=${
          index * 10
        }`
      )
    ).json();
  }
}

function scrollIn(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
}

function isInView(elem) {
  let $elem = $(elem);

  let scrollElem = navigator.userAgent.toLowerCase().indexOf("webkit") != -1 ? "body" : "html";
  let viewportTop = $(scrollElem).scrollTop();
  let viewportBottom = viewportTop + $(window).height();

  let elemTop = Math.round($elem.offset().top);
  let elemBottom = elemTop + $elem.height();

  return elemTop + 300 < viewportBottom && elemBottom > viewportTop;
}

function checkAnimation() {
  var $elem = $("#what-we-do");

  if ($elem.hasClass("trigger-anim")) return;

  if (isInView($elem)) $elem.addClass("trigger-anim");
}

$(window).scroll(() => {
  checkAnimation();
});

function triggerMenu() {
  if (document.getElementById("hamburger").classList.contains("is-active")) {
    document.getElementById("hamburger").classList.remove("is-active");
  } else {
    document.getElementById("hamburger").classList.add("is-active");
  }

  if (document.getElementById("menu-wrapper").style.right == "0px") {
    document.getElementById("menu-wrapper").style.right =
      -document.getElementById("menu-wrapper").scrollWidth + "px";
  } else {
    document.getElementById("menu-wrapper").style.right = 0 + "px";
  }
}

function initComponents() {
  document.getElementById("menu-wrapper").classList.add("notransition");

  document.getElementById("menu-wrapper").style.right =
    -document.getElementById("menu-wrapper").scrollWidth + "px";

  document.getElementById("menu-wrapper").offsetHeight;
  document.getElementById("menu-wrapper").classList.remove("notransition");
}

window.addEventListener("click", function (e) {
  if (
    !document.getElementById("hamburger").contains(e.target) &&
    !document.getElementById("menu-wrapper").contains(e.target)
  ) {
    document.getElementById("menu-wrapper").style.right =
      -document.getElementById("menu-wrapper").scrollWidth + "px";

    document.getElementById("hamburger").classList.remove("is-active");
  }
});
