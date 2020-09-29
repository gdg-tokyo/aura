<template>
  <v-content class="pa-0">
    <v-container fluid class="px-2">
      <v-layout row wrap align-center justify-center fill-height class="mt-0">
        <v-flex xs12 md10>
          <ScheduleHeader />
          <v-layout justify-center text-xs-center>
            <v-btn
              depressed
              class="white--text"
              color="#1A73E8"
              @click="changeToDay1"
            >Day 1 (10/17 Sat.)</v-btn>
            <v-btn
              depressed
              class="white--text"
              color="#EA4335"
              @click="changeToDay2"
            >Day 2 (10/18 Sun.)</v-btn>
          </v-layout>
          <ScheduleDay1 v-if="isDay1" />
          <ScheduleDay2 v-else />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import ScheduleHeader from "@/components/devfest2020/schedule/Header.vue";
import ScheduleDay1 from "@/components/devfest2020/schedule/ScheduleDay1.vue";
import ScheduleDay2 from "@/components/devfest2020/schedule/ScheduleDay2.vue";
import ScheduleData from "@/assets/data/devfest2020schedule.json";
export default {
  components: {
    ScheduleHeader,
    ScheduleDay1,
    ScheduleDay2
  },
  methods: {
    changeToDay1() {
      this.isDay1 = true;
    },
    changeToDay2() {
      this.isDay1 = false;
    }
  },
  data() {
    return {
      isDay1: true
    };
  },
  created() {
    if (this.$route.params.id) {
      const existInDay2 = ScheduleData.day2.some(data => {
        return data.sessions.some(session => {
          return session.item.includes(Number(this.$route.params.id));
        });
      });
      if (existInDay2) {
        this.changeToDay2();
      }
    }
  }
};
</script>
