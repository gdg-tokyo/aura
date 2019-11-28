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
              @click="changeToSchedule"
            >Session Schedule</v-btn>
            <v-btn depressed class="white--text" color="#EA4335" @click="changeToHandson">Hands-on</v-btn>
          </v-layout>
          <Schedule v-if="isTimeSchedule" />
          <Handson v-else />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import ScheduleHeader from "@/components/devfest2019/schedule/Header.vue";
import Schedule from "@/components/devfest2019/schedule/Schedule.vue";
import Handson from "@/components/devfest2019/schedule/Handson.vue";
export default {
  components: {
    ScheduleHeader,
    Schedule,
    Handson
  },
  methods: {
    changeToSchedule() {
      this.isTimeSchedule = true;
    },
    changeToHandson() {
      this.isTimeSchedule = false;
    }
  },
  data() {
    return {
      isTimeSchedule: true
    };
  }
};
</script>
