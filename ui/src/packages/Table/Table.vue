<template>
  <div class="ac-table" ref="wrapper">
    <div class="table-wrapper" ref="tableWrapper" :style="{height}">
      <table ref="table">
        <thead>
        <tr>
          <th v-for="item in CloneColumn" :key="item.key">
            <div v-if="item.type && item.type === 'select'">
              <input type="checkbox" :style="{width: item.width + 'px'}" :checked="checkAll" ref="checkAll"
                     @click="checkAllStatus">
            </div>
            <span v-else>
            {{ item.title }}
            <span v-if="item.sortable" @click="sort(item,item.sortType)">
              <ac-icon icon="sort"></ac-icon>
            </span>
          </span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row,index) in CloneData" :key="index">
          <td v-for="(col,index) in CloneColumn" :key="index">
            <div v-if="col.type && col.type === 'select'">
              <input type="checkbox" :style="{width: col.width+'px'}" @click="selectOne($event,row)"
                     :checked="checked(row)">
            </div>
            <div v-else>
              <div v-if="col.slot">
                <slot :name="col.slot" :row="row" :col="col"></slot>
              </div>
              <div v-else>
                {{ row[col.key] }}
              </div>

            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'ac-table',
    data() {
      return {
        CloneColumn: [],
        CloneData: [],
        checkedList: []
      }
    },
    created() {
      this.CloneColumn = [...this.columns]
      this.CloneData = [...this.data]
      this.CloneData = this.CloneData.map(item=>{
        item._id = Math.random()
        return item
      })
      this.CloneColumn = this.CloneColumn.map(item=>{
        item.sortType = item.sortType ? item.sortType : 0
        this.sort(item, item.sortType)
        return item
      })
    },
    props: {
      columns: {
        type: Array,
        default: ()=>[]
      },
      data: {
        type: Array,
        default: ()=>[]
      },
      height: {
        type: String
      }
    },
    methods: {
      checked(row) {
        return this.checkedList.some(item=>item._id === row._id)
      },
      selectOne(e, selectItem) {
        if (e.target.checked) {
          this.checkedList.push(selectItem)
        } else {
          //  没有标识  需要去除 添加标识
          this.checkedList = this.checkedList.filter(item=>item._id !== selectItem._id
          )
        }
        this.$emit('on-select', this.checkedList, selectItem)
      },
      checkAllStatus(e) {
        this.checkedList = e.target.checked ? this.CloneData : []
        this.$emit('on-select-all', this.checkedList)
      },
      sort(col, type) {
        let data = [...this.CloneData]
        if (type !== 0) {
          let key = col.key
          if (type === 1) {
            data.sort((a, b)=>{
              return a[key] - b[key]
            })
          } else if (type === 2) {
            data.sort((a, b)=>{
              return b[key] - a[key]
            })
          }
          this.CloneData = data
        }
        this.$emit('on-list-change', data, col.sortType)
        col.sortType = col.sortType === 1 ? 2 : 1
      }
    },
    computed: {
      checkAll() {
        return this.CloneData.length === this.checkedList.length
      }
    },
    watch: {
      checkedList() {
        if (this.CloneData.length !== this.checkedList.length) {
          if (this.checkedList.length > 0)
            return this.$refs.checkAll[0].indeterminate = true
        }
        this.$refs.checkAll[0].indeterminate = false
      }
    },
    mounted() {
      if (this.height) {
        let wrapper = this.$refs.wrapper
        let tableWrapper = this.$refs.tableWrapper
        let table = this.$refs.table

        let cloneTable = table.cloneNode()
        console.log(cloneTable)
        let thead = table.children[0]
        console.log(thead.getBoundingClientRect())
        tableWrapper.style.paddingTop = thead.getBoundingClientRect().height + 'px'

        cloneTable.style.width = table.offsetWidth + 'px'
        cloneTable.appendChild(thead)
        cloneTable.classList.add('fix-header')

        // 设置对其 querySelector获取文档种DOM元素
        let tds = table.querySelector('tbody tr').children
        console.log(tds)
        let ths = cloneTable.querySelector('thead tr').children
        tds.forEach((item, index)=>{
          ths[index].style.width = item.getBoundingClientRect().width + 'px'
        })
        wrapper.appendChild(cloneTable)
      }
    }
  }
</script>

<style lang="scss">
  .ac-table {
    position: relative;
    overflow: hidden;

    .fix-header {
      position: absolute;
      top: 0;
    }

    .table-wrapper {
      overflow-y: scroll;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;

      thead {
        th {
          background-color: #f8f8f9;
          white-space: nowrap;
        }
      }

      tbody {
        tr:hover {
          background-color: #7dbcfc;
        }
      }

      th, td {
        border-bottom: 1px solid #ddd;
        padding: 10px;
        text-align: left;
      }
    }
  }
</style>
