<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1{
  font-size:20px;
  font-weight: bold;
  font-family: Arial Black,serif;
  width:70%;
  color:#1E1E24;
  padding: 30px;
  overflow:auto;
  margin-left:15%
}
</style>
