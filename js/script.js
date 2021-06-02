const addButton = document.querySelector('#addButton');
const deleteButton = document.querySelector('delButton');
const list = document.querySelector('#list');

console.log(addButton);
console.log(list);
console.log(input);

addButton.addEventListener('click', createListItem, false);

delButton.addEventListener('click', deleteListItem, false);

function createListItem(event){
    // Created a new LI element
  const newElement = document.createElement("li");
  // Set that elements inner text to whatever is in the input box
  newElement.innerText = input.value;
  // Add the bootstrap utility text-center to the class list
  newElement.classList.add("text-center");
   // Add an event listener to the new element to line-through when clicked
  newElement.addEventListener('click',(event) => {
    newElement.style.textDecoration='line-through';
});

  // Create new button to be our delete button for this item
  const newDeleteButton = document.createElement("button");
  // Add bootstrap classes to delete button
  newDeleteButton.classList.add("btn","btn-danger","btn-sm");
  // Set delete button inner text to the letter x
  newDeleteButton.innerText = "x";
  // Listen for click on delete button, when clicked delete the buttons parent
  newDeleteButton.addEventListener("click", e => {
    console.log(e.srcElement);
    e.srcElement.parentElement.remove();
  });
  
  // Append delete button to newElement li
  newElement.appendChild(newDeleteButton); 
  //Final step, add to the HTML 
  list.appendChild(newElement);
}

function deleteListItem(event){
  list.removeChild(list.lastElementChild);
}


