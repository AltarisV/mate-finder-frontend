<template>
<div>
  <h1>Find out where to grab some Mate near you!</h1>
  <div>
    <h1>Your coordinates:</h1>
    <p>{{ myCoordinates.lat.toFixed(3) }} Latitude, {{ myCoordinates.lng.toFixed(3) }} Longitude</p>
  </div>
  <GMapMap
    :center="myCoordinates"
    :zoom="zoom"
    style="width: 100vw; height: 500px"
    ref="mapRef"
    @dragend="handleDrag"
  ></GMapMap>
</div>
</template>

<script>
export default {
  name: 'FinderView',
  data () {
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0
      },
      zoom: 15
    }
  },
  created () {
    // use saved data if exists
    if (localStorage.center) {
      this.myCoordinates = JSON.parse(localStorage.center)
    } else {
      // get user coordinates from browser request
      this.$getLocation({})
        .then(coordinates => {
          this.myCoordinates = coordinates
        })
        .catch(error => alert(error))
    }
    if (localStorage.zoom) {
      this.zoom = parseInt(localStorage.zoom)
    }
  },
  mounted () {
    // add map to data object
    // eslint-disable-next-line no-return-assign
    this.$refs.mapRef.$mapPromise.then(map => this.map = map)
  },
  methods: {
    handleDrag () {
      // get user map data and store in localstorage
      let center = {
        lat: this.map.getCenter().lat().toFixed(3),
        lng: this.map.getCenter().lng().toFixed(3)
      }
      let zoom = this.map.getZoom()

      localStorage.center = JSON.stringify(center)
      localStorage.zoom = zoom
    }
  }
}
</script>

<style scoped>

</style>
