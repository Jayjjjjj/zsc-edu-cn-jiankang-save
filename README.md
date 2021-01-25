# 个人健康信息上报


* 在微信公众号，绑定成功后，会返回一个 oid

* 通过 oid 可以拿到 cookie

* 表单提交的时候需要带上 cookie



每隔 4 个小时自动打卡（可以接入方糖 / 钉钉机器人提醒打卡情况）

```bash
echo "0 */4 * * * /usr/bin/python /root/jiankangSave.py > /dev/null" >> /var/spool/cron/root
```
# 一键申请越狱

使用[Auto.js](https://github.com/Ericwyn/Auto.js/releases)执行

* 在微信公众号，绑定成功后，会返回一个 oid

* 通过 oid 可以拿到 cookie

* 表单提交的时候需要带上 cookie

填写辅导员ID和你的Uaid即可使用


## Changelog


### JianKangSave[0.2] - 2020-5-16

- 添加表单修改提醒（防止突然改表单加字段，目前只是粗略判断）

### JianKangSave[0.3] - 2021-1-25

- 更新字段

### OneKeyJailBreak[0.2] - 2020-12-09

- 增加字段 是否出省
