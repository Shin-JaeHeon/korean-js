# korean-js
[![npm](https://img.shields.io/npm/v/korean-js.svg?style=flat-square)](https://www.npmjs.com/package/korean-js)
[![npm](https://img.shields.io/npm/dt/korean-js.svg?style=flat-square)](https://www.npmjs.com/package/korean-js)
[![npm](https://img.shields.io/npm/l/korean-js.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)

`korean-js`는 가장 간편한 한국어 처리 라이브러리입니다.

## 종류
> `import Hangul from 'korean-js/hangul'` // 한글<br>
 `import Text from 'korean-js/text'` // 한국어 문자열 처리<br>
 `import Number from 'korean-js/number'` // 숫자와 관련된 처리<br>
 `import Region from 'korean-js/region'` // 지역명 처리<br>

## Hangul
`import Hangul from 'korean-js/hangul'`<br>

한글을 다루는 클래스로, `hangul-js@0.2.5`와 오리지널 함수를 포함하고 있습니다.

 > `hangul-js`의 축약함수(`Hangul.d`, `Hangul.a`)는 포함하고 있지 않습니다. 또한 `hangul-js`의 함수에 관한 설명은  `hangul-js@0.2.5`의 `README.md`에서 가져왔습니다.
### HangulMode
한글처리와 관련된 설정을 담당하는 `enum`입니다.
영문자를 지원하는 경우에는 가독성을 위해 예외적으로 소문자를 사용하는 경우가 있습니다. 
* `correctJosa`에서 사용하는 모드
  * 주격조사(`JuGyeokJosa`로도 접근 가능합니다.) : `이`, `가`
  * 목적격조사(`MokJeokGyeokJosa`로도 접근 가능합니다.) : `을`, `를`
  * 보격조사(`BoGyeokJosa`로도 접근 가능합니다.) : `은`, `는`
  
  
### correctJosa
* str : string 조사를 찾을 단어
* mode : HangulMode 찾을 조사의 종류
올바른 조사를 반환합니다. 
#### 예시
```javascript
import Hangul from 'korean-js/hangul';
Hangul.correctJosa('가방', HangulMode.주격조사); // 이
Hangul.correctJosa('한글', HangulMode.목적격조사); // 을
Hangul.correctJosa('사과', HangulMode.보격조사); // 는
```
### disassemble
`Hangul.disassemble(str:string, grouped:boolean = false)`은 문자열 `str`에 있는 한글을 자음/모음으로 분리하여 문자들의 배열로 돌려줍니다. 이 때 한글이 아닌 문자는 그대로 반환됩니다. `Hangul.d`처럼 짧은 이름으로 사용할 수도 있습니다.

```js
Hangul.disassemble('가나다'); // ['ㄱ','ㅏ','ㄴ','ㅏ','ㄷ','ㅏ']

Hangul.disassemble('ab가c'); // ['a','b','ㄱ','ㅏ','c']

Hangul.disassemble('ab@!23X.'); // ['a','b','@','!','2','3','X','.']
```

같은 홑낱자로 이루어진 겹낱자는 분리되지 않습니다.

```js
Hangul.disassemble('ㄲ'); // ['ㄲ']
```

다른 홑낱자로 이루어진 겹낱자는 분리됩니다.

```js
Hangul.disassemble('ㄳ'); // ['ㄱ','ㅅ']

Hangul.disassemble('ㅚ'); // ['ㅗ','ㅣ']
```

추가적으로 `grouped` 옵션을 `true`로 설정하여 문자열의 각 글자별로 따로 분리할 수 있습니다.

```js
Hangul.d('매드캣MK2', true); 
// [['ㅁ', 'ㅐ'], ['ㄷ', 'ㅡ'], ['ㅋ', 'ㅐ', 'ㅅ'], ['M'], ['K'], ['2']]
```

윈도우에서 두벌식 키보드로 주어진 문자열을 입력할 때 누르는 키들의 배열이라고 생각하면 쉽습니다.

### assemble

`Hangul.assemble(arr:string[])`는 한글 자음/모음들의 배열 `arr`을 인자로 받아 이를 조합한 문자열을 돌려줍니다. 이 때 한글이 아닌 문자는 그대로 반환됩니다. `Hangul.a`처럼 짧은 이름으로 사용할 수도 있습니다.

```js
Hangul.assemble(['ㄱ','ㅏ','ㄴ','ㅏ','ㄷ','ㅏ']); // '가나다'

Hangul.assemble(['a','b','ㄱ','ㅏ','c']); // 'ab가c'

Hangul.assemble(['a','b','@','!','2','3','X','.']); // 'ab@123X.'
```

이 경우에도 두벌식 키보드에서 주어진 키들을 누를 때 만들어지는 문자열을 돌려준다고 생각하면 쉽습니다.

```js
Hangul.assemble(['ㅗ','ㅐ']); // 'ㅙ'

Hangul.assemble(['ㄹ','ㅂ','ㅅ']); // 'ㄼㅅ'
```

`Hangul.disassemble` 함수와 역함수 관계가 아님에 주의하세요.

```js
Hangul.a(Hangul.d('옽ㅏ')); // '오타' ('옽ㅏ' 가 아님)
```

### search

`Hangul.search(a:string, b:string)`는 문자열 `a`가 문자열 `b`를 포함하는지 검사합니다. 이때 포함관계는 '두벌식 키보드 기준으로 a문자열을 입력할 때 누르는 키들의 배열이 b문자열을 입력할 때 누르는 키들의 배열을 포함한다'로 정의합니다. 반환값이 0보다 크거나 같다면 포함합니다.

```js
Hangul.search('달걀','닭'); // 0

Hangul.search('달걀','알'); // -1
```

`indexOf`함수와 다릅니다.

```js
var a = '도우미'
  , b = '도움';
  
a.indexOf(b); // -1

Hangul.search(a, b); // 0
```

실제 사용할 때에는 하나의 단어를 여러개의 문자열과 비교하므로 `Hangul.Searcher`를 사용하는게 편합니다. 내부적으로 한번만 자모 분리를 수행하므로 효율적입니다.

```js
var searcher = new Hangul.Searcher('닭');

searcher.search('달걀'); // 0
searcher.search('달구지'); // 0
searcher.search('달무리'); // -1
```

### rangeSearch

`Hangul.rangeSearch(a:string, b:string)`는 `a` 문자열에서 `b` 문자열을 모두 찾고 일치하는 범위를 `a` 문자열 상의 인덱스로 돌려줍니다. 만약 `b` 문자열을 찾지 못했다면 빈 배열을 돌려줍니다. 검색 시스템에서 일치하는 부분을 강조하려고 할 때 유용합니다.

```js
var a = '간장공장공장장',
    b = '공장';

Hangul.rangeSearch(a, b); // [[2, 3], [4, 5]]
```

이하 함수들은 인자로 문자를 받습니다. 자바스크립트에서는 문자 타입이 없으므로 문자열로 대체합니다. 길이가 2 이상인 문자열의 경우 첫 한글자에 대해 판단합니다.

### isComplete(c)

주어진 문자가 완성된 한글인지 아닌지 판단합니다. 완성된 한글이란 유니코드로 '가'(0xAC00) ~ '힣'(0xD7A3) 사이에 있는 문자를 말합니다. 'ㄱ', 'ㅙ' 등은 완성된 한글이 아닙니다.
`Hangul.isCompleteAll(str)` 형태로 `str`의 모든 문자가 완성된 한글인지 판단할 수 있습니다.

### isConsonant(c)

주어진 문자가 자음인지 판단합니다. 
`Hangul.isCosonantAll(str)` 형태로 `str`의 모든 문자가 자음인지 판단할 수 있습니다.

### isVowel(c)

주어진 문자가 모음인지 판단합니다.
`Hangul.isVowelAll(str)` 형태로 `str`의 모든 문자가 모음인지 판단할 수 있습니다.

### isCho(c)

주어진 문자가 초성으로 쓰일 수 있는지 판단합니다. 'ㄲ'은 초성으로 쓰일 수 있지만 'ㄳ'는 초성으로 쓰일 수 없습니다.
`Hangul.isChoAll(str)` 형태로 `str`의 모든 문자가 초성인지 판단할 수 있습니다.

### isJong(c)

주어진 문자가 종성으로 쓰일 수 있는지 판단합니다. 'ㄲ'은 종성으로 쓰일 수 있지만 'ㄸ'는 종성으로 쓰일 수 없습니다.
`Hangul.isJongAll(str)` 형태로 `str`의 모든 문자가 종성인지 판단할 수 있습니다.

### endsWithConsonant(c)

주어진 문자가 자음으로 끝나는지 판단합니다. 받침이 있거나 자음 하나가 인자로 주어지면 `true`를 아닌 경우 `false`를 반환합니다. 한글이 아닌 경우는 `false`를 반환합니다. 은/는 이/가 구분에 사용할 수 있습니다.

### endsWith(c, t)

주어진 문자가 t(타겟)으로 끝나는지 판단합니다. t로 끝나면 `true`를 아닌 경우 `false`를 반환합니다. 로/으로 굽분에 사용할 수 있습니다.

## Text
`import Text from 'korean-js/text'`<br>

> 주의, 위 코드는 `Text`객체를 덮어 쓸 수도 있습니다. `Text`를 사용할 경우에는 `text`나 `textKR`등으로 대체하여야합니다

### dateMode
* 띄어쓰기
  * `''` 또는 `' '`이외의 구분자가 필요한 경우에는 아래의 `TRIM` 및 `SPACE` 대신 문자열을 사용할 수 있습니다. 
  * TRIM : `'''` 예) `2019년4월8일20시19분48초`
  * SPACE : `' '` 예) `2019년 4월 8일 20시 19분 48초`
* 표시 범위
  * 시간
    * SECOND : 초까지 표시합니다. 예) `20시 19분 48초` 
    * MINUTES : 분까지 표시합니다. 예) `20시 19분`
    * HOUR : 시간까지 표시합니다. 예) `20시`
  * 날짜
    * DATE : 일까지 표시합니다. 예) `2019년 4월 8일`
    * MONTH : 월까지 표시합니다. 예) `2019년 4월` 
    * YEAR : 년까지 표시합니다. 예) `2019년`
    * MONTH_DATE : 월, 일만 표기합니다. 예) `4월 8일`

