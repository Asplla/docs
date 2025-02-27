# Alist
::: tip
仅适用于 Linux amd64/arm64 平台。
:::

## 一键脚本
### 安装
```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install
```
### 更新
```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update
```
### 卸载
```bash
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall
```
## 自定义路径
默认安装在 `/opt/alist` 中。 自定义安装路径，将安装路径作为第二个参数添加，必须是绝对路径（如果路径以 alist 结尾，则直接安装到给定路径，否则会安装在给定路径 alist 目录下），如 安装到 `/root：`
```bash
# Install
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s install /root
# update
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s update /root
# Uninstall
curl -fsSL "https://alist.nn.ci/v3.sh" | bash -s uninstall /root
```
- 启动: `systemctl start alist`
- 关闭: `systemctl stop alist`
- 状态: `systemctl status alist`
- 重启: `systemctl restart alist`
## 获取密码
需要进入脚本安装AList的目录文件夹內执行如下命令
```bash
# 随机生成一个密码
./alist admin random
# 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码
./alist admin set NEW_PASSWORD
```
