// Select color input
const sizePicker = document.getElementById('sizePicker')
const colorPicker = document.getElementById('colorPicker')
const selColor = colorPicker.value;

// Select size input


// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
  event.preventDefault();

  let canvas = document.getElementById("pixelCanvas");
  canvas.innerHTML = "";
  let selHeight = document.getElementById('inputHeight').value;
  let selWidth = document.getElementById('inputWidth').value;

    for (let i = 0; i < selHeight; i++) {
      let tr = canvas.insertRow();
      for (let j = 0; j < selWidth; j++) {
        tr.insertCell();
      }
    }
}
// Your code goes here!
//let canvas = document.getElementById('pixelCanvas');
//tr = Height
//td = Width

sizePicker.addEventListener("submit", makeGrid);
