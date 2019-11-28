<template>
  <v-container>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>ハンズオン紹介</v-card-title>
      <v-card-text>C棟で開催する手を動かして学ぶワークショップを紹介します</v-card-text>
      <v-divider></v-divider>
      <v-layout v-for="(item, i) in handsonData" :key="i">
        <v-flex sm-12 md-10 lg-10>
          <v-card class="d-flex ma-2 mt-4" flat>
            <v-layout wrap row fill-height align-center justify-center>
              <v-flex xs8 sm4 md4 lg4 class="pa-2">
                <v-responsive :aspect-ratio="1/1">
                  <v-img
                    :src="getStorageUrl(item.profileImage)"
                    :lazy-src="getStorageUrl(item.profileImage)"
                  ></v-img>
                </v-responsive>
              </v-flex>
              <v-flex xs12 sm8 md8 lg8 class="pa-2">
                <v-card flat class="pa-3">
                  <v-chip class="ml-1 mr-1" dark color="#1A73E8" small label>{{item.workshopRoom}}</v-chip>
                  <p class="google-font" style="font-size:130%">{{item.workshopTime}}</p>
                  <p class="google-font" style="font-size:140%">{{item.workshopTitle}}</p>
                  <p class="google-font" style="font-size:130%">講師： {{item.name}}</p>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import Mixin from "@/mixin.js";
import DevfestInfo from "@/assets/data/devfest2019.json";

export default {
  created() {
    this.setMeta();
  },
  data() {
    return {
      title: "ハンズオン紹介",
      description: "C棟で開催する手を動かして学ぶワークショップを紹介します",
      handsonData: DevfestInfo.Workshops
    };
  },
  mixins: [Mixin],
  methods: {
    setMeta: function() {
      var title = "ハンズオン紹介 | GDG DevFest Tokyo 2019";
      var description = "C棟で開催する手を動かして学ぶワークショップ";
      document.title = title;
      document
        .querySelector("meta[property='og:title']")
        .setAttribute("content", title);
      document
        .querySelector("meta[name='description']")
        .setAttribute("content", description);
      document
        .querySelector("meta[property='og:description']")
        .setAttribute("content", description);
    }
  }
};
</script>