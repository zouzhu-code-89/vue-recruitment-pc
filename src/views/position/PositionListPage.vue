<!-- 岗位列表页 -->
<template>
    <div class="position-list-main">
        <!-- 岗位条件搜索块 -->
        <div class="position-screen-box bcFFFFFF">
            <div class="center-1200">
                <h3>搜索框</h3>
                <h3>地域选择</h3>
            </div>
        </div>
        <!-- 岗位数据列表块 -->
        <div class="center-1200">
            <div>
                <div>
                    <PositionDataViewComponent></PositionDataViewComponent>
                </div>
            </div>
            <div></div>
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
</style>








