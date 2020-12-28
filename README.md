# 使用说明
## 1. 复制 github 代码 <code> git clone https://github.com/pengushe/home.git </code>  

## 3. 添加 .gitignore 文档 （如果有就不用重复添加,文档内可以添加 node_modules)

## 4. 更改 package.json 里的内容 
### a.  改成为 "homepage": "https://pengushe.github.io/home",
![home 文档](https://github.com/pengushe/home/blob/main/home%20page---package.png) 
### b. <code>"scripts": { "deploy": "gh-pages -d dist"}, </code> 注明 将来deploy 的代码将会从本地文档里disk 里截取 
![dist 文档](https://github.com/pengushe/home/blob/main/disk%20folder.png) 
## 5 新建立一个 disk 文档
## 6 在disk 文档里添加index.html
## 7 在终端添加此代码 <code>npm run deploy</code>
## 8 在gp-pages 里查看添加的代码
## 请登陆 https://pengushe.github.io/home/
