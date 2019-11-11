<template>
    <div>
        <div>
            <h2>{{detail.name}}</h2>
            <p>
                {{detail.profile}}
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";

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
            const speakerID = this.$route.params.id
            const baseUrl = 'https://us-central1-gdg-tokyo-website.cloudfunctions.net/api/speaker/'
            axios.get(baseUrl + speakerID).then(response => {
                this.detail = response.data
            })
        },
    }
}
</script>