// TODO: Add 2 new items to the sidebar called "Register" and "Help".
var sideBarEl=document.querySelector(".sidebar ul");

var registerEl = document.createElement("li");

var helpEl = document.createElement("li");
registerEl.textContent = "Register";
helpEl.textContent = "Help";
sideBarEl.appendChild(registerEl);
sideBarEl.appendChild(helpEl);


// TODO: MEGA CHALLENGE: can you add the Help link between Reports and Settings?

var sideBarEl = document.querySelector(".sidebar ul");

var registerEl = document.createElement("li");
registerEl.textContent = "Register";
sideBarEl.appendChild(registerEl);

var helpEl = document.createElement("li");
helpEl.textContent = "Help";

// Insert Help before the 4th item (Settings)
sideBarEl.insertBefore(helpEl, sideBarEl.children[3]);
