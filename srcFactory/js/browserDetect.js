/**
 * Created by MACK on 15. 3. 11..
 */


//browser detect
var browser = (function() {
    var s = navigator.userAgent.toLowerCase();
    var match = /(webkit)[ \/](\w.]+)/.exec(s) ||
        /(opera)(?:.*version)?[ \/](\w.]+)/.exec(s) ||
        /(msie) ([\w.]+)/.exec(s) ||
        /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) ||
        [];
    return { name: match[1] || "", version: match[2] || "0" };
}());

// uesing
if(browser.name == 'msie'){

}

function initUA() {	//useragent check
    var ua = navigator.userAgent.toLowerCase();
    var name = '';
    if(ua.match('msie 7.0')){name='ie7'}
    else if(ua.match('msie 8.0')){name='ie8'}
    else if(ua.match('msie 9.0')){name='ie9'}
    else if(ua.match('msie 10.0')){name='ie10'}
    else if(ua.match('rv:11.0')){name='ie11'}
    else if(ua.match('chrome')){name='chrome'}
    $('body').addClass(name);
};initUA();

function appendScript(pathToScript) {
    var head = document.getElementsByTagName("head")[0];
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = pathToScript;
    // head.insertBefore(js,head.childNodes[0]); // ����
    // head.appendChild(js);
}


var mediaPopupManager={
    init: function(){
        $("body").append( this.drawPopupArea() );
    },
    showMediaPopup: function( mURL ){	// popup show
        $(".mediaWrap iframe").attr( "src", mURL );
        this.showPopupBg();
        $(".mediaWrap").fadeIn("fast");
        this.setCenterPosition( $(".mediaWrap") );
    },
    closeMediaPopup: function(){ // popup hide
        $(".mediaWrap").fadeOut("fast");
        $(".mediaWrap iframe").attr( "src", "" );
        this.hidePopupBg();
    },
    drawPopupArea: function(){
        var tHtml;
        // bg html
        tHtml = "<div class=\"popup_bg\" style=\"display:none;background:#000;filter:alpha(opacity=50);opacity:0.50;position:fixed;top:0;right:0px;bottom:0;left:0;z-index:500;display:none;width:100%;height:100%\"></div>"

        // popup html <- �����ο� �� html �籸��
        tHtml += "<div class=\"mediaWrap\" style=\"display:none\"><div><a href='#' class='ico_pcl' onclick='javascript:mediaPopupManager.closeMediaPopup()'></a></div><iframe width=\"610\" height=\"762\" frameborder=\"no\" scrolling=\"no\"></iframe></div>";
        return tHtml;
    },
    showPopupBg: function(){  // bg show
        $(".popup_bg").fadeIn("fast");
    },
    hidePopupBg: function(){ // bg hide
        $(".popup_bg").fadeOut("fast");
    },
    setCenterPosition: function( obj ){ // center position
        obj.css("position", "fixed");
        obj.css("top", "50%");
        obj.css("z-index", "600");
        obj.css("margin-top", this.getMarginVal( obj.css("height") ) + "px");
        obj.css("left", "50%");
        obj.css("margin-left", this.getMarginVal( obj.css("width") )  + "px");
    },
    getMarginVal: function( val ){
        return parseInt( parseInt( val ) / 2 ) * -1;
    }
}

