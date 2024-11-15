<template>
  <component
    :is="getComponent(content)"
    v-if="isValidContent(content)"
    :content="content.value"
  >
  </component>
</template>

<script>
import ImageComponent from "./content/ImageComponent.vue";
import ButtonComponent from "./content/ButtonComponent.vue";
import AntiSpaceComponent from "./content/AntiSpaceComponent.vue";

export default {
  components: {
    ImageComponent,
    ButtonComponent,
    AntiSpaceComponent,
  },
  props: {
    content: Object,
  },
  computed: {
    contentProps() {
      return this.content.value || {};
    },
  },
  methods: {
    getComponent(content) {
      const componentMap = {
        image: "ImageComponent",
        button: "ButtonComponent",
        "no-gap": "AntiSpaceComponent",
        default: "div",
      };
      return componentMap[content?.type] || componentMap.default;
    },
    isValidContent(content) {
      return content && content.type && typeof content === "object";
    },
  },
};
</script>
