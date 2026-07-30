const fs = require('fs');

function replaceFile(path, regex, replacement) {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(regex, replacement);
  fs.writeFileSync(path, content);
}

replaceFile(
  'src/components/ProjectCard.tsx',
  /\{project\.badges\.map\(\(badge\) => \(\s*<BuildBadge key=\{badge\.id\} badge=\{badge\} compact=\{true\} \/>\s*\)\)\}/,
  '<BuildBadge repoFullName={project.repo} compact={true} />'
);

replaceFile(
  'src/components/pages/StatusPage.tsx',
  /\{project\.badges\.map\(\(badge\) => \(\s*<BuildBadge key=\{badge\.id\} badge=\{badge\} \/>\s*\)\)\}/g,
  '<BuildBadge repoFullName={project.repo} />'
);

replaceFile(
  'src/components/pages/ProjectDetailPage.tsx',
  /\{project\.badges\.map\(\(b\) => \(\s*<BuildBadge key=\{b\.id\} badge=\{b\} \/>\s*\)\)\}/,
  '<BuildBadge repoFullName={project.repo} />'
);

console.log("Updated components");
