<template>
    <div class="info-card-view">
        <h1>Info Card</h1>
        <avatar
            v-bind:no-border='true'
            v-bind:no-radius='true'
        >
        </avatar>
        <avatar></avatar>
        <avatar></avatar>
    </div>
</template>
<!--NOTE: ^ When using a boolean to bind, you cannot use short hand. You use v-bind  -->
<script>
import Avatar from './Avatar.vue'
export default {
    name: 'InfoCard',
    components: {
        Avatar
    }
}
</script>

<style>
.info-card-view {
    margin:0 auto;
    max-width:400px;
}
</style>
