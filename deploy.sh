

set -e


yarn build

cd dist



git init 

git add -A

git commit -m "github 自动化部署"

git push -f git@github.com:GW0420/sun-admin.git master:gh-pages

cd -

rm -rf dist

