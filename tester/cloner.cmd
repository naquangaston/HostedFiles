mkdir github-upload
cd github-upload
touch README.md
git init
git add README.md
git commit -m “Initial commit”
git remote add origin https://github.com/USERNAME/REPOSITORY-NAME.git
git push -u origin master
