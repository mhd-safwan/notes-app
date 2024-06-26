const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


function shownotes(){
  notescontainer.innerHTML=localStorage.getItem("notes")
}
shownotes();
function updatestorage(){
  localStorage.setItem("notes",notescontainer.innerHTML);

}

createbtn.addEventListener("click",function(){
    let inputbox = document.createElement("p");
    let img=document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src="images/delete.png"
   notescontainer.appendChild(inputbox).appendChild(img);

})
notescontainer.addEventListener("click", function(e) {
  if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      updatestorage(); // Assuming updateStorage is defined elsewhere
  } else if (e.target.tagName === "P") {
      const notes = document.querySelectorAll(".input-box");
      notes.forEach(nt => {
          nt.onkeyup = function() {
            updatestorage(); // Assuming updateStorage is defined elsewhere
          }
      });
  }
});
document.addEventListener("keydown",event =>{
  if(event.key === "Enter"){
    document.execCommand("insertLinebreak")
    event.preventDefault();
  }
})
