/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    // iterate instructions and use the helper function to call another function
    // need a function to keep track of location of the robot
    // need a function to keep directionality of robot
    let robot = {position: [0,0], initialDirection: "N"};

    

    const LeftOrRight = () => {}

    const GoForward = () => {

    }

    const helper = (instruction) => {
        if (instruction === "L" || instruction === "R") {
            LeftOrRight(instruction)
        } else {
            GoForward(instruction)
        }
    }

    for (let i = 0; i < instructions.length; i++) {
        console.log(instruction);

    }


    


    
};