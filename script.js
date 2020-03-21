const MENU = document.getElementById('menu');
const VERTPHONESCREEN = document.querySelector("body > div > main > section.slider > div > div.iphones > div.vertical > div");
const VERTPHONE = document.querySelector("body > div > main > section.slider > div > div.iphones > div.vertical > img.vertical-iphone-icon");
const HORPHONESCREEN = document.querySelector("body > div > main > section.slider > div > div.iphones > div.horizontal > div");
const HORPHONE = document.querySelector("body > div > main > section.slider > div > div.iphones > div.horizontal > img.horizontal-iphone-icon");
const TAGS = document.querySelector("#portfolio > div > div.tags.tags");
const FORM = document.querySelector("#get-a-quote > div > div.contact-columns > div.contact_form > form");
const BUTTON = document.getElementById('send-button');
const CLOSE_BUTTON = document.getElementById('close-button');
//----------------------MENU-------------------//

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('menu-active'));
  event.target.classList.add('menu-active');
})

document.addEventListener('scroll', onScroll);
function onScroll(event) {
  const curPos = window.scrollY + 120;
  const divs = document.querySelectorAll('main > section');
  const links = document.querySelectorAll('#menu>li>a');

  divs.forEach((el) => {
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
      links.forEach((a) => {
        a.classList.remove('menu-active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('menu-active');
        }
      })
    }
  });
}

//----------------------SLIDER-----------------//
let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('active', direction);
  });
};

function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true; 
  });
};

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

document.querySelector('.control.left').addEventListener('click', function() {
  if (isEnabled) {
    nextItem(currentItem);
  };
});

document.querySelector('.control.right').addEventListener('click', function() {
  if (isEnabled) {
    previousItem(currentItem);
  };
});
//----------------------SCREENS-----------------//
const VERT_BUTTON = document.querySelector("#slider > div > div > div.item-container > div.item.active > div > div.vert-button");
const VERT_OFF_SCREEN = document.querySelector("#slider > div > div > div.item-container > div.item.active > div > div.vert")
VERT_BUTTON.addEventListener('click', () => {
  if (VERT_OFF_SCREEN.classList.contains('dark') === false) {
    VERT_OFF_SCREEN.classList.add('dark');
  } else {
    VERT_OFF_SCREEN.classList.remove('dark');
  };
});

const HORIZ_BUTTON = document.querySelector("#slider > div > div > div.item-container > div.item.active > div > div.horiz-button");
const HORIZ_OFF_SCREEN = document.querySelector("#slider > div > div > div.item-container > div.item.active > div > div.horiz")
HORIZ_BUTTON.addEventListener('click', () => {
  if (HORIZ_OFF_SCREEN.classList.contains('dark') === false) {
    HORIZ_OFF_SCREEN.classList.add('dark');
  } else {
    HORIZ_OFF_SCREEN.classList.remove('dark');
  };
});

//----------------------PORTFOLIO-----------------//
TAGS.addEventListener('click', (event) => {
  TAGS.querySelectorAll('span').forEach(el => el.classList.remove('tag_selected'));
  event.target.closest('span').classList.add('tag_selected');
});

//PICTURES----------------------------------------------------------------------------
let picture = document.getElementById('portfolioPictures');
picture.addEventListener('click', (event) => {
picture.querySelectorAll('li').forEach(el => el.classList.remove('selected_picture'));
event.target.closest('li').classList.add('selected_picture');
})

function shufflePics() {
  let list = document.getElementById('portfolioPictures');
  for (let i = list.children.length; i >= 0; i--) {
    list.appendChild(list.children[Math.random() * i | 0]);
  };
};

let allTag = document.querySelector("#tags > span:nth-child(1)");
let webDesignTag = document.querySelector("#tags > span:nth-child(2)");
let graphicdesignTag = document.querySelector("#tags > span:nth-child(3)");
let artworkTag = document.querySelector("#tags > span:nth-child(4)");
allTag.addEventListener('click', () => {
  shufflePics();
});
webDesignTag.addEventListener('click', () => {
  shufflePics();
});
graphicdesignTag.addEventListener('click', () => {
  shufflePics();
});
artworkTag.addEventListener('click', () => {
  shufflePics();
});

//END PICTURES------------------------------------------------------------------------
//FORM--------------------------------------------------------------------------------
function formReset() {
  document.getElementById('myForm').reset();
};

BUTTON.addEventListener('click', () => {
  const subject_field = document.getElementById('subject-field').value.toString();
  const textarea_field = document.getElementById('project-field').value.toString();
  if (subject_field.length !== 0) {
    document.getElementById('result-subject').innerText = 'Subject: ' + subject_field;
  } else {
    document.getElementById('result-subject').innerText = 'No subject';
  };
  if (textarea_field.length !== 0) {
    document.getElementById('result-description').innerText = 'Description: ' + textarea_field;
  } else {
    document.getElementById('result-description').innerText = 'No description';
  };
  document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', () => {
  document.getElementById('result-subject').innerText = '';
  document.getElementById('result-description').innerText = '';
  document.getElementById('name-field').innerText = '';
  document.getElementById('email-field').innerText = '';
  document.getElementById('message-block').classList.add('hidden');
  formReset();
});
