const fs = require('fs');
const { generateSVG, saveSVG } = require('./generatorSVG');

jest.mock('fs');

describe('SVG Generator', () => {
    afterEach(() => {
    jest.clearAllMocks();
});

test('should generate correct SVG string for Circle', () => {
    const svgContent = generateSVG({
        text: 'SVG',
        textColor: 'white',
        shape: 'Circle',
        shapeColor: 'green',
    });

    expect(svgContent).toEqual(`
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>
    `.trim());
});

test('should generate correct SVG string for Triangle', () => {
    const svgContent = generateSVG({
        text: 'SVG',
        textColor: 'white',
        shape: 'Triangle',
        shapeColor: 'blue',
    });

    expect(svgContent).toEqual(`
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>
    `.trim());
});

test('should generate correct SVG string for Square', () => {
    const svgContent = generateSVG({
        text: 'SVG',
        textColor: 'white',
        shape: 'Square',
        shapeColor: 'red',
    });

    expect(svgContent).toEqual(`
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="90" y="40" width="120" height="120" fill="red" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>
    `.trim());
});

test('should save SVG file correctly', () => {
    const fileName = 'logo.svg';
    const svgContent = '<svg>test</svg>';

    saveSVG(fileName, svgContent);

    expect(fs.writeFileSync).toHaveBeenCalledWith(fileName, svgContent);
    });
});