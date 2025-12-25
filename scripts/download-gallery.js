const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
    { name: 'culture-new.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sigiriya_Rock.jpg/800px-Sigiriya_Rock.jpg' },
    { name: 'wild-new.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Leopard_in_Yala_National_Park.jpg/800px-Leopard_in_Yala_National_Park.jpg' },
    { name: 'beach-new.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Amazing_Coconut_Tree_Hill.jpg/800px-Amazing_Coconut_Tree_Hill.jpg' },
    { name: 'arch-new.jpg', url: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=800&h=600&auto=format&fit=crop' }  // Keep working one
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 302 || res.statusCode === 301) {
                downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: Status Code ${res.statusCode}`));
                return;
            }
            const fileStream = fs.createWriteStream(filepath);
            res.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded: ${filepath}`);
                resolve();
            });
            fileStream.on('error', (err) => {
                fs.unlink(filepath, () => { }); // Delete failed file
                reject(err);
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { }); // Delete failed file
            reject(err);
        });
    });
};

const run = async () => {
    const galleryDir = path.join(__dirname, '..', 'public', 'gallery');
    if (!fs.existsSync(galleryDir)) {
        fs.mkdirSync(galleryDir, { recursive: true });
    }

    for (const img of images) {
        try {
            await downloadImage(img.url, path.join(galleryDir, img.name));
        } catch (error) {
            console.error(`Error downloading ${img.name}:`, error.message);
        }
    }
};

run();
