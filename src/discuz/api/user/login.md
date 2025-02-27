# 用户名密码登录接口

## 接口说明
用户通过用户名和密码进行登录认证。

## 请求信息
- **接口URL**: `/plugin.php?id=api&mod=user&op=auth&ac=login&meth=password`
- **请求方式**: POST
- **Content-Type**: application/x-www-form-urlencoded

## 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| username | string | 是 | 用户名 |
| password | string | 是 | 登录密码 |
| platform | string | 否 | 登录平台标识 |
| deviceId | string | 否 | 设备唯一标识 |

## 响应数据

### 成功响应
```json
{
    "code": 0,
    "message": "success",
    "data": {
        "token": "xxxxxxxx",
        "user": {
            "uid": "123",
            "username": "test_user"
        }
    },
    "timestamp": 1234567890
}
```

### 响应参数说明

| 参数名 | 类型 | 说明 |
| --- | --- | --- |
| code | int | 响应状态码 |
| message | string | 响应消息 |
| data | object | 响应数据 |
| data.token | string | 用户登录令牌 |
| data.user | object | 用户信息 |
| data.user.uid | string | 用户ID |
| data.user.username | string | 用户名 |
| timestamp | int | 响应时间戳 |

## 错误码说明

| 错误码 | 说明 | 处理建议 |
| --- | --- | --- |
| MISSING_PARAMETER | 缺少必要参数 | 检查是否提供了必要的username和password参数 |
| PASSWORD_ERROR | 密码错误 | 检查密码是否正确 |
| UNKNOWN_ERROR | 未知错误 | 请联系管理员处理 |

## 示例

### 请求示例
```bash
curl -X POST \
  'http://your-domain/plugin.php?id=api&mod=user&op=auth&ac=login&meth=password' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'username=test_user&password=123456'
```

### 成功响应示例
```json
{
    "code": 0,
    "message": "success",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "user": {
            "uid": "10001",
            "username": "test_user"
        }
    },
    "timestamp": 1707139012
}
```

### 错误响应示例
```json
{
    "code": 1001,
    "message": "密码错误",
    "data": {},
    "timestamp": 1707139012
}
```

## 注意事项
1. 请确保通过HTTPS发送请求，保护用户密码安全
2. 获取到的token需要在后续请求中通过Authorization头部发送
3. token有效期为24小时，请在过期前通过刷新接口更新token