<template>
    <main>
        <div class="row justify-content-md-center">
            <div class="col-8">
                <video ref="videoPlayer" controls autoplay>
                    <source :src="videoSource" type="video/mp4" />
                </video>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    props: {
        videoSource: {
            type: String,
            required: true,
        },
    },
    mounted() {
        this.$refs.videoPlayer.load();
    },
};
</script>

<style scoped>
video {
    width: 100%;
    margin-top: 18px;
}
</style>
