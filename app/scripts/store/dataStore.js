let DataStore = {
	resumeList: {
		experience: [
			{
				company: '深圳市东方博雅科技有限公司',
				position: '前端开发工程师',
				duty: [
					'新版运营平台前端底层框架搭建&前端主要开发（vue+webpack）。',
					'微信项目底层框架搭建（backbone+requirejs）。',
					'日常游戏活动开发，主要负责博雅公司地方棋牌系列的活动开发。'
				],
				duration:'2014/12-2016/6'
			},
			{
				company: '北京博看文思信息技术有限公司厦门分公司',
				position: '前端开发培训',
				duty: [],
				duration:'2014/7-2014/12'
			},
			{
				company: '厦门云迈谛动力软件有限公司',
				position: '技术支持',
				duty: [
					'查找问题，处理因系统漏洞产生的数据错误。',
					'调研客户问题及需求，跟进客户反馈。',
					'基础的功能性测试及PB7.0&PB9.0程序编译。',
					'帮助客户升级程序及程序功能，培训客户使用系统。'
				],
				duration:'2013/9-2014/7'
			}
		],
		skills: [
			{
				name: 'HTML+CSS',
				content: [
					'熟练掌握DIV+CSS布局，能够精确布局、手写有语义性、符合规范、利于后期维护和改版的代码。',
					'熟悉移动端混合布局，掌握移动端界面显示问题并能处理大部分显示异常，对css属性的性能有所了解。',
					'对响应式布局原理有所了解，能够使用媒体查询获取相对应的样式。',
					'熟悉HTML5，包含audio、video、新增结构标签等；熟悉CSS3新增属性，能够使用圆角、阴影、变形等效果进行元素渲染，使用过渡和动画实现动态效果，掌握三维动画效果的实现。',
					'了解Canvas的基本原理，能使用Canvas进行简单的图像绘制和动画。',
				]
			},
			{
				name: 'JavaScript',
				content: [
					'熟练掌握JavaScript，能书写原生JS交互特效，掌握DOM操作、了解作用域、事件响应机制、计时器的使用等。',
					'理解AJAX运行机制，能够使用AJAX获取JSON的数据。',
					'熟悉MVC框架backbone、MVVM框架vue。',
					'熟悉AMD模块化开发requirejs。',
					'熟悉函数库UnderscoreJS、CSS预编译SASS、工具库JQuery等。',
					'对移动端动画性能有所研究'
				]
			},
			{
				name: '开发工具',
				content: [
					'熟练使用Chrome浏览器的控制台功能进行代码调试，了解firebug。',
					'了解自动化构建工具gulp，熟悉模块加载打包器webpack。',
					'熟练使用Sublime进行开发，熟悉常用插件提升开发效率。',
					'掌握PhotoShop基本操作和常用快捷键，辅助快速精准布局。',
					'熟练使用SVN进行代码托管。',
				]
			},
			{
				name: '其他',
				content: ['了解PHP基本语法；了解SQL。']
			}
		],
		education: [
			{
				school:'东北师范大学',
				major:'软件工程',
				duration:'2009-2013'
			}
		],
		project: [
			{
				name: '新版运营平台3.0',
				url: 'http://op.boyaa.com/',
				desc: '运营平台是为提升活动中心服务，主要面向运营群体开发的PC端&移动端网站，功能包含活动操作，应用配置，话费服务、微信服务等。<br>运营平台3.0在2.0基础上实现前后端分离，主要使用vue+webpack搭建前端框架，进一步实现网站自适应显示，在多设备上均可舒适操作。新版平台提高了访问、数据查询速度，同时改进页面UI及交互提升用户体验。',
				duty: [
					'用vue+webpack搭建前端底层框架。',
					'运营活动部分模块、应用配置部分模块、用户中心模块的开发和维护。',
					'了解用户需求，制定项目计划，分配资源，把控进度，适时调整模块优先级和开发时间，承担项目的结果。'
				],
				position: '项目负责人、前端主要开发人员',
				tech: 'vue、webpack、vue-router、jquery等',
				duration: '2016/2-2016/4上线，持续维护中',
				images:['./app/images/demo/list.jpg','./app/images/demo/list.jpg']
			},
			{
				name: '微信项目 / 乐山棋牌等公众号',
				url: '',
				desc: '微信项目是为公司各类棋牌公众号提供服务，如菜单内容编辑、账号管理、微信推广活动等。',
				duty: [
					'用backbone+requirejs搭建微信活动部分底层框架，和游戏活动接轨。',
					'研究微信内置功能，实现微信账户管理、菜单管理功能。',
					'前期规划微信项目的发展方向和具体实施，后期项目转交，目前主要配合开发。'
				],
				position: '前端主要开发人员',
				tech: 'backbone、requirejs、JSSDK等',
				duration: '2015-10开始，持续维护中',
				images:['./app/images/demo/list.jpg','./app/images/demo/list.jpg']
			},
			{
				name: '游戏活动 / 如四川棋牌、大连棋牌、宜宾棋牌等',
				url: '',
				desc: '游戏活动是为提高用户活跃度、提升用户留存率等，快速开发短期上线的游戏客户端内嵌web页面。当前线上主流的框架是backbone+requirejs，正在往组件化转型，同时兼容新老活动。',
				duty: ['活动日常开发和活动框架升级、维护。'],
				position: '地方棋牌系列活动前端开发人员',
				tech: 'backbone、underscore、requirejs等',
				duration: '日常工作',
				images:['./app/images/demo/list.jpg','./app/images/demo/list.jpg']
			}
		],
		contact: {
			tel : '15880292290',
			wechat: 'chenab_347',
			qq: '348549708'
		}
	},

	worksList : {
		1: {
			name: '新版运营平台3.0',
			url: 'http://op.boyaa.com/',
			desc: '运营平台是为提升活动中心服务，主要面向运营群体开发的PC端&移动端网站，功能包含活动操作，应用配置，话费服务、微信服务等。<br>运营平台3.0在2.0基础上实现前后端分离，主要使用vue+webpack搭建前端框架，进一步实现网站自适应显示，在多设备上均可舒适操作。新版平台提高了访问、数据查询速度，同时改进页面UI及交互提升用户体验。',
			duty: [
				'用vue+webpack搭建前端底层框架。',
				'运营活动部分模块、应用配置部分模块、用户中心模块的开发和维护。',
				'了解用户需求，制定项目计划，分配资源，把控进度，适时调整模块优先级和开发时间，承担项目的结果。'
			],
			icon: './app/images/a.jpg',
			tech: 'vue、webpack、vue-router、jquery等',
			duration: '2016/2-2016/4上线，持续维护中',
			images:['./app/images/demo/list.jpg','./app/images/demo/list.jpg']
		},
		2: {
			name: '微信项目 / 乐山棋牌等公众号',
			url: '',
			desc: '微信项目是为公司各类棋牌公众号提供服务，如菜单内容编辑、账号管理、微信推广活动等。',
			duty: [
				'用backbone+requirejs搭建微信活动部分底层框架，和游戏活动接轨。',
				'研究微信内置功能，实现微信账户管理、菜单管理功能。',
				'前期规划微信项目的发展方向和具体实施，后期项目转交，目前主要配合开发。'
			],
			icon: './app/images/a.jpg',
			tech: 'backbone、requirejs、JSSDK等',
			duration: '2015-10开始，持续维护中',
			images:['./app/images/demo/list.jpg','./app/images/demo/list.jpg']
		},
		3: {
			name: '敬请期待',
			icon: './app/images/a.jpg',
			url: '',
			desc: '',
			duty: '',
			duration: '',
			images:[]
		},
		4: {
			name: '游戏活动 / 如四川棋牌、宜宾棋牌等',
			url: '',
			desc: '游戏活动是为提高用户活跃度、提升用户留存率等，快速开发短期上线的游戏客户端内嵌web页面。当前线上主流的框架是backbone+requirejs，正在往组件化转型，同时兼容新老活动。',
			duty: ['活动日常开发和活动框架升级、维护。'],
			icon: './app/images/a.jpg',
			tech: 'backbone、underscore、requirejs等',
			duration: '日常工作',
			images:['./app/images/demo/list.jpg','./app/images/demo/list.jpg']
		},
	},	
}

export default DataStore;