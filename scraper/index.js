const axios = require("axios");
const fs = require("fs");

const STREAM_URL = "https://geefive.saqlainhaider8198.workers.dev";
const OUTPUT_FILE = "stream.m3u"; // Changed extension to .m3u

async function fetchAndSaveM3U() {
  try {
    const response = await axios.get(STREAM_URL);
    const data = response.data;

    // Save as raw text (not JSON)
    fs.writeFileSync(OUTPUT_FILE, data, "utf-8");

    console.log("✅ stream.m3u saved successfully.");
  } catch (error) {
    console.error("❌ Failed to fetch stream:", error.message);
    process.exit(1); // Fail CI
  }
}

fetchAndSaveM3U();
