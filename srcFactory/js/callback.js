/**
 * Created by MACK on 15. 3. 19..
 */


var lib = {
    loop : function(elms, callback) {
        var i = 0;
        for(; i < elms.length; i++) {
            callback.apply(elms[i]);
        }
    }
};

lib.loop(elms, function(){
    this.show();
})

// jQuery 와 같은 라이브러리의 each 메소드와 유사한 함수다.
