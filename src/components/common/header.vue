<template>
    <div class="header_box">
        <nav class="center-1200 uk-flex uk-flex-between">
            <!-- 左侧导航部分 -->
            <div class="nav-left uk-flex">
                <h3 class="cc5DD5C8 uk-margin-remove-bottom wangzhang_logo">BOSS 直聘</h3>
                <!-- / nav -->
                <nav v-show="header_home_start">
                    <ul class="header-menu-nav-1 uk-flex">
                        <li>
                            <a href="#" class="fs-14 cc00d7c6" target="_blank">首页</a>
                        </li>
                        <li>
                            <a href="#" class="fs-14 ccFFFFFF" target="_blank">求职</a>
                        </li>
                        <li>
                            <a href="#" class="fs-14 ccFFFFFF" target="_blank">招聘</a>
                        </li>
                    </ul>
                </nav>
                <!-- home nav -->
                <nav v-show="!header_home_start">
                    <ul class="header-menu-nav-1 uk-flex">
                        <li>
                            <a href="#" class="ccFFFFFF">首页</a>
                        </li>
                        <li>
                            <a href="#" class="ccFFFFFF">职位</a>
                        </li>
                        <li>
                            <a href="#" class="ccFFFFFF new campus">校园</a>
                        </li>
                        <li>
                            <a href="#" class="ccFFFFFF">公司</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- 右侧导航部分 -->
            <div class="nav_right">
                <!-- / nav -->
                <div class="nav_right_1" v-show="header_home_start">
                    <a href="#" target='_blank' class="ccFFFFFF fs-14">
                        <i class="fa fa-mobile fa-2x iphone"></i> 
                        <span>下载APP查看更多内容</span>
                        <i class="fa fa-angle-down fa-2x arrows"></i>
                    </a>
                </div>
                <!-- login nav -->
                <div class='uk-flex uk-flex-middle' v-show="!header_home_start && !userLoginStart">
                    <ul class="uk-flex header-menu-nav-1 uk-margin-remove-bottom">
                        <li><a href="#" class="ccFFFFFF">上传简历</a></li>
                        <li><a href="#" class="ccFFFFFF hot">我要找工作</a></li>
                        <li><a href="#" class="ccFFFFFF">我要招聘</a></li>
                    </ul>
                    <div class="header-menu-nav-1 uk-flex">
                        <a class="login_btn ml-15">登录</a>
                        <a class="login_btn ml-15">注册</a>
                    </div>
                </div>
                <!-- user nav -->
                <div v-show="!header_home_start && userLoginStart">
                    <ul class="header-menu-nav-1 uk-flex">
                        <li><a href="#" class="ccFFFFFF new curriculum_new">简历更新提醒</a></li>
                        <li><a href="#" class="ccFFFFFF">消息</a></li>
                        <li class="uk-margin-remove-right"><a href="#" class="ccFFFFFF uk-padding-remove">简历</a></li>
                        <li class="lh-40 fsb-16"><span class="ccFFFFFF">.</span></li>
                        <li class="uk-margin-remove-left"><a href="#" class="ccFFFFFF uk-padding-remove-left">上传</a></li>
                        <li><a href="#" class="ccFFFFFF">邹柱</a></li>
                        <li><a href="#"><img src="@/assets/header/user_logo.jpeg" alt="" class="user_image_box"></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>


<script>
import {mapState} from 'vuex';
export default {
    name: 'headering',
    props:{
        // 当前的导航处于一种什么样的状态
        header_home_start:{
            type: Boolean,
            default: true
        }
    },
    computed: mapState([
        'userLoginStart'
    ])
}
</script>



<style scoped>
/* 当鼠标移动到标签将对颜色进行一个过渡 */
.header-menu-nav-1 a{
    transition: 0.4s color;
}
a:hover{
    color: #00d7c6 !important;
}
/* 导航的盒子 */
.header_box{
    width: 100%;
    height: 48px;
    background-color: #202329;
    line-height: 48px;
}
/* 网站的LOGO */
.wangzhang_logo{
    line-height: 48px;
}
/* 左导航功能列表 */
.header-menu-nav-1 li{
    margin: 0 5px;
}
.header-menu-nav-1 li a{
    display: block;
    line-height: 48px;
    padding: 0px 5px;
}
.campus::before{
    left: 30px;
}

/* 右导航 */
.nav_right_1{
    position: relative;
}
.nav_right_1:hover .arrows{
    transform: rotate(180deg);
}
.nav_right_1 .iphone{
    position: absolute; 
    top: 9px;
}
.nav_right_1 span{
    padding-left: 20px; padding-right: 8px
}
.nav_right_1 a{
    display: block; line-height: 48px;
}
.arrows{
    position: absolute; top: 10px;
}
.login_btn{
    display: block;
    height: 20px;
    border: 1px solid rgb(93, 213, 200);
    line-height: 20px;
    padding: 0 11px;
    border-radius: 15px;
    font-size: 13px;
    color: rgb(255, 255, 255);
}
.curriculum_new:before{
    left: 90px;
}
.user_image_box{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
</style>