<template>
  <div id="db-all">
    <div id="box-wrapper">
      <div class="space-box" v-for="space in data.all">
        <div class="box-header">
          <div class="box-title">{{ space.name }}</div>
          <img @click="addItem(space.id)" class="add-item-button" src="../components/icons/add.png" />
        </div>
        <table>
          <tr v-for="item in space.items">
            <td class="table-name">
              <input class="app-input" :value="item.name"/>
            </td>
            <td class="table-amount">
              <input class="app-input" :value="item.amount"/>
            </td>
            <td class="save-item icon-cell">
              <img class="icon" src="../components/icons/save.png" />
            </td>
            <td @click="deleteItem(item.id)" class="delete-item icon-cell">
              <img class="icon" src="../components/icons/delete.png" />
            </td>
          </tr>
        </table>
      </div>
      <div @click="addSpace()" class="space-box new-box">
        <img src="../components/icons/add_circle.png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.new-box {
  display: flex !important;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.new-box img {
  height: 20%;
  opacity: 0.6;
  transition: all 0.2s;
}
.new-box:hover img {
  height: 22%;
  opacity: 1;
}
.add-item-button {
  position: absolute;
  right: 2%;
  filter: invert();
  opacity: 0.6;
  cursor: pointer;
}
.add-item-button:hover {
  opacity: 1;
}
.delete-item:hover .icon {
  opacity: 1;
}
.delete-item {
  cursor: pointer;
}
.icon {
  width: 3vh;
  opacity: 0.5;
}
.table-name {
  width: 80%;
}
.table-amount {
  width: 20%;
}
.space-box table {
  width: 100%;
  border-collapse: collapse;
}
.space-box table tr td {
  padding: 0.6vh;
}
.space-box table tr:hover {
  background-color: #d9d9d9d9;
}
.space-box table tr:nth-child(even) {
  background-color: #eeeeee;
}
.space-box table tr:nth-child(even):hover {
  background-color: #d9d9d9d9;
}
.box-header {
  position: relative;
  width: 100%;
  padding: 3% 0;
  background-color: rgb(0, 0, 255);
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 2.6vh;
  font-weight: bold;
}
.box-title {
  width: fit-content;
}
.space-box {
  height: 30vh;
  display: block;
  margin: 5vh 10%;
  border: 1px solid black;
  width: 80%;
}
#box-wrapper {
  height: fit-content;
  width: 100%;
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 5vh 5vw;
  width: 100%;
}
#db-all {
  height: 92vh;
}
</style>

<script setup>
import { ref } from 'vue';

let data = ref({});

async function getAll() {
  fetch('http://localhost:3000/getall')
  .then((res) => res.json())
  .then((dats) => {
    data.value.all = dats
    console.log(data);
  })
}

getAll();

function addSpace() {
  let name = 
}

function addItem(space_id) {
  let name = prompt('Name:');
  let amount = prompt('Menge:');

  if (isNaN(amount)) {
    return alert("Menge muss eine zahl sein!")
  }

  fetch(`http://localhost:3000/item`, {
    method: 'POST',
    body: JSON.stringify({
      "name" : name,
      "amount" : amount,
      "space_id" : space_id
    }),
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  .then((res) => res.json())
  .then((dats) => {
    getAll();
  })

}

async function deleteItem(id) {
  fetch(`http://localhost:3000/item/${id}`, {
    method: 'DELETE'
  })
  .then((res) => res.json())
  .then((dats) => {
    getAll();
  })
}
</script>