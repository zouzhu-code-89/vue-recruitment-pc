<!--
    @name input_1
    @author: zouzhuQcom@163.com
    @time: 2020/06/07
-->

<template>
    <div class="search_contain">
        <!-- 搜索职位 -->
        <form class="search_post">
            <!-- 搜索“职位”填写一份简历，涨薪59% -->
            <div>
                <input type="text" v-bind:placeholder="placeholder" v-bind:name='name'>
            </div>
            <button>{{ btn_name }}</button>
        </form>
        <!-- 搜索职位和公司 -->
    </div>
</template>

<script>
export default {
    name: 'search',
    props:{
        name: {
            type: String                   // 输入框的 name
        },
        btn_name: {                        // 按钮的名字
            type: String
        },
        placeholder: {                     // 输入框的默认值
            type: String, default: ''
        }
    }
}
</script>

<style scoped>
button{
    color: #ffffff;
    background-color: #5DD5C8;
    border: 0;
    font-size: 16px;
    font-family: arial,verdana,helvetica,'PingFang SC','HanHei SC',STHeitiSC-Light,Microsoft Yahei,sans-serif;
    padding: 0px;
    margin: 0px;
}
button:hover{
    background-color: #53cac3;
}
.search_post{
    width: 570px;
    height: 40px;
    border: 2px solid #5DD5C8;
    margin: 0;
    display: flex;
}
.search_post input{
    width: 471px;
    height: 40px;
    padding-left: 19px;
    border: 0;
    padding-top: 0;
    padding-bottom: 0;
    outline: none;
}
.search_post input::placeholder{
    color: #A8ABB6;
    font-size: 15px;
    font-family: arial,verdana,helvetica,'PingFang SC','HanHei SC',STHeitiSC-Light,Microsoft Yahei,sans-serif;
}
.search_post button{
    width: 80px;
    height: 100%;
}
</style>