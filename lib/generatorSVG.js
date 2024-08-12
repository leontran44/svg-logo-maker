const fs = require('fs');

function generateSVG({ text, textColor, shape, shapeColor }) {
let shapeElement = '';

switch (shape) {
    case 'Circle':
        shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
        break;
    case 'Triangle':
        shapeElement = `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`;
        break;
    case 'Square':
        shapeElement = `<rect x="90" y="40" width="120" height="120" fill="${shapeColor}" />`;
        break;
    default:
        throw new Error('Invalid shape');
}

const svgContent = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeElement}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
`;

    return svgContent.trim();
}

function saveSVG(fileName, svgContent) {
    fs.writeFileSync(fileName, svgContent);
    console.log(`Generated ${fileName}`);
}

module.exports = { generateSVG, saveSVG };