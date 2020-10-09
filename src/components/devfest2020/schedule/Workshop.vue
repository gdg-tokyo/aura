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
        <h2 class="google-font">ハンズオン/ハッカソンスケジュール</h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex sm-12 md-10 lg-10>
        <v-card class="d-flex ma-2 mt-4" tile>
          <v-layout wrap row fill-height align-center justify-center>
            <v-flex xs8 sm4 md4 lg4 class="pa-2">
              <v-responsive :aspect-ratio="1/1">
                <v-img
                  :src="getStorageUrl(handsonData.profileImage)"
                  :lazy-src="getStorageUrl(handsonData.profileImage)"
                ></v-img>
              </v-responsive>
            </v-flex>
            <v-flex xs12 sm8 md8 lg8 class="pa-2">
              <v-card flat class="pa-3">
                <p class="google-font" style="font-size:130%">{{handsonData.workshopTime}}</p>
                <p class="google-font" style="font-size:150%">{{handsonData.workshopTitle}}</p>
                <p class="google-font" style="font-size:130%">講師： {{handsonData.name}}</p>
                <p
                  class="google-font"
                  style="white-space:pre-wrap; word-wrap:break-word;"
                >{{handsonData.workshopDescription}}</p>
                <v-btn
                  depressed
                  class="white--text"
                  color="#EA4335"
                  :to="handsonData.link"
                >Register Now</v-btn>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <br/>
    <v-layout>
      <v-flex sm-12 md-10 lg-10>
        <v-card class="d-flex ma-2 mt-4" tile>
          <v-layout wrap row fill-height align-center justify-center>
            <v-flex xs8 sm4 md4 lg4 class="pa-2">
              <v-responsive :aspect-ratio="1/1">
                <v-img
                  :src="getStorageUrl(hackathonData.profileImage)"
                  :lazy-src="getStorageUrl(hackathonData.profileImage)"
                ></v-img>
              </v-responsive>
            </v-flex>
            <v-flex xs12 sm8 md8 lg8 class="pa-2">
              <v-card flat class="pa-3">
                <p class="google-font" style="font-size:130%">{{hackathonData.workshopTime}}</p>
                <p class="google-font" style="font-size:150%">{{hackathonData.workshopTitle}}</p>
                <p class="google-font" style="font-size:130%">講師： {{hackathonData.name}}</p>
                <p
                  class="google-font"
                  style="white-space:pre-wrap; word-wrap:break-word;"
                >{{hackathonData.workshopDescription}}</p>
                <v-btn
                  depressed
                  class="white--text"
                  color="#EA4335"
                  :to="hackathonData.link"
                >Register Now</v-btn>
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
      heading: "ハンズオン/ハッカソンに挑戦しよう！",
      description:
        "メインセッションとは別チャンネルにて、ハンズオン/ハッカソンを実施します。\n実際のコードに触れながら各テクノロジーを学習していきましょう！",
      notice:
        "※注意事項※ ご参加には事前申込みが必要です。それぞれの詳細より申し込みページをご覧ください。"
    },
    handsonImageUrl:
      "https://storage.googleapis.com/gdgtokyo_img/devfest19/misc/handson",
    handsonData: DevfestInfo.HandsOn,
    hackathonData: DevfestInfo.Hackathon
  }),
  mixins: [Mixin]
};
</script>
