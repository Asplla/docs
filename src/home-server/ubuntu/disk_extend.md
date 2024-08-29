---
title: Ubuntu系统盘扩展
date: 2024/08/18
---
:::tip
Ubuntu server 默认使用LVM进行磁盘管理，安装后只使用了硬盘一部分空间，要充分利用硬盘空间，需要扩展现有的逻辑卷;

如果添加新硬盘，需要将其添加到现有的卷组，然后扩展逻辑卷到新硬盘。
:::
## 查看磁盘占用情况
```bash
df -h
```
## 查看现有的卷组
```bash
sudo vgdisplay
```
## 扩展现有的逻辑卷
```bash
sudo lvextend -l +100%FREE /dev/mapper/ubuntu--vg-ubuntu--lv
```
## 重新计算逻辑卷大小
```bash
sudo resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv
```
## 再次查看磁盘使用情况
```bash
df -h
```
至此，整个硬盘空间都可以使用了。