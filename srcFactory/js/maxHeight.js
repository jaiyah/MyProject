/**
 * Created by MACK on 15. 3. 11..
 */


var arr = [20,77,50,40,55];
var max = 0; // 최대값이 저장될 변수

// max process
for(var i = 0; i < arr.length; i++) {
    // max값이 현재값보다 작다면
    if(max < arr[i]) {
        max = arr[i];
    }
}

// console.log(max);

/*
 //////////////////////////////////////////////////////////////////
 라디오 클래스는 형제 요소에서 해당 클래스를 제거하고, 자신에게 해당 클래스를 적용합니다.
 //////////////////////////////////////////////////////////////////
 */
(function ($) {

    $.fn.radioClass = function (className) {

        return this.each(function () {
            $(this).siblings('.' + className).removeClass(className).end().addClass(className);
        });

    }

})(jQuery);

function maxH(a){
    var t = a.map(function(){return $(this).height()}).get();
    return Math.max.apply(null, t);
}
var topLiNode = $('#all_menu>ul>li:eq(4)').prevAll(),
    bottomLiNode = $('#all_menu>ul>li:eq(3)').nextAll();
topLiNode.css('height',maxH(topLiNode) +'px');
bottomLiNode.css('height',maxH(bottomLiNode) +'px');

$('li').map(function(){
    return $(this).height();
}).get();


var maxHeight = Math.max.apply(null, $("div.panel").map(function ()
{
    return $(this).height();
}).get());

// 위와 같은 코드
var heights = $("div.panel").map(function (){
        return $(this).height();
    }).get();

    maxHeight = Math.max.apply(null, heights);



// Maximum height in a set of elements
// $(elements).height( getMaxHeight($(elements)) );

var getMaxHeight = function ($elms) {
    var maxHeight = 0;
    $elms.each(function () {
        // In some cases you may want to use outerHeight() instead
        var height = $(this).height();
        if (height > maxHeight) {
            maxHeight = height;
        }
    });
    return maxHeight;
};

var maxWidth = 0;

$('img').each(function(index){
    if ($(this).width() > maxWidth)
    {
        maxWidth = $(this).width();
    }
});
var maxWidth = $('img').max('width');


// maxHeight 플러그인 구현

(function($){

    $.fn.maxHeight = function(){
        var max = 0;
        this.each(function(){
            max = Math.max(max, $(this).height());
        });
        return max;

    }

})(jQuery);

var max = $('li').maxHeight();