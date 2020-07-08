<!-- 
    module_name: PositionDetailPage(岗位详情页)
-->
<template>
    <div class="position-detail-main">
        <!-- contain-1 -->
        <div class="message-1">
            <div class="center-1200">
                <p>招聘中</p>
                <el-row>
                    <el-col :span="18">
                        <h1><span>PM</span><span>6-11k</span></h1>
                        <p><span>武汉</span><span>3-5年</span><span>大专</span></p>
                        <p>
                            。。。。
                        </p>
                    </el-col>
                    <el-col :span="6">
                        <a href="#">立即沟通</a>
                        <p>
                            <a href="#">填写在线简历</a>
                            <a href="#">上传附件简历</a>
                        </p>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- contain-2 -->
        <div class="center-1200">
            <el-row>
                <el-col :span="18">
                    <!-- 职位描述 -->
                    <!-- 公司介绍 -->
                    <!-- 竞争力分析 -->
                    <!-- 工商信息 -->
                    <!-- 工作地址 -->
                    <!-- 看过这公司的人还看过什么职位 -->
                    <!-- 推荐职位 -->
                    <!-- 推荐公司 -->
                </el-col>
                <el-col :span="6">
                    <!-- 登录表单 -->
                    <!-- 公司的基本信息 -->
                    <!-- 相似的职位 -->
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PositionDetailPage'
}
</script>

<style>
.message-1{
    /* background-image: url('static/img/detail-bg.jpg'); */
    background-size: 100% 100%;
    height: 215px;
}
</style>