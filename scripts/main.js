const getCurrentYear = () => new Date().getFullYear();

window.onload = () => {
  const yearNode = document.querySelector("#year");
  yearNode.textContent = getCurrentYear();
};
