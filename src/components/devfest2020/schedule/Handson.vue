<template>
  <v-container align-center justify-center fill-heights>
    <v-layout>
      <v-flex sm-12 md-10 lg-10>
        <v-card class="d-flex ma-2 mb-4" tile>
          <v-layout wrap row fill-height align-center justify-center>
            <v-flex xs8 sm4 md4 lg4 class="pa-2">
              <v-responsive :aspect-ratio="1/1">
                <v-img
                  :src="getStorageUrl(handsonImageUrl)"
                  :lazy-src="getStorageUrl(handsonImageUrl)"
                ></v-img>
              </v-responsive>
            </v-flex>
            <v-flex xs12 sm8 md8 lg8 class="pa-2">
              <v-card flat class="pa-3">
                <p class="google-font" style="font-size:150%">{{hero.heading}}</p>
                <p
                  class="google-font"
                  style="white-space:pre-wrap; word-wrap:break-word;"
                >{{hero.description}}</p>
                <p class="google-font red--text">{{hero.notice}}</p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-divider />
    <v-layout wrap row align-center fill-height class="my-3">
      <v-flex xs9>
        <h2 class="google-font">ハンズオンスケジュール</h2>
      </v-flex>
    </v-layout>
    <v-layout v-for="(item, i) in handsonData" :key="i">
      <v-flex sm-12 md-10 lg-10>
        <v-card class="d-flex ma-2 mt-4" tile>
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
                <p
                  class="google-font"
                  style="white-space:pre-wrap; word-wrap:break-word;"
                >{{item.workshopDescription}}</p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <br/>
    <v-divider />
    <v-layout wrap row align-center fill-height class="my-3">
      <v-flex xs9>
        <h2 class="google-font">常設コードラボ</h2>
      </v-flex>
    </v-layout>
    <v-layout v-for="item in codelabData" :key="item">
      <v-flex sm-12 md-10 lg-10>
        <v-card class="d-flex ma-2 mt-4" tile>
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
                <p
                  class="google-font"
                  style="white-space:pre-wrap; word-wrap:break-word;"
                >{{item.workshopDescription}}</p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DevfestInfo from "@/assets/data/devfest2020.json";
import Mixin from "@/mixin.js";

export default {
  data: () => ({
    hero: {
      heading: "ハンズオン/コードラボに挑戦しよう！",
      description:
        "新C103, 新C203にてハンズオン/コードラボを実施します。\n実際のコードに触れながら各テクノロジーを学習していきましょう！",
      notice:
        "※注意事項※ 電源・Wi-Fiあります。ご自分のWindowsまたはMacのノートパソコンをお持ち下さい。"
    },
    handsonImageUrl:
      "https://storage.googleapis.com/gdgtokyo_img/devfest19/misc/handson",
    handsonData: DevfestInfo.Workshops,
    codelabData: DevfestInfo.Codelabs
  }),
  mixins: [Mixin]
};
</script>
