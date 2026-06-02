<template>
  <div style="padding: 20px;">
    <h1>Lista de Tickets</h1>
    
    <div v-if="store.loading">Cargando datos del servidor...</div>
    
    <table v-else border="1" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ticket in store.tickets" :key="ticket.id">
          <td>{{ ticket.id }}</td>
          <td>{{ ticket.titulo }}</td>
          <td>{{ ticket.estado }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTicketStore } from '../stores/ticketStore';

const store = useTicketStore();

onMounted(() => {
  store.fetchTickets();
});
</script>