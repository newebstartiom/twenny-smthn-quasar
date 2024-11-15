<template>
  <q-header>
    <q-banner
      class="q-banner--header__custom bg-secondary text-white"
      :style="{ minHeight: `${webNum.header.detail.social}px` }"
    >
      <div class="flex q-ma-auto" :style="{ maxWidth: `${webNum.maxWidth}px` }">
        <h3 class="q-ma-none text-h5 dm-serif-display-regular">
          Join our growing community
        </h3>
        <div class="flex">
          <template v-for="(social, index) in socials" :key="`s_${index}`">
            <q-btn
              :href="social.src.href || null"
              :target="social.src.href ? '_blank' : null"
              :icon="`img:${social.src.icon}`"
              color="white"
              flat
              round
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

          <div
            :class="`flex content-center${
              $q.screen.width > 600 ? ' q-gutter-x-lg' : ''
            }`"
          >
            <template v-if="$q.screen.width > 600">
              <template
                v-for="(route, index) in navigationRouter"
                :key="`r_${index}`"
              >
                <q-btn
                  :to="route.path || undefined"
                  :href="route.meta?.link || undefined"
                  :target="route.meta?.link ? '_blank' : undefined"
                  :ripple="false"
                  color="dark"
                  size="xs"
                  flat
                  :class="`q-btn__custom q-btn__custom--default${setNavigationState(
                    route
                  )}`"
                >
                  <h3 class="text-h6 montserrat-700-normal q-ma-none">
                    {{ route.name }}
                  </h3>
                </q-btn>
              </template>
            </template>
            <template v-else>
              <q-btn
                @click="dialog = true"
                icon="mdi-menu"
                color="dark"
                size="lg"
                round
                flat
                :ripple="false"
              />
            </template>
          </div>
        </div>
      </div>
    </q-toolbar>
    <q-dialog
      v-model="dialog"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card>
        <q-toolbar
          class="justify-center bg-white"
          :style="{ minHeight: `${webNum.header.detail.header}px` }"
        >
          <div class="full-width" :style="{ maxWidth: `${webNum.maxWidth}px` }">
            <div class="flex justify-between full-width">
              <router-link to="/" style="width: 60px">
                <q-img
                  @click="dialog = false"
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
              <q-btn
                @click="dialog = false"
                icon="mdi-close"
                color="dark"
                size="lg"
                round
                flat
                :ripple="false"
              />
            </div>
          </div>
        </q-toolbar>
        <q-card-section>
          <q-list class="q-list__custom text-center text-dark q-gutter-y-lg">
            <template
              v-for="(route, index) in navigationRouter"
              :key="`r_${index}`"
            >
              <q-item
                @click="dialog = false"
                :to="route.path || undefined"
                :href="route.meta?.link || undefined"
                :target="route.meta?.link ? '_blank' : undefined"
                :active="navState(route)"
                v-ripple="false"
                clickable
                active-class="text-secondary"
              >
                <q-item-section>
                  <h3 class="text-h6 league-spartan-700-normal q-ma-none">
                    {{ route.name }}
                  </h3>
                </q-item-section>
              </q-item>
            </template>
          </q-list>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-header>
</template>

<script>
import { defineComponent } from "vue";
import { webNum, company } from "src/js/data";
import helper from "wiom-utility-library";

export default defineComponent({
  name: "q-header-layout",
  data() {
    return {
      webNum,
      company,
      helper,
      socials: company.socials,
      dialog: false,
    };
  },
  computed: {
    navigationRouter() {
      return this.$router.options.routes[0].children.filter(
        (v) => v.layout?.header
      );
    },
  },
  methods: {
    setNavigationState(route) {
      if (this.navState(route)) {
        return " q-btn__custom--active";
      } else {
        return "";
      }
    },
    navState(route) {
      return route.name == this.$route.name ||
        (this.$route.hash &&
          this.$route.hash == "#about-me" &&
          route.name == "About")
        ? true
        : false;
    },
  },
});
</script>
