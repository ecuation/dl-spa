<template>
  <q-page class="flex bg-grey-2">
    <div class="container bg-white">
      <div class="sidebar bg-primary">
        <q-toolbar class="q-mt-md">
          <q-select
            v-model="filters.manager_no"
            :options="options.managers"
            dense
            map-options
            emit-value
            option-value="employee_no"
            option-label="name"
            use-chips
            stack-label
            input-debounce="0"
            label="Managers"
            bg-color="white"
            style="width: 100%"
            @input="search"
          />

        </q-toolbar>
        <date-range-picker
          :date-range="dateRange"
          v-on:date-time-input-selected="dateTimeInputSelected"
        ></date-range-picker>
        <q-toolbar class="flex flex-center">
          <q-btn color="white" text-color="black" label="Reset filters" @click="resetFilters"/>
        </q-toolbar>
      </div>
      <div class="content">
        <q-list bordered>
          <q-item v-for="employee in employees"
                  :key="employee.employee_no"
                  class="q-my-sm"
                  clickable
                  v-ripple
          >
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white">
                {{ employee.name.charAt(0)}}
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ employee.name }}</q-item-label>
              <q-item-label caption lines="1">Hired at: {{ employee.employee_hire_date }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn label="View" color="primary" @click="showDialog(employee)" />
            </q-item-section>

          </q-item>
        </q-list>
        <div class="q-pa-lg flex flex-center">
          <q-pagination
            v-if="employees.length"
            v-model="pagination.currentPage"
            :max="pagination.lastPage"
            :max-pages="pagination.maxPages"
            color="primary"
            @input="search"
          ></q-pagination>
        </div>

        <q-dialog v-model="displayDialog">
          <q-card>
            <q-card-section>
              <div class="text-h6">{{ dialogEmployee.name }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none flex flex-inline">
              <q-list class="salary-list employee-list">
                <h6>Salary history</h6>
                <q-item v-for="salary in dialogEmployee.salaries" :key="salary.salary">
                  <span>
                    <span class="text-bold">{{ salary.salary }}$ </span>
                    <span>from: {{ salary.from_date }} - to: {{ salary.to_date }}</span>
                  </span>

                </q-item>
              </q-list>

              <q-list class="employee-list">
                <h6>Title history</h6>
                <q-item v-for="title in dialogEmployee.titles" :key="title.title">
                  {{ title.title }}
                </q-item>
              </q-list>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>

      </div>
    </div>
  </q-page>
</template>

<script>
import DateRangePicker from 'components/DateRangePicker'
export default {
  name: 'PageIndex',
  components: {
    DateRangePicker
  },
  watch: {
    dateRange: {
      deep: true,
      handler: function (val) {
        this.filters.dateFrom = val.from
        this.filters.dateTo = val.to
      }
    }
  },
  data: () => {
    return {
      dialogEmployee: {},
      pagination: {
        currentPage: 1,
        lastPage: 1,
        maxPages: 10
      },
      displayDialog: false,
      filters: {
        manager_no: null,
        dateFrom: null,
        dateTo: null
      },
      options: {
        managers: []
      },
      dateRange: {
        from: null,
        to: null
      },
      employees: []
    }
  },
  mounted () {
    this.$axios({ sendToken: true }).get('/api/managers').then(res => {
      const { data } = res
      this.options.managers = data.data
      this.search()
    }).catch(err => {
      console.log('error: ', err)
    })
  },
  methods: {
    resetFilters () {
      this.filters = {
        manager_no: null,
        dateFrom: null,
        dateTo: null
      }
      this.dateRange = {
        from: null,
        to: null
      }
      this.search()
    },
    showDialog (employee) {
      this.dialogEmployee = employee
      this.displayDialog = true
    },
    dateTimeInputSelected (dateRange) {
      this.$nextTick(() => {
        this.search()
      })
    },
    search () {
      const query = this.encodeFiltersToURLToAPIQuery(this.filters)
      const page = this.pagination.currentPage
      this.$axios({ sendToken: true }).get(`/api/employees?page=${page}${query}`).then(res => {
        const { data } = res
        this.employees = data.data
        this.pagination.currentPage = data.meta.current_page
        this.pagination.lastPage = data.meta.last_page
      })
    },
    encodeFiltersToURLToAPIQuery (filters) {
      let url = ''
      Object.entries(filters).forEach(entry => {
        const key = entry[0]
        const value = entry[1]
        if (Array.isArray(value)) {
          return value.forEach(item => {
            url += `&${key}[]=${item}`
            return url
          })
        }

        if (value) {
          url += `&${key}=${value}`
          return url
        }
      })

      return url
    }
  }
}
</script>

<style scoped lang="less">
  .container{
    margin:0 auto;
    width: 100%;
    min-height: 450px;
    max-width: 1680px;
    display: flex;
    .sidebar{
      width: 20%;
      background: gray;
    }
    .content{
      width: 80%;
    }
  }
  .salary-list {
    margin-right: 10px;
  }
  .employee-list{
    min-width: 250px;
  }
</style>
