"use strict"

document.querySelector('#hide').onclick = () => {
    document.querySelectorAll(".lista")[0].style.visibility = "hidden"
}

document.querySelector('#show').onclick = () => {
    document.querySelectorAll(".lista")[0].style.visibility = "visible"
}