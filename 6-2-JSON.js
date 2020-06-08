/*
JSON,
JavaScript Object Notation의 약자로, JS에서 객체를 만들 때 사용하는 표현식을 의미한다.
이 표현식은 사람도 기계도, 이해하기 쉬우면서 크기도 작게 차지하기에 XML대신 JSON으로 설정을 저장하거나, 데이터를 전송할 때 많이 사용한다.
json 공식 홈페이지 : https://www.json.org/json-ko.html
*/

// JSON API
var js = "{ '프로퍼티명': '값', '프로퍼티명2': '값2' }"
var real_js = JSON.parse(js)    
for(var data in real_js){
    print(data)
}
// JSON.parse() 
// 인자값으로 전달된 문자열을 js 객체로 변환
var text_js = JSON.stringify(real_js)
console.log(text_js)
// JSON.stringify()
// 인자값으로 전달한 js 객체를 문자열로 변환

/*
JSON은 서버와 통신할 때, 제대로 뽕을 뽑는데, Ajax에서 서버와 값을 주고받을 때, JSON을 활용할 수 있다.
*/