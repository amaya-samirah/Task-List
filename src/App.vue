<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { Task } from './shared/task';
import { remult } from 'remult';

const tasks = ref<Task[]>([]);

const taskRepo = remult.repo(Task);
onMounted(() => 
  onUnmounted(
    taskRepo
      .liveQuery({
        where: {
          completed: undefined,
        },
      })
      .subscribe((info) => (tasks.value = info.applyChanges(tasks.value)))
  )
);

const newTaskTitle = ref("");

async function addTask() {
  try{
    const newTask = await taskRepo.insert({ title: newTaskTitle.value });
    //tasks.value.push(newTask);
    newTaskTitle.value = "";
  } catch (error:any) {
    alert("Error! " + error.message);
  }
}

async function deleteTask(task: Task) {
  try {
    await taskRepo.delete(task);
    //tasks.value = tasks.value.filter((t) => t !== task);
  } catch (error: any) {
    alert("Error! " + error.message);
  }
}

async function saveTask(task:Task) {
  try {
    await taskRepo.save(task);
  } catch (error: any) {
    alert("Error! " + error.message);
  }
}

</script>

<template>
  <h1>Todos</h1>
  <main>
    <form @submit.prevent="addTask()">
      <input 
        placeholder="Add todo..." 
        v-model="newTaskTitle" 
      /> 
      <button>Add</button>
    </form>
    <div v-for="task in tasks">
      <input 
        type="checkbox" 
        v-model="task.completed" 
        @change="saveTask(task)"
      />
      <input v-model="task.title" />
      <button @click="saveTask(task)">Save</button>

      <button @click="deleteTask(task)">Delete</button>
    </div>
  </main>
</template>
