

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

/*Joanna's java*/
/*dropdown*/
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/*Amanda's java*/
/*dropdown*/

function stavFunction() {
  document.getElementById("myStavDropdown").classList.toggle("show");
}

//* DETTE VISER MODAL FOR STAVELEG*//

var modalStav = document.querySelector(".modal-bg-staveleg");

var showModalStav = document.querySelector(".showStavelegModal");

var spanStav = document.getElementsByClassName("close-stav")[0];

showModalStav.addEventListener('click', function(staveEvent)
{
  modalStav.style.display="block";
});

spanStav.onclick = function() {
    modalStav.style.display = "none";
}

window.onclick = function(staveEvent){
  if (staveEvent.target == modalStav){
      modalStav.style.display = "none";
  }
}
//*DETTE VISER CHAT MODAL*//
var modalChat = document.querySelector(".modal-bg-chat");

var showModalChatBtn = document.querySelector(".showModalChat");

var spanChat = document.getElementsByClassName("close-chat")[0];

showModalChatBtn.addEventListener('click', function(chatEvent)
{

  modalChat.style.display = "block";
});

spanChat.onclick = function() {
    modalChat.style.display = "none";
}

window.onclick = function(event) {
    if (chatEvent.target == modalChat) {
        modalChat.style.display = "none";
    }
}
