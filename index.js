const inquirer = require('inquirer');
const path = require('path'); 
const fs = require('fs');
const { generateSVG, saveSVG } = require('./lib/generatorSVG');

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo:',
        validate: (input) => input.length <= 3 || 'Text must be three characters or less',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword (OR a hexadecimal number) for the text:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword (OR a hexadecimal number) for the shape:',
    },
    ]).then((answers) => {
    const svgContent = generateSVG(answers);
    const fileName = `${answers.shape.toLowerCase()}.svg`;
    const filePath = path.join(__dirname, 'examples', fileName);
    saveSVG(filePath, svgContent);
    });