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

## Component

- SFC: Single File Component(Template + Script + style)
- Vue의 가장 강력한 기능 중 하나(기본 HTML element를 확장하여 재사용 가능한 코드로 캡슐화)
- 캡슐화 : 객체의 속성, 행위를 하나로 묶고 실제 구현 일부를 내부에 감추어 은닉

![Component basics](https://vuejs.org/assets/components.7fbb3771.png)

위와 그림과 같이 컴포넌트의 집합으로 관리가 된다.

### VUE 2

```vue
new Vue({
  el: '#example',
  // 지역 컴포넌트
  components: {
    'my-component': { template: '<div></div>' }
  }
})

// 전역 컴포넌트
Vue.component('my-component', {
  template: '<div>사용자 정의 컴포넌트</div>'
})
```

### VUE 3   

```vue
// 뷰 어플리케이션 생성
const app = Vue.createApp(...)

// todo-item 란 이름의 새로운 컴포넌트 선언
app.component('todo-item', {
  template: '<div></div>'
)}

// 어플리케이션을 마운트
app.mount(...)


// 지역 컴포넌트
const ComponentA = {}
const ComponentB = {}
const ComponentC = {}

const app Vue.createApp({
  components: {
    'component-a': ComponentA,
    'component-b: ComponentB,
    'component-c': ComponentC,
  }
})
```

> [참고] Vue2와 Vue3의 지역이라는 범위과 다르다.

- 컴포넌트는 Vue 인스턴스이기도 합니다. 그러므로 모든 옵션 객체를 사용할 수 있습니다.(루트에만 사용하는 옵션은 제외) 같은 라이프사이클 훅을 사용할 수 있습니다.