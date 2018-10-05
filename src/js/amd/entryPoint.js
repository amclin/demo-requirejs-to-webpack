// This file serves as the entry point for the JS execution
// The filename does not need to match the module name, because the path
// mapping is defined in manifest.js


// <h3>Entrypoint Script</h3>
// <p>Example of running an entrypoint script call to require() with dependencies defined in the manifest.</p>
require(['jquery', 'sampleData'], function(jQuery, sampleData) {
    // jQuery can be addressed as a local object
    var output1 = jQuery('.example.entry .output-1 .result');
    output1.removeClass('unstarted').addClass('success').html(sampleData.success);
    // Or using the global window.$
    var output2 = $('.example.entry .output-2 .result');
    output2.removeClass('unstarted').addClass('success').html(sampleData.success);
});

require(['async']);