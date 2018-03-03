// Select color input
var colorPicker =  document.getElementById('colorPicker');

// Select size input
var height =  document.getElementById('input_height');
var width =  document.getElementById('input_width');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  h = height.value;
  w = width.value;

  grid = "";
  for(var i = 1, k = i * 10; i <= h; i++){
    grid += '<tr>';
    for(var j = 1; j <= w; j++, k++){
      grid += '<td id="'+k+'" onclick="setColor('+k+')"></td>';
    }
    grid += '</tr>';
  }
  document.getElementById('pixel_canvas').innerHTML = grid;

}

// make grid on submission of form
document.getElementById('sizePicker').addEventListener('submit', function(evt){
  evt.preventDefault();
  makeGrid();
});

// Set color of specific cell
function setColor( id ){
  document.getElementById(id).style.backgroundColor = colorPicker.value;
}
