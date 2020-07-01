<template>
    <div class="home_job_search_contain uk-flex">
        <div class="uk-width-expand uk-flex search_hover">
            <!-- 输入框-选项卡 -->
            <div class="tab_card">
                <span>
                    <b class="fs-15">职位类型</b>
                    <i class="fa fa-sort-desc" aria-hidden="true"></i>
                </span>
            </div>
            <!-- 输入框-Input -->
            <p class="uk-margin-remove uk-width-expand search_input">
                <input type="text" placeholder="搜索职位、公司">
            </p>
        </div>
        <!-- 输入框-确认搜索按钮 -->
        <button class="bt_search uk-button fs-18 ccFFFFFF">搜索</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.home_job_search_contain{
    width: 934px;
    height: 50px;
}
.tab_card{
    text-align: center;
    width: 130px;
    line-height: 50px;
    background-color: #ffffff;
    position: relative;
}
.tab_card i{
    position: absolute;
    top: 13px;
    left: 108px;
}
.search_input input{
    width: 100%;
}
.bt_search{
    width: 140px;
    height: 50px;
    background-color: #55CBC4;
}
.search_hover{
    box-shadow: 0 0 6px 0 rgba(0,0,0,.13);
}
.search_hover:hover{
    outline: #55CBC4;
}
</style>