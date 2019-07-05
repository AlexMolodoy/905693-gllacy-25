
var popup = document.querySelector(".button-feedback");
var feedback_form = document.querySelector(".feedback-form");
var background_modal = document.querySelector(".background-modal");
popup.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedback_form.classList.add("modal-show");
    background_modal.classList.add("modal-show");
});
var close_popup = document.querySelector(".del-show");
close_popup.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedback_form.classList.remove("modal-show");
    background_modal.classList.remove("modal-show");
});