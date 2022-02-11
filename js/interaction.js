let toggleSign = document.getElementById("menu");
document.getElementById("open").addEventListener("click", function () {
  toggleSign.style.right = "0";
});
document.getElementById("close").addEventListener("click", function () {
  toggleSign.style.right = "-100%";
});
// -------------------------------------------------------------------------------------------- MENU DROPDOWN
// ------------------------------------------------ MENU DISPLAY & ICON ROTATION for #nft #contact #social
// document.querySelector(".menu__call").addEventListener("click", function () {
//   let callCondition = document.querySelector(".menu__antifirst");
//   let callCheck = document.querySelectorAll(".menu__antifirst");
//   for (let i = 0; i < callCheck.length; i++) {
//     if (callCondition.style.display === "none") {
//       callCondition.style.display = "block";
//       this.style.transform = "rotate(-180deg)";
//     } else {
//       callCondition.style.display = "none";
//       this.style.transform = "rotate(0deg)";
//     }
//   }
// });
$(document).ready(function () {
  $("#menu ul li .menu__call").click(function (e) {
    e.preventDefault();
    let menuChild = $(this).parent("li").find(".menu__antifirst");
    menuChild.toggleClass("show");
    let arrowBtn = $(this).find(".menu-image");
    arrowBtn.toggleClass("rotate");
  });
});
// ------------------------------------------------ ABOUT
document.getElementById("about").addEventListener("click", function () {
  let aboutCondition = document.getElementById("about-list");
  let aboutImage = document.getElementById("about-image");
  if (aboutCondition.style.display === "block") {
    document.getElementById("about-list").style.display = "none";
    aboutImage.style.transform = "rotate(0deg)";
  } else {
    document.getElementById("about-list").style.display = "block";
    aboutImage.style.transform = "rotate(-180deg)";
  }
});
// ------------------------------------------------ NFT
// document.getElementById("nft").addEventListener("click", function () {
//   let nftCondition = document.getElementById("nft-list").style.display;
//   if (nftCondition === "none") {
//     document.getElementById("nft-list").style.display = "block";
//     this.style.transform = "rotate(-180deg)";
//   } else {
//     document.getElementById("nft-list").style.display = "none";
//     this.style.transform = "rotate(0deg)";
//   }
// });

// ------------------------------------------------ CONTACT
// document.getElementById("contact").addEventListener("click", function () {
//   let contactCondition = document.getElementById("contact-list").style.display;
//   if (contactCondition === "none") {
//     document.getElementById("contact-list").style.display = "block";
//     this.style.transform = "rotate(-180deg)";
//   } else {
//     document.getElementById("contact-list").style.display = "none";
//     this.style.transform = "rotate(0deg)";
//   }
// });

// ------------------------------------------------ SOCIAL
// document.getElementById("social").addEventListener("click", function () {
//   let socialCondition = document.getElementById("social-list").style.display;
//   if (socialCondition === "none") {
//     document.getElementById("social-list").style.display = "block";
//     this.style.transform = "rotate(-180deg)";
//   } else {
//     document.getElementById("social-list").style.display = "none";
//     this.style.transform = "rotate(0deg)";
//   }
// });
