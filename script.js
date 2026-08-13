alert("JS WORKING");document.getElementById("whitepaperBtn").addEventListener("click", function () {
  alert("Freedom Finance Whitepaper — Coming Soon");
});const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("active");
    });
  });
}const copyContract = document.getElementById("copyContract");

if (copyContract) {
  copyContract.addEventListener("click", function () {

    const address = document.getElementById("contractAddress").textContent.trim();

    if (address === "COMING SOON") {
      alert("Official Solana mint address will be added after launch.");
      return;
    }

    navigator.clipboard.writeText(address);
    alert("Contract address copied.");
  });
}document.querySelectorAll('a[href="#how-to-buy"]').forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const section = document.getElementById("how-to-buy");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.remove("active");
    }
  });
});