<template>
  <v-container>
    <p>Day 1</p>
    <v-layout
      row
      wrap
      v-for="(item,index) in scheduleData"
      :key="index"
      style="border-radius: 0px; border:1px solid #E0E0E0;border-left:0px;border-right:0px"
    >
      <!-- 時間部分の表示 -->
      <v-flex xs12 md3 class="text-right pa-3">
        <p style="font-size:150%" class="mb-0">{{item.startTime}}</p>
        <p style="font-size:80%" class="ma-0">{{item.endTime}}</p>
      </v-flex>
      <!-- セッションの表示 -->
      <v-flex v-if="item.sessions.length" xs12 md9 class="pa-3">
        <div v-for="(n,index) in item.sessions.length" :key="index" class="white">
          <div v-for="(itemp,index) in item.sessions[index]" :key="index" class="white">
            <div v-for="(obj,x) in itemp" :key="x" class="white">
              <div v-for="(sdata,key) in sessionsData" :key="key">
                <div v-if="obj == sdata.id" class="py-3 pl-3">
                  <v-dialog>
                    <template v-slot:activator="{ on }">
                      <div v-on="on">
                        <ScheduleRow :sdata="sdata" />
                      </div>
                    </template>
                    <v-card>
                      <v-card-title class="headline grey lighten-2" primary-title>{{sdata.title}}</v-card-title>
                      <v-divider></v-divider>
                      <v-layout wrap row fill-height justify-center class="pa-4">
                        <!-- <v-flex xs12 sm10 md4 lg2 class="pa-2">
                          <v-responsive :aspect-ratio="1/1">
                            <v-avatar size="100%">
                              <v-img
                                :src="getStorageUrl(sdata.profileImage)"
                                :lazy-src="getStorageUrl(sdata.profileImage)"
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
                        </v-flex> -->
                        <v-flex xs12 sm12 md8 lg10 class="pa-2">
                          <v-card-text>
                            <p>Name</p>
                            <p style="white-space:pre-wrap; word-wrap:break-word;">{{sdata.speakerName}}</p>
                          </v-card-text>
                        </v-flex>
                      </v-layout>
                      <!-- <v-divider></v-divider>
                      <v-layout v-if="sdata.tutor" wrap row fill-height justify-center class="pa-4">
                        <v-flex xs12 sm10 md4 lg2 class="pa-2">
                          <v-responsive :aspect-ratio="1/1">
                            <v-avatar size="100%">
                              <v-img
                                :src="getStorageUrl(sdata.tutor.profileImage)"
                                :lazy-src="getStorageUrl(sdata.tutor.profileImage)"
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
                        <v-flex xs12 sm12 md8 lg10 class="pa-2">
                          <v-card-text>
                            <p>講師Profile</p>
                            <p style="font-size:150%;">{{sdata.tutor.name}}</p>
                            <p>{{sdata.tutor.position}}</p>
                            <p
                              style="white-space:pre-wrap; word-wrap:break-word;"
                            >{{sdata.tutor.profile}}</p>
                          </v-card-text>
                        </v-flex>
                      </v-layout> -->
                    </v-card>
                  </v-dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-flex>
      <!-- セッション以外の表示 -->
      <v-flex xs10 md9 v-else class="pa-3">
        <div class="pl-3" :style="{ 'border-left':  getBorderColor(item.place)}">
          <p class="google-font mb-0" style="font-size:120%">{{item.title}}</p>
          <p class="google-font" style="font-size:90%">{{item.des}}</p>
          <v-chip class="white--text ml-0" color="black" label v-if="item.timeDuration<60" small>
            <v-icon x-small>av_timer</v-icon>
            {{ item.timeDuration }} min
          </v-chip>
          <v-chip label class="white--text ml-0" color="black" v-else small>
            <v-icon x-small>av_timer</v-icon>
            {{ item.timeDuration/60 }} hour
          </v-chip>
          <v-chip class="ml-1" :color="getColor(item.place)" dark small label>
            <v-icon x-small>room</v-icon>
            {{item.place}}
          </v-chip>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.session {
  text-decoration: none;
}
</style>

<script>
import ScheduleRow from "@/components/devfest2020/schedule/ScheduleRow";
import DevfestInfo from "@/assets/data/devfest2020.json";
import ScheduleData from "@/assets/data/devfest2020schedule.json";
import SessionData from "@/assets/data/devfest2020session.json";

export default {
  data: () => ({
    speakerData: DevfestInfo.Speakers,
    scheduleData: ScheduleData.day1,
    sessionsData: SessionData,
  }),
  components: {
    ScheduleRow,
  },
  methods: {
    getBorderColor(data) {
      switch (data) {
        case "講堂ホール":
          return "5px solid #1A73E8";
        case "B101":
          return "5px solid #EA4335";
        case "B102":
          return "5px solid #FBBC04";
        case "B201":
          return "5px solid #34AB53";
        case "B202":
          return "5px solid purple";
        default:
          return "5px solid orange";
      }
    },
    getColor(data) {
      switch (data) {
        case "講堂ホール":
          return "#1A73E8";
        case "B101":
          return "#EA4335";
        case "B102":
          return "#FBBC04";
        case "B201":
          return "#34AB53";
        case "B202":
          return "purple";
        default:
          return "orange";
      }
    },
    hasInfo(data) {
      return data.length > 0;
    },
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) {
        return val.substring(0, num) + "...";
      } else {
        return val;
      }
    },
  },
};
</script>
