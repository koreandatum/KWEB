let moveToTop = function () {
    document.body.scrollIntoView({ behavior: "smooth" });
  };

let Applex = 0;
let Orangex = 0;
let Lemonx = 0;
let total = 0;

let AppleCart = function () {
  Applex += 1;
  total += 700
  document.getElementById("appleCount").innerText = " Apple: " + Applex + " ";
  document.getElementById("price").innerText = "Total Price: " + total + " KRW";
};

let OrangeCart = function () {
  Orangex += 1;
  total += 800
  document.getElementById("orangeCount").innerText = " Orange: " + Orangex + " ";
  document.getElementById("price").innerText = "Total Price: " + total + " KRW";
};

let LemonCart = function () {
  Lemonx += 1;
  total += 900
  document.getElementById("lemonCount").innerText = " Lemon: " + Lemonx + " ";
  document.getElementById("price").innerText = "Total Price: " + total + " KRW";
};