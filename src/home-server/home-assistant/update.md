---
title: 升级
date: 2024/08/14
---
# Home Assistant 升级
使用Docker进行升级非常简单。调整以下命令，以便：

- `/PATH_TO_YOUR_CONFIG` 指向要存储配置并运行它的文件夹。确保保留：`/CONFIG` 部分。
- `MY_TIME_ZONE` 是一个tz数据库名称，类似于`tz=America/Los_Angeles`。
- `D-Bus` 是可选的，但如果您计划使用蓝牙集成，则是必需的。

## 拉取Docker镜像
```bash
docker pull ghcr.io/home-assistant/home-assistant:stable
```
如果返回“图像是最新的（Image is up to date）”，可以跳过本步骤。
## 停止正在运行的容器
```bash
docker stop homeassistant
```
## 删除旧版本容器
```bash
docker rm homeassistant
```
## 在Docker创建新容器
```bash
docker run -d \
  --name homeassistant \
  --privileged \
  --restart=unless-stopped \
  -e TZ=Aisa/Shanghai \
  -v /opt/homeassistant:/config \
  -v /run/dbus:/run/dbus:ro \
  --network=host \
  ghcr.io/home-assistant/home-assistant:stable
```
Home Assistant容器运行后，应该可以使用http://host:8123访问Home Assistant（替换为系统的主机名或IP）。您可以继续操作。