<template>
  <v-row class="container-block" width="100%">
    <vue-headful title="ToDo - List" description="todo list" />
    <v-card
      class="d-flex flex-row justify-space-around"
      width="100%"
      color="grey lighten-4"
      flat
      tile
    >
      <div class="d-flex flex-column">
        <div class="text-h3 text-center mt-5 row align-center justify-center flex-grow-0">
          Planned
          <div class="my-2 btn-remove ml-5" @click="addElement('Planned')">
            <v-btn color="success" fab small dark>
              <v-icon>{{ icons.mdiPlus }}</v-icon>
            </v-btn>
          </div>
        </div>
        <draggable
          class="min-height"
          v-bind="dragOptions"
          v-model="listPlanned"
          group="people"
          @start="dragging=true"
          @end="dragging=false"
        >
          <todo-component
            v-bind:idProp="element.id"
            v-bind:imgProp="element.img"
            v-bind:descProp="element.desc"
            v-bind:targetProp="element.target"
            v-for="element in listPlanned"
            :key="element.id"
          ></todo-component>
        </draggable>
      </div>
      <div class="d-flex flex-column">
        <div class="text-h3 text-center mt-5 row align-center justify-center flex-grow-0">
          InWork
          <div class="my-2 btn-remove ml-5" @click="addElement('InWork')">
            <v-btn color="success" fab small dark>
              <v-icon>{{ icons.mdiPlus }}</v-icon>
            </v-btn>
          </div>
        </div>
        <draggable
          class="min-height"
          v-bind="dragOptions"
          v-model="listInWork"
          group="people"
          @start="dragging=true"
          @end="dragging=false"
        >
          <todo-component
            v-bind:idProp="element.id"
            v-bind:imgProp="element.img"
            v-bind:descProp="element.desc"
            v-bind:targetProp="element.target"
            v-for="element in listInWork"
            :key="element.id"
          ></todo-component>
        </draggable>
      </div>
      <div class="d-flex flex-column">
        <div class="text-h3 text-center mt-5 row align-center justify-center flex-grow-0">
          Completed
          <div class="my-2 btn-remove ml-5" @click="addElement('Completed')">
            <v-btn color="success" fab small dark>
              <v-icon>{{ icons.mdiPlus }}</v-icon>
            </v-btn>
          </div>
        </div>
        <draggable
          class="min-height"
          v-bind="dragOptions"
          v-model="listCompleted"
          group="people"
          @start="dragging=true"
          @end="dragging=false"
        >
          <todo-component
            v-bind:idProp="element.id"
            v-bind:imgProp="element.img"
            v-bind:descProp="element.desc"
            v-bind:targetProp="element.target"
            v-for="element in listCompleted"
            :key="element.id"
          ></todo-component>
        </draggable>
      </div>
    </v-card>
  </v-row>
</template>

<script>
// @ is an alias to /src
import TodoComponent from "@/components/TodoComponent.vue";
import draggable from "vuedraggable";
import { mdiPlus } from "@mdi/js";

export default {
  name: "Home",
  components: {
    TodoComponent,
    draggable
  },
  data() {
    return {
      icons: {
        mdiPlus
      }
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },
    listPlanned: {
      get() {
        return this.$store.state.listPlanned;
      },
      set(value) {
        this.$store.commit("updateListPlanned", value);
      }
    },
    listInWork: {
      get() {
        return this.$store.state.listInWork;
      },
      set(value) {
        this.$store.commit("updateListInWork", value);
      }
    },
    listCompleted: {
      get() {
        return this.$store.state.listCompleted;
      },
      set(value) {
        this.$store.commit("updateListCompleted", value);
      }
    }
  },
  methods: {
    addElement(type) {
      this.$store.commit("addElement", 'list'+type);
    }
  },
};
</script>

<style lang="scss">
.min-height {
  min-height: 500px;
  min-width: 400px;
}
</style>