const container = document.querySelector('div.container');
let currentSize = 8;
let squareStyle = document.createElement('style');

function createSquares (size){
  currentSize = size;
  let string = "";
  for (let i = 0; i < Math.pow(size, 2); i++){
   string += '<div class="square"></div>';
  }
  container.innerHTML = string;
  squareStyle.innerHTML = `.container {
  grid-template-columns: repeat(${size}, 0fr);
  grid-template-rows: repeat(${size}, 0fr);
  }
  .square {
  width: ${(480/size)-(2)}px;
  height: ${(480/size)-(2)}px;
  }`
  document.head.appendChild(squareStyle);
  squareTransition();
}


function squareTransition (){
  const squares = document.querySelectorAll("div.square");

  squares.forEach(item => {
  item.addEventListener('mousemove',  function() {
  this.classList.add("transitioned");
  })
  }) 
}

createSquares(currentSize);

