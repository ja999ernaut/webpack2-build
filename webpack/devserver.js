module.exports = function(){
	return {
		devServer: {
			port: 9000,
			stats: 'errors-only',
			open: true,
			overlay: {
				warnings: true,
				errors: true
			}
		}
	}
};