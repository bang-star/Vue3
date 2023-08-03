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

## Lifecycle Diagram

![LifeCylcle](https://vuejs.org/assets/lifecycle.16e4c08e.png)

- setup: vue3
- Init Option API: vue2
- beforeCreate: 인스턴스가 생성되기 전
- created: 인스턴스가 생성된 후
- Has pre-compiled template: 데이터나 템플릿이든지 인스턴스 시작점으로부터 연동한 태그에 대해서 어떤 화면이 업데이트될 필요가 있을때 `Complie template on-the-fly`
- beforeMount: 화면을 그려주기 전
- mounted: 화면을 그려준 후
- beforeUpdate/updated: 인스턴스가 생성된 후 데이터나 템플릿에 따라서 화면을 다시 그려준 다음 데이터가 변경되기 전과 후를 감지
- beforeUnmount: 화면이 사라지기전
- unmounted: 화면이 사라질 때 