<template>
  <v-container>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>パネルディスカッション</v-card-title>
      <v-card-text>講演者・講演内容紹介</v-card-text>
      <v-divider></v-divider>
      <v-layout wrap row fill-height align-center class="pa-4">
        <v-card-text>
          <h2>講演概要</h2>
          <h3>{{this.title}}</h3>
          <p>{{this.description}}</p>
        </v-card-text>
      </v-layout>
      <v-divider></v-divider>
      <div v-for="(speaker, index) in speakers" :key="index">
        <v-layout wrap row fill-height align-center class="pa-4">
          <v-flex xs12 sm4 md3 lg2 class="pa-2">
            <v-responsive :aspect-ratio="1/1">
              <v-avatar size="100%">
                <v-img
                  :src="getStorageUrl(speaker.profileImage)"
                  :lazy-src="getStorageUrl(speaker.profileImage)"
                  v-on="on"
                >
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-avatar>
            </v-responsive>
          </v-flex>
          <v-flex xs12 sm8 md9 lg10 class="pa-2">
            <v-card-text>
              <h3>{{speaker.name}} / {{speaker.englishName}}</h3>
              <p>{{speaker.position}}</p>
              <p style="white-space:pre-wrap; word-wrap:break-word;">{{speaker.profile}}</p>
            </v-card-text>
          </v-flex>
        </v-layout>
      </div>
      <v-divider></v-divider>
      <v-layout wrap row fill-height align-center class="pa-4">
          <v-flex xs12 sm4 md3 lg2 class="pa-2">
            <v-responsive :aspect-ratio="1/1">
              <v-avatar size="100%">
                <v-img
                  :src="getStorageUrl(moderator.profileImage)"
                  :lazy-src="getStorageUrl(moderator.profileImage)"
                  v-on="on"
                >
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-avatar>
            </v-responsive>
          </v-flex>
          <v-flex xs12 sm8 md9 lg10 class="pa-2">
            <v-card-text>
              <h3>Moderator : {{moderator.name}} / {{moderator.englishName}}</h3>
              <p>{{moderator.position}}</p>
              <p style="white-space:pre-wrap; word-wrap:break-word;">{{moderator.profile}}</p>
            </v-card-text>
          </v-flex>
        </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import DevFestInfo from "@/assets/data/devfest2019.json";
import Mixin from "@/mixin.js";

export default {
  created() {
    this.setMeta();
  },
  data() {
    return {
      title: "パネルディスカッション",
      description: "エンジニアのキャリアパス・キャリアチェンジを中心に私たちが歩んできた道と今後についてパネルディスカッションを行います",
      moderator: DevFestInfo.Speakers.keynotes.find(item => {
        return (item.id == "takuo-suzuki");
      }),
      speakers: DevFestInfo.Speakers.sessions.filter(item => {
        return (
          item.id == "eiji-kitamura" ||
          item.id == "yoichiro-tanaka" ||
          item.id == "takuya-oikawa"
        );
      })
    };
  },
  mixins: [Mixin],
  methods: {
    setMeta: function() {
      var title = "パネルディスカッション | GDG DevFest Tokyo 2019";
      var description =
        "及川卓也さん、えーじさん、田中洋一郎さんによるパネルディスカッション";
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
      alert("finish set");
    }
  }
};
</script>