<template>
  <div>
    <ac-table :columns="columns1" :data="data1"
              @on-select="select"
              @on-select-all="selectAll"
              @on-list-change="change"
              height="200px"
    >
<!--      自定义-->
      <template slot="name" slot-scope="{ row,col }">
        <h1>{{ row[col.key] }}</h1>
      </template>
      <template slot="action" slot-scope="{ row,col }">
        <ac-button>删除</ac-button>
      </template>
    </ac-table>
  </div>
</template>

<script>
  export default {
    name: 'TableTest',
    data() {
      return {
        columns1: [
          {
            type: 'select',
            width: 60
          },
          {
            title: 'Name',
            key: 'name',
            slot: 'name'
          },
          {
            title: 'Age',
            key: 'age',
            sortable: true,
            sortType: 1  // 0 正常 1正序 2倒叙
          },
          {
            title: 'Address',
            key: 'address'
          },
          {
            title:'operator',
            slot:'action',
            key: 'operator'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    },
    methods: {
      select(checkedList, checkedItem) {
        // console.log(checkedList,checkedItem)
      },
      selectAll(checkedList) {
        // console.log(checkedList)
      },
      change(changeList, type) {
        // 会把改变过后的数据 和 排序类型传过来
        console.log(changeList, type)
      }
    }
  }
</script>
