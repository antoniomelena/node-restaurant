import { pageLoad, makeNavBar } from "./home";
import contactPage from "./contact";
import menuPage from "./menu";
import createFooter from "./footer"
import "./style.css";

const container = document.getElementById("content");
const nav = makeNavBar();
document.body.insertBefore(nav, document.body.firstChild);
const home = pageLoad();
container.appendChild(home);
const footer = createFooter();
container.appendChild(footer);

const homeTab = document.querySelector("#home");
homeTab.parentElement.classList.add('showing')
const menuTab = document.querySelector("#menu");
const contactTab = document.querySelector("#contact");

homeTab.addEventListener("click", () => {
  container.textContent = "";
  container.appendChild(home);
  container.appendChild(footer);
  menuTab.parentElement.classList.remove('showing');
  contactTab.parentElement.classList.remove('showing');
  homeTab.parentElement.classList.add('showing')
});

menuTab.addEventListener("click", () => {
  container.textContent = "";
  const menu = menuPage();
  container.appendChild(menu);
  container.appendChild(footer);
  homeTab.parentElement.classList.remove('showing');
  contactTab.parentElement.classList.remove('showing');
  menuTab.parentElement.classList.add('showing');
});

contactTab.addEventListener("click", () => {
  container.textContent = "";
  const contact = contactPage();
  container.appendChild(contact);
  container.appendChild(footer);
  contactTab.parentElement.classList.add('showing');
  menuTab.parentElement.classList.remove('showing');
  homeTab.parentElement.classList.remove('showing');
});


const obj = { a: 'alpha', b: 'bravo' };
const newObj = { ...obj, c: 'charlie' };
console.log(newObj);