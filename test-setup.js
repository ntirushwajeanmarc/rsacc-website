const fs = require('fs');
const path = require('path');

console.log('🔍 Checking project structure...\n');

// Required files
const requiredFiles = [
  'package.json',
  'tailwind.config.js',
  'postcss.config.js',
  'next.config.js',
  'app/layout.js',
  'app/page.js',
  'app/globals.css',
  'app/components/Header.js',
  'app/components/Hero.js',
  'app/components/About.js',
  'app/components/Members.js',
  'app/components/Membership.js',
  'app/components/MissionVision.js',
  'app/components/Gallery.js',
  'app/components/Contact.js',
  'app/components/Footer.js',
  'README.md'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

console.log('\n📋 Project Summary:');
console.log('-------------------');

if (allFilesExist) {
  console.log('🎉 All required files are present!');
  console.log('\n🚀 Next steps:');
  console.log('1. Run: npm install');
  console.log('2. Run: npm run dev');
  console.log('3. Open: http://localhost:3000');
  console.log('\n📚 Check README.md for detailed instructions');
} else {
  console.log('⚠️  Some files are missing. Please check the list above.');
}

// Check package.json content
if (fs.existsSync('package.json')) {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('\n📦 Package Info:');
  console.log(`   Name: ${packageJson.name}`);
  console.log(`   Version: ${packageJson.version}`);
  console.log(`   Next.js: ${packageJson.dependencies.next}`);
  console.log(`   React: ${packageJson.dependencies.react}`);
  console.log(`   Tailwind: ${packageJson.devDependencies.tailwindcss}`);
}