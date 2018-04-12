<template>
  <md-table v-model="searched" md-sort="id" md-sort-order="asc" md-card @md-selected="onSelect">
    <md-table-toolbar>
      <div class="md-toolbar-section-start">
        <h1 class="md-title">Users</h1>
      </div>

      <md-field md-clearable class="md-toolbar-section-end">
        <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable"></md-input>
      </md-field>
    </md-table-toolbar>

    <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
      <div class="md-toolbar-section-start">{{ getAlternativeLabel(count) }}</div>
      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button">
          <md-icon>delete</md-icon>
        </md-button>
      </div>
    </md-table-toolbar>

    <md-table-empty-state md-label="No users found" :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
      <md-button class="md-primary md-raised" @click="">Create New User</md-button>
    </md-table-empty-state>

    <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
      <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
      <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
      <md-table-cell md-label="E-mail" md-sort-by="email">{{ item.email }}</md-table-cell>
      <md-table-cell md-label="Phone" md-sort-by="phone">{{ item.phone }}</md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script>
  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.name).includes(toLower(term)))
    }

    return items
  }

  export default {

    name: 'tuser',

    data: () => ({
      search: null,
      searched: [],
      selected: [],
      users: [
        {
          id: 1,
          name: 'Tiago',
          email: 'tiago@mail.com',
          phone: '984 413 716'
        },
        {
          id: 2,
          name: 'João',
          email: 'joao@mail.com',
          phone: '984 657 123'
        },
        {
          id: 3,
          name: 'Rodrigo',
          email: 'rodrigo@mail.com',
          phone: '786 859 326'
        },
        {
          id: 4,
          name: 'Carla',
          email: 'caca@mail.com',
          phone: '964 875 223'
        },
        {
          id: 5,
          name: 'Mara',
          email: 'amara@mail.com',
          phone: '986 450 320'
        }
      ]
    }),

    methods: {
      searchOnTable () {
        this.searched = searchByName(this.users, this.search)
      },

      onSelect (items) {
        this.selected = items
      },

      getAlternativeLabel (count) {
        let plural = ''

        if (count > 1) {
          plural = 's'
        }

        return `${count} user${plural} selected`
      }
    },

    created () {
      this.searched = this.users
    }
  }
</script>

<style lang="css" scoped>
  .md-field {
    max-width: 300px
  }

  .md-table + .md-table {
    margin-top: 16px
  }
</style>