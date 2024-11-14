<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-banner
        class="q-banner--header__custom bg-secondary text-white"
        :style="{ minHeight: `${webNum.header.detail.social}px` }"
      >
        <div class="q-ma-auto" :style="{ maxWidth: `${webNum.maxWidth}px` }">
          <h3 class="q-ma-none text-h5 dm-serif-display-regular">
            Join our growing community
          </h3>
          <div class="flex">
            <template v-for="(social, index) in socials" :key="`s_${index}`">
              <q-btn
                :href="social.src.href || null"
                :target="social.src.href ? '_blank' : null"
                :icon="`img:${social.src.icon}`"
                flat
                round
                color="white"
              />
            </template>
          </div>
        </div>
      </q-banner>
      <q-toolbar
        class="justify-center bg-white"
        :style="{ minHeight: `${webNum.header.detail.header}px` }"
      >
        <div class="full-width" :style="{ maxWidth: `${webNum.maxWidth}px` }">
          <div class="flex justify-between full-width">
            <router-link to="/" style="width: 60px">
              <q-img
                :src="
                  helper.setFileUrl(
                    company.storageUrl,
                    '/hannah-clayton/twenny-smthn/logo/logo.svg'
                  )
                "
                loading="eager"
                no-spinner
                no-transition
              />
            </router-link>

            <div class="flex">
              <template
                v-for="(route, index) in navigationRouter"
                :key="`r_${index}`"
              >
                <q-btn
                  :to="route.path || undefined"
                  :href="route.meta?.link || undefined"
                  :target="route.meta?.link ? '_blank' : undefined"
                  flat
                  color="dark"
                  :ripple="false"
                  size="16px"
                >
                  <h3 class="text-h6 montserrat-700-normal q-ma-none">
                    {{ route.name }}
                  </h3>
                </q-btn>
              </template>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { webNum, company } from "src/js/data";
import helper from "wiom-utility-library";

export default defineComponent({
  name: "MainLayout",

  data() {
    return {
      webNum,
      company,
      helper,
      socials: company.socials,
    };
  },
  computed: {
    navigationRouter() {
      return this.$router.options.routes[0].children.filter(
        (v) => v.layout?.header
      );
    },
  },
  created() {
    console.log(this.$route);
  },
});
</script>
