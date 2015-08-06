/**
 * Created by MACK on 15. 3. 11..
 */


// 버블링 단계의 핸들러 이용

div1.oncick = function(e) {

    e = e || event; // (evnet IE 에서의 이벤트 객체)
    var target = e.target || e.srcElement; // srcElement (IE 에서의 target속성)

    if(target.className == 'd3') {
        // 실행 코드
    } else if (target.className == 'd2') {
        // 실행 코드
    }

    if(target == this) { // 이벤트가 발생한 객체가 현재 요소에서 발생한 것인지 판단(타켓요소의 이벤트 핸들링)
        // 실행 코드
    }


}