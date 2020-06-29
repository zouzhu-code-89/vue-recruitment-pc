<!-- 首页 -->
<template>
    <div class='index_page'>
        <HeaderComponent></HeaderComponent>
        <!-- Context1: 首页便捷登录模块 -->
        <div class="index_context1_simple_login">
            <div class="center-1200">
                <div class="uk-child-width-1-2" uk-grid>
                    <div>
                        <img src="@/assets/index/index_1_1.png" alt="index_1_1" style="width:354px">
                    </div>
                    <div>
                        <img src="@/assets/index/index_1_2.png" alt="index_1_2" style="width:255px">
                        <div>
                            <form action="#" method="post">
                                <input type="text">
                                <input type="text">
                                <input type="submit" value="登录/注册">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- context2: 岗位搜索 + 热门职位推荐 -->
        <div class="center-1200">
            <div class="uk-flex uk-flex-center">
                <input type="text" placeholder="搜索职位、公司">
            </div>
            <div>热门职位</div>
        </div>
        <!-- context3: 职位展示块(切换器) -->
        <div class="center-1200 mb-20">
            <div class='uk-grid-small' uk-grid>
                <div class="uk-width-1-3 home-sider">
                    <HomeJobSwitchComponent></HomeJobSwitchComponent>
                </div>
                <div class="uk-width-2-3 home-main">
                    <div class="uk-grid-collapse" uk-grid>
                        <div class="uk-width-2-3">
                            <img src="@/assets/index/guangao_1.jpg" alt="guangao_1.jpg" class="uk-width-expand">
                            <img src="@/assets/index/guangao_4.jpg" alt="guangao_1.jpg" class="uk-width-expand">
                        </div>
                        <div class="uk-width-1-3">
                            <img src="@/assets/index/guangao_2.jpg" alt="guangao_2.jpg" class="uk-width-expand">
                            <img src="@/assets/index/guangao_3.jpg" alt="guangao_3.jpg" class="uk-width-expand">
                            <img src="@/assets/index/guangao_6.jpg" alt="guangao_6.jpg" class="uk-width-expand">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- context4: 热门招聘岗位 -->
        <div class="center-1200">
            <div>
                <HomeTitle titleName='热门职位'></HomeTitle>
            </div>
            <!-- 经过测试里面的导航数据切换不是通过路由，而是通过 ajax 请求 -->
            <div class="uk-grid-small uk-child-width-1-3" uk-grid>
                <div>
                    <HomeBaseHotOption></HomeBaseHotOption>
                </div>
                <div>
                    <HomeBaseHotOption></HomeBaseHotOption>
                </div>
                <div>
                    <HomeBaseHotOption></HomeBaseHotOption>
                </div>
                <div>
                    <HomeBaseHotOption></HomeBaseHotOption>
                </div>
                <div>
                    <HomeBaseHotOption></HomeBaseHotOption>
                </div>
                <div>
                    <HomeBaseHotOption></HomeBaseHotOption>
                </div>
            </div>
        </div>
        <!-- context5: 热门招聘公司 -->
        <div class="center-1200 pt-20">
            <div>
                <HomeTitle titleName='热门企业'></HomeTitle>
            </div>
            <div class="uk-child-width-1-4 uk-grid-small" uk-grid>
                <div v-for="item in hotCompanyMessage" :key="item">
                    <HomeBaseHotCompany></HomeBaseHotCompany>
                </div>
            </div>
        </div>
        <div class="bcFFFFFF pt-20 mt-25 pb-20"><FooterComponent></FooterComponent></div>
    </div>
</template>


<script>
import HeaderComponent from '@/components/common/Header';
import FooterComponent from '@/components/common/Footer';
import HomeTitle from '@/components/HomeBaseTitleComponent';
import HomeBaseHotCompany from '@/components/HomeBaseHotCompany.vue';
import HomeBaseHotOption from '@/components/HomeBaseHotOption.vue';
import HomeJobSwitchComponent from '@/components/HomeJobSwitchComponent.vue';
export default {
    name: 'Login',
    data: function(){
        return {
            hotCompanyMessage: [1,2,3,4,5,6,7,8]
        }
    },
    components: {
        HeaderComponent,
        FooterComponent,
        HomeTitle,
        HomeBaseHotCompany,
        HomeBaseHotOption,
        HomeJobSwitchComponent
    }
}
</script>



<style>
.index_page{
    background-color: #F6F6F8;
}
.index_context1_simple_login{
    background-color: #5DD5C8;
}
.home-sider{
    /* background-color: #5DD5C8; */
}
.home-main{
    /* background-color: #5DD5C8; */
}  
</style>