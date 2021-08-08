import { pageLoad, makeNavBar } from "./home";
import contactPage from "./contact";
import menuPage from "./menu";
import "./style.css";

const container = document.getElementById("content");
const nav = makeNavBar();
document.body.insertBefore(nav, document.body.firstChild);
const home = pageLoad();
container.appendChild(home);

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const contactTab = document.querySelector("#contact");

homeTab.addEventListener("click", () => {
  container.textContent = "";
  container.appendChild(home);
});

menuTab.addEventListener("click", () => {
  container.textContent = "";
  const menu = menuPage();
  container.appendChild(menu);
});

contactTab.addEventListener("click", () => {
  container.textContent = "";
  const contact = contactPage();
  container.appendChild(contact);
});
