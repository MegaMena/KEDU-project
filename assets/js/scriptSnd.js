function setLocal(localComments)
{
  var jsonData = JSON.stringify(localComments);

  localStorage.setItem("comments", jsonData);
}

function getLocal()
{
  var comments = localStorage.getItem("comments");

  if(comments == null)
  {
    return [];
  }
  else {
    return JSON.parse(comments);
  }
}

function submitComment(text)
{
  var origComments = getLocal();

  var newComment = {
    text: text,
  };

  origComments.push(newComment);

  setLocal(origComments);
}

function buildList()
{
  var commentList = getLocal();
  var ulElm = document.querySelector("article");

  ulElm.innerHTML = "";

  for(var i = 0; i < commentList.length; i++)
  {
    var liElm = document.createElement("div");
    liElm.className = ("subject");
    var textPElm = document.createElement("p");
    var delBtnElm = document.createElement("button");
    var editBtnElm = document.createElement("button");

    textPElm.innerHTML = commentList[i].text;

    delBtnElm.innerHTML = "Delete";
    delBtnElm.setAttribute("data-index", i);
    delBtnElm.addEventListener("click", submitDelEvent);

    editBtnElm.innerHTML = "Edit";
    editBtnElm.setAttribute("data-index", i);
    editBtnElm.addEventListener("click", submitEditEvent);

    liElm.appendChild(textPElm);
    liElm.appendChild(delBtnElm);
    liElm.appendChild(editBtnElm);

    ulElm.appendChild(textPElm);
    ulElm.appendChild(delBtnElm);
    ulElm.appendChild(editBtnElm);
  }
}
function submitEditEvent(event)
{
  var arrIndex = event.target.getAttribute("data-index");
  var comments = getLocal();

  var editText = prompt ("Edit text");

  comments[arrIndex].text = editText;

  setLocal(comments);
  buildList();
}
function submitDelEvent(event)
{
   var arrIndex = event.target.getAttribute("data-index");
   var comments = getLocal();

   comments.splice(arrIndex, 1);

   setLocal(comments);
   buildList();
}
function submitCommentEvent(event)
{

  var commentText = document.querySelector("#commentText");

  submitComment(commentText.value);
  buildList();
}

window.onload = function()
{
  buildList();
}
var submitCommentBtn = document.querySelector(".addComment");

submitCommentBtn.addEventListener("click", submitCommentEvent);



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
  document.getElementById("myStavDropdown").classList.toggle("stavShow");
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

window.onclick = function(chatEvent) {
    if (chatEvent.target == modalChat) {
        modalChat.style.display = "none";
    }
}
