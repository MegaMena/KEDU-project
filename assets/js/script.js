//* DETTE VISER MODAL!! *//

var modal = document.querySelector(".modal-bg");

var showModalBtn = document.querySelector(".showModal");

var span = document.getElementsByClassName("close")[0];

showModalBtn.addEventListener('click', function(event)
{

  modal.style.display = "block";
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




/*joanna's java*/
/* When the user clicks on the dropdown,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}




//* DETTE VISER MODAL FOR STAVELEG*//

var modalStav = document.querySelector(".modal-bg-staveleg");

var showModalStav = document.querySelector(".showStavelegModal");

showModalStav.addEventListener('click', function(staveEvent)
{
  modalStav.style.display="block";
});
