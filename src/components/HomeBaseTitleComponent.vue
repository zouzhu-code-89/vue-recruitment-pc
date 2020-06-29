<template>
    <div>
        <div>
            <h1 class="uk-text-center fs-24 cc414a60 xian">{{ titleName }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeTitle',
    props: {
        titleName: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.xian{
    position: relative;
}
.xian::before{
    content: '';
    width: 50px;
    height: 1px;
    background-color: #d1d4db;
    position: absolute;
    top: 50%;
    left: 490px;
}
.xian::after{
    content: '';
    width: 50px;
    height: 1px;
    background-color: #d1d4db;
    position: absolute;
    top: 50%;
    left: 655px;
}
</style>