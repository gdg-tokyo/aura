<template>
  <v-content class="pa-0">
    <v-container fluid style="padding: 0">
      <DevFestTop />
    </v-container>

    <v-container fluid style="background-color:#F9F9F9">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestTogether />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-4">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestAbout />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="background-color:#F9F9F9">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestOrganizer />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="padding: 0">
      <DevFestPhoto />
    </v-container>

    <v-container fluid style="padding: 64px; background-color: #1a73e8">
      <DevFestJoin />
    </v-container>
  </v-content>
</template>

<script>
import DevFestTop from "@/components/devfest2020/DevFestTop";
import DevFestTogether from "@/components/devfest2020/DevFestTogether";
import DevFestAbout from "@/components/devfest2020/DevFestAbout";
import DevFestPhoto from "@/components/devfest2020/DevFestPhoto";
import DevFestJoin from "@/components/devfest2020/DevFestJoin";
import DevFestOrganizer from "@/components/devfest2020/DevFestOrganizer";

export default {
  components: {
    DevFestTop,
    DevFestTogether,
    DevFestAbout,
    DevFestPhoto,
    DevFestJoin,
    DevFestOrganizer,
  }
};
</script>
