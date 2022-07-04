<template>
  <div id="body">
    <div id="aboutDiv">
      Mate-Finder is A University project for the Business Computing 3rd semester-course "Web Technologies".
      Project developed by: Lucas Leiva (MNr. 579799) and Leon Schüßler (MNr. 579906).
      <p>A small Web-Application for students to rate different brands and flavours of Mate-Softdrinks and save those ratings online.</p>
      The plan is to later on add the ability to search for, and find those kinds of drinks via a Maps API.
      At the moment, the site only searches for nearby stores that might sell Mate drinks.
    </div>
  </div>

</template>

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

#aboutDiv{
  font-size:20px;
  /*font-weight: bold;*/
  /*font-family: Arial Black,serif;*/
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
</style>
