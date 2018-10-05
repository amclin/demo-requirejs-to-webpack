var require = require || {config: function (c) {require = c;}};

require.config({
	baseUrl: 'js/amd',
	waitSeconds: 120,
	paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min',
        'entry': 'entryPoint',
        'sampleData': 'sampleData',
        'async': 'asyncModule'
    },
    map: {},
    shim: {}
});