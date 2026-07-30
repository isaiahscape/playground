const fs = require('fs');

function replaceText(file, search, replace) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(search, replace);
  fs.writeFileSync(file, content);
}

replaceText('src/components/CommandMenu.tsx', 'View Build Status Badges & CI Workflows', 'View Commit Status Matrix');
replaceText('src/components/pages/ProjectDetailPage.tsx', 'Build Status & CI', 'Commit Matrix & Status');
replaceText('src/components/Navbar.tsx', 'Build Status', 'Status');

