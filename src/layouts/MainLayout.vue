<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <router-link to="/" class="text-decoration-none">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>{{ icons.mdiClipboardListOutline }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title :class="this.$route.path === '/' ? 'font-weight-bold' : ''">ToDo`s</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/about" class="text-decoration-none">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>{{ icons.mdiInformationOutline }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title :class="this.$route.path === '/about' ? 'font-weight-bold' : ''">About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ToDo Impeqq List</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="grey lighten-5 fill-height align-start" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mdiClipboardListOutline, mdiInformationOutline } from "@mdi/js";
import draggable from 'vuedraggable'
export default {
  data: () => ({
    drawer: null,
    icons: {
      mdiClipboardListOutline,
      mdiInformationOutline
    }
  }),
  components: {
    draggable
  },
  computed: {

  }
};
</script>