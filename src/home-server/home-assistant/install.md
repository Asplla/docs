---
title: 安装
date: 2024/08/14
---
# Home Assistant 安装
安装好Docker环境后执行下面的代码即可。
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