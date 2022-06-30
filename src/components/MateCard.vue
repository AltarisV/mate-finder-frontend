<template>
    <div class="card h-100" style="width: 18rem;">
      <h5 class="card-header">{{ mate.name }}</h5>
      <img :src="getImage(mate.name)" class="card-img-top" alt="">
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Preis: {{ mate.price }}€</li>
          <li class="list-group-item">User Rating: x/10</li>
          <li class="list-group-item">
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" :href="'#collapse'+ mate.id" role="button" aria-expanded="false" :aria-controls="'collapse' + mate.id">
                Rate this Mate
              </a>
            </p>
            <div class="collapse" :id="'collapse'+ mate.id">
              <div class="card card-body">
                Put some Stars in here!
              </div>
            </div>
          </li>
        </ul>
        <button type="button" class="btn btn-danger" @click="deleteMate(mate.id)">Delete</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MateCard',
  props: {
    mate: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImage (mateName) {
      try {
        return require('../assets/' + mateName + '.png')
      } catch (error) {
        return require('../assets/DefaultMate.png')
      }
    },
    deleteMate (mateLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/mates/' + mateLocation
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

</style>
