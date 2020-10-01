<template>
  <v-card color="white" height="60px" class="white hidden-sm-and-up" flat>
    <v-bottom-nav :active.sync="bottomNav" :value="true" app color="white" class="elevation-2">
      <!-- <v-btn color="#518FF5" flat value="sponsors" router href="/devfest2020#sponsor">
        <span>Sponsors</span>
        <v-icon>rounded_corner</v-icon>
      </v-btn>

      <v-btn color="#518FF5" flat value="speakers" router href="/devfest2020#speaker">
        <span>Speakers</span>
        <v-icon>group</v-icon>
      </v-btn> -->

      <v-btn color="#518FF5" flat value="schedule" router to="/devfest2020/schedule">
        <span>Schedule</span>
        <v-icon>list</v-icon>
      </v-btn>

      <v-btn color="#518FF5" flat value="devfest" router to="/devfest2020" exact>
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
      bottomNav: "devfest",
      items: [
        { title: "Sponsors", icon: "rounded_corner", route: "/devfest2020#sponsor" },
        { title: "Speakers", icon: "group", route: "/devfest2020#speaker" },
        { title: "Schedule", icon: "list", route: "/devfest2020/schedule" },
        { title: "DevFest", icon: "favorite", route: "/devfest2020" }
      ]
    };
  }
};
</script>