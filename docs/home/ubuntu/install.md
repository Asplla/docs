# 制作U盘启动

## 1、下载系统镜像
https://cn.ubuntu.com/download
## 2、格式化启动U盘
使用如下命令列出所有磁盘，找到U盘，并对U盘进行格式化为FAT32格式。
```shell
// 查找U盘盘符
diskutil list
// U盘格式化（将disk1替换为实际盘符）
diskutil partitionDisk /dev/disk1 MBR FAT32 UNTITLED 0b
```
## 3、刻录系统到U盘
```shell
// 首先卸载U盘（disk1替换为实际盘符）
diskutil umountDisk /dev/disk1
// 使用DD命令刻录U盘（输入密码后需要等待一段时间）
sudo dd if=[IOS文件的绝对地址] of=[盘符] bs=10m
```
