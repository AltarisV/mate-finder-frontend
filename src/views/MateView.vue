<template>
  <div>
    <h1>Here are the Mate Drinks we know.</h1>
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="mate in mates" :key="mate.id">
          <mate-card :mate="mate"></mate-card>
        </div>
      </div>
    </div>
    <mate-create-form @created="addMate"></mate-create-form>
  </div>
</template>

<script>
import MateCard from '@/components/MateCard'
import MateCreateForm from '@/components/MateCreateForm'

export default {
  name: 'MateView',
  components: {
    MateCard,
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
    console.log('Hello World')
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
