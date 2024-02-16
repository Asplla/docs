# 安装 
## 一键自动安装脚本
### 安装说明
- cpolar默认安装路径 /usr/local/bin/cpolar,
- 安装脚本会自动配置systemd服务脚本，启动以后，可以开机自启动。
- 如果第一次安装，会默认配置一个简单的样例配置文件，创建了两个样例隧道，一个web，一个ssh
- cpolar配置文件路径: /usr/local/etc/cpolar/cpolar.yml
### 环境需求
该脚本适用于Ubuntu16.04/18.04/20.04及以后，Centos7/8及以后版本，树莓派最新官方镜像，及支持systemd的新式Linux操作系统，该脚本会自动判断CPU架构（i386/amd64/mips/arm/arm64等等），自动下载对应cpolar客户端，并自动部署安装。
### 安装（国内使用）
```shell
curl -L https://www.cpolar.com/static/downloads/install-release-cpolar.sh | sudo bash
```
### 安装（国外使用）
```shell
curl -sL https://git.io/cpolar | sudo bash
```
### 查看版本号，有正常显示版本号即为安装成功
```shell
cpolar version
```
### TOKEN认证
登录cpolar官网[后台](https://dashboard.cpolar.com/get-started)，点击左侧的`验证`，查看自己的认证token，之后将token贴在命令行里
```shell
cpolar authtoken <YOUR_AUTHTOKEN>
```
### 简单穿透测试
```shell
cpolar http 8080
```
按ctrl+c退出
### 向系统添加服务
```shell
sudo systemctl enable cpolar
```
### 启动cpolar服务
```shell
sudo systemctl start cpolar
```
### 查看服务状态

```shell
sudo systemctl status cpolar
```
### 登录后台，查看隧道在线状态
https://dashboard.cpolar.com/status
### 安装完成
可以参考系列文章进一步使用cpolar——[`linux系列教程文章`](https://www.cpolar.com/blog/build-a-website-on-ubuntu-system)
### Cpolar Web UI
cpolar web UI管理界面，默认端口为`9200`。如需修改默认端口号，请查阅常见问题下的相关教程进行修改。

cpolar本地安装成功后，可通过浏览器访问cpolar web UI管理界面，以【 http://本地ip地址:9200 】形式访问，如[http://127.0.0.1:9200/](http://127.0.0.1:9200/)或[http://localhost:9200/](http://localhost:9200/)均可访问到cpolar web ui管理界面【也可在同个局域网下不同的设备上进行访问】，使用cpolar账号登录即可。
