# korean-js
[![npm](https://img.shields.io/npm/v/korean-js.svg?style=flat-square)](https://www.npmjs.com/package/korean-js)
[![npm](https://img.shields.io/npm/dt/korean-js.svg?style=flat-square)](https://www.npmjs.com/package/korean-js)
[![npm](https://img.shields.io/npm/l/korean-js.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)


## number
`import Number from 'korean-js/number'` <br>
> 주의, 위 코드는 기본 객체인 `Number`를 덮어쓰게 됩니다. `Number`를 사용할 경우에는 `number`나 `numberKr`등으로 대체하여야합니다

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

## region
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
