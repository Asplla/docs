---
title: 安装
date: 2024/08/14
---
# Docker 安装
## 前言
Docker是一款开源的容器化应用程序，它可以将应用程序及其依赖项打包到一个容器中，从而实现跨平台、可移植性和自包含性。Docker越来越流行，成为云计算和容器化技术中的重要组成部分。
## 前置条件
在安装Docker之前，您应该检查以下要求是否已满足：
- 确保操作系统为64位版本且内核版本不低于3.10；
- 确保操作系统为Linux系统，Windows系统需要先安装适用于本地环境的虚拟机管理器(VirtualBox等)，Mac系统需要先安装Homebrew工具；
- 确保您拥有sudo权限，这将允许您在系统中安装软件包。
## 安装步骤
在完成前置条件之后，请按照以下步骤安装Docker：
### 更新软件包
在开始安装Docker之前，使用以下命令更新现有软件包:
```bash
sudo apt-get update  
sudo apt-get upgrade
```
### 安装必要的软件包
Docker需要一些必要的软件包才能正常运行，包括apt-transport-https，ca-certificates，curl，software-properties-common。使用以下命令安装这些软件包:
```bash
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
```
### 配置Docker官方GPG密钥
使用以下命令下载并添加Docker官方GPG密钥：
```bash
curl -fsSL https://repo.huaweicloud.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```
### 配置Docker软件源
使用以下命令添加Docker软件源：
```bash
sudo add-apt-repository "deb [arch=amd64] https://repo.huaweicloud.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
```
### 安装Docker
使用以下命令安装Docker：
```bash
sudo apt-get update  
sudo apt-get install docker-ce
```
### 启动Docker
使用以下命令启动Docker服务：
```bash
sudo systemctl start docker
```
### 设置Docker自动启动
使用以下命令设置Docker自动启动：
```bash
sudo systemctl enable docker
```
### 验证Docker安装是否成功
使用以下命令检查Docker版本：
```bash
docker version
```
如果安装成功，您将看到Docker版本信息的输出。
### 给用户添加Docker权限
#### 创建Docker用户组
```bash
sudo groupadd docker
```
#### 将目标用户添加到Docker组
```bash
sudo gpasswd -a <USERNAME> docker
newgrp docker #更新用户组
```
#### 更新用户组
```bash
newgrp docker
```
#### 测试是否可以正常使用
```bash
docker images
```
至此，Docker的安装过程已经完成。

按照上述步骤完成安装后，您可以开始在Docker容器中运行应用程序。Docker的优点之一是其跨平台性，因此您可以在各种环境中使用它。