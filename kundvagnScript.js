document.querySelector(".delete").addEventListener("click", () => {
    document.querySelector(".outline").classList.add("hidden");
    document.querySelector(".none").classList.remove("none");
    document.querySelector(".sum").innerHTML = "0 kr";
  });
  document.querySelector(".button").addEventListener("click", () => {
    localStorage.setItem('totalBought', 0);
    window.location.href = "/index.html"
  });