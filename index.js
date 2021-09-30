const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const generateHTML = require('./utils/generateHTML');

const questions = [{
    type: 'input',
    message: "Enter your full name:",
    name: 'fullName',

},
{
    type: 'input',
    message: "Enter your location:",
    name: 'userLoc',

},
{
    type: 'input',
    message: "Enter your bio:",
    name: 'userBio',

},
{
    type: 'input',
    message: "Enter your LinkedIn URL:",
    name: 'userLinkedIn',

},
{
    type: 'input',
    message: "Enter your GitHub URL:",
    name: 'userGitHub'
}];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log(error);
        }

        console.log("Your HTML file has been created")
    });
}

const writeFileAsync = util.promisify(writeToFile);

async function init() {
    try {
        const userInput = await inquirer.prompt(questions);
        const newHTML = generateHTML(userInput);
        console.log("Generating your HTML file next...")
        console.log(newHTML);
        await writeFileAsync('./generated-index.html', newHTML);
    } catch (error) {
        console.log(error);
    }
};

init();