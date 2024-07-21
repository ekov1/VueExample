<template>
    <teleport to=".modals-container">
        <div class="modal" v-if="modelValue">
            <h1>{{ title }}</h1>
            <slot />
            <button @click="handleClick">Hide modal</button>
        </div>
    </teleport>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'no title specified'
    }
})
const emit = defineEmits(['update:modelValue'])

const handleClick = () =>{
    emit('update:modelValue', false)
}

</script>

<style>
.modal {
    background: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
}
</style>