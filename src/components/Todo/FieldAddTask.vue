<template>
  <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask"
    @keyup.enter="addTask"
    class="pa-4"
    outlined
    clearable
    hide-details
    label="Add Task"
    append-icon="mdi-plus"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    addTask() {
      //ursprung: vuex store. liegt aber nochmal hier, weil man
      //den newTaskTitle so auf "" setzen kann

      //.$store.commit würde eine mutation aufrufen aus dem store
      //.$store.dispatch ruft eine action auf aus dem store
      this.$store.dispatch("addTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
  },
};
</script>