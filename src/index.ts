import * as readline from "readline";

let rl;

function startProgram() {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

}


function restartProgram(rl: readline.Interface) {
    console.log('Restarting program...');
    rl.close();
    
    // Simply call startProgram again to restart the readline loop
    setTimeout(() => {
        startProgram();
    }, 100);
}

// Start the program
startProgram();