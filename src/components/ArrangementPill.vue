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
    background: var(--tone-10);
    color: var(--text);
    border-radius: 100px;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    box-shadow: 2px 2px 2px var(--shadow);

    &:hover {
        color: var(--background);
        background-color: var(--accent);
    }

    span {
        margin-right: 5px;
    }
}
</style>
