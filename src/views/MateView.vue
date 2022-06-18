<template>
<h1>Here are the Mate Drinks we know.</h1>
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
