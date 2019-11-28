<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          src="/img/devfest2019/kit/image08.png"
          lazy-src="/img/devfest2019/kit/image08.png"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font display-2">Speakers</p>
      </v-flex>
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          src="/img/devfest2019/kit/image09.png"
          lazy-src="/img/devfest2019/kit/image09.png"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
    </v-layout>
    <!-- Opening & Keynotes -->
    <!-- title -->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font display-2">Opening & Keynotes</p>
      </v-flex>
    </v-layout>
    <!-- contents -->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex
        xs6
        sm3
        md3
        lg3
        v-for="(item, i) in keynotes"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <div class="text-xs-center ma-1 pa-1 py-5 my-0">
          <router-link tag="div" v-bind:to="{ name : 'devfest_session_detail', params : { id: item.id }}">
            <v-avatar size="70%" style="cursor: pointer">
              <v-img :src="getStorageUrl(item.profileImage)" :lazy-src="getStorageUrl(item.profileImage)">
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </v-img>
            </v-avatar>
          </router-link>
          <p class="mt-3 mb-0 google-font" style="font-size:100%; white-space:pre-wrap; word-wrap:break-word;">{{item.position}}</p>
          <p class="mt-3 mb-0 google-font" style="font-size:130%">
            {{item.name}}
            <v-btn
              class="mt-0 mx-0"
              icon
              v-if="(item.twitter).length>0"
              :href="item.twitter"
              target="_blank"
            >
              <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
            </v-btn>
            <br>{{item.englishName}}
          </p>
        </div>
      </v-flex>
    </v-layout>
    <!-- Special Guests -->
    <!-- title -->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font display-2">Special Guests</p>
      </v-flex>
    </v-layout>
    <!-- content -->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex
        xs6
        sm3
        md3
        lg3
        v-for="(item, i) in guests"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <div class="text-xs-center ma-1 pa-1 py-5 my-0">
          <router-link tag="div" v-bind:to="{ name : 'devfest_session_detail', params : { id: item.id }}">
            <v-avatar size="70%" style="cursor: pointer">
              <v-img :src="getStorageUrl(item.profileImage)" :lazy-src="getStorageUrl(item.profileImage)">
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </v-img>
            </v-avatar>
          </router-link>
          <p class="mt-3 mb-0 google-font" style="font-size:100%; white-space:pre-wrap; word-wrap:break-word;">{{item.position}}</p>
          <p class="mt-3 mb-0 google-font" style="font-size:130%">
            {{item.name}}
            <v-btn
              class="mt-0 mx-0"
              icon
              v-if="(item.twitter).length>0"
              :href="item.twitter"
              target="_blank"
            >
              <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
            </v-btn>
            <br>{{item.englishName}}
          </p>
        </div>
      </v-flex>
    </v-layout>
    <!-- Session Speakers -->
    <!-- title -->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font display-2">Sessions (五十音順)</p>
      </v-flex>
    </v-layout>
    <!-- contents -->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex
        xs6
        sm3
        md3
        lg3
        v-for="(item, i) in sessions"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <div class="text-xs-center ma-1 pa-1 py-5 my-0">
          <router-link tag="div" v-bind:to="{ name : 'devfest_session_detail', params : { id: item.id }}">
            <v-avatar size="70%"  style="cursor: pointer">
              <v-img :src="getStorageUrl(item.profileImage)" :lazy-src="getStorageUrl(item.profileImage)">
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </v-img>
            </v-avatar>
          </router-link>
          <p class="mt-3 mb-0 google-font" style="font-size:100%; white-space:pre-wrap; word-wrap:break-word;">{{item.position}}</p>
          <p class="mt-3 mb-0 google-font" style="font-size:130%">
            {{item.name}}
            <v-btn
              class="mt-0 mx-0"
              icon
              v-if="(item.twitter).length>0"
              :href="item.twitter"
              target="_blank"
            >
              <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
            </v-btn>
            <br>{{item.englishName}}
          </p>
        </div>
      </v-flex>
    </v-layout>
    <!-- Chrome Dev Summit Speaker -->
    <!-- title -->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm5 md5 lg5 class="pa-2">
        <v-img
          :src="getStorageUrl(cdsLogoUrl)"
          :lazy-src="getStorageUrl(cdsLogoUrl)"
          width="100%"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm12 md10 lg10 class="pa-2 text-xs-center">
        <p class="google-font"><a href="https://developer.chrome.com/devsummit/">chorome dev summit 2019</a> で発表された技術や得た知見、情報などを共有します。</p>
        <p class="google-font">We will share the technology, knowledge and information announced at <a href="https://developer.chrome.com/devsummit/">chorome dev summit 2019</a>.</p>
      </v-flex>
    </v-layout>
    <!-- contents -->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex
        xs6
        sm3
        md3
        lg3
        offset-sm1
        offset-md1
        offset-lg1
        v-for="(item, i) in cds"
        :key="i"
        class="text-xs-center"
        style="text-align:center"
      >
        <div class="text-xs-center ma-1 pa-1 py-5 my-0">
          <router-link tag="div" v-bind:to="{ name : 'devfest_session_detail', params : { id: item.id }}">
            <v-avatar size="70%"  style="cursor: pointer">
              <v-img :src="getStorageUrl(item.profileImage)" :lazy-src="getStorageUrl(item.profileImage)">
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </v-img>
            </v-avatar>
          </router-link>
          <p class="mt-3 mb-0 google-font" style="font-size:100%; white-space:pre-wrap; word-wrap:break-word;">{{item.position}}</p>
          <p class="mt-3 mb-0 google-font" style="font-size:130%">
            {{item.name}}
            <v-btn
              class="mt-0 mx-0"
              icon
              v-if="(item.twitter).length>0"
              :href="item.twitter"
              target="_blank"
            >
              <v-icon small style="color:#1da1f2">fab fa-twitter</v-icon>
            </v-btn>
            <br>{{item.englishName}}
          </p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.speaker{
  text-decoration:none;
}
</style>

<script>
import DevFestInfo from "@/assets/data/devfest2019.json";
import Mixin from "@/mixin.js";
export default {
  data() {
    return {
      keynotes: DevFestInfo.Speakers.keynotes,
      guests: DevFestInfo.Speakers.guests,
      sessions: DevFestInfo.Speakers.sessions,
      cds: DevFestInfo.Speakers.chromeDevSummits,
      cdsLogoUrl: DevFestInfo.cdsLogoUrl
    };
  },
  method: {
    getDetailLink(speakerID){
      return '/devfest2019/session/' + speakerID
    }
  },
  mixins: [Mixin]
};
</script>
