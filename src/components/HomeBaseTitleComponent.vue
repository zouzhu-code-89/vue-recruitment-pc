<template>
    <div>
        <div>
            <h1 class="uk-text-center">{{ titleName }}</h1>
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

<style scope>

</style>