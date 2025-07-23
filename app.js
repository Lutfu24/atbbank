const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
const creditDiv = document.querySelector(".credit-div");
const depositDiv = document.querySelector(".deposit-div");
const creditBtn = document.querySelector(".credit-btn");
const depositBtn = document.querySelector(".deposit-btn");
const btnpath1 = document.querySelectorAll(".btn-svg-path1");
const btnpath2 = document.querySelectorAll(".btn-svg-path2");
const priceInp = document.querySelector("#priceInp");
const priceMonthInp = document.querySelector("#priceMonthInp");
const creditInp = document.querySelector("#creditInp");
const monthInp = document.querySelector("#monthInp");
const procent = document.querySelector("#procent");
const monthPrice = document.querySelector("#monthPrice");

displayedCalcCredit();

function displayedCalcCredit() {
  creditDiv.classList.remove("hidden");
  creditDiv.classList.add("block");
  depositDiv.classList.add("hidden");
  creditBtn.style.backgroundColor = "#6f0bbb";
  creditBtn.style.color = "#fff";
  depositBtn.style.backgroundColor = "#F3F3F3";
  btnpath1.forEach((i) => (i.attributes.stroke.nodeValue = "white"));
  depositBtn.style.color = "#000";
  btnpath2.forEach((i) => (i.attributes.stroke.nodeValue = "black"));
}
function displayedCalcDeposit() {
  creditDiv.classList.remove("block");
  creditDiv.classList.add("hidden");
  depositDiv.classList.remove("hidden");
  depositBtn.style.backgroundColor = "#6f0bbb";
  depositBtn.style.color = "#fff";
  creditBtn.style.backgroundColor = "#F3F3F3";
  btnpath1.forEach((i) => (i.attributes.stroke.nodeValue = "black"));
  creditBtn.style.color = "#000";
  btnpath2.forEach((i) => (i.attributes.stroke.nodeValue = "white"));
}
function getPriceInpValue() {
  creditInp.value = priceInp.value;
  const k = creditInp.value;
  const f = (procent.innerHTML * monthInp.value) / 12 / (monthInp.value * 100);
  const p = Math.round((k * f) / (1 - (1 + f) ** -monthInp.value));
  monthPrice.innerHTML = `${p}<span class="text-[1.5rem] font-normal text-black">
                  ₼</span`;
}
function getMonthInpValue() {
  monthInp.value = priceMonthInp.value;
  if (priceMonthInp.value > 12) {
    procent.innerHTML = `15`;
  }
  if (priceMonthInp.value > 24) {
    procent.innerHTML = `16`;
  }
  if (priceMonthInp.value > 36) {
    procent.innerHTML = `17`;
  }
  if (priceMonthInp.value < 12) {
    procent.innerHTML = `11`;
  }
  const k = creditInp.value;
  const f = (procent.innerHTML * monthInp.value) / 12 / (monthInp.value * 100);
  const p = Math.round((k * f) / (1 - (1 + f) ** -monthInp.value));
  monthPrice.innerHTML = `${p}<span class="text-[1.5rem] font-normal text-black">
                  ₼</span`;
  monthInp.value = `${
    Math.trunc(priceMonthInp.value / 12) > 0
      ? Math.trunc(priceMonthInp.value / 12) +
        " il " +
        (priceMonthInp.value - 12)
      : monthInp.value
  }`;
  monthInp.value = `${
    Math.trunc(priceMonthInp.value / 12) > 1
      ? Math.trunc(priceMonthInp.value / 12) +
        " il " +
        (priceMonthInp.value - 24)
      : monthInp.value
  }`;
  monthInp.value = `${
    Math.trunc(priceMonthInp.value / 12) > 2
      ? Math.trunc(priceMonthInp.value / 12) +
        " il " +
        (priceMonthInp.value - 36)
      : monthInp.value
  }`;
  monthInp.value = `${
    Math.trunc(priceMonthInp.value / 12) > 3
      ? Math.trunc(priceMonthInp.value / 12) +
        " il " +
        (priceMonthInp.value - 48)
      : monthInp.value
  }`;
}

const azn = 1;
const usd = 1.7025;
const eur = 1.997;
const gbp = 2.296;

function calcPrice() {
  const fromInp = document.querySelector("#fromInp");
  const toInp = document.querySelector("#toInp");
  const fromSel = document.querySelector("#fromSel");
  const toSel = document.querySelector("#toSel");
  if (fromSel.value == "azn") {
    toInp.value = Number(
      fromInp.value /
        (toSel.value == "usd"
          ? usd
          : toSel.value == "eur"
          ? eur
          : toSel.value == "gbp"
          ? gbp
          : azn)
    ).toFixed(2);
  }
  if (fromSel.value == "usd") {
    toInp.value = Number(
      fromInp.value *
        (toSel.value == "azn"
          ? usd
          : toSel.value == "eur"
          ? usd / eur
          : toSel.value == "gbp"
          ? usd / gbp
          : azn)
    ).toFixed(2);
  }
  if (fromSel.value == "eur") {
    toInp.value = Number(
      fromInp.value *
        (toSel.value == "usd"
          ? eur / usd
          : toSel.value == "azn"
          ? eur
          : toSel.value == "gbp"
          ? eur / gbp
          : azn)
    ).toFixed(2);
  }
  if (fromSel.value == "gbp") {
    toInp.value = Number(
      fromInp.value *
        (toSel.value == "usd"
          ? gbp / usd
          : toSel.value == "eur"
          ? gbp / eur
          : toSel.value == "azn"
          ? gbp
          : azn)
    ).toFixed(2);
  }
}
const language = document.querySelector(".language");
let flag = false;
function getLang(e) {
  flag = !flag;
  if (flag) {
    e.target.style.backgroundColor = "white";
    e.target.style.border = "1px solid #791CBF";
    e.target.style.borderBottom = "none";
    e.target.style.borderBottomLeftRadius = "0";
    e.target.style.borderBottomRightRadius = "0";
    e.target.style.paddingBottom = "2px";
    language.style.display = "block";
    language.style.borderTop = "none";
  } else {
    language.style.display = "none";
    e.target.style.backgroundColor = "transparent";
    e.target.style.border = "1px solid #791CBF";
    e.target.style.borderBottom = "1px solid #791CBF";
    e.target.style.borderBottomLeftRadius = "8px";
    e.target.style.borderBottomRightRadius = "8px";
    e.target.style.paddingBottom = "7px";
  }
}

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const lin4 = document.querySelector(".lin4");
const menu = document.querySelector(".menu");
function getMenu() {
  line1.style.fontSize = 0;
  line2.style.fontSize = 0;
  line3.style.fontSize = 0;
  line1.style.transition = "3s";
  line2.style.transition = "2s";
  line3.style.transition = "1s";
  lin4.style.fontSize = "3rem";
  lin4.style.transition = "2s";
  menu.style.width = "100vw";
  menu.style.transition = "width 0.5s";
}
function outMenu() {
  lin4.style.fontSize = "0rem";
  lin4.style.transition = "2s";
  line1.style.fontSize = "3rem";
  line2.style.fontSize = "3rem";
  line3.style.fontSize = "3rem";
  line1.style.transition = "3s";
  line2.style.transition = "2s";
  line3.style.transition = "1s";
  menu.style.width = "0vw";
  menu.style.transition = "width 0.5s";
}
