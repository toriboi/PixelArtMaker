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
  for(var i = 1; i <= h; i++){
    grid += '<tr>';
    for(var j = 1; j <= w; j++){
      grid += '<td><canvas id="'+i+'.'+j+'" width="50" height="50" onclick="setColor('+i+'.'+j+')"></canvas></td>';
    }
    grid += '</tr>';
  }
  document.getElementById('pixel_canvas').innerHTML = grid;

}

document.getElementById('sizePicker').addEventListener('submit', function(evt){
  evt.preventDefault();
  makeGrid();
});

function setColor( id ){
  var c = document.getElementById(id);
  var ctx = c.getContext('2d');
  ctx.fillStyle = colorPicker.value;
  ctx.fillRect(0, 0, 50, 50);
}

// makeGrid();
console.log(pixel_canvas.innerHTML);
console.log(colorPicker.value);
