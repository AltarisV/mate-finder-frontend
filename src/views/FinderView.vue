<template>
  <div id="finderBody">
    <div id="finderDiv">
      <h1>Find out where to grab some Mate near you!</h1>
      <div>
        <h3>Watch the magic happen:</h3>
        <button type="button" class="btn btn-primary" @click="findMate">Activate MateFinder!</button>
        <GMapMap
          :center="myCoordinates"
          :zoom="zoom"
          style="width: 70vw; height: 500px; margin-left: 15%; border-radius: 30px;"
          ref="mapRef">
          <GMapMarker
            :key ="marker.id"
            v-for="marker in markers"
            :position="marker.position"
            :icon= '{
          url: "https://drinkmate-finder.herokuapp.com/img/Club-Mate.5859593a.png",
          scaledSize: {width: 77, height: 77},
          labelOrigin: {x: 16, y: -10}
          }'
            :clickable="true"
            :draggable="false"
            @click="openMarker(marker.id)">
            <GMapInfoWindow
              :closeclick="true"
              @closeclick="openMarker(null)"
              :opened="openedMarkerID === marker.id">
              <div>
                <h5>{{marker.name}}</h5>
                <p>{{marker.address}}</p>
              </div>
            </GMapInfoWindow>
          </GMapMarker>
          <GMapMarker
            :position="myCoordinates"
            :icon='{
          url: "https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png",
          scaledSize: {width: 40, height: 40},
          labelOrigin: {x: 16, y: -10}
          }'
            :clickable="false"
            :draggable="false"
          />
        </GMapMap>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'FinderView',
  data () {
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0
      },
      zoom: 15,
      places: [],
      markers: [
        {
          id: 'id',
          position: {
            lat: 0,
            lng: 0
          },
          name: 'name',
          address: 'address'
        }
      ],
      openedMarkerID: null
    }
  },
  created () {
    // get user coordinates from browser request
    this.$getLocation({})
      .then(coordinates => {
        this.myCoordinates = coordinates
      })
      .catch(error => alert(error))
  },
  methods: {
    findMate () {
      const URL = 'https://cors-proxy-webtech.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.myCoordinates.lat + encodeURIComponent(',') + this.myCoordinates.lng + '&type=supermarket&radius=5000&key=AIzaSyCjJgSzZu0QC8QFrfSfbLZhqJPcclz9xlI'
      axios.get(URL)
        .then((response) => {
          this.places = response.data.results
          this.showPlacesOnMap()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    showPlacesOnMap () {
      this.places.forEach((place) => {
        const lat = place.geometry.location.lat
        const lng = place.geometry.location.lng
        const id = place.place_id
        const name = place.name
        const address = place.vicinity
        this.markers[this.markers.length] = { id, position: { lat, lng }, name, address }
      })
    },
    openMarker (id) {
      this.openedMarkerID = id
    }
  }
}
</script>

<style scoped>
button{
  margin: 30px;
  padding:10px;
  padding-left: 30px;
  padding-right: 30px;
}
#finderDiv{
  margin-top: 2%;
  opacity: 90%;
}
</style>
