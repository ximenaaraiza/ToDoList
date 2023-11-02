var input = document.getElementById("objectInput");
var submit = document.getElementById("submit");
var container = document.getElementById("listContainer");
var main = document.getElementById("main");

function itemAdd(){
    let itemtext = input.value;  
    //create div in order to create the text ad button pop up 
    let itemContainer = document.createElement("div");
    itemContainer.classList.add ("entry")
    let text = document.createElement("p");
    text.innerText = itemtext;
    let finishButton = document.createElement("button");
    finishButton.innerText = "Finish";
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    // Adding the text and buttons into the div
    itemContainer.appendChild (text);
    itemContainer.appendChild (finishButton);
    itemContainer.appendChild (deleteButton);
    //creating classes to style the text and button
    text.classList.add("text");
    text.id = ("itemtext");
    finishButton.classList.add("finish");
    deleteButton.classList.add("delete");
    container.appendChild (itemContainer);
    //adding event listener in order to make the delete and finish button work 
    finishButton.addEventListener("click", function (){
     finish(text)
    });
    deleteButton.addEventListener("click", function(){
        disappear(itemContainer)
    })
} 

function finish(text){   
        text.style.textDecoration = "line-through";
}

function disappear(entry){
    entry.remove();
    

}


submit.addEventListener("click",itemAdd);

