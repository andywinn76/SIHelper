import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://spiritislandwiki.com';
const SPIRITS_LIST_URL = `${BASE_URL}/index.php?title=List_of_Spirits`;
const OUTPUT_DIR = './spirits';
const INDEX_FILE = './spirits.json';

// Ensure the output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

// Function to sanitize filenames
function sanitizeFilename(raw) {
  return raw
    .replace(/^Spirit_Panel_/, '')     // Remove prefix
    .replace(/\s+/g, '-')              // Replace spaces with dashes
    .replace(/['"]/g, '')              // Remove apostrophes and quotes
    .replace(/[^a-zA-Z0-9-_\.]/g, ''); // Remove other special characters
}

// Function to download an image
async function downloadImage(url, filename) {
  const filePath = path.join(OUTPUT_DIR, filename);
  const file = fs.createWriteStream(filePath);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`✅ Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`❌ Error downloading ${url}:`, err.message);
  });
}

// Main function to scrape and download images
async function scrapeAndDownload() {
  try {
    const { data } = await axios.get(SPIRITS_LIST_URL);
    const $ = cheerio.load(data);

    const spiritImages = [];
    const indexData = {};

    // Select the table containing the spirits
    const spiritTable = $('table.wikitable');

    // Iterate over each row in the table
    spiritTable.find('tr').each((i, row) => {
      const columns = $(row).find('td');
      if (columns.length > 0) {
        const imgElement = $(columns[0]).find('img');
        const nameElement = $(columns[1]).find('a');

        if (imgElement.length > 0 && nameElement.length > 0) {
          const imgSrc = imgElement.attr('src');
          const spiritName = nameElement.text().trim();

          if (imgSrc && spiritName) {
            const fullUrl = imgSrc.startsWith('http') ? imgSrc : `https:${imgSrc}`;
            const rawFilename = path.basename(fullUrl.split('?')[0]);
            const filename = sanitizeFilename(`${spiritName}.png`);
            spiritImages.push({ url: fullUrl, filename });
            indexData[spiritName] = filename;
          }
        }
      }
    });

    console.log(`🧠 Found ${spiritImages.length} spirit images...\n`);

    for (const { url, filename } of spiritImages) {
      await downloadImage(url, filename);
    }

    // Save index file
    fs.writeFileSync(INDEX_FILE, JSON.stringify(indexData, null, 2));
    console.log(`📄 Saved index file: ${INDEX_FILE}`);

  } catch (error) {
    console.error('⚠️ Error scraping spirits:', error.message);
  }
}

scrapeAndDownload();
