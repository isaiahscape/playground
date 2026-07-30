#!/bin/bash
find src -type f -name "*.tsx" -o -name "*.ts" -o -name "*.css" | xargs sed -i 's/emerald-/red-/g; s/teal-/red-/g; s/cyan-/red-/g; s/blue-/red-/g; s/amber-/red-/g; s/purple-/red-/g; s/green-/red-/g; s/indigo-/red-/g'
