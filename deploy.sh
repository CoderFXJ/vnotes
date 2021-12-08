

# 生成静态文件
echo -e "\n\n=========开始打包静态文件...=========\n\n"

npm run build
echo -e "\n\n=========静态文件打包完毕！=========\n\n"

# 进入生成的文件夹

echo -e "\n=========进入public文件夹！=========\n"
cd public/

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

echo -e "\n=========初始化git...=========\n"
git init

echo -e "\n=========将所有更改提交至暂存区=========\n"
git add -A
echo -e "\n=========所有更改提交至暂存区完毕！=========\n"

echo -e "\n=========将暂存区内容添加到本地仓库中=========\n"
git commit -m 'deploy'
echo -e "\n========暂存区内容添加到本地仓库完毕！=========\n"
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>

echo -e "\n=========开始强制推送打包后的博客静态资源......=========\n"
 git push -f git@gitee.com:GiteeFXJ/vnotes.git master:gh-pages
echo -e "\n=========打包后的博客静态资源推送完毕！=========\n"

 echo -e "\n=========返回Vnotes根目录=========\n"
cd ..

echo -e "\n=========将所有源码更改提交至暂存区=========\n"
git add .
echo -e "\n=========所有更改提交至暂存区完毕！=========\n"

echo -e "\n========将暂存区源码添加到本地仓库中=========\n"
git commit -m 'vnotes-src'
echo -e "\n========暂存区内容添加到本地仓库完毕！=========\n"

echo -e "\n=========开始强制推送博客源码=========\n"
git push -f git@gitee.com:GiteeFXJ/vnotes.git 
echo -e "\n=========博客源码推送完毕！=========\n"
# test github action
