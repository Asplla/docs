---
title: 安装HACS
date: 2024/08/14
---
# 安装HACS
## 先决条件

- 您正在运行[Home Assistant](https://www.home-assistant.io/)版本`2024.4.1`或更新版本。
- 您正在运行[受支持的](https://github.com/home-assistant/architecture/blob/master/adr/0012-define-supported-installation-method.md)Home Assistant 安装。
- 您可以访问 Home Assistant 配置文件所在的文件系统。
- 您知道如何访问 Home Assistant 日志文件。
- 您知道HACS 中**没有** [附加组件。](https://www.home-assistant.io/docs/glossary/#add-on)
- 您拥有稳定的互联网连接，且可用数据充足或没有数据上限
## 安装
您使用[HACS 下载脚本](https://github.com/hacs/get)来设置 HACS。

:::tip
如果您不确定您正在使用哪种类型的家庭助理或如何找到它，那么您可能不应该使用 HACS（或任何其他自定义集成）。
:::

1、打开终端

2、进入容器终端
```bash
docker exec -it homeassistant bash
```
3、运行 HACS 下载脚本
```bash
wget -O - https://get.hacs.xyz | bash -
```
4、脚本完成后，重启容器

### 错误排查
#### CTRL+V对您不起作用
- 尝试`CTRL+SHIFT+V`一下
- 尝试`SHIFT+INS(insert)`一下
- 尝试`Right-click`一下
## 卸载
:::tip
只有当您不再打算使用 HACS 时才应该这样做
:::
如果您想删除 HACS，则需要按照以下步骤进行操作。
1. 使用集成页面上的垃圾桶图标。
2. 重启 Home Assistant**很重要**
3. 重启 Home Assistant（是的，这需要做两次）**很重要**
4. 删除`hacs`下的目录`custom_components`。
5. 重新启动 Home Assistant。
### 撤销 OAuth 访问权限
如果您使用带有 OAuth 的 HACS，您还需要撤销访问权限才能完成删除。

1. 导航至[https://github.com/settings/applications](https://github.com/settings/applications)
2. 在应用程序列表中找到 HACS，点击 HACS 右侧的 3 个点
3. 选择“撤销”