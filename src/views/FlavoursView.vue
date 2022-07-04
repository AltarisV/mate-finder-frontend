<template>
  <div id="body">
    <div id="flavoursDiv">
      <h1 style="font-weight: bold">Why Mate of all Things?</h1>
      <div>
        <p>
          (Taken from Wikipedia) Germany originally formulated and marketed Club-Mate under the name Sekt-Bronte since 1924.
          The drink was only known regionally until acquired by Loscher and marketed under the name Club-Mate in 1994.
          Since then, many other Mate-Softdrinks have surfaced and are now being enjoyed by Mate-Enjoyers across Europe - especially people from the
          IT-Industry have taken quite a liking to it.
        </p>
        <p>Some Club-Mate bottles include the slogan "man gewöhnt sich daran" which roughly translates into a challenge to the
          drinker, claiming “one gets used to it." </p>
        <br>
        <h3 style="font-weight: bold">
          But how do you get used to it?
        </h3>
        <p>The Mate-Enjoyers behind this website thoroughly recommend making your own "Ice-Mate":</p>
        <p>1. Put your closed(!) Mate-Bottle into your freezer.</p>
        <p>2. After 30-45 Minutes (depends on your freezer, better keep an eye on it) and BEFORE it freezes, take it out.</p>
        <p>3. Open the bottle. Now science will do the rest! Watch the magic happen as the drink inside your bottle freezes
          from the top downwards and turns part of your drink into icey, slushy goodness.</p>
        <p>4. Enjoy!</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'FlavoursView'
}
</script>

<style scoped>
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

#flavoursDiv{
  font-size:20px;
  width:80%;
  color:#1E1E24;
  margin-top: 5%;
  margin-left: 10%;
  margin-bottom: 4%;
  background-color: white;
  border-radius: 20px 100px;
  padding: 30px;
  opacity: 90%;
  box-shadow: 0 8px 6px -6px black;
  overflow:auto;
}
</style>
