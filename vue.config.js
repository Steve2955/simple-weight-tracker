module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/simple-weight-tracker/': '/',
	pwa: {
		name: 'Weight Tracker',
		themeColor:'#49ad85',
		msTileColor:'#56CC9D',
		manifestOptions:{
			display: 'standalone',
			short_name: 'Weight Tracker',
			description: 'A simple example web-app built using Vue.js.',
			background_color : '#56CC9D',
		}
	},
}
