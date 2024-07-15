<template>
    <teleport to=".modals-container">
        <div class="modal">
            <h1>This is a modal</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, soluta cumque vero odit repudiandae quia
                excepturi illum nesciunt, totam voluptate cum! Eum cumque unde perferendis nobis nesciunt magni adipisci
                dignissimos?</p>
            <button>Hide modal</button>
        </div>
    </teleport>
</template>

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