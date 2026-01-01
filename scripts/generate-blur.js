const fs = require('fs');
const path = require('path');

// Try to require sharp, if not found we will need to install it
let sharp;
try {
    sharp = require('sharp');
} catch (e) {
    console.error('Sharp not found. Please run "npm install sharp" first.');
    process.exit(1);
}

const input = path.join(process.cwd(), 'public', 'basaltbg.png');
const output = path.join(process.cwd(), 'public', 'basaltbg-blurred.png');

if (!fs.existsSync(input)) {
    console.error('Input file not found:', input);
    process.exit(1);
}

console.log('Generating blurred background...');
sharp(input)
    .resize(2400, 1260)
    .blur(40) // Increased blur for smooth glass effect
    .toFile(output)
    .then(() => console.log('Successfully created public/basaltbg-blurred.png'))
    .catch(err => console.error('Error generating blur:', err));
