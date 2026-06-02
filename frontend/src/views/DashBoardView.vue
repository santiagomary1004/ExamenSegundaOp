<template>
  <div>
    <h1>Dashboard General</h1>
    
    <section>
      <h2>Tickets Recientes</h2>
      <ul>
        <li v-for="t in data.tickets" :key="t.id">{{ t.titulo }}</li>
      </ul>
    </section>

    <section>
      <h2>Usuarios Activos</h2>
      <ul>
        <li v-for="u in data.usuarios" :key="u.id">{{ u.nombre }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { apiService } from '@/api/apiService';

const data = reactive({
  tickets: [],
  usuarios: []
});

onMounted(async () => {
  try {
    // Consumimos ambos endpoints en paralelo para mayor velocidad
    const [resTickets, resUsuarios] = await Promise.all([
      apiService.getTickets(),
      apiService.getUsuarios()
    ]);
    
    data.tickets = resTickets.data;
    data.usuarios = resUsuarios.data;
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
});
</script>