<template>
  <q-page class="flex flex-center" style="min-height: 820px">
    <div
      id="init-display"
      class="q-pa-lg"
      :style="{
        maxHeight:
          $q.screen.height > webNum.maxHeight
            ? `${webNum.maxHeight}px`
            : `${$q.screen.height}px`,
        width: `${$q.screen.width}px`,
      }"
    >
      <div
        class="relative-position q-ma-auto"
        style="max-width: 380px; min-width: 380px"
      >
        <div class="circle-gif-pos">
          <q-img
            v-if="show_2"
            :src="
              helper.setFileUrl(
                company.storageUrl,
                `/hannah-clayton/twenny-smthn/gifs/circle${
                  $q.screen.width < 650 ? '-m' : ''
                }.gif`
              )
            "
            :width="$q.screen.width < 650 ? '400px' : ''"
            loading="eager"
            no-spinner
            no-transition
          />
        </div>
        <h2 class="text-center q-ma-none">
          <span
            :class="`typewriter-instance text-h4 text-2_rem libre-baskerville-bold`"
          />
          <LazyLoad
            :show="show_1"
            :text="words[1]"
            :delay="1000"
            min-height="68"
            :margin-top="-10"
            c-class="dm-serif-display-regular text-h1 text-5p625_rem text-dark lh-68_px"
          />
          <LazyLoad
            :show="show_1"
            :text="words[2]"
            :delay="1200"
            min-height="26"
            c-class="waterlily-regular text-h1 text-secondary text-6p25_rem ls-4_px lh-26_px"
          />
        </h2>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.circle-gif-pos {
  position: absolute;
  width: 140%;
  height: 100%;
  top: -76px;
  left: -10px;
  @media (min-width: 650px) {
    left: -80px;
    top: -30px;
  }
}
</style>

<script>
import { defineComponent } from "vue";
import { useMeta } from "quasar";
import { company, webNum } from "src/js/data";
import Typewriter from "typewriter-effect/dist/core";
import LazyLoad from "src/components/loader/LazyLoad.vue";
import helper from "wiom-utility-library";

const metaData = {
  // sets document title
  title: "Index Page",
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: (title) => `${title} - My Website`,

  // meta tags
  meta: {
    description: { name: "description", content: "Page 1" },
    keywords: { name: "keywords", content: "Quasar website" },
    equiv: {
      "http-equiv": "Content-Type",
      content: "text/html; charset=UTF-8",
    },
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle: {
      property: "og:title",
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template(ogTitle) {
        return `${ogTitle} - My Website`;
      },
    },
  },

  // CSS tags
  link: {
    material: {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    },
  },

  // JS tags
  script: {
    ldJson: {
      type: "application/ld+json",
      innerHTML: `{ "@context": "http://schema.org" }`,
    },
  },

  // <html> attributes
  htmlAttr: {
    "xmlns:cc": "http://creativecommons.org/ns#", // generates <html xmlns:cc="http://creativecommons.org/ns#">,
    empty: undefined, // generates <html empty>
  },

  // <body> attributes
  bodyAttr: {
    "action-scope": "xyz", // generates <body action-scope="xyz">
    empty: undefined, // generates <body empty>
  },

  // <noscript> tags
  noscript: {
    default: "This is content for browsers with no JS (or disabled JS)",
  },
};

export default defineComponent({
  name: "q-home-page",
  setup() {
    useMeta(metaData, { keyName: "meta-custom" });
  },
  components: {
    LazyLoad,
  },
  data() {
    return {
      helper,
      company,
      webNum: webNum.page,
      show_1: false,
      show_2: false,
      initTypeInstance: {
        id: "typewriter-instance",
        instance: null,
      },
      words: ["stories from a", "twenny", "smthn"],
    };
  },
  mounted() {
    this.setInitialWords();
  },
  methods: {
    setInitialWords() {
      if (this.words && this.words.length > 0) {
        setTimeout(() => {
          this.initTypeInstance.instance = new Typewriter(
            `.${this.initTypeInstance.id}`,
            {
              loop: false,
              delay: 100,
              cursor: "",
            }
          );

          this.initTypeInstance.instance
            .typeString(this.words[0])
            .callFunction(() => {
              this.show_1 = true;
              setTimeout(() => {
                this.show_2 = true;
              }, 1000);
            })
            .start();
        }, 0);
      }
    },
  },
});
</script>
