var Monitor = require('../dppage-monitor/index');
var url = 'http://www.huawei.com';
var opt = { 
	page: {
		settings: 
		{
			resourceTimeout: 30000,
			acceptLanguage: "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
			userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
			accept: "*/*",
			acceptEncoding: "gzip, deflate",
			DNT: 1,
			referer: url
		},
		viewportSize: {"width":1440,"height":900}
	}};
var monitor = new Monitor(url, opt);
monitor.on('debug', function (data) {
    console.log('[DEBUG] ' + data);
});
monitor.on('error', function (data) {
    console.error('[ERROR] ' + data);
});

monitor.capture(function (code) {
    console.log('[DONE ] ' + (new Date));
});
