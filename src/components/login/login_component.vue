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
        <form action="" method="POST">
            <!-- 手机号 -->
            <div class="phone">
                <i class=" iphone fa fa-mobile fa-2x"></i>
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
            <div>
                <i></i>
                <input type="text">
                <button>发送短信验证码</button>
            </div>
            <!-- 注册按钮 -->
            <button style="submit">注册</button>
        </form>
        <!-- 3.用户协议 -->
        <p>
            <input type="checkbox" name="" id="">
            <span>同意TEST直聘</span>
            <a href="#" target="_blank">用户协议及隐私政策</a>
        </p>
        <!-- 4.登录链接 -->
        <p>
            <span>已有账号</span>
            <a href="直接登录"></a>
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
        padding: 35px 43px 0px 43px;
        box-sizing: border-box;
    }
    .login:hover{
        animation: keyframes_animate_1 0.8s;
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
</style>