import * as readline from "readline";

let rl: readline.Interface | undefined;

function startProgram() {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

}



function restartProgram() {
    console.log('Restarting program...');
    rl?.close();
    
    // Simply call startProgram again to restart the readline loop
    setTimeout(() => {
        startProgram();
    }, 100);
}

// Start the program
startProgram();