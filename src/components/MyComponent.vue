
<template>
  <div>
      <!-- NOTE : Adding class attribute -->
      <h1>{{ message }}</h1>
      <span class="high-light">Foo Bar</span>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data () {
    return {
        message: 'My Component'
    }
  }
}
</script>
<style>
/*NOTE: Global Style*/
:root {
    --SO-red: red;
}
.my-component {
    & h1{
        color:var(--SO-red);
    }
}
</style>
<style scoped>
/*NOTE: Local Style*/
.high-light{
    color:blue;
    font-weight:900;
}
</style>
