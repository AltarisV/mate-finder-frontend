<template>
<div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col" v-for="mate in mates" :key="mate.id">
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
