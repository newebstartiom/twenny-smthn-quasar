<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderLayout />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import HeaderLayout from "./default/HeaderLayout.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    HeaderLayout,
  },
});
</script>
