const https = require('https');
const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, 'models');

if (!fs.existsSync(modelsDir)) {
    fs.mkdirSync(modelsDir);
}

const files = [
    'tiny_face_detector_model-shard1',
    'tiny_face_detector_model-weights_manifest.json',
    'face_expression_model-shard1',
    'face_expression_model-weights_manifest.json'
];

const baseUrl = 'https://github.com/justadudewhohacks/face-api.js/raw/master/weights/';

function downloadFile(file) {
    const url = baseUrl + file;
    const filePath = path.join(modelsDir, file);

    function getFile(urlToGet) {
        https.get(urlToGet, (response) => {
            if (response.statusCode === 302 && response.headers.location) {
                // Follow redirect
                getFile(response.headers.location);
            } else if (response.statusCode === 200) {
                const fileStream = fs.createWriteStream(filePath);
                response.pipe(fileStream);
                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`Downloaded ${file}`);
                });
            } else {
                console.error(`Failed to download ${file}: ${response.statusCode}`);
            }
        }).on('error', (err) => {
            console.error(`Error downloading ${file}: ${err.message}`);
        });
    }

    getFile(url);
}

files.forEach(downloadFile);
