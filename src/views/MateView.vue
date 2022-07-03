<template>
  <div>
    <h1>Here are the Mate Drinks we know.</h1>
    <h3>Not seeing your favourite Mate Drink? Add it here!</h3>
    <div><mate-create-form @created="addMate"></mate-create-form></div>
    <p />
      <div class="container-fluid">
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
      mates: []
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
  }
}
</script>

<style scoped>

</style>
