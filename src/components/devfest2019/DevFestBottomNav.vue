<template>
  <v-card color="white" height="60px" class="white hidden-sm-and-up" flat>
    <v-bottom-nav :active.sync="bottomNav" :value="true" app color="white" class="elevation-2">
      <!-- <v-btn color="#518FF5" flat value="Home" router to="/home">
        <span>Home</span>
      </v-btn> -->

      <v-btn color="#518FF5" flat value="sponsors" router href="/devfest2019#sponsor">
        <span>Sponsors</span>
        <v-icon>rounded_corner</v-icon>
      </v-btn>

      <v-btn color="#518FF5" flat value="speakers" router href="/devfest2019#speaker">
        <span>Speakers</span>
        <v-icon>group</v-icon>
      </v-btn>

      <v-btn color="#518FF5" flat value="devfest" router to="/devfest2019">
        <span>DevFest</span>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      bottomNav: "recent",
      items: [
        { title: "Sponsors", icon: "rounded_corner", route: "/devfest2019#sponsor" },
        { title: "Speakers", icon: "group", route: "/devfest2019#speaker" },
        { title: "DevFest", icon: "favorite", route: "/devfest2019" }
      ]
    };
  }
};
</script>