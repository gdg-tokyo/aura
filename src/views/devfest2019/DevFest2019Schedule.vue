<template>
    <v-content class="pa-0">
        <v-container fluid class="px-2">
            <v-layout row wrap align-center justify-center fill-height class="mt-0">
                <v-flex xs12 md10>
                    <ScheduleHeader class="pa-0"/>
                    <Schedule/>
                    <!-- <comingSoon/> -->
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import ScheduleHeader from '@/components/devfest2019/schedule/Header.vue'
import Schedule from '@/components/devfest2019/schedule/Schedule.vue'
export default {
    components:{
        ScheduleHeader,
        // comingSoon,
        Schedule
    }
}
</script>
