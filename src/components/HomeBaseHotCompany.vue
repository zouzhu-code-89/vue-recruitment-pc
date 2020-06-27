<template>
    <div>
        <a href="home123" target="_blank" class="uk-display-block uk-padding-small box_showdown bcFFFFFF">
            <p class="uk-text-center"><img src="@/assets/header/user_logo.jpeg" alt="" class='companyLogo'></p>
            <p class="uk-text-center fs-16 cc666666 title_name">{{ companySimplyMessageProp.companyName }}</p>
            <p class="uk-text-center fs-12 cc999999">
                <span class="uk-margin-small-right">{{ companySimplyMessageProp.companyStart }}</span>
                <span>|</span>
                <span class="uk-margin-small-left">{{ companySimplyMessageProp.companyClass }}</span>
            </p>
            <p class="uk-text-center fs-12">
                <a href="home456">
                    <span class="cc00d7c6">{{ companySimplyMessageProp.companyhotInvitePostNumber }}</span>
                    <span class="cc666666">个热门招聘岗位</span>
                </a>
            </p>
        </a>
    </div>
</template>


<script>
export default {
    name: 'HomeBaseHotCompany',
    props: {
        companySimplyMessageProp: {
            type: Object,
            default: function(){
                return {
                    companyImageUrl: './assets/header/user_logo.jpeg',
                    companyName: '925G 游戏科技网络公司',
                    companyStart: '未上市',
                    companyClass: '移动互联网',
                    companyhotInvitePostNumber: 40
                }
            }
        }
    }
}
</script>


<style scoped>
    .companyLogo{
        width: 75px;
        height: 75px;
    }
    .box_showdown:hover{
        box-shadow: 0 0 10px #eeeeee;
    }
    .box_showdown:hover .title_name{
        color: #00d7c6;
    }
</style> 