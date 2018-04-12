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
  var ulElm = document.querySelector(".ulComment");

  ulElm.innerHTML = "";

  for(var i = 0; i < commentList.length; i++)
  {
    var liElm = document.createElement("li");
    var textPElm = document.createElement("p");
    var delBtnElm = document.createElement("button");
    var editBtnElm = document.createElement("button");

    textPElm.innerHTML = noteList[i].text;

    delBtnElm.innerHTML = "Delete";
    delBtnElm.setAttribute("data-index", i);
    delBtnElm.addEventListener("click", submitDelEvent);

    editBtnElm.innerHTML = "Edit";
    editBtnElm.setAttribute("data-index", i);
    editBtnElm.addEventListener("click", submitEditEvent);

    liElm.appendChild(textPElm);
    liElm.appendChild(delBtnElm);
    liElm.appendChild(editBtnElm);

    ulElm.appendChild(liElm);
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
  console.log("submit new comment goes here");

  var commentText = document.querySelector("commentText");

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

<<<<<<< HEAD
function myFunction() {
    document.getElementById("myDropdown2").classList.toggle("show");
}


=======
>>>>>>> c09d23bb555024292513fdacc36b3211767e7725
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
