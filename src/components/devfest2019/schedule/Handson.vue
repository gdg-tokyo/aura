<template>
    <v-container align-center justify-center fill-heights>
        <v-row>
            <v-layout>
                <v-card
                    class="d-flex ma-2 mb-4"
                    tile
                >
                    <v-img
                        height="300"
                        width="300"
                        :src="getStorageUrl(handsonImageUrl)" :lazy-src="getStorageUrl(handsonImageUrl)"
                        ></v-img>
                    <v-card flat width="600" class="pa-3">
                        <p class="google-font display-1">{{hero.heading}}</p>
                        <p class="google-font">{{hero.description}}</p>
                        <p class="google-font gray">{{hero.notice}}</p>
                    </v-card>
                </v-card>
            </v-layout>
        </v-row>
        <v-divider />
        <v-row>
            <v-layout v-for="(item, i) in handsonData" :key="i">
                <v-card
                    class="d-flex ma-2 mt-4"
                    tile
                >
                    <v-img
                        height="300"
                        width="300"
                        :src="getStorageUrl(item.profileImage)" :lazy-src="getStorageUrl(item.profileImage)"
                        ></v-img>
                    <v-card flat width="600" class="pa-3">
                        <p class="google-font">{{item.workshopTime}}会場：{{item.workshopRoom}}</p>
                        <p class="google-font display-1">{{item.workshopTitle}}</p>
                        <p class="google-font">講師： {{item.name}}</p>
                        <p class="google-font">{{item.workshopDescription}}</p>
                    </v-card>
                </v-card>
            </v-layout>
        </v-row>
    </v-container>
</template>

<script>
import DevfestInfo from "@/assets/data/devfest2019.json";
import Mixin from "@/mixin.js";

export default {
  data: () => ({
      hero: {
          "heading": "ハンズオンに挑戦しよう！",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "notice" : "※注意事項※電源・Wi-Fiあります。ご自分のWindowsまたはMacのノートパソコンをお持ち下さい",
      },
      handsonImageUrl: "https://storage.googleapis.com/gdgtokyo_img/devfest19/misc/handson",
      handsonData: DevfestInfo.Workshops,
  }),
  mixins: [Mixin]
};
</script>
