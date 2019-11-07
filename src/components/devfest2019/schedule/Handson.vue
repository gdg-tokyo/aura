<template>
  <v-layout>
    <v-layout>
        <a class="card-link" href="#">
            <article class="blog-card">
                <img class="post-image" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" />
                <div class="article-details">
                <h4 class="post-category">Web/Firebase/Go</h4>
                <h3 class="post-title">Handsonを体験しよう</h3>
                <p class="post-description">聞くだけでなく実際に手を動かすハンズオンで最新技術を身に着けましょう</p>
                </div>
            </article>
        </a>
    </v-layout>
    <!-- <v-layout
        :v-for="(item, i) in handsonInfo"
        >
        <v-card
            class="mx-auto"
            max-width="344"
            outlined
        >
            <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-4">{{item.name}}</div>
                <v-list-item-title class="headline mb-1">{{item.workshopTitle}}</v-list-item-title>
                <v-list-item-subtitle>{{item.workshopDescription}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
                tile
                size="80"
                color="grey"
            >
                <v-img
                :src="getStorageUrl(item.profileImage)"
                :lazy-src="getStorageUrl(item.profileImage)"
                :alt="item.name"
            >
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
            </v-img>
            </v-list-item-avatar>
            </v-list-item>
        </v-card>
    </v-layout> -->
  </v-layout>
</template>

<script>
import DevfestInfo from "@/assets/data/devfest2019.json";

export default {
    data() {
        handsonInfo: DevfestInfo.Workshops
    }
}
</script>