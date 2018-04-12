<template>
  <div class="viewport">
    <md-toolbar class="md-primary" md-elevation=2>
      <md-button class="md-icon-button" @click="showMenu = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Chave de Rodas</span>

      <div class="md-toolbar-section-end">
        <md-button>
          <span class="">{{ firstName }}</span>
          <md-avatar>
           <img :src="avatar" alt="User">
          </md-avatar>
        </md-button>        
      </div>
    </md-toolbar>
    <side-menu :slide-menu="showMenu" @slide-menu="slideMenu()" :user="fullName" :avatar="avatar" :email="email"></side-menu>
    <t-users></t-users>    
  </div>
</template>

<script>
  import SideMenu from './features/sidemenu'
  import TUsers from './features/tuser'  

  export default {
    name: 'App',

    components: {
      SideMenu,
      TUsers
    },

    data: () => ({
      showMenu: false,
      firstName: 'Tiago',
      lastName: 'Alves',
      email: 'tiago@mail.com',
      avatar: require('./assets/avatar.jpg')
    }),

    computed: {
      fullName: function() {
        return this.firstName + ' ' + this.lastName
      }
    },

    methods: {
      slideMenu () {
        this.showMenu = false
      }      
    }
  }
</script>