<template>
  <v-container>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>パネルディスカッション</v-card-title>
      <v-card-text>講演者・講演内容紹介</v-card-text>
      <v-divider></v-divider>
      <v-layout wrap row fill-height align-center class="pa-4">
        <v-card-text>
          <h2>講演概要</h2>
          <h3>{{this.title}}</h3>
          <p>{{this.description}}</p>
        </v-card-text>
      </v-layout>
      <v-divider></v-divider>
      <div v-for="(speaker, index) in speakers" :key="index" >
        <v-layout wrap row fill-height align-center class="pa-4">
            <v-flex xs12 sm4 md3 lg2 class="pa-2">
            <v-responsive :aspect-ratio="1/1">
                <v-avatar size="100%">
                <v-img :src="getStorageUrl(speaker[4])" :lazy-src="getStorageUrl(speaker[4])" v-on="on">
                    <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </v-img>
                </v-avatar>
            </v-responsive>
            </v-flex>
            <v-flex xs12 sm8 md9 lg10 class="pa-2">
            <v-card-text>
                <h3>{{speaker[0]}} / {{speaker[1]}}</h3>
                <p>{{speaker[2]}}</p>
                <p style="white-space:pre-wrap; word-wrap:break-word;">{{speaker[3]}}</p>
            </v-card-text>
            </v-flex>
        </v-layout>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import Mixin from "@/mixin.js";

export default {
    created() {
        this.setMeta()
    },
    data() {
        return {
            title: 'パネルディスカッション',
            description: 'エンジニアのキャリアパス・キャリアチェンジを中心に私たちが歩んできた道と今後についてパネルディスカッションを行います',
            speakers: [
                ["及川卓也", "Takuya Oikawa", "Technology Enabler", "大学を卒業後、外資系IT企業3社とスタートアップ勤務を経て、2017年6月に独立。2019年1月、テクノロジーにより企業や社会の変革を支援するTably株式会社を設立。\n尊敬する人は英ヴァージン・グループ総帥のリチャード・ブランソン。彼が好きな言葉、Nothing Ventured, Nothing Gained（挑まなければ得られない）を座右の銘としている。\n趣味は酩酊。翌日の反省はライフワーク。ワインはジンファンデル。焼酎は天使の誘惑。ビールはレッドフック。ウィスキーはタリスカー。", "https://storage.cloud.google.com/gdgtokyo_img/devfest19/speaker/anonymous_1", "takoratta"],
                ["えーじ", "Eiji Kitamura", "Developer Advocate", "Google スタッフ デベロッパー アドボケートとして Web Components や PWA など、様々なオープンウェブ技術の啓蒙を担当する。現在はウェブ上での認証や支払いに関わる技術について研究し、啓蒙活動をリードしている。","https://storage.cloud.google.com/gdgtokyo_img/devfest19/speaker/anonymous_1", "agektmr"],
                ["田中洋一郎", "Yoichiro Tanaka", "Google Developers Expert for Assistant", "Google Developers Expert (Assistant, Web Technologies)", "https://storage.cloud.google.com/gdgtokyo_img/devfest19/speaker/yoichiro_tanaka","yoichiro"]
            ]
        }
    },
    mixins: [Mixin],
    methods: {
        setMeta: function () {
            var title = 'パネルディスカッション | GDG DevFest Tokyo 2019'
            var description = '及川卓也さん、えーじさん、田中洋一郎さんによるパネルディスカッション'
            document.title = title
            document.querySelector("meta[property='og:title']").setAttribute('content', title)
            document.querySelector("meta[name='description']").setAttribute('content', description)
            document.querySelector("meta[property='og:description']").setAttribute('content', description)
            alert('finish set')
        }
    }
}
</script>