# Vue3

## Instances

- 모든 Vue app은 인스턴스를 생성하여 시작한다. -> 뷰로 화면을 개발하기 위해 필수적으로 생성해야 하는 기본 단위
- Instances를 통해서 app의 진입점을 설정한다.
- Template rendering, data binding, components, etc
- 모든 Vue 인스턴스는 생성 시 초기화 과정을 거치며 DOM을 업데이트하는 일련된 과정 속에서 Life-cycle을 지닌다.

### Vue 2

```typescript
var app = new Vue({
    el: '#app',
    data: {
        message: '안녕하세요. Vue!'
    }
})
```

 - new + Vue(전역 객체)

 - options
   1. el: Dom 요소를 지정
   2. data: data 객체 정의
   3. computed: 함수로 정의; 계산된 값 반환
   4. methods: 함수로 정의; 계산된 값 반환
   5. watch: 지정한 변수가 변경되었을 때 정의된 함수를 실행


### Vue 3

```js
import { createApp } from 'vue';

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
```

- createApp(new Vue 대신 사용)

- options(Vue2 기본 옵션 사용 가능)
  1. mount: Dom 요소를 지정(el대신 mount를 chaining하여 지정)