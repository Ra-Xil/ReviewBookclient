<template>
  <v-app id="inspire">
    <v-app-bar app dark>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer>Review Book</v-spacer>
      <v-btn text rounded><router-link to="/home">Home</router-link></v-btn>
      <v-btn text rounded><router-link to="/login">Login</router-link></v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<!-- <script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { text: 'Home', icon: 'mdi-home', link: "/" },
      { text: 'Đăng nhập', icon: 'mdi-login', link: "/login" },
    ],
  }),
};
</script> -->
