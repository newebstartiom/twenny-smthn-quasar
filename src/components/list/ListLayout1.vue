<template>
  <div>
    <q-toolbar class="q-pa-none">
      <q-toolbar-title>
        <h3
          class="text-h6 q-ma-none montserrat-600-normal text-uppercase text-secondary"
        >
          {{ title }}
        </h3>
      </q-toolbar-title>
    </q-toolbar>
    <q-list class="q-list__custom q-list__custom--primary">
      <slot name="list">
        <template v-for="(item, index) in list" :key="`l1_${index}`">
          <q-item
            :to="setToUrl(item) || undefined"
            :href="item.src?.href || item.meta?.link || undefined"
            :target="item.src?.href || item.meta?.link ? '_blank' : undefined"
            clickable
            v-ripple="false"
          >
            <q-item-section class="q-pr-none" v-if="item.src?.icon" avatar>
              <SvgRenderer
                :src="item.src?.icon"
                :fill="item.component?.svg?.footer?.fill"
                :stroke="item.component?.svg?.footer?.stroke"
                :size="item.component?.svg?.footer?.size"
              />
            </q-item-section>
            <q-item-section>
              <h4 class="q-ma-none montserrat-500-normal text-subtitle1">
                {{ item.name }}
              </h4>
            </q-item-section>
          </q-item>
        </template>
      </slot>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SvgRenderer from "../media/SvgRenderer.vue";

export default defineComponent({
  props: {
    title: {
      type: [String, undefined, null],
      default: undefined,
    },
    list: {
      type: [Array, undefined, null],
      default: undefined,
    },
  },
  components: {
    SvgRenderer,
  },
  methods: {
    setToUrl(route) {
      if (route.name && route.name == "Home") {
        return "/";
      } else {
        return route.path || route.to;
      }
    },
  },
});
</script>
