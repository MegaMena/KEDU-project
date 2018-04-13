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
    var liElm = document.createElement("div");
    liElm.className = "subject";
    var textPElm = document.createElement("h4");
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
