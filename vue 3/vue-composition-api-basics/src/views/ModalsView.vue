<template>
    <div class="modals">
        <h1>Modals</h1>
        <button  @click="showModal = true">Show Modal</button>
        <teleport to=".modals-container">
            <div v-if="showModal" class="modal">
            <h1>This is a modal</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta cumque vero odit repudiandae quia
                excepturi illum nesciunt, totam voluptate cum! Eum cumque unde perferendis nobis nesciunt magni adipisci
                dignissimos?</p>
            <button @click="showModal = false">Hide modal</button>
        </div>
        </teleport>
    </div>
</template>

<script setup>
// imports
import { ref } from 'vue'

// modals
const showModal = ref(false)
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