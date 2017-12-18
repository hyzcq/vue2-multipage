# 本项目是基于vue2+webpack多页面结构搭建

## 安装
 安装需配置node环境，node>= 4.0.0,npm >= 3.0.0.
 项目根目录执行npm install, 一般国内npm安装较慢，配置过淘宝镜像可执行cnpm installj进行安装
## 编译
  npm run dev
## 打包
  npm run build
  dist为打包后的生产版本

## 文件结构

    Code
        |--- build
        |--- config
        |--- dist   构建后的目录结构
            |--- index.html         <---------------|
            |--- login.html          <------------   |
            |--- user_center.html          <--------   |   |
            |--- static                     |   |   |
                |--- js                     |   |   |
                    |--- user_center.[hash].js  ---|   |   |
                    |--- login.[hash].js  -------|   |
                    |--- index.[hash].js -----------|
                    ...
        |--- src 源码
            |--- assets css、js、图片等公共资源
            |--- components 公共组件
            |--- views  多页面文件夹（每个子文件夹对应相应的页面，文件夹名称为页面名称）
                |--- index
                    |--- index.html
                    |--- index.js
                    |--- index.vue    
                    |--- components 页面内部的组件
                    |--- routes 如果存在页面路由，在此处配置页面路由配置
                        |--- index.js
                |--- login
                    |--- login.html
                    |--- login.js
                    |--- login.vue
                |--- user_center
                    |--- user_center.html
                    |--- user.js
                    |--- user_center.vue
                    |...
                ...
        |--- static  （静态资源文件夹）
        |--- package.json

