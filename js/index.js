document.querySelectorAll(".menu__link").forEach(item => {
  item.addEventListener("click", function () {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".dropdown-menu");

    document.querySelectorAll(".menu__link").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });

    document.querySelectorAll(".dropdown-menu").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-list--item");
      }
    })
    dropdown.classList.toggle("active-list--item");
    btn.classList.toggle("active--btn")
  })
})

document.addEventListener("click", function (e) {
  let target = e.target;
  if (!target.closest(".menu")) {
    document.querySelectorAll(".dropdown-menu").forEach(el => {
      el.classList.remove("active-list--item");
    })
    document.querySelectorAll(".menu__link").forEach(el => {
      el.classList.remove("active--btn");
    });
  }
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger-menu').classList.toggle('is-active')
    document.querySelector('.burger').classList.toggle('burger--active')
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.search-btn').addEventListener('click', function () {
    document.querySelector('.searchbox').classList.toggle('searchbox-active')
    document.querySelector('.search-btn').classList.toggle('search--active')
  })
})

const swiper = new Swiper('.swiper-hero', {
  // Optional parameters
  autoplay: {
    delay: 5000,
  },
  effect: "fade"
});

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false
});

let gallerySlider = new Swiper(".swiper-gallery", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2
  },
  spaceBetween: 30,
  pagination: {
    el: ".gallery__btns-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__btns-next",
    prevEl: ".gallery__btns-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },

    460: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },
});

let swiperSlides = document.querySelector(".gallery").querySelectorAll(".gallery__swiper-slide");
let modal = document.querySelector(".gallery-modal");
let modalBtn = modal.querySelector(".close");
swiperSlides.forEach(el => {
  el.addEventListener("click", function() {
    let img = this.querySelector("img");
    let link = img.getAttribute("src");
    console.log(modal.querySelector("img"));
    animation(modal, "modal-active", "play");
    modal.querySelector("img").setAttribute("src", link);
  })
})
modalBtn.addEventListener("click", function() {
  animation(modal, "modal-active", "reverse");
});

function animation(el, Class, flag) {
  if (flag === "play") {
    el.style.display = "flex";
    setTimeout(function() {
      el.classList.add(Class);
    }, 50)
  } else if (flag === "reverse") {
    el.classList.remove(Class);
    setTimeout(function() {
      el.style.display = "none";
    }, 700)
  }
}

$("#accordion").accordion({
  collapsible: true,
  heightStyle: "content",
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs-nav__link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {

      event.preventDefault();

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tabs-item').forEach(function (tabContent) {
        tabContent.classList.remove('tabs-item--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active')

      document.querySelectorAll('.tabs-nav__link').forEach(function (stepBtn) {
        stepBtn.classList.remove('tabs-nav__link--active')
        event.currentTarget.classList.add('tabs-nav__link--active')
      })
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs-nav-adaptive__link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {

      event.preventDefault();

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tabs-item').forEach(function (tabContent) {
        tabContent.classList.remove('tabs-item--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active')

      document.querySelectorAll('.tabs-nav-adaptive__link').forEach(function (stepBtn) {
        stepBtn.classList.remove('tabs-nav-adaptive__link--active')
        event.currentTarget.classList.add('tabs-nav__link--active')
      })
    })
  })
})

let eventsSlider = new Swiper(".swiper-events", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".events__swiper-next",
    prevEl: ".events__swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },

    460: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    992: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 27
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },
});

let projectsSlider = new Swiper(".swiper-projects", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-projects-next",
    prevEl: ".swiper-button-projects-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },

    600: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 33
    },

    800: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    },


    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },
})

ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {

    center: [55.75991540904716, 37.613766853588466],
    zoom: 14.2
  });
  var myPlacemark = new ymaps.Placemark([55.75991540904716, 37.613766853588466], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'subtract.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0]
  });
  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);

  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('scrollZoom');
}

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+ 7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: 'Как вас зовут?',
      minLength: 2,
      maxLength: 20
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel: 'Недопустимый формат',
  },
  colorWrong: '#D11616'
});

tippy('.tooltip-one', {
  content: 'Пример современных тенденций - современная методология разработки!',
  theme: 'tooltip',
});

tippy('.tooltip-two', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'tooltip',
});

tippy('.tooltip-three', {
  content: 'В стремлении повысить качество',
  theme: 'tooltip',
});
