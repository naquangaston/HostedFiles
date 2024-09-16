const { exec } = require('child_process');
const fs = require('fs');

const file_path = "autoShorts.js"; // Path to the Node.js script you want to run

const installedItems = [];

// Run the Node.js script
function run() {
    console.log("Starting the Node.js script");
    exec(`node ${file_path}`, (error, stdout, stderr) => {

        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        console.log(stdout);

        // Check if there is any stderr output (error output)
        if (stderr) {
            // Extract the missing module from the error message
            const match = stderr.match(/Cannot find module '(.*)'/);
            if (match && match.length > 1) {
                const missingModule = match[1];
                console.log(`Missing module: ${missingModule}`);

                // Create a cmd line to install the missing module using npm
                const installCmd = `@echo off\ntitle Installing - ${missingModule}\nnpm install ${missingModule} --save\necho Installed successfully - module: ${missingModule}\nnode ${file_path} & exit`;

                // Write the install command to a .cmd file
                fs.writeFile('install.cmd', installCmd, (err) => {
                    if (err) throw err;
                    console.log('The file was saved!');
                    exec("start install.cmd", (error, stdout, stderr) => {
                        if (error) {
                            console.error(`Error: ${error.message}`);
                            return;
                        }
                        // Output stdout (normal output)
                        console.log(stdout);
                        console.log(`Installed - ${missingModule}`);
                        console.log("Running the script again...");
                        
                        // Avoid adding the module multiple times
                        if (!installedItems.includes(missingModule)) {
                            installedItems.push(missingModule);
                        }
                        setTimeout(run, 200);
                    });
                });

            } else {
                console.warn('Failed to extract missing module name');
            }
        } else {
            console.log("Successfully ran the Node.js script");
            console.log("All installed modules are listed below:");
            console.log(installedItems);
        }
    });
}

run();
