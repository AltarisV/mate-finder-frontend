<template>
    <div class="card h-100" style="width: 18rem;">
      <h5 class="card-header">{{ mate.name }}</h5>
      <img :src="getImage(mate.name)" class="card-img-top" alt="" width="300" height="300">
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Price: {{ mate.price }}€</li>
          <li class="list-group-item">User Rating:
            <fa icon="star" style="color: #f8cd0b"/>
            <fa icon="star" style="color: #f8cd0b"/>
            <fa icon="star" style="color: #f8cd0b"/>
            <fa icon="star" style="color: #f8cd0b"/>
            <fa icon="star" style="color: #f8cd0b"/>
          </li>
          <li class="list-group-item">
            <p>
              <a class="btn btn-primary" data-bs-toggle="collapse" :href="'#collapse'+ mate.id" role="button" aria-expanded="false" :aria-controls="'collapse' + mate.id">
                Rate this Mate
              </a>
            </p>
            <div class="collapse" :id="'collapse'+ mate.id">
              <div>
                <fa icon="star" style="color: #f8cd0b" @click="rateMate(mate.id, 1)"/>
                <fa icon="star" style="color: #f8cd0b" @click="rateMate(mate.id, 2)"/>
                <fa icon="star" style="color: #f8cd0b" @click="rateMate(mate.id, 3)"/>
                <fa icon="star" style="color: #f8cd0b" @click="rateMate(mate.id, 4)"/>
                <fa icon="star" style="color: #f8cd0b" @click="rateMate(mate.id, 5)"/>
                {{ selectedRating }}
              </div>
              <div class="collapse">
                <button type="button" :id="'btnRate'+mate.id" class="btn btn-success btn-confirm">Confirm Review</button>
              </div>
            </div>
          </li>
        </ul>
<!--        <button type="button" class="btn btn-danger" @click="deleteMate(mate.id)">Delete</button>-->
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
  data () {
    return {
      selectedRating: 5
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
    /*    deleteMate (mateLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/mates/' + mateLocation
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error))
    }, */
    rateMate (mateId, rating) {
      const parent = document.querySelector('#collapse' + mateId)
      const starsWrapper = parent.children[0].children
      this.selectedRating = rating
      for (let i = 0; i < starsWrapper.length; ++i) {
        if (i < rating) {
          starsWrapper[i].children[0].setAttribute('fill', 'currentColor')
          continue
        }
        starsWrapper[i].children[0].setAttribute('fill', '')
      }
      const btnCollapsable = parent.querySelector('.collapse')
      if (btnCollapsable === null) return
      const show = btnCollapsable.classList.contains('show') ? false : 'show'
      if (!show) return
      btnCollapsable.classList.remove(...btnCollapsable.classList)
      btnCollapsable.classList.add('collapsing')
      setTimeout(() => {
        const height = btnCollapsable.firstChild.clientHeight + 'px'
        btnCollapsable.style = 'height: ' + height
      }, 10)
      setTimeout(() => {
        btnCollapsable.classList.add('collapse', show)
      }, 340)
    }
  }
}
</script>

<style scoped>

</style>
