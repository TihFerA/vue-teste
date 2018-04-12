<template>
  <md-drawer :md-active.sync="showMenu">
      <md-toolbar class="md-primary">
        <md-list md-theme="blue">
          <md-list-item>
            <md-avatar class="md-large">
              <img :src="avatar" alt="TF">
            </md-avatar>
          </md-list-item>
          <md-list-item>
            <div class="md-list-text-container">
              <span class="md-list-item-text">{{ user }}</span>
              <span class="md-list-item-text">{{ email }}</span>
            </div>
          </md-list-item>
        </md-list>
      </md-toolbar>      
      <menu-list></menu-list>
    </md-drawer>
</template>

<script>
  import MenuList from './menulist'

  export default {
    name: 'sidemenu',

    data: () => ({
    }),

    components: {
      MenuList
    },

    props: {
      slideMenu: Boolean,
      user: null,
      email: null,
      avatar: null
    },

    computed: {
      showMenu: {
        get: function() {
          return this.slideMenu
        },
        set: function(val) {
          this.$emit('slide-menu', val)
        }
      }
    }
  }
</script>

<style lang="css" scoped>
</style>