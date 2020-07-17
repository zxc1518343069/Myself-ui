<template>
  <div class="ac-date-pick" v-click-outside="handleBlur">
    <ac-input suffix-icon="rili" @focus="handleFocus" :value="formatDate" placeholder="请选择时间"
              @change="handleChange"></ac-input>
    <div class="ac-date-content" v-show="show">
      <div class="ac-date-pick-content">
        <template v-if="mode === 'dates'">
          <div class="ac-date-header">
            <ac-icon icon="zuoyi" @click="changeYear(-1)"></ac-icon>
            <ac-icon icon="zuo" @click="changeMonth(-1)"></ac-icon>
            <span><b @click="mode='years'">{{ TemTime.year }}</b>年 <b @click="mode='months'">{{ TemTime.month+1 }}</b> 月</span>
            <ac-icon icon="you" @click="changeMonth(1)"></ac-icon>
            <ac-icon icon="youyi1" @click="changeYear(1)"></ac-icon>
          </div>
          <div>
            <span v-for="week in weeks" :key="week" class="week">{{ week }}</span>
          </div>
          <div v-for="i in 6" :key="`row_${i}`">
           <span v-for="j in 7" :key="`col_${j}`" class="week date-hover"
                 @click="selectDay(getCurrentMonth(i,j))"
                 :class="{
             isNotCurrentMonth: !isCurrentMonth(getCurrentMonth(i,j)),
             isToday:isToday(getCurrentMonth(i,j)),
             isSelect:isSelect(getCurrentMonth(i,j))
           }">
             {{getCurrentMonth(i,j).getDate()}}
           </span>
          </div>
        </template>
        <template v-if="mode === 'months'">
          <div class="ac-date-header">
            <ac-icon icon="zuoyi" @click="changeYear(-1)"></ac-icon>
            <span>
              <b @click="mode='years'">{{ this.TemTime.year }}</b>年
            </span>
            <ac-icon icon="youyi1" @click="changeYear(1)"></ac-icon>
          </div>
          <div>
            <div>
              <span v-for="(i,index) in month" class="week date-hover year" @click="setMonth(index)">{{ i }}</span>
            </div>
          </div>
        </template>
        <template v-if="mode === 'years'">
          <div class="ac-date-header">
            <ac-icon icon="zuoyi" @click="changeYear(-10)"></ac-icon>
            <span>
              <b @click="mode='years'">{{ startYear() }}</b>年-
              <b @click="mode='years'">{{ startYear()+10 }}</b>年
            </span>
            <ac-icon icon="youyi1" @click="changeYear(10)"></ac-icon>
          </div>
          <div>
            <div>
              <span v-for="i in showYears" class="week date-hover year"
                    @click="setYear(i)"
              >{{ i.getFullYear() }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  function getTime(date) {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    return [year, month, day]
  }

  import clickOutside from 'v-click-outside'

  export default {
    name: 'ac-date-pick',
    data() {
      let [year, month, day] = getTime(this.value || new Date())
      return {
        show: false,
        mode: 'dates',
        weeks: ['日', '一', '二', '三', '四', '五', '六'],
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        time: { // 负责展示
          year, month, day
        },
        TemTime: { // 临时时间 修改这个 因为time 是通过父级传入的值计算出来的 负责修改
          year, month, day
        }
      }
    },
    watch: {
      value(newValue) {
        console.log(newValue)
        let [year, month, day] = getTime(newValue)
        console.log(year, month, day)
        this.time = {
          year, month, day
        }
        this.TemTime = { ...this.time }
      }
    },
    computed: {
      showDate() {
        let firstDay = new Date(this.TemTime.year, this.TemTime.month, this.TemTime.day)
        // console.log(firstDay)
        let weekDay = firstDay.getDay() // 获取周几  0 - 6
        // console.log(weekDay)
        let day = firstDay.getDate()
        // console.log(parseInt((day - weekDay) / 7) + 1)
        weekDay = weekDay === 0 ? 7 : weekDay
        let start = firstDay - weekDay * 1000 * 60 * 60 * 24 - 7 * (parseInt((day - weekDay) / 7) + 1) * 1000 * 60 * 60 * 24
        let arr = []
        for (let i = 0; i < 42; i++) {
          arr.push(new Date(start + i * 1000 * 60 * 60 * 24))
        }
        return arr
      },
      showYears(){
        let arr = []
        for (let i = 0; i < 10; i++) {
          let startYear = new Date(this.startYear(),1)
          arr.push(new Date(startYear.setFullYear(startYear.getFullYear() + i)))
        }
        return arr
      },
      formatDate() {
        if (this.value) {
          console.log('这个是为了确认父级是否传值。不传就不渲染input里面的值')
          // padStart  padEnd 补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全
          return `${ this.time.year }-${ (this.time.month + 1 + '').padStart(2, 0) }-${ (this.time.day + '').padStart(2, 0) }`
        }
      }
    },
    directives: {
      clickOutside: clickOutside.directive
    },
    props: {
      value: [String, Date],
      default: ()=>new Date()
    },
    methods: {
      handleFocus() { // 控制点击输入框弹出浮层
        this.show = true
        console.log('focus')
      },
      handleBlur() { //  当点击 div外侧的时候 隐藏浮层
        this.show = false
        this.mode = 'dates'
        console.log('Blur')
      },
      getCurrentMonth(i, j) {
        return this.showDate[(i - 1) * 7 + (j - 1)]
      },
      getTenYears(i,j){
        if (((i - 1) * 4 + (j - 1)) < 10){
          return this.showYears[(i - 1) * 4 + (j - 1)]
        }
      },
      isCurrentMonth(date) {
        let { year, month } = this.TemTime
        let [y, m] = getTime(date)
        // console.log(year,month)
        // console.log(y,m)
        return year === y && month === m
      },
      isToday(date) {
        let [year, month, day] = getTime(date)
        let [y, m, d] = getTime(new Date)
        return year === y && month === m && day === d
      },
      selectDay(date) {
        this.$emit('input', date)
        this.handleBlur()
      },
      isSelect(date) {
        let { year, month, day } = this.time
        let [y, m, d] = getTime(date)
        return year === y && month === m && day === d
      },
      changeYear(count) {
        let oldDate = new Date(this.TemTime.year, this.TemTime.month)
        let newDate = oldDate.setFullYear(oldDate.getFullYear() + count)
        let [year] = getTime(new Date(newDate))
        this.TemTime.year = year
        // this.TemTime.year += mount //这样改容易有bug
      },
      changeMonth(count) {
        let oldDate = new Date(this.TemTime.year, this.TemTime.month)
        let newDate = oldDate.setMonth(oldDate.getMonth() + count)
        let [year, month] = getTime(new Date(newDate))
        this.TemTime.year = year
        this.TemTime.month = month
      },
      handleChange(e) {
        console.log(e.target.value)
        let newValue = e.target.value
        let regExp = /^(\d{4})-(\d{1,2})-(\d{1,2})$/
        if (newValue.match(regExp)) {
          // console.log(RegExp.$1,RegExp.$2,RegExp.$3)
          this.$emit('input', new Date(RegExp.$1, RegExp.$2 - 1, RegExp.$3))
        } else {
          e.target.value = this.formatDate
        }
      },
      startYear() {
        return this.TemTime.year - this.TemTime.year % 10
      },
      setYear(date){
        this.TemTime.year = date.getFullYear()
        this.mode = 'months'
      },
      setMonth(index){
        this.TemTime.month = index
        this.mode = 'dates'
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/var";
  @import "../../styles/mixin";

  .ac-date-pick {
    border: 1px solid red;
    display: inline-block;

    .ac-date-content {
      position: absolute;
      z-index: 10;
      user-select: none;
      width: 280px;
      background: #fff;
      box-shadow: 1px 1px 2px $primary, -1px -1px 2px $primary;

      .ac-date-header {
        height: 40px;
        @include flexSet()
      }

      .ac-date-pick-content {
        .week {
          width: 40px;
          height: 40px;
          display: inline-block;
          text-align: center;
          line-height: 40px;
          border-radius: 50%;
        }
        .year{
          width: 70px;
          height: 70px;
          line-height: 70px;
        }

        .date-hover:hover:not(.isNotCurrentMonth):not(.isSelect) {
          color: $primary;
        }

        .isNotCurrentMonth {
          color: #ccc;
        }

        .isSelect {
          background-color: $primary;
          color: #fff;
        }

        .isToday {
          background-color: #fff;
          color: $primary
        }
      }
    }
  }
</style>
