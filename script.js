// Mutable values
var touchValue = 1;
var multValue = 0;
var moneyValue = 0;
var multcont = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
};
var touchcont = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
};

// Imutable values
const additive = 0.25;

// Button to Win Money
btn.addEventListener("click", () => {
  moneyValue += touchValue;
  money.innerText = FormatValue(moneyValue);
});

// Infos Updater
setInterval(() => {
  moneyValue += multValue;
  money.innerText = FormatValue(moneyValue);
  mult.innerText = multValue.toFixed(2);
  touch.innerText = touchValue;
}, 1000);

// Checks if the (upgrade|helper|acheiviment) are available or not
setInterval(() => {
  let moneyRegex = parseInt(
    money.innerText
      .split(/[A-z\:]/)
      .join("")
      .split(/[R\$]/)
      .join("")
      .split(/[.][0-9]+$/)
      .join("")
      .split(/\,/)
      .join("")
      .trim()
  );

  for (let i = 0; i <= 5; i++) {
    let cost_helper = parseInt(
      document
        .getElementById(`cost_helper_${i}`)
        .innerText.split(/[A-z\:]/)
        .join("")
        .split(/[R\$]/)
        .join("")
        .split(/[.][0-9]+$/)
        .join("")
        .split(/\,/)
        .join("")
        .trim()
    );
    let cost_upgrade = parseInt(
      document
        .getElementById(`cost_upgrade_${i}`)
        .innerText.split(/[A-z\:]/)
        .join("")
        .split(/[R\$]/)
        .join("")
        .split(/[.][0-9]+$/)
        .join("")
        .split(/\,/)
        .join("")
        .trim()
    );
    // let moneyRegex = parseInt(
    //   money.innerText
    //     .split(/[A-z\:]/)
    //     .join("")
    //     .split(/[R\$]/)
    //     .join("")
    //     .split(/[.][0-9]+$/)
    //     .join("")
    //     .split(/\,/)
    //     .join("")
    //     .trim()
    // );

    if (moneyRegex < cost_helper) {
      document.getElementById(`helper_${i}`).setAttribute("disabled", true);
    } else {
      document.getElementById(`helper_${i}`).removeAttribute("disabled");
    }
    if (moneyRegex < cost_upgrade) {
      document.getElementById(`upgrade_${i}`).setAttribute("disabled", true);
    } else {
      document.getElementById(`upgrade_${i}`).removeAttribute("disabled");
    }
  }

  /*for (let a = 0; a <= 5; a++) {
    if (achieviment[a].When <= moneyRegex && achieviment[a].Received == false) {
      touchValue += achieviment[a].Upgrade;
      achieviment[a].Received = true;
      alert(`${achieviment[a].Nome}: You reach ${achieviment[a].When}`);
      alert(`Your touch was upgraded to ${achieviment[a].Upgrade}`);
    }

    if (achieviment[a].Received == true) {
      document.getElementById(`achievement_${a}`).innerText =
        "Status: Received";
    }
  }*/
}, 2000);

// // Create a list of achievements
// let achievements = document.getElementById("achievements");
// achieviment.forEach(({ Nome, When, Upgrade, Received }, item) => {
//   let li = document.createElement("li");
//   let rec = Received == true ? "Received" : "Not Received";
//   li.innerHTML = `
//     <button>
//       <p>${Nome}</p>
//       <p>You receive when reach $${When}</p>
//       <p>You get ${Upgrade} of touch points</p>
//       <p id="achievement_${item}">Status: ${rec}</p>
//     </button>
//   `;

//   achievements.appendChild(li);
// });
