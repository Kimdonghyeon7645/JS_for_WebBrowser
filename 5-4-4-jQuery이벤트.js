/*
이벤트 처리에도 jQuery만의 기능이 있다.
jQuery로 이벤트를 처리해주면 코드의 분량이 대폭 줄며, 크로스 브라우징도 알아서 해준다.

(하지만, jQuery의 시대는 이제 저물었다...)
*/

// 순수하게 구현했을 때
var target = document.getElementById('target')
if(target.addEventListener){
    target.addEventListener('click', function(event){
        alert('타겟이 클릭되었습니다!')
    })
} else {
    target.attachEvent('onclick', function(event){
        alert('타겟이 클릭되었습니다!')
    })
}

// jQuery를 사용했을 때
$('#target').on('click', (event) => alert('(jQuery)타겟이 클릭되었습니다!'))


/*
그러면 jQuery의 이벤트 API를 알아보자.

여기서의 가장 중요한 API는 바로 on 이다. 이 on API로 jQeury에서는 간편하게 이벤트를 다룬다.
기본적인 on의 형식은,

.on( events [, selector ] [, data ], handler(eventObject) )
과 같으며, 각각의 요소는 아래와 같다.
event : 등록하고자 하는 이벤트 타입 (ex> "click")
selector : 해당 엘리먼트(요소)의 하위 엘리먼트(요소)를 이벤트 타겟으로 필터링
data : 이벤트가 실행될 때 핸들러로 전달될 데이터를 설정
handler : 이벤트 핸들러 함수
*/

$('ul').on('click','a, li', function(event){
    console.log(this.tagName);
})
/*
여기서 독특한 점이라면, 지금같이 selector 부분에 인자값을 넘겨주게 될때,
ul가 이벤트 타입이 되는 것이 아니라,
on에서 selector 부분에서 지정해준, 하위 요소 선택자가 이벤트 타입이 된다.
그래서 위 예시에선 a, li 요소에서만 이벤트가 발생하고, ul 요소엔 이벤트가 발생하지 않는다.


그리고 jQuery는 존재하지 않는 요소에도 이벤트를 등록(바인딩)할 수 있으며, 이를 late binding 이라 한다.
또한 하나의 요소에 여러 이벤트 타입을 동시에 등록(바인딩)하는 다중 바인딩도 가능하다.

$(대상).on('이벤트타입1 이벤트타입2[...]', 이벤트 핸들러)

근데 이말고, 이벤트 타입별로 다른 핸들러를 호출하고 싶으면,

$(대상).on({
    '이벤트타입1' : 이벤트핸들러1,
    '이벤트타입2' : 이벤트핸들러2,
})

과 같이, 딕셔너리 처럼 이벤트 타입과 핸들러를 매칭시켜주면 된다.
*/

$('#target').off('focus blur', handler);
/*
그리고 이제 이벤트를 제거할 때는 on 의 반댓말인 off 와 같이,
off API로 이벤트를 지우면 된다.
*/
