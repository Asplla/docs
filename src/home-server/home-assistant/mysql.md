---
title: 使用MYSQL数据库
date: 2024/08/14
---
# Home Assistant 使用MYSQL数据库
## 简介
Homeassistant正常运行后每天要产生大量传感器数据及日志，其各种事件及传感信息默认使用sqlite本地存储数据，随着数据量不断增加，系统性能也会受到影响。
现将数据保存到远程mysql数据库中，使得数据可长久化保存，为将来数据分析提供相应数据源。
## 实现方法
### MYSQL创建数据库和用户
在MYSQL中创建 **homeAssistant** 数据库和用户名
### 修改HomeAssistant配置文件
- 在HomeAssistant目录下的 **configuration.yaml** 配置文件新增下方代码
```yaml
recorder:
    db_url: mysql://USERNAME:PASSWORD@SERVER_IP:3306/DB_NAME?charset=utf8
```
替换 **USERNAME** **PASSWORD** **SERVER_IP** **DB_NAME** 
### 重启HomeAssistant
重启HomeAssistant后，相应的数据便迁移到了mysql远程数据库中。
### 监测 MySQL 数据库大小的 sensor
```yaml
sensor:
	platform: sql
	db_url: mysql://USERNAME:PASSWORD@SERVER_IP:3306/information_schema
	queries:
		name: HOMEASSISTANT_DB_SIZE
		query: “SELECT CONCAT(ROUND(SUM(DATA_LENGTH/1024/1024),2)) AS DB_SIZE FROM TABLES WHERE TABLE_SCHEMA='DB_NAME';”
		column: 'DB_SIZE'
		unit_of_measurement: MB
```
替换 **USERNAME** **PASSWORD** **SERVER_IP** **DB_NAME** 可根据需要使用。