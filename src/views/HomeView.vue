<template>
  <div id="body">
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Mate-Finder, your place for rating and finding Mate-Softdrinks."/>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}

</script>

<style>
#body{
  background-image:url("https://www.healthyoptions.com.ph/_uploads/gallerize_2/fe5df232cafa4c4e0f1a0294418e5660_01-22-18_12-42-33.jpg");
  width: 100vw;
  height:93.8vh;
  background-repeat: no-repeat;
  background-size: cover;
  filter: saturate(30%);
  margin:0;
  padding:0;
  position: absolute;
  overflow:auto;
}

.home{
  font-size:20px;
  font-weight: bold;
  font-family: Arial Black,serif;
  width:50%;
  color:#1E1E24;
  margin-top: 10%;
  margin-left: 25%;
  margin-bottom: 10%;
  background-color: white;
  border-radius: 20px 100px;
  padding: 30px;
  opacity: 90%;
  box-shadow: 0 8px 6px -6px black;
  overflow:auto;
}

img{
  width:50%;
}

</style>
