<template>
    <div class="box">
        <slot name="ph"></slot>
        <slot name="recode"></slot>
        <slot name="pass"></slot>
        <slot name="submit"></slot>
        <slot name="pro"></slot>
    </div>
</template>
<style lang="scss" scoped>
.box {
    width: 80%;
    box-shadow: 0px 0px 3px 1px rgba($color: #CCC, $alpha: 0.8);
    margin: 0 auto;
    border-radius: 20px;
    // padding: 40px 0;
}
</style>
