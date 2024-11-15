<template>
  <div
    :class="`q-svg${loaded ? ' q-svg--loaded flex' : ''}`"
    :style="[styleVariables, { width: setStyleSize, height: setStyleSize }]"
  >
    <svg ref="customSvg"></svg>
  </div>
</template>

<style scoped>
.q-svg {
  opacity: var(--opacity);
  transition: opacity var(--transition) cubic-bezier(0.4, 0, 0.2, 1);
}
.q-svg.q-svg--loaded {
  opacity: 1;
}
</style>

<script>
import { helper } from "wiom-utility-library";

export default {
  props: {
    src: {
      type: [String, undefined, null],
      default: undefined,
    },
    fill: {
      type: [String, undefined, null],
      default: undefined,
    },
    stroke: {
      type: [String, undefined, null],
      default: undefined,
    },
    size: {
      type: [String, Number, undefined, null],
      default: 48,
    },
    delay: {
      type: [Number, null, undefined],
      default: 200,
    },
    component: {
      type: [Object, undefined, null],
      default: null,
    },
  },
  data() {
    return {
      helper,
      loaded: false,
    };
  },
  computed: {
    setStyleSize() {
      return typeof this.size == "number" ? `${this.size}px` : this.size;
    },
    styleVariables() {
      let styleObj = {};

      helper.addToObject(styleObj, {
        "--transition": this.component?.svg?.style?.transition || ".2s",
        "--opacity": this.component?.svg?.style?.opacity || "0",
      });

      return styleObj;
    },
  },
  mounted() {
    if (this.src) {
      fetch(this.src)
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const svg = parser
            .parseFromString(data, "image/svg+xml")
            .querySelector("svg");

          // color / fill
          const elementsToColor = [
            "path",
            "circle",
            "rect",
            "polygon",
            "line",
            "polyline",
            "ellipse",
          ];
          elementsToColor.forEach((tag) => {
            const elements = svg.querySelectorAll(tag);
            elements.forEach((el) => {
              if (this.stroke) {
                el.setAttribute("stroke", this.stroke);
                el.setAttribute("fill", this.fill || "transparent");
              } else if (this.fill) {
                el.setAttribute("fill", this.fill || "#000");
              }
            });
          });
          // sizes
          svg.setAttribute("width", this.size);
          svg.setAttribute("height", this.size);

          if (this.delay) {
            setTimeout(() => {
              this.$refs.customSvg?.replaceWith(svg);
              this.loaded = true;
            }, this.delay);
          } else {
            this.$refs.customSvg?.replaceWith(svg);
            this.loaded = true;
          }
        });
    }
  },
};
</script>
