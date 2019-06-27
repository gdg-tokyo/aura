<template>
  <v-content class="pa-0">
    <v-container fluid class="my-4">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestTop/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="background-color:#F9F9F9">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestTogether/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-4">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestAbout/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="padding: 0">
      <DevFestPhoto/>
    </v-container>

    <v-container fluid style="padding: 64px; background-color: #1a73e8">
      <DevFestJoin/>
    </v-container>
  </v-content>
</template>

<script>
import DevFestTop from "@/components/devfest/DevFestTop";
import DevFestTogether from "@/components/devfest/DevFestTogether";
import DevFestAbout from "@/components/devfest/DevFestAbout";
import DevFestPhoto from "@/components/devfest/DevFestPhoto";
import DevFestJoin from "@/components/devfest/DevFestJoin";

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
