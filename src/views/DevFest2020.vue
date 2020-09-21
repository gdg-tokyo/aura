<template>
  <v-content class="pa-0">
    <v-container fluid style="padding: 0">
      <DevFestTop />
    </v-container>

    <v-container fluid style="background-color:#F9F9F9">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestAbout />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-4">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestSchedule />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="background-color:#F9F9F9">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestStaff />
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <v-container fluid style="padding: 0">
      <DevFestPhoto />
    </v-container> -->

    <v-container fluid style="padding: 64px; background-color: #1a73e8">
      <DevFestJoin />
    </v-container>
  </v-content>
</template>

<script>
import DevFestTop from "@/components/devfest2020/DevFestTop";
import DevFestSchedule from "@/components/devfest2020/DevFestSchedule";
import DevFestAbout from "@/components/devfest2020/DevFestAbout";
import DevFestJoin from "@/components/devfest2020/DevFestJoin";
import DevFestStaff from "@/components/devfest2020/DevFestStaff";

export default {
  components: {
    DevFestTop,
    DevFestSchedule,
    DevFestAbout,
    DevFestJoin,
    DevFestStaff,
  }
};
</script>
