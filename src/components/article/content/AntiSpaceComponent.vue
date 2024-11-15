<template>
  <p v-if="content" class="q-ma-none" style="line-height: 1.6">
    <template v-for="(asc, index) in content" :key="`asc_${index}`">
      <template v-if="Array.isArray(asc)">
        <template
          v-for="(sub_asc, index2) in asc"
          :key="`asc_${index}_${index2}`"
        >
          <template v-if="typeof sub_asc == 'object'">
            <ContentRenderer :content="sub_asc" />
          </template>
          <template v-else-if="typeof sub_asc == 'string'">
            {{ sub_asc }}
          </template>
        </template>
      </template>
      <template v-else-if="typeof asc == 'object'">
        <ContentRenderer :content="asc" />
      </template>
      <template v-else-if="typeof asc == 'string'">
        {{ asc }}
      </template>
      <template v-if="content.length !== index + 1">
        <br />
      </template>
    </template>
  </p>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "q-anti-space-component",
  props: {
    content: {
      type: [Array, Object, String, undefined, null],
      default: undefined,
    },
  },
  components: {
    ContentRenderer: () => import("../ContentRenderer.vue"),
  },
});
</script>
