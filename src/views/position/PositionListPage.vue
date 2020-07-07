<!-- 岗位列表页 -->
<template>
    <div class="position-list-main">
        <!-- 岗位条件搜索块 -->
        <div class="position-screen-box bcFFFFFF">
            <div class="center-1200">
                <!-- 输入框 -->
                <div class="input-contain">

                </div>
                <!-- 地区岗位条件搜索 -->
                <div class="search-adderss-contain">

                </div>
            </div>
        </div>
        <!-- 岗位数据列表块 -->
        <div class="center-1200">
            <el-row :gutter="10">
                <!-- 用户职位数据显示列表 -->
                <el-col :span="18">
                    <PositionDataViewComponent></PositionDataViewComponent>
                    <PositionDataViewComponent></PositionDataViewComponent>
                    <PositionDataViewComponent></PositionDataViewComponent>
                    <PositionDataViewComponent></PositionDataViewComponent>
                    <PositionDataViewComponent></PositionDataViewComponent>
                    <PositionDataViewComponent></PositionDataViewComponent>
                    <PositionDataViewComponent></PositionDataViewComponent>
                    <PositionDataViewComponent></PositionDataViewComponent>
                </el-col>
                <!-- 用户登录表单 -->
                <el-col :span="6">
                    <div class="user_login_from">

                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import PositionDataViewComponent from '@/components/PositionDataViewComponent';
export default {
    name: 'PositionListPage',
    components: {
        PositionDataViewComponent
    }
}
</script>

<style>
.position-list-main{
    height:1000px;
}
.input-contain{
    height:50px;
    background-color: darkgoldenrod;
    margin-bottom: 20px;
}
.search-adderss-contain{
    height: 100px;
    background-color: bisque;
}
.user_login_from{
    background-color: cadetblue;
    height:500px;
}
</style>








