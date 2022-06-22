<template>
  <div>
    <h1>Here are the Mate Drinks we know.</h1>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="mate in mates" :key="mate.id">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{ mate.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Preis: {{ mate.price }}</h6>
              <p class="card-text">User Rating: Mate/10</p>
              <a href="#" class="card-link">Add to Favourites</a>
              <a href="#" class="card-link">Rate this Mate</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MateView',
  data () {
    return {
      mates: []
    }
  },

  mounted () {
    console.log('Hello World')
    const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/mates`
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
