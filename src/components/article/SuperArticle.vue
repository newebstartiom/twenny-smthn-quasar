<template>
  <div :class="baseCustomClass || ''">
    <template v-if="contents">
      <template v-if="Array.isArray(contents)">
        <template v-for="(crc, index) in contents" :key="`crc_${index}`">
          <template v-if="Array.isArray(crc)">
            <p class="q-ma-none" style="line-height: 1.6">
              <template
                v-for="(sub_crc, index2) in crc"
                :key="`crc_${index}_${index2}`"
              >
                <template v-if="typeof sub_crc === 'string'">
                  {{ sub_crc }}
                </template>
                <template v-else-if="typeof sub_crc === 'object'">
                  <ContentRenderer :content="sub_crc" />
                </template>
              </template>
            </p>
          </template>
          <template v-else-if="typeof crc === 'string'">
            <p class="q-ma-none" style="line-height: 1.6">
              {{ crc }}
            </p>
          </template>
          <template v-else-if="typeof crc === 'object'">
            <div
              class="w-full q-ma-auto"
              :style="{
                maxWidth: crc.component?.sheet?.maxWidth
                  ? `${crc.component?.sheet?.maxWidth}px`
                  : null,
              }"
            >
              <ContentRenderer :content="crc" />
            </div>
          </template>
          <template v-if="contents.length !== index + 1">
            <br />
          </template>
        </template>
      </template>
      <template v-else-if="typeof contents === 'string'">
        <p class="q-ma-none" style="line-height: 1.6">
          {{ contents }}
        </p>
      </template>
      <template v-else-if="typeof contents === 'object'">
        <div
          class="w-full q-ma-auto"
          :style="{
            maxWidth: contents.component?.sheet?.maxWidth
              ? `${contents.component?.sheet?.maxWidth}px`
              : null,
          }"
        >
          <ContentRenderer :content="contents" />
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ContentRenderer from "./ContentRenderer.vue";

export default defineComponent({
  props: {
    contents: {
      type: [String, Object, Array, null, undefined],
      default: undefined,
    },
    baseCustomClass: {
      type: [String, undefined, null],
      default: undefined,
    },
  },
  components: {
    ContentRenderer,
  },
  data() {
    return {
      htmlTagArr: ["h1", "h2", "h3", "h4", "h5", "h6", "span", "b", "ul", "ol"],
      objTypes: ["image", "button", "table", "no-gap", "list"],
    };
  },
});
</script>
