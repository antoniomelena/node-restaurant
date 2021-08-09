
export default function createFooter() {
   const footer = document.createElement('footer');
   let footerText = document.createElement('p')
   footerText.textContent = "Antonio Melena";
   footer.appendChild(footerText);
   return footer;
};