function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
        <img src="${thumbnail}" alt="Thumbnail">
        <div class="info">
            <div class="title">${title}</div>
            <div class="details">${cName} • ${views} views • ${monthsOld} months ago</div>
            <div class="details">Duration: ${duration}</div>
        </div>
    `;

  document.querySelector("#card-container").appendChild(card);
}


// Creating cards 
createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  "560000",
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg"
);

createCard(
  "JavaScript Exercise 13 – Dynamic Website Builder",
  "CodeWithHarry",
  "350000",
  3,
  "16:14",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg"
);

createCard(
  "Events, Event Bubbling, setInterval & setTimeout",
  "CodeWithHarry",
  "400000",
  2,
  "27:51",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg"
);
