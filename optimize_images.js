import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDir = path.join(process.cwd(), 'public', 'assets', 'images');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        console.log(`Processing ${fullPath}...`);
        const tempPath = fullPath + '.tmp';
        try {
          const image = sharp(fullPath);
          const metadata = await image.metadata();
          
          let pipeline = image;
          
          // Resize if width is larger than 1920
          if (metadata.width > 1920) {
            pipeline = pipeline.resize(1920, null, { withoutEnlargement: true });
          }
          
          if (ext === '.png') {
            pipeline = pipeline.png({ quality: 80, compressionLevel: 8 });
          } else {
            pipeline = pipeline.jpeg({ quality: 80 });
          }
          
          await pipeline.toFile(tempPath);
          fs.renameSync(tempPath, fullPath);
          
          const newStat = fs.statSync(fullPath);
          console.log(`Done: ${(stat.size / 1024 / 1024).toFixed(2)} MB -> ${(newStat.size / 1024 / 1024).toFixed(2)} MB`);
        } catch (error) {
          console.error(`Error processing ${fullPath}:`, error);
        }
      }
    }
  }
}

processDirectory(imageDir).then(() => console.log('Finished optimizing images.')).catch(console.error);
