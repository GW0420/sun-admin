

set -e


yarn build

cd dist



git init 

git add -A

git commit -m "gitee 自动化部署"

git push -f git@gitee.com:li-li-liming/sun-admin.git master:gh-pages

cd -

rm -rf dist

