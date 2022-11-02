### 1. App.vue의 template

> '이곳은 App.vue입니다' 출력, 메시지 prop

```vue
<template>
  <div id="app">
    <h1>이곳은 App.vue 입니다.</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="SSAFY 여러분을 응원합니다!"/>
  </div>
</template>
```

### 2. HelloWorld.vue의 template

> '이곳은 HelloWorld.vue 입니다' 출력, 내려받은 메시지 출력

```vue
<template>
  <div class="hello">
    <hr>
    <h2>이곳은 HelloWorld.vue 입니다.</h2>
    <h3>{{ msg }}</h3>
    
  </div>
</template>
```