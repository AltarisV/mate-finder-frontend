<template>
  <div>
    <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#mate-create-offcanvas" aria-controls="#mate-create-offcanvas">
      <i class="bi bi-mate-plus-fill"></i>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="mate-create-offcanvas" aria-labelledby="offcanvas-label">
      <div class="offcanvas-header">
        <h5 id="offcanvas-label">New Person</h5>
        <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <form class="text-start needs-validation" id="mate-create-form" novalidate>
          <div class="mb-3">
            <label for="mate-name" class="form-label">Mate-Name</label>
            <input type="text" class="form-control" id="mate-name" v-model="MateName" required>
            <div class="invalid-feedback">
              Please provide the name of the Mate
            </div>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Preis</label>
            <input type="text" class="form-control" id="price" v-model="price" required>
            <div class="invalid-feedback">
              Please provide the price of the Mate as a decimal-value
            </div>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="mt-5">
            <button class="btn btn-primary me-3" type="submit" @click="createMate">Create</button>
            <button class="btn btn-danger" type="reset">Reset</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatesCreateForm',
  data () {
    return {
      MateName: '',
      price: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createMate () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/mates'

        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        const payload = JSON.stringify({
          name: this.MateName,
          price: this.price
        })

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: payload,
          redirect: 'follow'
        }
        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      let valid = true
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            valid = false
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
      return valid
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
