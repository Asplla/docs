---
title: 用户登录
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.23"

---
# POST 用户登录
Base URLs:

* <a href="https://bbs.wxss.fit">正式环境: https://bbs.wxss.fit</a>

# Authentication

# 用户相关

## POST 用户登录
|||
|---|---|
|POST|/api/user/login|

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|username|query|string| 是 |用户名|
|password|query|string| 是 |密码|
|Api-Secret|header|string| 是 |AP安全秘钥|

### 返回示例

:::: code-group
::: code-group-item 成功
```json
{
  "code": 0,
  "msg": "login success",
  "data": {
    "uid": 1,
    "token": "e04fc9c6d55c989f17337fb069f2d79c",
    "expire_in": 1724129381
  }
}
```
:::
::: code-group-item 失败
```json
{
  "code": "400013",
  "msg": "Please do not log in again"
}
```
:::
::::

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|
