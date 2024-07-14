<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn">-2</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.counter }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">+2</button>
    </div>
    <p>This Counter is {{ oddOrEven }}</p>
    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title">
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue'

const appTitle = 'My OK App'
const counter = ref(0),
  counterTitle = ref('My Counter')

const counterData = reactive({
  counter: 0,
  title: 'My Counter'
})

watch(()=>counterData.counter, (newCount, oldCount)=>{
console.log('oldCount', oldCount)
console.log('newCount', newCount)

if(newCount === 20) alert('sdffsfsf')
})

const oddOrEven = computed(() => {
  if (counterData.counter % 2 == 0) {
    return 'Even'
  }
  return 'Odd'
})

const increaseCounter = (amount, eventObject) => {
  console.log(eventObject)
  counterData.counter += amount
}

const decreaseCounter = amount => {
  counterData.counter -= amount
}
</script>


<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>


<!-- <script>
import { ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)

    const increaseCounter = () => {
      counter.value++;
    }

    const decreaseCounter = () => {
      counter.value--;
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter
    }
  }
}
</script> -->

<!-- <script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    }
  },
  computed: {
    myComputedProperty() {
      if (true)
        return 'the result'
    }
  },
  watch: {
    count(newCount, oldCount){
      if(newCount == 20) alert('asdasdasda')
    }
  }
}
</script> -->
