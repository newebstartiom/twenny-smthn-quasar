<template>
  <q-footer class="q-footer__custom bg-primary-tonal">
    <div class="flex q-ma-auto" :style="{ maxWidth: `${webNum.maxWidth}px` }">
      <div class="row q-gutter-y-sm w-full">
        <div class="col-12 q-mb-md">
          <div class="flex justify-center">
            <q-btn
              :icon="`img:${helper.setFileUrl(
                company.storageUrl,
                '/webstartiom/icon/base/arrow-collapse-up.svg'
              )}`"
              :ripple="false"
              size="sm"
              color="white"
              unelevated
              round
            />
          </div>
        </div>
        <div
          :class="`col-12${$q.screen.width > 770 ? ' col-sm-4' : ''} col-md-4`"
        >
          <router-link to="/" style="width: 100px">
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
              style="min-height: 100px"
            />
          </router-link>
          <SuperArticle
            base-custom-class="dm-serif-display-regular text-primary text-h4 text-2_rem q-mt-md"
            :contents="{
              type: 'no-gap',
              value: typography.p_1,
            }"
          />
          <q-separator spaced="xl" color="primary" />
          <q-img
            :src="
              helper.setFileUrl(
                company.storageUrl,
                '/hannah-clayton/gifs/signature.gif'
              )
            "
            width="120px"
            loading="eager"
            no-spinner
            no-transition
            style="min-height: 97px"
          />
        </div>
        <div
          :class="`col-12${$q.screen.width > 770 ? ' col-sm-7' : ''} col-md-7${
            $q.screen.width > 770 ? ' offset-1' : ''
          }`"
        >
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4">
              <ListLayout1 title="Quick Links" :list="navigationRouter" />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <ListLayout1 title="Blogs" :list="blogNav" />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <ListLayout1 title="Work With Me" :list="wwmNav" />
            </div>
            <div class="col-12 col-md-8">
              <ListLayout1
                title="Join Our Growing Community"
                :list="company.socials"
              />
            </div>
            <div :class="`col-12${$q.screen.width > 1280 ? ' col-md-4' : ''}`">
              <ListLayout1 title="Get In Touch">
                <template #list>
                  <div class="flex column">
                    <span
                      class="text-dark montserrat-500-normal text-subtitle1"
                      >{{ typography.p_3 }}</span
                    >
                    <q-img
                      :src="
                        helper.setFileUrl(
                          company.storageUrl,
                          '/hannah-clayton/images/preset-map-iom.png'
                        )
                      "
                      width="230px"
                      loading="eager"
                      no-spinner
                      no-transition
                      style="min-height: 140px"
                      class="q-mt-sm"
                    />
                  </div>
                </template>
              </ListLayout1>
            </div>
          </div>
        </div>
        <div class="col-12 q-mb-sm q-mt-lg">
          <SuperArticle
            base-custom-class="text-primary text-caption montserrat-500-normal text-center"
            :contents="typography.p_2"
          />
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script>
import { defineComponent } from "vue";
import helper from "wiom-utility-library";
import { company, typography, webNum, blog_genres } from "src/js/data";
import SuperArticle from "src/components/article/SuperArticle.vue";
import ListLayout1 from "src/components/list/ListLayout1.vue";

export default defineComponent({
  components: {
    SuperArticle,
    ListLayout1,
  },
  data() {
    return {
      helper,
      webNum,
      company,
      typography: typography.footer,
      wwmNav: [
        {
          name: "Copy Wave Creative",
          src: {
            href: company.link.copyWave,
          },
        },
      ],
    };
  },
  computed: {
    navigationRouter() {
      return this.$router.options.routes[0].children.filter(
        (v) => v.layout?.footer
      );
    },
    blogNav() {
      return blog_genres.filter((v) => v.id !== "all");
    },
    smValue1() {
      if (this.clientWindow.width > 960) {
        return "5";
      } else if (this.clientWindow.width > 800) {
        return "6";
      } else {
        return "12";
      }
    },
    smValue2() {
      if (this.clientWindow.width > 960) {
        return "7";
      } else if (this.clientWindow.width > 800) {
        return "6";
      } else {
        return "12";
      }
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
});
</script>
