<!-- 导航切换器: 当切换导航就去加载相应的内容 -->

<template>
    <div class="contain">
        <h3>
            <span @click='cur($event)'>IT 互联网</span>
            <span @click='cur($event)'>金融</span>
            <span @click='cur($event)'>房地产建筑</span>
            <span @click='cur($event)'>教育培训</span>
            <span @click='cur($event)'>娱乐传媒</span>
            <span @click='cur($event)'>医疗健康</span>
            <span @click='cur($event)'>法律咨询</span>
            <span @click='cur($event)'>供应链物流</span>
        </h3>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    name: 'HomeJobHotSwitchNavComponent',
    data: function(){
        return {
            beforeCur: null,
            NowCur: null,
            initCur: true
        }
    },
    methods:{
        cur: function(e){
            if(this.initCur){
                this.initCur = false;
                this.beforeCur = e.target;
            }
            this.beforeCur.setAttribute('class','');
            this.beforeCur = e.target;
            e.target.setAttribute('class', 'cur');
        }
    }
}
</script>

<style scoped>
    .contain{
        background-color: #ffffff;
    }
    h3{
        line-height: 50px;
        padding-left: 20px;
        margin-bottom: 10px; 
    }
    span{
        line-height: 50px;
        display: inline-block;
        position: relative;
        font-size: 14px;
        color: #8d92a1;
        cursor: pointer;
        font-weight: 400;
        margin-right: 80px;
    }
    .cur{
        color: #00c2b3;
        font-weight: 600;
    }
    .cur::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: #00c2b3;
        bottom: 0;
        left: 0;
        z-index: 999;
    }
</style>