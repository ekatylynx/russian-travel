const getCurrentYear = () => new Date().getFullYear();

// Автоматическое получение текущего года
window.onload = () => {
  const yearNode = document.querySelector("#year");
  yearNode.textContent = getCurrentYear();
};
