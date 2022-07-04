<template>
<div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
  <div class="col-sm" v-for="mate in mates" :key="mate.id">
    <mate-card :mate="mate"></mate-card>
  </div>
</div>
</template>

<script>
import MateCard from '@/components/MateCard'

export default {
  name: 'MateCardList',
  components: { MateCard },
  props: {
    mates: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
