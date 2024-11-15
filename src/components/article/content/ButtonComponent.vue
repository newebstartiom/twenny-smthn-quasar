<template>
  <q-btn
    v-if="content"
    :to="content.src?.to"
    :href="content.src?.href"
    :target="content.src?.href ? '_blank' : null"
    :disabled="!content.src?.to && !content.src?.href"
    :ripple="false"
    :size="content.component?.size"
    :flat="content.component?.flat"
    :color="content.component?.color"
    :padding="content.component?.padding"
    :label="content.text"
    :class="`text-capitalize q-btn__custom${content.component?.cClass || ''}`"
  />
</template>

<script>
import helper from "wiom-utility-library";
import { company } from "src/js/data";
import { defineComponent } from "vue";

export default defineComponent({
  name: "q-button-article-component",
  props: {
    content: {
      type: [Object, undefined, null],
      default: undefined,
    },
  },
  data() {
    return {
      helper,
      company,
    };
  },
});
</script>
