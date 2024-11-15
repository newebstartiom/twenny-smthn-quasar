<template>
  <q-intersection
    @visibility="onIntersect"
    :style="{
      height: height ? `${height}px` : height,
      width: width ? `${width}px` : width,
      minHeight: minHeight ? `${minHeight}px` : minHeight,
      maxHeight: maxHeight ? `${maxHeight}px` : maxHeight,
      minWidth: minWidth ? `${minWidth}px` : minWidth,
      maxWidth: maxWidth ? `${maxWidth}px` : maxWidth,
      marginTop: marginTop ? `${marginTop}px` : marginTop,
    }"
  >
    <template v-if="isIntersecting">
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div :class="cClass">
          <slot>{{ text }}</slot>
        </div>
      </transition>
    </template>
  </q-intersection>
</template>

<script>
import { defineComponent, watch } from "vue";
import helper from "wiom-utility-library";

export default defineComponent({
  name: "q-lazyload-component",
  props: {
    text: {
      type: [String, undefined, null],
      default: undefined,
    },
    cClass: {
      type: [String, undefined, null],
      default: undefined,
    },
    width: {
      type: [String, Number, undefined, null],
      default: undefined,
    },
    height: {
      type: [String, Number, undefined, null],
      default: undefined,
    },
    minHeight: {
      type: [String, Number, undefined, null],
      default: undefined,
    },
    maxHeight: {
      type: [String, Number, undefined, null],
      default: undefined,
    },
    minWidth: {
      type: [String, Number, undefined, null],
      default: undefined,
    },
    maxWidth: {
      type: [String, Number, undefined, null],
      default: undefined,
    },
    marginTop: {
      type: [String, Number, undefined, null],
      default: undefined,
    },
    delay: {
      type: [Number, undefined, null],
      default: undefined,
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      helper,
      isIntersecting: false,
      pendingIntersect: false,
    };
  },
  methods: {
    onIntersect(isIntersecting) {
      if (!this.show) {
        this.pendingIntersect = true;
        return;
      }

      if (!helper.isNumberEmpty(this.delay)) {
        setTimeout(() => {
          if (!this.isIntersecting && isIntersecting) {
            this.isIntersecting = isIntersecting;
          }
          this.$emit("itf_intersected");
        }, this.delay);
      } else {
        if (!this.isIntersecting && isIntersecting) {
          this.isIntersecting = isIntersecting;
        }
        this.$emit("itf_intersected");
      }
    },
    triggerPendingIntersect() {
      if (this.pendingIntersect) {
        this.pendingIntersect = false;
        this.onIntersect(true);
      }
    },
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.triggerPendingIntersect();
      } else {
        this.isIntersecting = false;
      }
    },
  },
});
</script>
