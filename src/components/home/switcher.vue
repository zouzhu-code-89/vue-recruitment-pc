/**
    @name: 切换器
    @descript: 鼠标移动就实现内容的切换
    @author: zouzhuQcom@163.com
    @time: 2020/06/09
 */

<template>
    <div class="switch uk-flex">
        <!-- 导航条 -->
        <nav>
            <ul class="nav" id="nav">
                <li class="uk-text-center" v-for="option in li_option_value" :key="option.id"  
                    v-on:mouseenter='blockSilde'
                    :index='option.id'>
                    <span class="fs-15">{{ option.name }}</span>
                </li>
            </ul>
        </nav>
        <!-- 内容切换显示 -->
        <div class="context_display_box uk-margin-small-left" 
             v-for="option in li_option_value"
             :key="option.id" 
             :id="'block_' + option.id">
            <!-- solt -->
            <!-- <solt name='switch_context'></solt> -->
        </div>
    </div>
</template>


<script>
export default {
    name: 'SwitchComponent',
    props: {
        li_option_value: {                  // 导航条的值选项
            type: Array,
            default: [
                {id:0, name:'IT'},
                {id:1, name:'金融'},
                {id:2, name: '房地产'},
                {id:3, name: '消费品'},
                {id:4, name: '汽车制造'},
                {id:5, name: '医疗化工'}
            ]
        }
    },
    data: function(){
        return {
            userOneVisit: true,
            blockSildeBefter: null,
            beforeLiBlock: Object,
            number: 1
        }
    },
    mounted(){
        // 加载首个模块
        this.blockSilde();
    },
    methods: {
        blockSilde(){
            if(this.userOneVisit){
                let oneContextBlock = window.document.getElementById(`block_${this.li_option_value[0].id}`);
                let oneNavLiBlock = window.document.getElementById('nav').firstChild;
                oneContextBlock.style.display = 'block';
                oneNavLiBlock.style.backgroundColor = '#3A65A8';
                this.blockSildeBefter = oneContextBlock;
                this.beforeLiBlock = oneNavLiBlock;
                this.userOneVisit = false;
                return;
            }
            const index = event.target.getAttribute('index');
            const moduleName = `block_${index}`;
            if(event.target == this.beforeLiBlock){
                return;
            }
            let contextNowBlock = window.document.getElementById(moduleName);
            contextNowBlock.style.display = 'block';
            event.target.style.backgroundColor = '#3A65A8';
            this.blockSildeBefter.style.display = 'none';
            this.blockSildeBefter = contextNowBlock;
            this.beforeLiBlock.style.backgroundColor = '#5690CE';
            this.beforeLiBlock = event.target;
        }
    }
}
</script>


<style scoped>
    ul{
        padding: 0px;
        margin: 0px;
    }
    .nav{
        background-color: #5690CE;
    }
    .nav li{
        width: 90px;
        height: 60px;
        line-height: 60px;
        color: #FFFFFF;
        cursor: pointer;
    }
    .context_display_box{
        height: calc(90*5);
        width: 475px;
        background: red;
        display: none;
    }
</style>