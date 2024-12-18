// Toggle visibility of products section
document.addEventListener("DOMContentLoaded", () => {
    const productsSection = document.querySelector("#products");
    const toggleButton = document.createElement("button");
   
    toggleButton.textContent = "Show Products";
    toggleButton.style.display = "block";
    toggleButton.style.margin = "0 auto";
    toggleButton.style.padding = "10px 20px";
    toggleButton.style.backgroundColor = "#1428a0";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";
  
    productsSection.before(toggleButton);
  
    toggleButton.addEventListener("click", () => {
      if (productsSection.style.display === "none" || !productsSection.style.display) {
        productsSection.style.display = "block";
        toggleButton.textContent = "Hide Products";
      } else {
        productsSection.style.display = "none";
        toggleButton.textContent = "Show Products";
      }
});
});