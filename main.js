const modalButtonElement = document.querySelector(".modal-button")
const modalCloseButtonElement = document.querySelector(".modal-close")

modalButtonElement.onclick = function (event) {
    document.body.classList.add("modal-body")
}
modalCloseButtonElement.onclick = function (event) {
    document.body.classList.remove("modal-body")
}