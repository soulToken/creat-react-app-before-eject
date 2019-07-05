const dateConfig = {
  shortcuts: [
    {
      text: '昨天',
      onClick(picker) {
        let date = new Date()
        let yesterday = date.getTime() - 3600 * 1000 * 24; 
        picker.$emit('pick', [yesterday, yesterday]);
      }
    }, 
    {
      text: '今天',
      onClick(picker) {
        let date = new Date();
        picker.$emit('pick', [date, date]);
      }
    },
    {
      text: '上周',
      onClick(picker) {
        let date = new Date();
        let nowYear = date.getFullYear(); //当前年
        let nowMonth = date.getMonth(); //当前月
        let nowDay = date.getDate(); //当前日
        let nowDayOfWeek = date.getDay(); //今天本周的第几天
        let weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 6); //上周的开始时间
        let weekEndDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek); //上周的结束时间
        picker.$emit('pick', [weekStartDate, weekEndDate]);
      }
    },
    {
      text: '本周',
      onClick(picker) {
        let date = new Date();
        let nowYear = date.getFullYear(); //当前年
        let nowMonth = date.getMonth(); //当前月
        let nowDay = date.getDate(); //当前日
        let nowDayOfWeek = date.getDay(); //今天本周的第几天
        let weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 1);
        picker.$emit('pick', [weekStartDate, date]);
      }
    }, 
    {
      text: '上月',
      onClick(picker) {
        let date = new Date(); //上月日期
        let nowYear = date.getFullYear(); //当前年
        let lastMonth = date.getMonth()-1;
        var lastMonthStartDate = new Date(nowYear, lastMonth, 1);
        var monthStartDate = new Date(nowYear, lastMonth, 1);
        var monthEndDate = new Date(nowYear, lastMonth + 1, 1);
        var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
        var lastMonthEndDate = new Date(nowYear, lastMonth, days);
        picker.$emit('pick', [lastMonthStartDate, lastMonthEndDate]);
      }
    }, 
    {
      text: '本月',
      onClick(picker) {
        let date = new Date();
        let nowYear = date.getFullYear(); //当前年
        let nowMonth = date.getMonth(); //当前月
        let lastMonthDate = new Date(); //上月日期
        lastMonthDate.setDate(1);
        lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
        let monthStartDate = new Date(nowYear, nowMonth, 1);
        picker.$emit('pick', [monthStartDate, date]);
      }
    }
  ]
}

export default dateConfig
