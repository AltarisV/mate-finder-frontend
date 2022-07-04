<template>
  <div id="mateViewPage">
    <h1>Here are the Mate Drinks we know.</h1>
    <h3>Not seeing your favourite Mate Drink? Add it here!</h3>
    <div id="buttonAdd"><mate-create-form @created="addMate"></mate-create-form></div>
    <p />
      <div id="mateContainer" class="container-fluid">
        <mate-card-list :mates="this.mates"></mate-card-list>
      </div>
  </div>
</template>

<script>
import MateCardList from '@/components/MateCardList'
import MateCreateForm from '@/components/MateCreateForm'

export default {
  name: 'MateView',
  components: {
    MateCardList,
    MateCreateForm
  },
  data () {
    return {
      mates: [],
      ratings: []
    }
  },
  methods: {
    addMate (mateLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + mateLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(mate => this.mates.push(mate))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/mates'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((result) => result.forEach((mate) => {
        this.mates.push(mate)
      }))
      .catch((error) => console.log('error', error))

    const ratingsEndpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/ratings'
    const ratingsRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(ratingsEndpoint, ratingsRequestOptions)
      .then((response) => response.json())
      .then((result) => result.forEach((rating) => {
        this.mates.push(rating)
      }))
      .catch((error) => console.log('error', error))
  }
}
</script>

<style scoped>
#mateContainer{
  margin:2%;
  padding:0;
}

#mateViewPage{
  font-weight: normal;
  color:#1E1E24;
  padding: 30px;
}

#buttonAdd{
  margin-top:20px;}
</style>
