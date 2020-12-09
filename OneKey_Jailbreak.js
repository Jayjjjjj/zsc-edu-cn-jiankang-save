//输入你的uaid
var uaid = "";
var d=new Date();
var year=d.getYear()+1900;
var month=d.getMonth()+1;
var day=d.getDate();
var hour=d.getHours();
//设置辅导员ID
var body="id=&outProvince=0&counsellorid=
&leaveDate="+year+"-"+month+"-"+day+"+"+hour+"&backDate="+year+"-"+month+"-"+day+"+22"+"&reason=1&goAddress=1&viaAddress=1&linkman=1&linkmanTel=1&attachFile=&fileToUpload="; 
var headers={
        'Host': 'srv.zsc.edu.cn',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; SM-G977N Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045331 Mobile Safari/537.36 MMWEBID/5110 MicroMessenger/7.0.19.1760(0x2700133F) Process/tools WeChat/arm64 NetType/WIFI Language/zh_CN ABI/arm64',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
		    'X-Requested-With': 'com.tencent.mm',
		    'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'gzip,deflate',
        'Cookie' : '',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
	};
var r = http.get("http://srv.zsc.edu.cn/f/wxJKOauthCode?code="+uaid, {
   headers:headers 
});
var cookies = "REG_PERSON_SESSION_ID="+uaid+";"+r.headers["Set-Cookie"];
headers["Cookie"]=cookies;
headers["Referer"]="http://srv.zsc.edu.cn/m/affairs/gooutApply/form";
var apply = http.request("http://srv.zsc.edu.cn/m/affairs/gooutApply/save",
{
    body:body,
    headers:headers,
    method:'POST',
});
toast("执行完毕");
