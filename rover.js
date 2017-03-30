var rover = {
  position: [0,0], //The rover starts at the lower-left corner of the grid
  direction: ['North', 'East', 'South', 'West'],
  currentDirection: 0,
  obstacle: [[1, 2], [4, 5]],
  toStop: false //The rover won't stop unless reaching and obstacle
};

//Convert the sequence of movements given into an array
function getInstructions(commands){
  var instructions = commands.split(" ");
  return instructions;
}



//Check if the rover has to move (forward/backwards) or rotate (left/right)
function movements(instructions){
  for (var i = 0; i < instructions.length; i++){

  	if (rover.toStop === false){ //By default, the rover won't stop unless reaching and obstacle

    switch (instructions[i]){
      case 'f':
      move('f');
      break;

      case 'b':
      move('b');
      break;

      case 'l':
      rotateLeft();
      break;

      case 'r':
      rotateRight();
      break;
    }
  }
}
}


//Rotate right
function rotateRight(r){
  if (rover.currentDirection +1 <= 3){
      rover.currentDirection++;
  } else {
      rover.currentDirection = 0;
  }
}

//Rotate left
function rotateLeft(l){
  if (rover.currentDirection -1 >= 1){
      rover.currentDirection--;
  } else {
      rover.currentDirection = 0;
  }
}


//Make a move (forward or backwards)
//If it's going off the grid, it automatically sets the value of position to 0 or 9, so the rover will wrap from one edge of the grid to another.

function move(where){
	switch (rover.currentDirection){

		case 0: //Make a move while facing North
		if (where === 'f'){ //We're going forward
			if (rover.position[0] + 1 <=9){
				 if (!obstacleDetector(true, rover.position[0] + 1)) {
				rover.position[0]++;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(true, 0)){
				rover.position[0] = 0;
				} else {
					break;
				}
			}

		} else { //We're going backwards
			if (rover.position[0] - 1 >=0){
				 if (!obstacleDetector(true, rover.position[0] - 1)) {
				rover.position[0]--;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(true, 9)){
				rover.position[0] = 9;
				} else {
					break;
				}
			}
		}
		break;

		case 1: //Make a move while facing East
		if (where === 'f'){
			if (rover.position[1] + 1 <=9){
				 if (!obstacleDetector(false, rover.position[1] + 1)) {
				rover.position[1]++;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(false, 0)){
				rover.position[1] = 0;
				} else {
					break;
				}
			}

		} else { //We're going backwards
			if (rover.position[1] - 1 >=0){
				 if (!obstacleDetector(false, rover.position[1] - 1)) {
				rover.position[1]--;
				} else {
					break;
				}
			} else {
				if (!obstacleDetect(false, 9)){
				rover.position[1] = 9;
				} else {
					break;
				}
			}
		}
		break;

		case 2: //Make a move while facing South
		if (where === 'f'){ //We're going forward
			if (rover.position[0] - 1 >=0){
				 if (!obstacleDetector(true, rover.position[0] - 1)) {
				rover.position[0]--;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(true, 9)){
				rover.position[0] = 9;
				} else {
					break;
				}
			}

		} else { //We're going backwards
			if (rover.position[0] + 1 <=9){
				 if (!obstacleDetector(true, rover.position[0] + 1)) {
				rover.position[0]++;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(true, 0)){
				rover.position[0] = 0;
				} else {
					break;
				}
			}
		}
		break;

		case 3: //Make a move while facing West
		if (where === 'f'){
			if (rover.position[1] - 1 >=0){
				 if (!obstacleDetector(false, rover.position[1] - 1)) {
				rover.position[1]--;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(false, 9)){
				rover.position[1] = 9;
				} else {
					break;
				}
			}

		} else { //We're going backwards
			if (rover.position[1] + 1 <=9){
				 if (!obstacleDetector(false, rover.position[1] + 1)) {
				rover.position[1]++;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(false, 0)){
				rover.position[1] = 0;
				} else {
					break;
				}
			}
		}
		break;
	}
}

function obstacleDetector(yPosition, futurePosition){

	if (yPosition === true){
		for (var i = 0; i < rover.obstacle.length; i++){
			if (rover.obstacle[i][0] === futurePosition && rover.obstacle[i][1] === rover.position[1]){
				console.log('The rover has reached an obstacle in ' + rover.obstacle[i] + '. It is not able to continue');
				rover.toStop = true;
				return rover.toStop
			}
		}
	}

	if (yPosition === false){
		for (var i = 0; i < rover.obstacle.length; i++){
			if (rover.obstacle[i][0] === rover.position[0] && rover.obstacle[i][1] === futurePosition){
				console.log('The rover has reached an obstacle in [' + rover.obstacle[i] + ']. It is not able to continue.');
				rover.toStop = true;
				return rover.toStop
			}
		}
	}
}


movements('fffrflbbrf');
console.log("Current rover position: [" + rover.position[0] + ", " + rover.position[1] + "]")
console.log("Current rover direction: " + rover.direction[rover.currentDirection])
