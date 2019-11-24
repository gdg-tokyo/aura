<template>
  <v-container>
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
                  <v-layout row wrap>
                    <v-flex xs12 class="pl-3" :style="{ 'border-left':  getBorderColor(sdata.place)}" >
                      <p class="google-font mb-0" style="font-size:130%">{{sdata.title}}</p>
                      <p style="font-size:100%" v-if="sdata.speakerName.length>0">{{sdata.speakerName}}</p>
                      <v-chip
                        class="ml-0"
                        :color="sdata.tag.color"
                        flat
                        v-if="sdata.timeDuration<60"
                        small
                      ></v-chip>
                      {{ sdata.tag.name }}
                      <v-chip
                        class="white--text ml-0"
                        color="black"
                        label
                        v-if="sdata.timeDuration<60"
                        small
                      ><v-icon x-small>av_timer</v-icon> {{ sdata.timeDuration }} min</v-chip>
                      <v-chip class="ml-1 mr-1" dark :color="getColor(sdata.place)" small label>
                        <v-icon x-small>room</v-icon>
                        {{sdata.place}}
                      </v-chip>
                      <v-chip class="ml-1 mr-1" dark :color="getLanguageColor(sdata.language)" small label>
                        <v-icon x-small>language</v-icon>
                        {{sdata.language}}
                      </v-chip>

                      <span v-for="sd in sdata.speakers" :key="sd">
                        <span v-for="(sp,i) in speakerData" :key="i">
                          <v-chip
                            color="teal"
                            label
                            small
                            outlined
                            v-if="sp.id == sd"
                            class="mr-1 my-2"
                          ><v-icon x-small>account_circle</v-icon>{{ sp.name }}</v-chip>
                        </span>
                      </span>
                    </v-flex>
                  </v-layout>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-flex>
      <!-- セッション以外の表示 -->
      <v-flex xs10 md9 v-else class="pa-3" >
        <div class="pl-3" :style="{ 'border-left':  getBorderColor(item.place)}">
            <p class="google-font mb-0" style="font-size:120%">{{item.title}}</p>
        <p class="google-font" style="font-size:90%">{{item.des}}</p>
        <v-chip
          class="white--text ml-0"
          color="pink"
          label
          v-if="item.timeDuration<60"
          small
        > <v-icon x-small>av_timer</v-icon> {{ item.timeDuration }} min</v-chip>
        <v-chip
          label
          class="white--text ml-0"
          color="pink"
          v-else
          small
        ><v-icon x-small>av_timer</v-icon>  {{ item.timeDuration/60 }} hour</v-chip>
        <v-chip class="ml-1" :color="getColor(item.place)" dark small label><v-icon x-small>room</v-icon>{{item.place}}</v-chip>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DevfestInfo from "@/assets/data/devfest2019.json";
import ScheduleData from "@/assets/data/devfest2019schedule.json";
import SessionData from "@/assets/data/devfest2019session.json";
export default {
  data: () => ({
    speakerData: DevfestInfo.Speakers,
    scheduleData: ScheduleData, // FIXME:スピーカー情報をAPIのレスポンスから取り出す
    sessionsData: SessionData
  }),
  methods: {
    getBorderColor(data){
      switch(data){
        case '講堂ホール':
          return '5px solid #1A73E8'
        case 'B101':
          return '5px solid #EA4335'
        case 'B102':
          return '5px solid #FBBC04'
        case 'B201':
          return '5px solid #34AB53'
        case 'B202':
          return '5px solid purple'
        default:
          return '5px solid orange'
      }
    },
    getColor(data){
      switch(data){
        case '講堂ホール':
          return '#1A73E8'
        case 'B101':
          return '#EA4335'
        case 'B102':
          return '#FBBC04'
        case 'B201':
          return '#34AB53'
        case 'B202':
          return 'purple'
        default:
          return 'orange'
      }
    },
    getLanguageColor(data) {
      switch(data) {
        case 'english':
          return '#4CAF50'
        case 'japanese':
        default:
          return '#FF5252'
      }
    }
  },
  filters: {
    summary: (val, num) => {
      if (val.length > num) {
        return val.substring(0, num) + "...";
      } else {
        return val;
      }
    }
  }
};
</script>
