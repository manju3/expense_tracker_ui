<template>
  <v-layout wrap>
    <v-flex xs12>
      <v-card flat class="mt-4">
        <v-card-text class="text-center">
          <v-progress-circular size="50" width="10" indeterminate color="primary"></v-progress-circular>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "index",
  data: () => ({}),
  created() {
    setTimeout(() => this.$router.push("/home"), 1000);
  },
};
</script>