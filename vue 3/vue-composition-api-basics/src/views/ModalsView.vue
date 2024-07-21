<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show Modal</button>
        <Modal v-model="showModal" title="My modal title (via props)" >
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta cumque vero odit repudiandae quia
                excepturi illum nesciunt, totam voluptate cum! Eum cumque unde perferendis nobis nesciunt magni adipisci
                dignissimos?</p>
        </Modal>
    </div>
</template>

<script setup>
// imports
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

// modals
const showModal = ref(false)
const emit = (['update:modelValue'])


</script>

<style></style>