// Select color input
// store in variable
const colorPicker = document.getElementById('colorPicker')

// Select size input
// store in variable
const sizePicker = document.getElementById('sizePicker')

// When size is submitted by the user, call makeGrid()
// Your code goes here!

function makeGrid(myEvent) {
  //prevent page from reloading after 'submit'
  myEvent.preventDefault();
  //select element with id 'pixelCanvas' and store in variable
  let canvas = document.getElementById('pixelCanvas');
  canvas.innerHTML = '';
  //get value of selected height and store in variable
  let selHeight = document.getElementById('inputHeight').value;
  //get value of selected width and store in variable
  let selWidth = document.getElementById('inputWidth').value;
  //get value of selected color and store in variable
  let selColor = colorPicker.value;
    //create table rows; number of rows to create = selHeight
    for (let i = 1; i <= selHeight; i++) {
      let tr = canvas.insertRow();
      //create cells in each row; number of cells to create per row = selWidth
      for (let j = 1; j <= selWidth; j++) {
        let td = tr.insertCell();
        //set background color of cells to 'white'
        td.style.backgroundColor = 'white';
        //add event listener to each cell to set background color to selColor
        td.addEventListener('click', function(myEvent){
          myEvent.target.style.backgroundColor = selColor;
        })
      }
    }
}
sizePicker.addEventListener("submit", makeGrid);
