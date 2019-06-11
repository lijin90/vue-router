<template>
    <div id="Input">
        <input :type=type :placeholder=placeholder  :disabled=disabled >
    </div>
</template>
<script>
    export default ({
        name: 'Input',
        props:['type','placeholder','disabled','value'],
        data() {
            return {

            }
        }
    })
</script>