### dateTime(date, mode)
* date : Date
* mode : dateMode =  `[dateMode.SPACE, dateMode.DATE, dateMode.SECOND]`

날짜 + 시간을 반환합니다. 예) `2019년 4월 8일 20시 19분 48초`

### date(date, mode)
* date : Date
* mode : dateMode =  `[dateMode.SPACE, dateMode.DATE]`

날짜를 반환합니다. 예) `20시 19분 48초`

### time(date, mode)
* date : Date
* mode : dateMode =  `[dateMode.SPACE, dateMode.DATE]`

시간을 반환합니다. 예) `2019년 4월 8일`

## Number
`import Number from 'korean-js/number'` <br>
> 주의, 위 코드는 기본 객체인 `Number`를 덮어쓰게 됩니다. `Number`를 사용할 경우에는 `number`나 `numberKR`등으로 대체하여야합니다

숫자를 처리하는 부분입니다.
###  NumberMode
`import NumberMode from 'korean-js/number/mode`
* `NumberMode.Unit4` : 숫자는 한국어로 바꾸지않고, 4자리마다 단위를 추가합니다.
  * 예 : `toKorean(1234567890, NumberMode.Unit4) // 12억3456만7890`
* `NumberMode.Unit` : 숫자는 한국어로 바꾸지않고, 각각에 단위를 추가합니다.
  * 예 : `toKorean(1234567890, NumberMode.Unit4) // 1십2억3천4백5십6만7천8백9십`

