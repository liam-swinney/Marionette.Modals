module.exports = {
	sass: {
		outputStyle: 'nested',
		onError: function(err) {
			return $.notify().write(err)
		}
	},
	htmlmin: {
		minifyJS: true,
		minifyCSS: true,
		removeComments: true,
		collapseWhitespace: true,
		removeAttributeQuotes: true,
		removeEmptyAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true
	},
	imgPaths: [
		'./Images/**/raw_*.svg',
		'./Images/**/raw_*.png',
		'./Images/**/raw_*.jpg'
	],
	autoprefix: {
		browsers: ['last 2 versions']
	},
	uncss: {
		html: ['index.html']
	},
	kraken: {
			key: 'f015613e4377a24834e90823a946c093',
			secret: '73bbc6f7c8085848af31d7e9eb1fd63b22d6e30e',
			lossy: false
	},
	gzip: {
		threshold: '1kb',
		gzipOptions: {
			level: 9
		}
	}
};
