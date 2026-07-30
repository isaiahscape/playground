const fs = require('fs');

let content = fs.readFileSync('src/components/pages/StatusPage.tsx', 'utf8');
content = content.replace('CI/CD Build Status & Workflow Matrix', 'GitHub Commit Matrix');
content = content.replace('Real-time build pipeline metrics across the FOSS ecosystem.', 'Real-time repository commit metrics across the FOSS ecosystem.');
fs.writeFileSync('src/components/pages/StatusPage.tsx', content);

let content2 = fs.readFileSync('src/components/pages/HomePage.tsx', 'utf8');
content2 = content2.replace('Status Matrix', 'Commit Matrix');
fs.writeFileSync('src/components/pages/HomePage.tsx', content2);
