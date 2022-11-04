#!/usr/bin/env sh

# abort on errors
set -e

# clean up previous version
rm -rf docs

# build
npm run build

# move the files to where GitHub Pages will see them
mv dist docs

# navigate into the build output directory
cd docs

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

cd -

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git add -A
git commit 
