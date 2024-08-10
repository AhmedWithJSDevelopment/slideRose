const loveMe = document.getElementById("loveMe");
const noButton = document.getElementById("no");

noButton.addEventListener("click", function() {
  loveMe.style.display = "none";
});

const yesButton = document.getElementById("yes");
yesButton.addEventListener("click", function() {
  alert("Thank you!");
  loveMe.style.display = "none";
});
noButton.addEventListener("click", function() {
    loveMe.style.left = "-9999px";
  });
  yesButton.addEventListener("click", function() {
    alert("Thank you!");
    loveMe.style.left = "0";
  });