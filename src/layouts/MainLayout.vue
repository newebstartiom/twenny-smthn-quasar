<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderLayout />
    <q-page-container style="padding-bottom: unset">
      <router-view />
    </q-page-container>
    <FooterLayout />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import HeaderLayout from "./default/HeaderLayout.vue";
import FooterLayout from "./default/FooterLayout.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    HeaderLayout,
    FooterLayout,
  },
});
</script>
