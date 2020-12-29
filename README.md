# 使用说明
## 1. 复制 github 代码 <code> git clone https://github.com/pengushe/home.git </code>  

## 2. 添加 .gitignore 文档 （如果有就不用重复添加,文档内可以添加 node_modules)

## 3. 确认 package.json 里的内容已经更改 
### a.  改成为 "homepage": "https://pengushe.github.io/home",
![home 文档](https://github.com/pengushe/home/blob/main/image/home%20page---package.png) 
### b. <code>"scripts": { "deploy": "gh-pages -d dist"}, </code> 注明 将来deploy 的代码将会从本地文档里disk 里截取 
![dist 文档](https://github.com/pengushe/home/blob/main/image/disk%20folder.png) 
## 4 在disk 文档里添加更改后的index.html
## 5 在终端添加此代码 <code>npm run deploy</code>
## 6 在gp-pages 里查看添加的代码
![查看 文档](https://github.com/pengushe/home/blob/main/image/ph-pages.png) 
## 请登陆 https://pengushe.github.io/home/
