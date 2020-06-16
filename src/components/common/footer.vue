<template>
    <div class="footer center-1200 mt-30">
        <!-- footer_left -->
        <div class="footer_left uk-flex uk-flex-between">
            <!--  -->
            <div class="uk-flex">
                <!-- 企业服务 -->
                <div class="mr-40">
                    <p class="cc414a60 fs-14">企业服务</p>
                    <ul class="uk-margin-remove uk-padding-remove">
                        <li><a href="#" target="_blank" class="fs-12 cc8d92a1">职位搜索</a></li>
                        <li><a href="#" target="_blank" class="fs-12 cc8d92a1">新闻资讯</a></li>
                        <li><a href="#" target="_blank" class="fs-12 cc8d92a1">BOSS直聘APP</a></li>
                    </ul>
                </div>
                <!-- 使用与帮助 -->
                <div class="mr-40">
                    <p class="cc414a60 fs-14">使用与帮助</p>
                    <ul class="uk-margin-remove uk-padding-remove">
                        <li><a href="#" target="_blank" class="fs-12 cc8d92a1">用户协议与隐私政策</a></li>
                        <li><a href="#" target="_blank" class="fs-12 cc8d92a1">防骗指南</a></li>
                        <li><a href="#" target="_blank" class="fs-12 cc8d92a1">职位发布规则</a></li>
                        <li><a href="#" target="_blank" class="fs-12 cc8d92a1">使用帮助</a></li>
                    </ul>
                </div>
                <!-- 联系BOSS直聘用 -->
                <div>
                    <p class="cc414a60 fs-14">联系BOSS直聘</p>
                    <ul class="uk-margin-remove uk-padding-remove">
                        <li><span href="#" target="_blank" class="fs-12 cc8d92a1">北京华品博睿网络技术有限公司</span></li>
                        <li><span href="#" target="_blank" class="fs-12 cc8d92a1">公司地址 北京市朝阳区太阳宫中路8号冠捷大厦302</span></li>
                        <li><span href="#" target="_blank" class="fs-12 cc8d92a1">联系电话 010-84150633</span></li>
                        <li>
                            <span href="#" target="_blank" class="fs-12 cc8d92a1">违法和不良信息举报邮箱 
                                <a href="#" class="cc8d92a1">jubao@kanzhun.com</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 上班时间 -->
            <div class="uk-text-right">
                <h3 class="ccA9ACB8" style="font-weight: 500;">BOSS直聘</h3>
                <p class="fs-13 cc8d92a1 uk-margin-small-bottom">企业服务热线和举报投诉 400 065 5799</p>
                <p class="fs-13 cc8d92a1 uk-margin-small-bottom uk-margin-remove-top">工作日 8:00 - 22:00</p>
                <p class="fs-13 cc8d92a1 uk-margin-small-bottom uk-margin-remove-top">休息日 9:30 - 18:30</p>
            </div>
        </div>
        <!-- footer_right -->
        <div class="footer_right uk-flex uk-flex-between mt-20">
            <!-- 备案 -->
            <div>
                <p class="fs-12 cc8d92a1" style="margin-bottom:5px">
                    <span class="uk-margin-small-right">Copyright © 2020 BOSS直聘</span>
                    <span class="uk-margin-small-right">京ICP备14013441号-5</span>
                    <span class="uk-margin-small-right">京ICP证150923号</span>
                    <span class="uk-margin-small-right">京网文[2020]0399-066 号</span>
                    <span class="uk-margin-small-right">
                        <a href="#" class="cc8d92a1">
                            <img src="@/assets/footer/2-1.png"/>电子营业执照
                        </a>
                    </span>
                    <span class="uk-margin-small-right">
                        <a href="#" class="cc8d92a1">
                            <img src="@/assets/footer/2-2.png"/>京公网安备11010502032801
                        </a>
                    </span>
                </p>
                <p class="fs-12 uk-margin-remove">
                    <a href="#" class="uk-margin-small-right cc333333">首都网警</a>
                    <a href="#" class="uk-margin-small-right cc333333">人力资源服务许可证</a>
                    <a href="#" class="uk-margin-small-right cc333333">网上有害信息举报专区</a>
                </p>
            </div>
            <!-- 联系方式 -->
            <div class="footer_contact_img_box">
                <a href="#"><img src="@/assets/footer/1-1.png" alt="" class="mr-20"></a>
                <img src="@/assets/footer/1-2.png" alt="" class="mr-20">
                <a href="#"><img src="@/assets/footer/1-3.png" alt=""></a>
            </div>
        </div>
    </div>
</template>







<script>
export default {
    name: 'footering'
}
</script>


<style scoped>
a{
    transition: 0.4s color;
}
a:hover{
    color: #00d7c6 !important;
}
.footer_contact_img_box img{
    width: 44px;
    height: 44px;
    border-radius: 50%;
}
.footer_contact_img_box img:hover{
    border: 1px solid #9FA3B0;
}
</style>