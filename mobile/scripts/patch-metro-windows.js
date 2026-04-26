#!/usr/bin/env node
/**
 * Postinstall: Fixes ERR_UNSUPPORTED_ESM_URL_SCHEME on Windows + Node 24
 * Patches metro-config's loadConfig.js to use pathToFileURL() before import()
 */
const fs = require("fs");
const path = require("path");

const TARGETS = [
  "node_modules/@expo/metro/node_modules/metro-config/src/loadConfig.js",
  "node_modules/metro/node_modules/metro-config/src/loadConfig.js",
  "node_modules/metro-config/src/loadConfig.js",
];

const BUGGY = `        const configModule = await import(absolutePath);`;
const FIXED = `        const _importPath = process.platform === 'win32' ? require("url").pathToFileURL(absolutePath).href : absolutePath;\n        const configModule = await import(_importPath);`;

let patched = 0;
for (const relPath of TARGETS) {
  const filePath = path.join(__dirname, relPath);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, "utf8");
  if (content.includes(FIXED)) {
    console.log(`[postinstall] Already patched: ${relPath}`);
    patched++;
    continue;
  }
  if (!content.includes(BUGGY)) {
    console.log(`[postinstall] Bug line not found (skip): ${relPath}`);
    continue;
  }

  content = content.replace(BUGGY, FIXED);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`[postinstall] ✅ Patched: ${relPath}`);
  patched++;
}

if (patched === 0) {
  console.warn("[postinstall] ⚠️  No files were patched. Check paths.");
}
