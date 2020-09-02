<template>
  <v-app dark>
    <v-main class="blue lighten-3">
      <v-app-bar app color="primary">
        <v-app-bar-nav-icon class="white--text"></v-app-bar-nav-icon>

        <v-toolbar-title class="white--text">Expense Tracker</v-toolbar-title>
      </v-app-bar>
      <div class="pa-2">
        <nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
