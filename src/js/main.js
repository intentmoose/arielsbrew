
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
// 
onResize = function() {
    if($(window).width() > 780) {
        new SimpleBar($('.sec3')[0], { autoHide: false });
    }
}

$(document).ready(onResize);
$(window).resize(onResize);
// new SimpleBar($('.cds')[1], { autoHide: false });
// new SimpleBar($('.tech')[1], { autoHide: false });
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
 