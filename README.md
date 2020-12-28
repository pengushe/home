# 使用说明
## 1. 复制 github 代码 <code> git clone https://github.com/pengushe/home.git </code>  

## 3. 添加 .gitignore 文档 （如果有就不用重复添加,文档内可以添加 node_modules)

## 4. 更改 package.json 里的内容 
### a.  改成为 "homepage": "https://pengushe.github.io/home",
### b. <code>"scripts": { "deploy": "gh-pages -d dist"}, </code> 注明 将来deploy 的代码将会从本地文档里的dist 文档里截取

### c 确认 dependencies 里边有 gh-pages
## 5 建立一个 disk 文档
## 6 在disk 文档里添加index.html
## 7 在终端添加此代码 <code>npm run deploy</code>
## 请登陆 https://pengushe.github.io/home/
