let scrollcontainer = document.querySelector(".galery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollcontainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollcontainer.scrollLeft += e.deltaY;
});

backbtn.addEventListener("click", () => {
    scrollcontainer.scrollLeft -= 900; 
});

nextbtn.addEventListener("click", () => {
    scrollcontainer.scrollLeft += 900;
});