### toKorean(n, ?mode)
* n : `number`, 한국어로 바꿀 숫자입니다.
* mode : `NumberMode`, 변환 방법에 대해 설정합니다.

mode가 설정되지 않으면 모두 한국어로 바꿉니다. <br>
```
toKorean(1234567890) // 십이억삼천사백오십육만칠천팔백구십
```
### toNumber(str)
* str : `string` 숫자로 바꿀 한국어입니다.

아래와 같은 유형의 한국어를 숫자로 바꿀 수 있습니다.
* `삼천이백오십오`
* `삼천백오십오`
* `삼천백십오`
* `삼천백십오`

`천`, `백`, `십` 앞에서는 `일`을 생략해도 정상적으로 인식이 가능합니다.
## Region
`import Region from 'region'`
지역명을 다루는 클래스로, `region-name-kr`를 사용하고 있습니다.

### shortProvinceName2(list, ?allow3words)
* list : 지역 리스트
* allow3words : 부울경, 수도권같이 3글자로 된 축약어의 허용 여부

충청남도와 충청북도가 들어있으면 충청도로 줄이고 싶을때, `list`내에 있는 다음과 같은 지역명을 축약시킵니다. 
  
* 전북 + 전남 = 전라
* 전북 + 전남 + 광주 = 호남
* 경북 + 경남 = 경상
* 경북 + 경남 + 부산 + 대구 + 울산 = 영남
* 경남 + 부산  + 울산 = 부울경
* 충북 + 충남 = 충청
* 충북 + 충남 + 세종 = 호서
* 서울 + 인천 = 경인
* 서울 + 인천 + 경기 = 수도권

