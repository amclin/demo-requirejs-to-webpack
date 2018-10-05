// This file serves as an example asyncronously loaded module that is loaded from the entrypoint

// <h3>Async Module</h3>
// <p>Example of running an asynchronous module with dependencies defined in the manifest.</p>
define([
    'jquery',
    'sampleData'
], function(jQuery, sampleData) {
    // jQuery can be addressed as a local object
    var output1 = jQuery('.example.async .output-1 .result');
    output1.removeClass('unstarted').addClass('success').html(sampleData.success);
    // Or using the global window.$
    var output2 = $('.example.async .output-2 .result');
    output2.removeClass('unstarted').addClass('success').html(sampleData.success);
});