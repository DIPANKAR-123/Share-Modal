const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//Open Modal
const openModal = () => {
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

//Close Modal
const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};
const modal2 = document.querySelector('.modal2');
const overlay2 = document.querySelector('.overlay2');

//Open Modal
const openModal2 = () => {
    console.log("Modal is Open");
    modal2.classList.add("active");
    overlay2.classList.add("overlayactive2");
};

//Close Modal
const closeModal2 = () => {
    modal2.classList.remove("active");
    overlay2.classList.remove("overlayactive2");
};
