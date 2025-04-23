<script setup>
import { ref } from 'vue'

// const content = ref([
//   {
//     id: 'cm94degxy0006gp3gjwg2fhmi',
//     order: 2,
//     value: 'Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm94degxy0007gp3g8b0dasuk',
//     order: 3,
//     value: 'Ці тигри - найбільші за розміром між усіма тиграми.',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9oojrq10002gp3528zwvejc',
//     order: 2,
//     value: 'Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9oojrq10003gp35m99uoidi',
//     order: 3,
//     value: 'Ці тигри - найбільші за розміром між усіма тиграми.',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9oplrmb0002gp6hv9q6swcb',
//     order: 2,
//     value: 'Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9oplrmb0003gp6hnvygnrly',
//     order: 3,
//     value: 'Ці тигри - найбільші за розміром між усіма тиграми.',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9oplv5m0006gp6h3imdji7j',
//     order: 2,
//     value: 'Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9oplv5m0007gp6hcn0e7et2',
//     order: 3,
//     value: 'Ці тигри - найбільші за розміром між усіма тиграми.',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9opm05e000agp6h6wx1dhpf',
//     order: 2,
//     value: 'Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9opm05e000bgp6haiznvnzp',
//     order: 3,
//     value: 'Ці тигри - найбільші за розміром між усіма тиграми.',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9opm386000egp6hn87ajkev',
//     order: 2,
//     value: 'Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9opm386000fgp6h9jgki1ur',
//     order: 3,
//     value: 'Ці тигри - найбільші за розміром між усіма тиграми.',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9opm5yi000igp6hefy7ubln',
//     order: 2,
//     value: 'Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9opm5yi000jgp6h1d0z71fp',
//     order: 3,
//     value: 'Ці тигри - найбільші за розміром між усіма тиграми.',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9oppn3t000qgp6h4u02uvao',
//     order: 2,
//     value: 'Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
//     type: 'TEXT',
//   },
//   {
//     id: 'cm9oppn3t000rgp6h6cgvcj5h',
//     order: 3,
//     value: 'Ці тигри - найбільші за розміром між усіма тиграми.',
//     type: 'TEXT',
//   },
// ])

const content = ref([
  {
    id: 'cm94degxy0006gp3gjwg2fhmi',
    order: 2,
    value: '1 Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
    type: 'TEXT',
  },
  {
    id: 'cm94degxy0007gp3g8b0dasuk',
    order: 3,
    value: '2 Ці тигри - найбільші за розміром між усіма тиграми.',
    type: 'TEXT',
  },
  {
    id: 'cm9oojrq10002gp3528zwvejc',
    order: 2,
    value: '3 Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
    type: 'TEXT',
  },
  {
    id: 'cm9oojrq10003gp35m99uoidi',
    order: 3,
    value: '4 Ці тигри - найбільші за розміром між усіма тиграми.',
    type: 'TEXT',
  },
  {
    id: 'cm9oplrmb0002gp6hv9q6swcb',
    order: 2,
    value: '5 Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
    type: 'TEXT',
  },
  {
    id: 'cm9oplrmb0003gp6hnvygnrly',
    order: 3,
    value: '6 Ці тигри - найбільші за розміром між усіма тиграми.',
    type: 'TEXT',
  },
  {
    id: 'cm9oplv5m0006gp6h3imdji7j',
    order: 2,
    value: '7 Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
    type: 'TEXT',
  },
  {
    id: 'cm9oplv5m0007gp6hcn0e7et2',
    order: 3,
    value: '8 Ці тигри - найбільші за розміром між усіма тиграми.',
    type: 'TEXT',
  },
  {
    id: 'cm9opm05e000agp6h6wx1dhpf',
    order: 2,
    value: '9 Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
    type: 'TEXT',
  },
  {
    id: 'cm9opm05e000bgp6haiznvnzp',
    order: 3,
    value: '10 Ці тигри - найбільші за розміром між усіма тиграми.',
    type: 'TEXT',
  },
  {
    id: 'cm9opm386000egp6hn87ajkev',
    order: 2,
    value: '11 Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
    type: 'TEXT',
  },
  {
    id: 'cm9opm386000fgp6h9jgki1ur',
    order: 3,
    value: '12 Ці тигри - найбільші за розміром між усіма тиграми.',
    type: 'TEXT',
  },
  {
    id: 'cm9opm5yi000igp6hefy7ubln',
    order: 2,
    value: 'Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
    type: 'TEXT',
  },
  {
    id: 'cm9opm5yi000jgp6h1d0z71fp',
    order: 3,
    value: '13 Ці тигри - найбільші за розміром між усіма тиграми.',
    type: 'TEXT',
  },
  {
    id: 'cm9oppn3t000qgp6h4u02uvao',
    order: 2,
    value: '14 Живе у тайзі в Сибірі та Китаї, у басейні ріки Амур',
    type: 'TEXT',
  },
  {
    id: 'cm9oppn3t000rgp6h6cgvcj5h',
    order: 3,
    value: '15 Ці тигри - найбільші за розміром між усіма тиграми.',
    type: 'TEXT',
  },
])

