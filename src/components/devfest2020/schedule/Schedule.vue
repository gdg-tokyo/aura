<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on }">
      <div v-on="on">
        <ScheduleRow :sdata="sdata" />
      </div>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>{{sdata.title}}</v-card-title>
      <v-divider></v-divider>
      <v-layout wrap row fill-height justify-center class="pa-4">
        <v-flex xs12 sm10 md3 lg2 class="pa-2">
          <v-responsive :aspect-ratio="1/1">
            <v-avatar size="100%">
              <v-img
                  :src="sdata.profileImage"
                  :lazy-src="sdata.profileImage"
              >
                <v-layout
                    slot="placeholder"
                    fill-height
                    align-center
                    justify-center
                    ma-0
                >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </v-img>
            </v-avatar>
          </v-responsive>
        </v-flex>
        <v-flex xs12 sm12 md9 lg10 class="pa-2">
          <v-card-text>
            <p style="white-space:pre-wrap; word-wrap:break-word;">{{sdata.speakerName}}</p>
            <p style="white-space:pre-wrap; word-wrap:break-word;">{{sdata.profile}}</p>
          </v-card-text>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout wrap row fill-height justify-center class="pa-4">
        <v-spacer></v-spacer>
        <v-flex xs12 sm12 md9 lg10 class="pa-2">
          <v-card-text>
            <p>セッション概要</p>
            <p
                style="white-space:pre-wrap; word-wrap:break-word;"
            >{{sdata.description}}</p>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<style>
</style>

<script>
import ScheduleRow from "@/components/devfest2020/schedule/ScheduleRow";

export default {
  data() {
    return {
      dialog: false
    };
  },
  props: {
    sdata: {
      type: Object,
      default: null
    }
  },
  components: {
    ScheduleRow,
  },
  mounted() {
    if (this.$route.params.id) {
      if (this.sdata.id === this.$route.params.id) {
        this.dialog = true;
      }
    }
  }
};
</script>
