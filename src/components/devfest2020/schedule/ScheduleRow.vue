<template>
  <v-flex xs12 class="pl-3" :style="{ 'border-left':  getBorderColor(sdata.place)}">
    <p class="google-font mb-0" style="font-size:130%">{{sdata.title}}</p>
    <p style="font-size:100%" v-if="sdata.speakerName.length>0">{{sdata.speakerName}}</p>
    <v-chip class="ml-0" :color="sdata.tag.color" flat v-if="sdata.timeDuration<60" small></v-chip>
    {{ sdata.tag.name }}
    <v-chip class="white--text ml-0" color="black" label v-if="sdata.timeDuration<60" small>
      <v-icon x-small>av_timer</v-icon>
      {{ sdata.timeDuration }} min
    </v-chip>
    <v-chip class="ml-1 mr-1" dark :color="getColor(sdata.place)" small label>
      <v-icon x-small>room</v-icon>
      {{sdata.place}}
    </v-chip>
    <v-chip class="ml-1 mr-1" dark :color="getLanguageColor(sdata.language)" small label>
      <v-icon x-small>language</v-icon>
      {{sdata.language}}
    </v-chip>
    <span v-for="sd in sdata.speakers" :key="sd">
      <span v-for="(sp,i) in sd" :key="i">
        <v-chip color="teal" label small outlined v-if="sp.id == sd" class="mr-1 my-2">
          <v-icon x-small>account_circle</v-icon>
          {{ sp.name }}
        </v-chip>
      </span>
    </span>
    <v-chip v-if="sdata.specialNotes" class="ml-1 mr-1" dark color="orange" small label>
      <v-icon x-small>favorite</v-icon>
      {{ sdata.specialNotes }}
    </v-chip>
  </v-flex>
</template>

<script>
export default {
  props: {
    sdata: {
      type: Object,
      default: null
    }
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
    getLanguageColor(data) {
      switch (data) {
        case "english":
          return "#4CAF50";
        case "japanese":
        default:
          return "#FF5252";
      }
    }
  }
};
</script>