// function startDrag($event, item) {
//   console.log({ $event, item })
//   $event.dataTransfer.dropEffect = 'move'
//   $event.dataTransfer.effectAllowed = 'move'
//   $event.dataTransfer.setData('itemID', item.id)
// }
// function onDrop($event, targetIndex) {
//   const draggedItemId = $event.dataTransfer.getData('itemID')
//   const draggedItemIndex = content.value.findIndex((item) => item.id === draggedItemId)
//   const draggedItem = content.value.splice(draggedItemIndex, 1)[0]

//   content.value = content.value.toSpliced(targetIndex, 0, draggedItem)

//   console.log({
//     draggedItem,
//     draggedItemIndex,
//     targetIndex,
//     updatedContent: content.value,
//   })
// }

// ======================== OK ===================

// function startDrag($event, item) {
//   draggedItemId.value = item.id
//   $event.dataTransfer.dropEffect = 'move'
//   $event.dataTransfer.effectAllowed = 'move'
//   $event.dataTransfer.setData('itemID', item.id)
// }

// function onDragEnter(index) {
//   dropTargetIndex.value = index
// }

// function onDragLeave() {
//   dropTargetIndex.value = null
// }

// function onDrop($event, targetIndex) {
//   const draggedId = $event.dataTransfer.getData('itemID')
//   const draggedItemIndex = content.value.findIndex((item) => item.id === draggedId)
//   const draggedItem = content.value.splice(draggedItemIndex, 1)[0]

//   content.value.splice(targetIndex, 0, draggedItem)

//   draggedItemId.value = null
//   dropTargetIndex.value = null

//   console.log({
//     draggedItem,
//     draggedItemIndex,
//     targetIndex,
//     updatedContent: content.value,
//   })
// }

// ================================ END

const draggedItemIndex = ref(null)

function startDrag($event, index) {
  draggedItemIndex.value = index
  $event.dataTransfer.effectAllowed = 'move'
}

function onDragEnter(targetIndex) {
  if (draggedItemIndex.value === targetIndex) return
  const draggedItem = content.value.splice(draggedItemIndex.value, 1)[0]
  content.value.splice(targetIndex, 0, draggedItem)
  draggedItemIndex.value = targetIndex
}

function onDrop() {
  draggedItemIndex.value = null
}
</script>

<template>
  <div>Content</div>
  <TransitionGroup>
    <section
      class="draggable-item"
      v-for="(contentItem, index) in content"
      :key="contentItem.id"
      :draggable="true"
      @dragstart="startDrag($event, contentItem)"
      @dragenter="onDragEnter(index)"
      @dragleave="onDragLeave"
      @drop="onDrop($event, index)"
      @dragover.prevent
    >
      {{ contentItem.value }}
    </section>
  </TransitionGroup>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.draggable-item {
  box-sizing: border-box;
  border: 1px solid black;
  transition: transform 0.5s ease;
}
</style>
