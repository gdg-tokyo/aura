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
            <v-btn
              depressed
              class="white--text"
              color="green"
              @click="cahngeToWorkshop"
            >Workshop</v-btn>
          </v-layout>
          <ScheduleDay1 v-if="selected === 'day1'" />
          <ScheduleDay2 v-else-if="selected === 'day2'" />
          <Workshop v-else />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import ScheduleHeader from "@/components/devfest2020/schedule/Header.vue";
import ScheduleDay1 from "@/components/devfest2020/schedule/ScheduleDay1.vue";
import ScheduleDay2 from "@/components/devfest2020/schedule/ScheduleDay2.vue";
import Workshop from "@/components/devfest2020/schedule/Workshop.vue";
import ScheduleData from "@/assets/data/devfest2020schedule.json";
export default {
  components: {
    ScheduleHeader,
    ScheduleDay1,
    ScheduleDay2,
    Workshop
  },
  methods: {
    changeToDay1() {
      if (!this.selected !== 'day1') {
        this.$router.push('/devfest2020/schedule/1');
        // this.isDay1 = true;
        this.selected = 'day1';
      }
    },
    changeToDay2() {
      if (this.selected !== 'day2') {
        this.$router.push('/devfest2020/schedule/2');
        // this.isDay1 = false;
        this.selected = 'day2';
      }
    },
    cahngeToWorkshop() {
      if (this.selected !== 'workshop') {
        this.$router.push('/devfest2020/schedule/workshop');
        this.selected = 'workshop';
      }
    }
  },
  data() {
    return {
      selected: 'day1'
    };
  },
  created() {
    switch (this.$route.params.day) {
      case 'day1':
        this.selected = 'day1';
        break;
      case 'day2':
        this.selected = 'day2';
        break;
      case 'workshop':
        this.selected = 'workshop';
        break;
      default:
        break;
    }
    // if (this.$route.params.day === '2') {
    //   this.isDay1 = false;
    // } else {
    //   this.isDay1 = true;
    // }
    if (this.$route.params.session_id) {
      const existInDay2 = ScheduleData.day2.some(data => {
        return data.sessions.some(session => {
          return session.item.includes(Number(this.$route.params.session_id));
        });
      });
      if (existInDay2) {
        this.selected = 'day2'
        // this.isDay1 = false;
      }
    }
  }
};
</script>
