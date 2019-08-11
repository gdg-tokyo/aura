<template>
  <v-content class="pa-0">
    <v-container fluid class="my-4">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestTop />
        </v-flex>
      </v-layout>
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

    <v-container fluid style="padding: 0">
      <DevFestPhoto />
    </v-container>

    <v-container fluid style="padding: 64px; background-color: #1a73e8">
      <DevFestJoin />
    </v-container>
  </v-content>
</template>

<script>
import DevFestTop from "@/components/devfest2019/DevFestTop";
import DevFestTogether from "@/components/devfest2019/DevFestTogether";
import DevFestAbout from "@/components/devfest2019/DevFestAbout";
import DevFestPhoto from "@/components/devfest2019/DevFestPhoto";
import DevFestJoin from "@/components/devfest2019/DevFestJoin";

export default {
  components: {
    DevFestTop,
    DevFestTogether,
    DevFestAbout,
    DevFestPhoto,
    DevFestJoin
  }
};
</script>
