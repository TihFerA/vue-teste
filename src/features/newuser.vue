<template>
  <div>
    <form novalidate action="#" class="md-layout" @submit.prevent="submit">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">Users</div>
            <div class="md-subhea">Create a new user</div>
          </md-card-header-text>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field md-clearable :class="getValidationClass('firstName')">
                <label for="first-name">First Name</label>
                <md-input type="text" name="first-name" id="first-name" v-model="form.firstName"></md-input>
                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minLength">Invalid first name</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field md-clearable :class="getValidationClass('lastName')">
                <label for="last-name">Last Name</label>
                <md-input type="text" name="last-name" id="last-name" v-model="form.lastName"></md-input>
                <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minLength">Invalid last name</span>
              </md-field>
            </div>
          </div>

          <md-field md-clearable :class="getValidationClass('email')">
            <label for="e-mail">E-mail</label>
            <md-input type="email" name="e-mail" id="e-mail" v-model="form.email"></md-input>
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>

          <md-field md-clearable :class="getValidationClass('phoneNumber')">
            <label for="phone-number">Phone Number</label>
            <md-input type="numeric" name="phone-number" id="phone-number" v-model="form.phoneNumber"></md-input>
            <span class="md-error" v-if="!$v.form.phoneNumber.required">The phone number is required</span>
            <span class="md-error" v-else-if="!$v.form.phoneNumber.numeric">Invalid phone number</span>
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending"></md-progress-bar>

        <md-card-actions>
          <md-button type="submite" class="md-primary">Save</md-button>
          <md-button type="submite" class="md-primary">Cancel</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
  import { required, minLength, email, numeric } from 'vuelidate/lib/validators'
  export default {
    name: 'newuser',
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null
      },
      sending: false,
      userSaved: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        email: {
          required,
          email
        },
        phoneNumber: {
          required,
          numeric
        }
      }
    },
    methods: {
      submit () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      },
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      saveUser () {
        this.sending = true
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.sending = false
          this.userSaved = true
          this.resetForm()
        }, 1500)        
      },
      resetForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.email = null
        this.form.phoneNumber = null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-card {
    margin: auto;
    top: 100px;
  }
</style>