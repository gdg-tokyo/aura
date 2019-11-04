<template>
  <v-container class="pa-0">
    <v-layout justify-center class="google-font display-2"><p>Hands-on Teachers</p></v-layout>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex
        xs6
        sm3
        md3
        lg3
        v-for="(item, i) in workshops"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <v-dialog v-model="dialog" width="80%">
          <template v-slot:activator="{ on }">
            <div class="text-xs-center ma-1 pa-1 py-5 my-0">
              <v-avatar size="70%">
                <v-img :src="item.profileImage" :lazy-src="item.profileImage" v-on="on">
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-avatar>
              <p class="mt-3 mb-0 google-font" style="font-size:130%">
                {{item.name}}
                <v-btn
                  class="mt-0 mx-0"
                  icon
                  :href="item.link"
                  target="_blank"
                >
                  <v-icon small style="color:#333333">fas fa-link</v-icon>
                </v-btn>
                <br>{{item.englishName}}
              </p>
            </div>
          </template>
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>{{item.name}}</v-card-title>
            <v-card-text>{{item.position}}</v-card-text>
            <v-divider></v-divider>
            <v-layout wrap row fill-height class="pa-4">
              <v-flex xs12 sm2 md2 lg2 class="pa-2">
                <v-avatar size="100%">
                  <v-img :src="item.profileImage" :lazy-src="item.profileImage" v-on="on">
                    <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </v-img>
                </v-avatar>
              </v-flex>
              <v-flex xs12 sm10 md10 lg10 class="pa-2">
                <v-card-text>
                  <p>Profile</p>
                  <p style="white-space:pre-wrap; word-wrap:break-word;">{{item.profile}}</p>
                </v-card-text>
                <!-- <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
                </v-card-actions>-->
              </v-flex>
            </v-layout>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DevFestInfo from "@/assets/data/devfest2019.json";
export default {
  data() {
    return {
      workshops: DevFestInfo.Workshops,
    };
  }
};
</script>
