const fs = require('fs');
const path = require('path');
let sharp;
try {
    sharp = require('sharp');
} catch (e) {
    console.error('Sharp not found. Please run "npm install sharp" first.');
    process.exit(1);
}

const assets = [
    { name: 'basaltbg.png', width: 1200, height: 630 },
    { name: 'basaltbg-blurred.png', width: 1200, height: 630 },
    { name: 'Basalt.png', width: 600, fit: 'contain' }
];

async function processImages() {
    for (const asset of assets) {
        const inputPath = path.join(process.cwd(), 'public', asset.name);
        const tempPath = path.join(process.cwd(), 'public', 'temp-' + asset.name);

        if (!fs.existsSync(inputPath)) {
            console.warn(`Asset not found: ${asset.name}`);
            continue;
        }

        try {
            console.log(`Optimizing ${asset.name}...`);
            const pipeline = sharp(inputPath);

            if (asset.height) {
                // Use 'cover' to crop to aspect ratio if needed, preventing distortion
                pipeline.resize(asset.width, asset.height, { fit: 'cover' });
            } else {
                pipeline.resize(asset.width);
            }

            await pipeline.toFile(tempPath);

            fs.unlinkSync(inputPath);
            fs.renameSync(tempPath, inputPath);
            console.log(`Done: ${asset.name}`);
        } catch (e) {
            console.error(`Failed to optimize ${asset.name}:`, e);
        }
    }
}

processImages();
