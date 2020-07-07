<!--
    @name: home
    @descript: 当用户第一次搜索BOSS直聘时，所显示的 home 页，也是 / 主页
    @author: zouzhuQcom@163.com
    @time: 2020/06/07
-->

<template>
    <div class="home_new">
        <!-- header -->
        <!-- <Headering></Headering> -->
        <!-- home main box context -->
        <div class="main">
            <div class="center-1000 mt-25">
                <!-- 标题图片 -->
                <div class="sem-title-1 mb-35"></div>
                <!-- 搜索、登录、导航 -->
                <div class="uk-flex uk-flex-between">
                    <div>
                        <!-- 搜索框 -->
                        <InputSearchPost placeholder='搜索“职位”填写一份简历，涨薪59%'
                                    btn_name='搜索职位'
                                    name='post_name'>
                        </InputSearchPost>
                        <!-- 自定义切换器 -->
                        <SwitchComponent class='uk-margin-small-top' 
                                         :li_option_value='li_option_value'>
                        </SwitchComponent>
                    </div>
                    <div class="ml-20 uk-width-expand">
                        <!-- 登录组件 -->
                        <LoginComponent></LoginComponent>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer -->
        <div style="background-color:#F0F2F5;padding: 60px 0px 20px 0px">
            <div class='center-1000 mt-60'>
                <img src="@/assets/home/footer-1.png" alt="">
                <p class='uk-text-center' style='font-size:12px;color:#999999;'>Copyright © 2020 zhipin.com 京ICP备14013441号-5</p>
            </div>
        </div>
    </div>
</template>



<script>
import header from '@/components/common/Header';
import footer from '@/components/common/Footer';
import input_search from '@/components/home/input_search_1';
import switch_component from '@/components/home/switcher';
import login_component from '@/components/LoginComponent.vue';

export default {
    name: 'one_open_home',
    data: function(){
        return {
            li_option_value: [
                {id:'01', name:'IT'},
                {id:'02', name:'金融'},
                {id:'03', name:'房地产'},
                {id:'04', name:'消费品'},
                {id:'05', name:'汽车制造'},
                {id:'06', name:'医疗化工'}
            ]
        }
    },
    components:{
        Headering: header,
        Footering: footer,
        InputSearchPost: input_search,
        SwitchComponent: switch_component,
        LoginComponent: login_component
    },
}
</script>



<style scoped>
    .main{
        height: 556px;
        background-image: -webkit-linear-gradient(top,#3e72d2 0,#77bdd1 100%);
        border-top: 1px solid #3e72d2;
    }
    .sem-title-1{
        height: 42px;
        background-image: url('../../assets/home/sem7-title.png');
        background-repeat: no-repeat;
        background-size: 330px 100%;
    }
</style>