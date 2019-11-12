<template>
    <v-container>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>{{detail.name}}</v-card-title>
        <v-card-text>{{detail.position}}</v-card-text>
        <v-divider></v-divider>
        <v-layout wrap row fill-height align-center class="pa-4">
          <v-flex xs12 sm4 md3 lg2 class="pa-2">
            <v-responsive :aspect-ratio="1/1">
              <v-avatar size="100%">
                <v-img :src="getStorageUrl(detail.profileImage)" :lazy-src="getStorageUrl(detail.profileImage)" v-on="on">
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
              </v-avatar>
            </v-responsive>
          </v-flex>
          <v-flex xs12 sm8 md9 lg10 class="pa-2">
            <v-card-text>
              <h2>Profile</h2>
              <p style="white-space:pre-wrap; word-wrap:break-word;">{{detail.profile}}</p>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-layout wrap row fill-height align-center class="pa-4" v-if="(detail.sessionTitle).length>0">
          <v-card-text>
            <h2>講演概要</h2>
            <h3>{{detail.sessionTitle}}</h3>
            <p>{{detail.sessionDetail}}</p>
          </v-card-text>
        </v-layout>
      </v-card>
    </v-container>
</template>

<script>
import axios from "axios";
import Mixin from "@/mixin.js";

export default {
    created() {
        this.getDetail()
        const title = detail.name + '- GDG DevFest Tokyo 2019'
        const description = detail.profile
        document.title = title
        document.querySelector("meta[property='og:title']").setAttribute('content', title)
        document.querySelector("meta[name='description']").setAttribute('content', description)
        document.querySelector("meta[property='og:description']").setAttribute('content', description)
    },
    data() {
        return {
            speakerID: '',
            detail: ''
        }
    },
    mixins: [Mixin],
    methods: {
        getDetail: function () {
            const speakerID = this.$route.params.id
            const baseUrl = 'https://us-central1-gdg-tokyo-website.cloudfunctions.net/api/speaker/'
            axios.get(baseUrl + speakerID).then(response => {
                this.detail = response.data
            })
        },
    }
}
</script>