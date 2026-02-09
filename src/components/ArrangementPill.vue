<template>
    <div class="arrangementPill">
        <span v-if="icon">{{ icon }}</span>
        <slot />
    </div>
</template>

<script>
export default {
    name: "ArrangementPill",
    props: {
        icon: {
            type: String,
            default: "",
        },
    },
};
</script>

<style scoped>
.arrangementPill {
    border: none;
    background: #8080801a;
    color: var(--text);
    border-radius: 100px;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    
    &:hover {
        background-color: var(--secondary);
    }
    
    span {
        margin-right: 5px;
    }
}

</style>

