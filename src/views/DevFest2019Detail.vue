<template>
    <div>
        <div>
            <h2>{{speakerID}}</h2>
            <p>
                {{detail.profile}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.getDetail()
    },
    data() {
        return {
            speakerID: '',
            detail: ''
        }
    },
    methods: {
        getDetail: function () {
            this.speakerID = this.$route.params.id
            // const speakerID = this.$route.params.id
            // const baseUrl = 'https://us-central1-gdg-tokyo-website.cloudfunctions.net/api/speaker/'
            // axios.get(baseUrl + speakerID).then(response => {this.detail = response})
            this.detail = {"id":"emma.haruka.iwao","name":"岩尾 エマ はるか","position":"Developer Advocate","englishName":"Developer Advocate","twitter":"https://twitter.com/Yuryu","profileImage":"https://storage.googleapis.com/gdgtokyo_img/devfest19/speaker/emma_haruka_iwao","profile":"組み込みソフトウェア開発者、Site Reliability Engineerなどを経て2015年より現職。現在はGoogleのシアトルオフィスにて、Google Cloud PlatformのDeveloper Advocateとしてアプリケーション開発者に技術の魅力を伝える仕事をしている。大学では高性能計算および分散ファイルシステムを研究し、その経験を元にクラウド環境上での高性能計算を専門にしている。趣味は旅行とゲーム。"}
        },
    }
}
</script>