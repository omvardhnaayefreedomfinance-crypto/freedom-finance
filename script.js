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
});/* =========================================
   MEMBER HELP SYSTEM
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const helpDialog = document.getElementById("memberHelpDialog");
  const closeHelp = document.getElementById("closeMemberHelp");

  const helpTitle = document.getElementById("memberHelpTitle");
  const helpIcon = document.getElementById("memberHelpIcon");
  const helpContent = document.getElementById("memberHelpContent");

  const helpCards = document.querySelectorAll(".member-help-card");


  const helpData = {

    support: {

      title: "Support",

      icon: "☎",

      content: `
        <div class="help-content-box">

          <h4>General Member Assistance</h4>

          <p>
            Members can contact the Freedom Finance support team
            for general account and member-related assistance.
          </p>

        </div>

        <div class="help-content-box">

          <h4>Support Topics</h4>

          <ul class="help-list">
            <li>Member account assistance</li>
            <li>Registration related help</li>
            <li>Account information</li>
            <li>General project queries</li>
            <li>Community related assistance</li>
          </ul>

        </div>

        <a
          href="https://wa.me/918708161938"
          target="_blank"
          rel="noopener noreferrer"
          class="help-whatsapp">
          💬 Contact Support on WhatsApp
        </a>
      `
    },


    investment: {

      title: "Investment Information",

      icon: "₹",

      content: `
        <div class="help-content-box">

          <h4>Investment Information</h4>

          <p>
            Members can check the available plans and
            investment-related information from the member area.
          </p>

        </div>

        <div class="help-content-box">

          <h4>Available Information</h4>

          <ul class="help-list">
            <li>Investment plans</li>
            <li>Plan duration</li>
            <li>Investment amount</li>
            <li>Payment process</li>
            <li>UTR / transaction submission</li>
            <li>Transaction status</li>
          </ul>

        </div>

        <a
          href="plans.html"
          class="help-whatsapp">
          📋 View Investment Plans
        </a>
      `
    },


    withdrawal: {

      title: "Withdrawal Assistance",

      icon: "↗",

      content: `
        <div class="help-content-box">

          <h4>Withdrawal Process</h4>

          <p>
            Members can submit a withdrawal request through
            the member dashboard when the withdrawal feature
            is available for their account.
          </p>

        </div>

        <div class="help-content-box">

          <h4>Withdrawal Information</h4>

          <ul class="help-list">
            <li>Enter withdrawal amount</li>
            <li>Select Bank Transfer or UPI</li>
            <li>Enter required payment details</li>
            <li>Submit withdrawal request</li>
            <li>Check withdrawal status in transactions</li>
          </ul>

        </div>

        <a
          href="withdraw.html"
          class="help-whatsapp">
          ↗ Open Withdrawal Page
        </a>
      `
    },


    technical: {

      title: "Technical Help",

      icon: "⚙",

      content: `
        <div class="help-content-box">

          <h4>Website & Technical Support</h4>

          <p>
            Technical assistance is available for common
            website and member-area problems.
          </p>

        </div>

        <div class="help-content-box">

          <h4>Technical Issues</h4>

          <ul class="help-list">
            <li>Signup problem</li>
            <li>Login problem</li>
            <li>Password related issue</li>
            <li>Dashboard not opening</li>
            <li>Payment page issue</li>
            <li>Transaction page issue</li>
            <li>Withdrawal page issue</li>
          </ul>

        </div>

        <a
          href="https://wa.me/918168173066"
          target="_blank"
          rel="noopener noreferrer"
          class="help-whatsapp">
          💬 Technical Support on WhatsApp
        </a>
      `
    }

  };


  /* OPEN POPUP */

  helpCards.forEach(function (card) {

    card.addEventListener("click", function () {

      const type = card.getAttribute("data-help");

      const data = helpData[type];

      if (!data) return;

      helpTitle.textContent = data.title;

      helpIcon.textContent = data.icon;

      helpContent.innerHTML = data.content;

      helpDialog.showModal();

    });

  });


  /* CLOSE POPUP */

  closeHelp.addEventListener("click", function () {

    helpDialog.close();

  });

});
