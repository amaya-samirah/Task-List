<script setup lang="ts">
import { remult } from 'remult';
import { onMounted, ref } from 'vue';
import App from "../App.vue";


const username = ref("");
const signedIn = ref(false);

async function signIn() {
    const result = await fetch("/api/signIn", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username.value }),
    });

    if (result.ok) {
        remult.user = await result.json();
        signedIn.value = true;
    } else {
        alert("Error! " + await result.json());
    }
}

onMounted(async () => {
    const result = await fetch("/api/currentUser");
    remult.user = await result.json();
    signedIn.value = remult.authenticated();
});

async function signOut() {
    await fetch("/api/signOut", {
        method: "POST"
    })

    remult.user = undefined;
    signedIn.value = false;
}

</script>

<template>
    <div v-if="signedIn">
        <hello>
        Hello, {{  remult.user?.name }}
        </hello>
        <button @click="signOut()">Sign Out</button>
        <App />
    </div>
    <div v-else>
        <h1>Todos</h1>
        <main>
            <form @submit.prevent="signIn()">
                <input v-model="username" placeholder="Username, try 'name'"/>
                <button>Sign In</button>
            </form>
        </main>
    </div>
</template>