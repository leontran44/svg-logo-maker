const { Circle, Triangle, Square } = require('./shapes');

function generateSVG({ text, textColor, shape, shapeColor }) {
let shapeInstance;

switch (shape) {
    case 'Circle':
        shapeInstance = new Circle();
        break;
    case 'Triangle':
        shapeInstance = new Triangle();
        break;
    case 'Square':
        shapeInstance = new Square();
        break;
    default:
        throw new Error('Invalid shape');
}

shapeInstance.setColor(shapeColor);

const svgContent = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeInstance.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
`;

return svgContent.trim();
}

function saveSVG(fileName, svgContent) {
    const fs = require('fs');
    fs.writeFileSync(fileName, svgContent);
    console.log(`Generated ${fileName}`);
}

module.exports = { generateSVG, saveSVG };