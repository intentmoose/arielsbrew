
$(function () {
    var message = "Hey, come back! 😜";
    var original;

    $(window).focus(function() {
        if(original) {
        document.title = original;
        }
    }).blur(function() {
        var title = $('title').text();
        if(title != message) {
        original = title;
        }
        document.title = message;
    });
});

// $('.fs').click(function(){
//     $('.fs-pressed').show();
//     $('.vu-pressed').hide();
//     $('.default').hide();
// });
// $('.vu').click(function(){
//     $('.vu-pressed').show();
//     $('.fs-pressed').hide();
//     $('.default').hide();
// });
 