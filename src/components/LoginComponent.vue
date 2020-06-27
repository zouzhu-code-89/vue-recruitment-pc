<!--
    @component-name: login.vue
    @data: 2020/06/03
    @author zouzhuQcom@163.com
-->

<template>
    <div class="login bcFFFFFF">
        <!-- 1.title -->
        <h3 class="title uk-text-center">一键注册TEST直聘</h3>
        <!-- 2.表单 -->
        <form action="" method="POST" v-on:submit.prevent='onSubmit'>
            <!-- 手机号 -->
            <div class="phone">
                <i class="iphone fa fa-mobile fa-2x"></i>
                <span></span>
                <input type="text" :placeholder="placeholderProp">
            </div>
            <!-- 是否是真实操作 -->
            <div>
                <span></span>
                <div>
                    <p>请按住滑块拖到左右边</p>
                </div>
                <div>
                    <p>验证通过</p>
                </div>
            </div>
            <!-- 短信验证码 -->
            <div class="message">
                <img src="@/assets/login/message.png" alt="message.png" class="uk-margin-small-right">
                <input type="text" name="" id="" placeholder="短信验证码" v-on:focus.self='getInputFocus' 
                                                                          v-on:blur.self='outInputFocus'>
                <a href="#" class="fs-14 cc00d7c6 pl-20">发送验证码</a>
            </div>
            <!-- 注册按钮 -->
            <button style="submit" class="uk-button uk-width-expand fs-16 ccFFFFFF bc53CAC3">注册</button>
        </form>
        <!-- 3.用户协议 -->
        <p class="uk-flex lh-20 uk-flex-center uk-margin-small">
            <input type="checkbox" name="vehicle" value="Car" style="height:20px" class="mr-5">
            <span class="fs-12 cc333333 mr-5">同意TEST直聘</span>
            <a href="#" target="_blank" class="fs12 cc00d7c6">用户协议及隐私政策</a>
        </p>
        <!-- 4.登录链接 -->
        <p class="fs-14 uk-text-center uk-margin-small">
            <span class="cc333333 mr-10">已有账号</span>
            <a href="#" class="cc00d7c6">直接登录</a>
        </p>
    </div>
</template>




<script>
export default {
    name: 'login_component',
    props: {
        placeholderProp: {
            type: String,
            default: '手机号'
        }
    },
    methods: {
        onSubmit(){
            console.log('... submit ...');
        },
        getInputFocus(event){
            event.target.parentNode.className = `message_blue_border message`;
        },
        outInputFocus(event){
            event.target.parentNode.className = `message`;
        }
    }
}
</script>




<style>
    input{
        border: 0;
        height: 100%;
        outline: none;
    }
    .title{
        color: #00C2B3;
        font-weight: bold;
    }
    .phone{
        height: 42px;
        border: 1px solid #E4E7ED;
    }
    .login{
        padding: 35px 43px 5px 43px;
        box-sizing: border-box;
        animation: keyframes_animate_1 0.8s 1s;
    }
    @keyframes keyframes_animate_1 {
        0%{
            transform: scale(1,1) rotate(0deg);
        }
        10%{
            transform: scale(1.1,1.1) rotate(0deg);
        }
        20%{
            transform: scale(1.1,1.1) rotate(10deg);
        }
        30%{
            transform: scale(1.1,1.1) rotate(0deg);
        }
        40%{
            transform: scale(1.1,1.1) rotate(-10deg);
        }
        50%{
            transform: scale(1.1,1,1) rotate(0deg);
        }
        60%{
            transform: scale(1.1,1.1) rotate(10deg);
        }
        70%{
            transform: scale(1.1,1.1) rotate(0deg);
        }
        80%{
            transform: scale(1.1,1.1) rotate(-10deg);
        }
        90%{
            transform: scale(1.1,1,1) rotate(0deg);
        }
        100%{
            transform: scale(1,1) rotate(0deg);
        }
    }
    .message{
        border: 1px solid #EAEDF2;
        padding: 6px 5px;
        margin-bottom: 15px;
    }
    .message a{
        padding: 0px 20px;
        border-left: 1px solid #EEEEEE;
    }
    .message_blue_border{
        border: 1px solid #04C3B4;
    }
</style>