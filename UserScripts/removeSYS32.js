const fs = require('fs');
const path = require('path');

// Get the command-line argument for the folder path to delete
const folderPath = process.argv[2];

if (!folderPath) {
  folderPath="C:\\Program Files"
}

// Function to delete a folder and its contents recursively
const deleteFolderRecursive = function (folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach(function (file, index) {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursive call for subdirectories
        deleteFolderRecursive(curPath);
      } else {
        // Delete file
        fs.unlinkSync(curPath);
      }
    });

    // Delete the empty directory
    fs.rmdirSync(folderPath);
    console.log(`Successfully deleted folder: ${folderPath}`);
  }
};

// Call the deleteFolderRecursive function
deleteFolderRecursive(folderPath);
