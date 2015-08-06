$.extend($, {

    'version': $.fn.jquery,

    'ex': $.expr[':'],

    'selector': (function(){
        if (document.querySelector) {
            return function(selector) {
                return document.querySelector(selector);
            };
        }
    })(),

    '$': function(el) {
        // 유효성검사 (Validation)
        if (el.jquery) {el = el[0]; }
        if (typeof el === 'string') {el = $.selector(el); }
        if (!el || !el.nodeName) { throw new TypeError('타입오류: DOM객체 또는 $() 필요'); }
        // 처리 코드
        return $.data(el, 'this') || $.data(el, 'this', $(el));
    },

    'activeElement': function() {
        return document.activeElement;
    }

});

$.extend($.ex, {

    'focusable' : function(el) {
        el.focus();
        return el === $.activeElement();
    }

});

var skipNavPlugIn = 'skipNav';

// 싱글톤 패턴
var _skipNav = {
    // 초기화 수행
    'init': function($el, options, callback) {
        this.$el = $el.eq(0);
        this.$links = this.$el.find('a');
        this.options = $.extend(true, {}, $.fn[skipNavPlugIn].defaults, options);
        this.controls();
        this.events();

        return this;
    },
    'controls': function() {
        // 클래스 설정
        this.$el.addClass(this.options.containerClass);
        this.$links.addClass(this.options.linkClasses.hidden + ' ' + this.options.linkClasses.focusable);
    },
    'events': function() {
        this.$el.on('click', 'a', $.proxy(this.linksAction, this));
    },
    'linksAction': function(e) {
        e.preventDefault();
        var path = e.target.getAttribute('href');
        var $target = $.$(path);
        if( this.options.setContainerFocusing ) {
            $target
                .attr('tabindex', 0)
                .focus()
                .on('blur', $.proxy(this.setTabIndexMinus, $target));

        } else {
            $target.find('*:focusable').eq(0).focus();
        }

        this.options.setHash && (window.location.hash = path);
    },
    'setTabIndexMinus': function() {
        // console.log(this); // _skipNav 객체
        this.attr('tabindex', -1);
    }
};



if (!$.fn[skipNavPlugIn]) {

    $.fn[skipNavPlugIn] = function (options, callback) {
        // SkipNav 객체 초기화 수행
        var __skipNav = _skipNav.init(this, options, callback);

        this.data('_skipNav', __skipNav);

        return this;
    };

    $.fn[skipNavPlugIn].defaults = {
        'containerClass': 'skipNav-container',
        'linkClasses': {
            'hidden': 'a11y-hidden',
            'focusable': 'focusable'
        },
        'setHash': !true,
        'setContainerFocusing': true
    };

}




// $.skipNav() 사용법
// skipNav()를 적용할 콘테이너 요소 선택자 전달
$('#skip-menu').skipNav({
    'setHash': false,
    'setContainerFocusing' : !false
});