<template>
    <div>
        <a href="option" target="_blank" class="uk-flex bcFFFFFF p-20 box_showdown">
            <img src="@/assets/header/user_logo.jpeg" alt="user_logo.jpeg" class='companyLogo'>
            <div class="ml-20">
                <p class="fs-16 cc75758C uk-margin-small title_name">WEB前端开发工程师</p>
                <p class="fs-15 cc75758C uk-margin-small">
                    <span class="uk-margin-small-right">武汉</span><span class="uk-margin-small-right">|</span>
                    <span class="uk-margin-small-right">3-5年</span><span class="uk-margin-small-right">|</span>
                    <span>本科</span>
                </p>
                <p class="ccFC7B6E fs-15 uk-margin-small">8-20k</p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'HomeBaseHotOption'
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