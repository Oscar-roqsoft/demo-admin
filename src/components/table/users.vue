

<template>
    <div style="background: transparent !important;">

      <v-row>
        <v-col cols="6" class="d-flex  justify-end">
          <v-text-field
          class="custom-text-field"
          v-model="search"
          density="compact"
          label="Search by username or email"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          single-line
        ></v-text-field>
        </v-col>
      </v-row>

      <div class="table">
          <v-data-table
            :headers="headers"
            :items="serverItems"
            :items-per-page="itemsPerPage"
            :loading="loading"
            :search="search"
            @update:pagination="loadItems"
            style="background: transparent !important; color: #fff;"
          >
            <template v-slot:item.actions="{ item }">
              <v-btn @click="navigateTo('/dashboard/users/user-details')" class="rounded-xl text-capitalize" prepend-icon="mdi-eye" color="success">Details</v-btn>
            </template>
            <template v-slot:item.phone="{ item }" >
              <div style="width: 150px;">{{ item.phone }}</div>
            </template>
        </v-data-table>
      </div>
    </div>
  </template>
  
<script setup>
  import { ref, onMounted, watch } from 'vue'
  
  const users = [
    { id: 1, username: 'john_doe', email: 'john@example.com', phone: '1234567890', country: 'USA' },
    { id: 2, username: 'jane_doe', email: 'jane@example.com', phone: '0987654321', country: 'Canada' },
    // Add more user data here
  ]
  
  const FakeAPI = {
    async fetch({ page, itemsPerPage, sortBy, search }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const filteredItems = users.filter((user) =>
            user.username.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
          )
  
          const start = (page - 1) * itemsPerPage
          const end = start + itemsPerPage
          const items = filteredItems.slice()
  
          if (sortBy.length) {
            const sortKey = sortBy[0].key
            const sortOrder = sortBy[0].order
            items.sort((a, b) => {
              const aValue = a[sortKey]
              const bValue = b[sortKey]
              return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
            })
          }
  
          const paginated = items.slice(start, end)
  
          resolve({ items: paginated, total: filteredItems.length })
        }, 500)
      })
    },
  }
  
  const itemsPerPage = ref(5)

  const headers = ref([
    { title: 'User ID', key: 'id', align: 'start' },
    { title: 'Username', key: 'username', align: 'start' },
    { title: 'Email', key: 'email', align: 'start' },
    { title: 'Phone Number', key: 'phone', align: 'start' },
    { title: 'Country', key: 'country', align: 'start' },
    { title: 'Actions', key: 'actions', align: 'end', sortable: false },
  ])

  const search = ref('')
  const serverItems = ref([])
  const loading = ref(true)
  const totalItems = ref(0)
  
  const loadItems = ({ page, itemsPerPage, sortBy }) => {
    loading.value = true
    FakeAPI.fetch({ page, itemsPerPage, sortBy, search: search.value }).then(({ items, total }) => {
      serverItems.value = items
      totalItems.value = total
      loading.value = false
    })
  }
  
  const onSearch = () => {
    loadItems({ page: 1, itemsPerPage: itemsPerPage.value, sortBy: [] })
  }
  
  const editUser = (id) => {
    console.log('Edit user', id)
  }
  
  const deleteUser = (id) => {
    console.log('Delete user', id)
  }
  
  onMounted(() => {
    loadItems({ page: 1, itemsPerPage: itemsPerPage.value, sortBy: [] })
  })
  
  watch(search, () => {
    loadItems({ page: 1, itemsPerPage: itemsPerPage.value, sortBy: [] })
  })
</script>
  
  <style scoped>
  .v-data-table {
    margin-top: 8px;
  }

  .custom-text-field .v-input__control {
  background-color: #12181F !important;
  border-radius: 20px !important;
}

.custom-text-field .v-field__field {
  background-color: transparent !important; /* Ensures the inner input field does not override the background color */
  border-radius: inherit !important; /* Inherits the border-radius from the parent */
}

.custom-text-field :deep(.v-field) {
  background-color: #12181F!important; /* Ensures the inner input field does not override the background color */
  border-radius: 20px !important; /* Inherits the border-radius from the parent */
  color: #C3CDDB;
  height: 60px;
}
.custom-text-field :deep(.v-field__input) {
  border-radius: 20px !important; /* Inherits the border-radius from the parent */
  /* color: #C3CDDB; */
  height: 60px;
  padding-left: 20px;
  background: #12181F;
}

.custom-text-field :deep(.v-input__details) {
    min-height: 0px;
    display: none;
}

.custom-text-field :deep(.v-field__overlay) {
    background: #12181F;
}

   
    .table :deep(thead){
        background-color: #12181F ;
    }
    .table :deep(.v-data-table-header__content){
        min-width: 100px;
    }
    .table :deep(.v-data-table-header__content:hover){
        color:#fff;
    }

</style>
  

  