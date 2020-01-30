# 使用vuePress搭建个人博客

## 一、安装node
1. 进入node.js网站https://nodejs.org/en/download/，下载node.js
2. 点击node-v12.pkg直接安装
* Node.js v12.14.1 to /usr/local/bin/node
* npm v6.13.4 to /usr/local/bin/npm
3. 安装完成后，使用以下命令查看是否成功
* node -v
* npm -v

## 二、安装vuePress
1. 命令行输入：npm install vuepress

## 三、安装nginx
1. 添加yum源 
sudo rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
2. 安装nginx  sudo yum install nginx
3. 查看nginx安装路径  rpm -ql nginx
4. 卸载nginx rpm -e nginx
5. 服务启动/停止
* 设置开机启动
  sudo systemctl enable nginx
* 启动服务
  sudo systemctl start nginx
* 停止服务
  sudo systemctl restart nginx

2. 地址栏输入: http://ip
如： http://119.3.253.16



076923075330



