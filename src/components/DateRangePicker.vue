<template>
  <q-toolbar class="q-mt-lg datepicker-container flex">
    <q-input
      ref="date"
      filled
      lazy-rules
      label="From"
      bg-color="white"
      dense
      @click="$refs.qDateProxyFrom.show()"
      v-model="dateRange.from"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxyFrom">
            <q-date
              v-model="dateRange.from"
              @input="inputSelected('qDateProxyFrom')"
              mask="DD-MM-YYYY"
              minimal
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <span class="separator"></span>

    <q-input
      ref="date"
      filled
      dense
      lazy-rules
      label="To"
      bg-color="white"
      @click="$refs.qDateProxyTo.show()"
      v-model="dateRange.to"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxyTo">
            <q-date
              v-model="dateRange.to"
              @input="inputSelected('qDateProxyTo')"
              mask="DD-MM-YYYY"
              minimal
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </q-toolbar>
</template>

<script>
export default {
  name: 'DateRangePicker',
  props: {
    dateRange: {
      default: () => {
        return {
          from: null,
          to: null
        }
      }
    }
  },
  methods: {
    inputSelected (proxy) {
      this.$refs[proxy].hide()
      this.$emit('date-time-input-selected')
    }
  }
}
</script>

<style scoped lang="less">

.separator {
  width: 20px;
  height: 1px;
  display: block;
  background: white;
  margin: 0 5px;
}

</style>
