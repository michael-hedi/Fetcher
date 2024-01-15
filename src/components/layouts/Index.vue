<template>
    <v-app
    app
    class="bg"
    >
      
    <v-app-bar
        absolute
        app
        color=""
        dark
      >
      <v-app-bar-title
      >
      <div class="d-flex align-center">
      <v-img
      height="50"
      width="50"
      src="@/assets/logo.png"
      >
      </v-img>
      <p class="ma-0 text-h4 pl-3"
        style="font-family: 'tech';"
      >Fetcher</p>
    </div>
    </v-app-bar-title>
      </v-app-bar>
        <v-navigation-drawer
        mini-variant
        app
        expand-on-hover
        >  
      <v-list nav dense>
        <v-list-item-group
          v-model="active_page"
        >
        <v-list-item
        :to="i.to"
        v-for="i in nav_drawer_items "
        :key="i.name"
        >
        <v-list-item-icon>
              <v-icon>{{ i.icon }}</v-icon>
            </v-list-item-icon>
        
        <v-list-item-content>
              <v-list-item-title>{{ i.name }}</v-list-item-title>
            </v-list-item-content>
  
          </v-list-item>
          </v-list-item-group>
      </v-list>
      </v-navigation-drawer>
      <v-main> 
        <CoreView/>   
      </v-main>
    </v-app>
  </template>

  <script>
 import CoreView from './CoreView.vue';

  export default {
    name: 'App',
    components:{
      CoreView
    },
    data: () => ({
      "nav_drawer_items" : [
        {
          "name"  : "Fetch",
          "icon"  : "mdi-api",
          "to"    : "/fetch"
        },
        {
          "name"  : "one",
          "icon"  : "mdi-close",
          "to"    : "/f"
        }
      ],
      active_page : ""
    })
  };
  </script>
  <style>
  @font-face {
    font-family: 'tech';
    src: url('@/assets/fonts/shareTech.ttf') format('truetype'); 
    font-weight: normal;
    font-style: normal;
  }
  .bg::before {
    filter : brightness(20%);
    content: "";
    background-image: url(https://c4.wallpaperflare.com/wallpaper/476/211/826/lines-rough-dark-pale-wallpaper-preview.jpg);
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center center center center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  
  </style>
  