<template>
  <v-card class="mx-auto mt-5" max-width="400">
    <div class="my-2 btn-edit" v-if="!hide" @click="hide = !hide">
      <v-btn color="primary" fab small dark>
        <v-icon>{{ icons.mdiPencil }}</v-icon>
      </v-btn>
    </div>
    <div class="my-2 btn-edit" v-if="hide" @click="hide = !hide">
      <v-btn color="primary" fab small dark>
        <v-icon>{{ icons.mdiCheck }}</v-icon>
      </v-btn>
    </div>
    <div class="my-2 btn-remove" @click="removeElement()">
      <v-btn color="red" fab small dark>
        <v-icon>{{ icons.mdiClose }}</v-icon>
      </v-btn>
    </div>
    <input v-model="img" type="text" v-if="hide" class="input-img" />
    <v-img class="white--text align-end" height="200px" :src="img">
      <v-card-title class="black--text pb-2 pt-2 grey lighten-4" v-if="!hide">{{ target }}</v-card-title>
      <input v-model="target" type="text" v-if="hide" class="input-title" />
    </v-img>

    <v-card-subtitle class="pb-0">30 Junuary</v-card-subtitle>

    <v-card-text class="text--primary" v-if="!hide">{{ desc }}</v-card-text>
    <input v-model="desc" type="text" v-if="hide" class="input-text" />
  </v-card>
</template>

<script>
import { mdiPencil, mdiClose, mdiCheck } from "@mdi/js";
export default {
  data: () => ({
    hide: false,
    overlay: false,
    icons: {
      mdiPencil,
      mdiClose,
      mdiCheck
    }
  }),
  props: {
    targetProp: String,
    imgProp: String,
    descProp: String,
    idProp: Number
  },
  methods: {
    removeElement() {
      this.$store.commit("removeElement", this.idProp);
    }
  },
  computed: {
    target: {
      get: function() {
        return this.targetProp;
      },
      set(value) {
        this.$store.commit("editList", {
          id: this.idProp,
          name: "target",
          value: value
        });
      }
    },
    desc: {
      get: function() {
        return this.descProp;
      },
      set(value) {
        this.$store.commit("editList", {
          id: this.idProp,
          name: "desc",
          value: value
        });
      }
    },
    img: {
      get: function() {
        return this.imgProp;
      },
      set(value) {
        this.$store.commit("editList", {
          id: this.idProp,
          name: "img",
          value: value
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-edit {
  position: absolute;
  right: 60px;
  z-index: 1;
  top: 0px;
  outline: none;
}
.btn-remove {
  position: absolute;
  right: 10px;
  z-index: 1;
  top: 0px;
  outline: none;
}
.input-title {
  font-size: 1.25rem;
  padding: 8px 16px;
  width: 100%;
  outline: none;
  background-color: #f5f5f5 !important;
  border-color: #f5f5f5 !important;
}
.input-text {
  font-size: 0.875rem;
  padding: 0 16px 16px 16px;
  width: 100%;
  outline: none;
}
.input-img {
  width: 70%;
  padding: 15px 5px;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  outline: none;
}
</style>