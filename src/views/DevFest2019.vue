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

    <v-container fluid style="background-color:#F9F9F9">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestSpeaker id="speaker"/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid style="background-color:#F9F9F9">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestHandson />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="my-4">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestSponsor id="sponsor"/>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="background-color:#F9F9F9">
      <v-layout wrap align-center justify-center row fill-height>
        <v-flex xs12 md10>
          <DevFestPartner />
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
import DevFestTop from "@/components/devfest2019/DevFestTop";
import DevFestTogether from "@/components/devfest2019/DevFestTogether";
import DevFestAbout from "@/components/devfest2019/DevFestAbout";
import DevFestPhoto from "@/components/devfest2019/DevFestPhoto";
import DevFestJoin from "@/components/devfest2019/DevFestJoin";
import DevFestOrganizer from "@/components/devfest2019/DevFestOrganizer";
import DevFestSponsor from "@/components/devfest2019/DevFestSponsor";
import DevFestSpeaker from '@/components/devfest2019/DevFestSpeaker';
import DevFestPartner from '@/components/devfest2019/DevFestPartner';
import DevFestHandson from '@/components/devfest2019/DevFestHandson';

export default {
  components: {
    DevFestTop,
    DevFestTogether,
    DevFestAbout,
    DevFestPhoto,
    DevFestJoin,
    DevFestOrganizer,
    DevFestSpeaker,
    DevFestSponsor,
    DevFestPartner,
    DevFestHandson
  }
};
</script>