### shortProvinceName(list)
`부산 광역시` 처럼 띄어쓰기가 되있는 경우, `부산광역시`로 `trim`됩니다. 

다음과 같은 지역명을 축약시킵니다.
* 전라북도 + 전라남도 = 전라도
* 전라북도 + 전라남도 + 광주광역시 = 호남 지방
* 경상북도 + 경상남도 = 경상도
* 경상북도 + 경상남도 + 부산광역시 + 대구광역시 + 울산광역시 = 영남 지방
* 경상남도 + 부산광역시  + 울산광역시 = 부울경
* 충청북도 + 충청남도 = 충청도
* 충청북도 + 충청남도 + 세종특별자치시 = 호서 지방
* 서울특별시 + 인천광역시 = 경인 지방
* 서울특별시 + 인천광역시 + 경기도 = 수도권

### japanese(list, mode = 2)
시도, 시군구를 일본어로 번역합니다.

`부산 광역시` 처럼 띄어쓰기가 되있는 경우, `부산광역시`로 `trim`됩니다.

#### mode
mode가 0일 경우 한자(`世宗特別自治市`)로 반환됩니다.

mode가 1일 경우 카타카나(`セジョントゥクピョルジャチシ`)로 반환합니다.

mode가 2일 경우 한자, 카타카나 병기(`世宗(セジョン)特別自治市`)로 반환합니다.

고성군의 경우 고성군(경남), 고성군(강원)으로 구분해야 변환이 가능합니다.

#### 기본 예시
* 특별/광역시/도 : `세종특별자치시`  → `世宗(セジョン)特別自治市`
* 특별/광역시 구/군 :`서울특별시 강남구` → `ソウル特別市　永登浦(ヨンドゥンポ)区`
* 도 시/군 : `강원도 평창군` →  `江原(カンウォン)道　平昌(ピョンチャン)郡`
* 도 시 구 : `경기도 수원시 권선구` →  `京畿(キョンギ)道　水原(スウォン)市　勧善(クォンソン)区`
