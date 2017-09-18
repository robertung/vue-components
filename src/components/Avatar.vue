<template>
    <div class='avator-view'>
        <div
            class='card-wrapper'
            :class="[styleObject, { 'no-border': noBorder, 'no-radius': noRadius }]"
            @click='alert'>
            <div class="card-img">
                <img
                    :class='shape'
                    :src='imgPath'
                >
            </div>
            <div class='card-details'>
                <div class="name">Name Info</div>
                <div class="type">Advisor</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Avatar',
    data() {
        return {
            // noBorder: false,
            // noRadius: false,
            styleObject: {
                'style-object-a': true,
                'style-object-b': false
            }
        }
    },
    props:{
        shape: {
            type: String,
            default: 'circle'
        },
        imgPath: {
            type: String,
            default: 'http://www.goucher.edu/_resources/img/default-avatar.png'
        },
        noBorder: {
            type: Boolean,
            default: false
        },
        noRadius: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        alert() {
            alert('Worked');
        }
    }
}
</script>

<style>
    .avator-view {
        max-width:400px;
        & img {
            width:40px;
            height:40px;
            border: solid 1px #d0d2d0;
            float:left;
        }
        & .circle {
            border-radius:40px;
        }
        & .square {
            border-radius:10px;
        }
        & .card-wrapper {
            /*max-width:400px;*/
            /*min-width:400px;*/
            width:100%;
            border: solid 1px #d0d2d0;
            padding:15px;
            display:inline-block;
            border-radius: 3px;
            background:#f4f6f4;
            &:hover {
                cursor: pointer;
                box-shadow: 0px 3px 9px -4px rgba(0,0,0,0.33);
            }
            & .card-img {
                float:left;
                padding:0 20px 0 0;
            }
        }
        & .card-details {
            float:left;
            text-align: left;
            line-height:20px;
        }
        & .name {
            font-size:20px;
            font-weight: 600;
        }
        & .type {

        }
        & .no-border {
            border:0 !important;
        }
        & .no-radius {
            border-radius:0 !important;
        }
    }
</style>
