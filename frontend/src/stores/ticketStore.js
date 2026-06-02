import { defineStore } from 'pinia';
// Fíjate bien en la ruta: sube un nivel con ../ y entra a api/
import { ticketService } from '../api/ticketService'; 

export const useTicketStore = defineStore('ticket', {
  state: () => ({
    tickets: [],
    loading: false
  }),
  actions: {
    async fetchTickets() {
      this.loading = true;
      try {
        const response = await ticketService.getAll();
        this.tickets = response.data;
      } catch (error) {
        console.error("Error al cargar:", error);
      } finally {
        this.loading = false;
      }
    }
  }
});