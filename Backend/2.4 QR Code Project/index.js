/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

var givenURL;

inquirer
  .prompt([
    /* Pass your questions in here */
    {"message": "Type your URL: ", 
    "name": "URL"}   
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error.isTtyError);
    } else {
      // Something else went wrong
      console.log(error);
    }
  });

