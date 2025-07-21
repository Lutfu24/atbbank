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
  depositBtn.style.color = "#000";
}
function displayedCalcDeposit() {
  creditDiv.classList.remove("block");
  creditDiv.classList.add("hidden");
  depositDiv.classList.remove("hidden");
  depositBtn.style.backgroundColor = "#6f0bbb";
  depositBtn.style.color = "#fff";
  creditBtn.style.backgroundColor = "#F3F3F3";
  creditBtn.style.color = "#000";
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
  // monthInp.value = `${
  //   Math.trunc(priceMonthInp.value / 12) > 0
  //     ? Math.trunc(priceMonthInp.value / 12) + " il "
  //     : monthInp.value
  // }`;
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
