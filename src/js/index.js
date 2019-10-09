
const API_URL = "https://api.blog-c.com";

$(function(){
	// 获取最新文章列表
	let getIndexContentNew = function () {
		let post_url = API_URL + '/' + 'Article' + '/' + 'NewArticleList';
		$.get(post_url, function(res) {
			if (res.success == true) {
				let left_content = new Vue({
					el: '#index-left-content-new',
					data: {
						content: res.list
					},
					methods: {
						getArticleInfo: function(id) {
							window.location.href = './article/article.html?id=' + id;
						}
					}
				});
			} else {
				getIndexContentNew();
			}
		});
	};
	// 获取热门文章列表
	let getIndexContentHot = function () {
		let post_url = API_URL + '/' + 'Article' + '/' + 'NewArticleList';
		$.get(post_url, function(res) {
			if (res.success == true) {
				let left_content = new Vue({
					el: '#index-left-content-hot',
					data: {
						content: res.list
					}
				});
			} else {
				getIndexContentHot();
			}
		});
	};
	getIndexContentNew();
	getIndexContentHot();
});