let perBtns = document.querySelectorAll(".select-tip > div button");
let input = document.querySelector(".select-tip > div input");
let billInput = document.querySelector(".bill input");
let numInput = document.querySelector(".people-num input");
let calcBtn = document.querySelector(".tip-sec button");
let perTip = document.querySelector(".tip-amount .num span");
let totalPerTip = document.querySelector(".total-tip-amount .num span");

perBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    perBtns.forEach((b) => {
      b.classList.remove("select");
    });
    input.value = "";
    e.target.classList.add("select");
  });
});

input.onfocus = function () {
  perBtns.forEach((b) => {
    b.classList.remove("select");
  });
};

calcBtn.addEventListener("click", (e) => {
  perBtns.forEach((btn) => {
    if (
      btn.classList.contains("select") &&
      numInput.value != "" &&
      billInput.value != ""
    ) {
      let personTip =
        (parseInt(billInput.value) * parseInt(btn.textContent)) / 100;
      perTip.textContent = "";
      perTip.textContent = personTip.toFixed(2);
      let total = personTip * parseInt(numInput.value);
      totalPerTip.textContent = "";
      totalPerTip.textContent = total.toFixed(2);
      if (perTip.textContent == "NaN" || totalPerTip.textContent == "NaN") {
        perTip.textContent = "0.00";
        totalPerTip.textContent = "0.00";
        billInput.value = "Put A Valid Number";
        numInput.value = "Put A Valid Number";
      }
    } else if (
      input.value != "" &&
      numInput.value != "" &&
      billInput.value != ""
    ) {
      let personTip = (parseInt(billInput.value) * parseInt(input.value)) / 100;
      perTip.textContent = "";
      perTip.textContent = personTip.toFixed(2);
      let total = personTip * parseInt(numInput.value);
      totalPerTip.textContent = "";
      totalPerTip.textContent = total.toFixed(2);
      if (perTip.textContent == "NaN" || totalPerTip.textContent == "NaN") {
        perTip.textContent = "0.00";
        totalPerTip.textContent = "0.00";
        billInput.value = "Put A Valid Number";
        numInput.value = "Put A Valid Number";
      }
    }
  });
});
