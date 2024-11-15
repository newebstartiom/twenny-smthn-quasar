<template>
  <q-img
    :src="
      helper.setFileUrl(
        company.storageUrl,
        '/hannah-clayton/twenny-smthn/logo/logo.svg'
      )
    "
    width="100px"
    loading="eager"
    no-spinner
    no-transition
  />
</template>

<script>
import helper from "wiom-utility-library";
import { company } from "src/js/data";
import { defineComponent } from "vue";

export default defineComponent({
  name: "q-image-article-component",
  data() {
    return {
      helper,
      company,
    };
  },
});
</script>
