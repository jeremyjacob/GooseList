var axios = require("axios").default;

var options = {
	method: 'POST',
	url: 'https://markerapi.com/',
	headers: {
		cookie: 'PHPSESSID=bq3q50ui0rvm2bionm0qc526fn',
		authority: 'markerapi.com',
		accept: '*/*',
		'accept-language': 'en-US,en;q=0.9,la;q=0.8',
		'cache-control': 'no-cache',
		'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
		origin: 'https://markerapi.com',
		pragma: 'no-cache',
		referer: 'https://markerapi.com/',
		'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
		'sec-ch-ua-mobile': '?0',
		'sec-ch-ua-platform': '"Windows"',
		'sec-fetch-dest': 'empty',
		'sec-fetch-mode': 'cors',
		'sec-fetch-site': 'same-origin',
		'sec-gpc': '1',
		'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
		'x-requested-with': 'XMLHttpRequest'
	},
	data: { search: 'hhh' }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});