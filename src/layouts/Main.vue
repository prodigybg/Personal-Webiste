<template>
  <header id="header">
    <div class="container">
     <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item not-affect"><img src="@/assets/logo.svg" width="32" alt="Alexander Georgiev" /></router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" id="navbarNav">    
        <div class="navbar-end">
            <router-link to="/" class="navbar-item" exact>Home</router-link>
          

            <router-link to="/portfolio" class="navbar-item">Portfolio</router-link>
          

            <router-link to="/testimonials" class="navbar-item">Testimonials</router-link>
          

            <router-link to="/about" class="navbar-item">About</router-link>
          

            <router-link to="/blog" class="navbar-item">Blog</router-link>
          

            <router-link to="/contact" class="navbar-item">Contact</router-link>          
            <router-link v-if="!$root.user" to="/login" class="navbar-item">Login</router-link>
            <router-link v-if="!$root.user" to="/signup" class="navbar-item">Sign Up</router-link>
             
           
        </div>
      </div>
       <div class="dropdown is-right  is-hoverable navbar-item" v-if="$root.user">
              <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                  <span><i class="far fa-user-circle"></i></span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                  <div class="dropdown-item">
                    <router-link v-if="$root.user" to="/admin" class="navbar-item">Dashboard</router-link>
                    <router-link v-if="$root.user" to="/admin/profile" class="navbar-item">Profile</router-link>
                    <router-link v-if="$root.user" to="/admin/posts" class="navbar-item">Posts</router-link>
                    <button v-if="$root.user" class="navbar-item button is-primary is-fullwidth" v-on:click="logout">Logout</button>             
                  </div>
                </div>
              </div>
            </div>    
      </nav>
    </div>
  </header>   
</template>

<script>
  
  import firebase from 'firebase'
  import VueRouter from 'vue-router'
  import { toggle_menu } from './../assets/theme'
  export default {
    name: 'MainLayout',
    components: {
      VueRouter
    },
    data() {
      return {
        
      }
    },
  
    methods: {
      setUser: function() {
        this.$store.dispatch('setUser');
      },
      logout: function() {
        firebase.auth().signOut().then(() => {
          alert('Signed out!');
          this.$router.replace('login');
          this.$root.user = null;
        })
      }
    },
    created() {
      this.setUser();
    },
    mounted() {
      toggle_menu()
    }
  }
</script>

<style lang="scss">
#header {border-bottom: 1px solid #eee;
.dropdown button {border: 0;}
}

</style>