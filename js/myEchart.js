// ==============================================================================
// ----------------平台使用情况---------------------------------------------------
// ==============================================================================

function initChart0() {
  // let pcWidth = $('.parent').width();
  // let pcHeight = $('.parent').height();

  // $('#pc')
  //   .css('width', pcWidth)
  //   .css('height', pcHeight * 0.5);

  // PC端
  let pc = echarts.init(document.getElementById('pc'));

  let pcOption = {
    title: {
      text: 'PC端',
      left: '6%',
      top: '6%',
    },
    xAxis: {
      type: 'category',
      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'line',
        data: [40, 30, 20, 5, 15, 22, 33, 45, 67, 60, 18, 0, 0, 0, 0, 0],
      },
    ],
  };

  pc.setOption(pcOption);

  // 移动端
  let mobile = echarts.init(document.getElementById('mobile'));
  let mobileOption = {
    title: {
      text: '移动端',
      left: '6%',
      top: '6%',
    },
    xAxis: {
      type: 'category',
      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'line',
        data: [40, 30, 20, 5, 15, 22, 33, 45, 67, 60, 18, 0, 0, 0, 0, 0],
      },
    ],
  };
  mobile.setOption(mobileOption);

  window.addEventListener('resize', function () {
    pc.resize();
    mobile.resize();
  });
}

// ==============================================================================
// ----------------客户咨询-------------------------------------------------------
// ==============================================================================

function initChart1() {
  // 客户咨询数据统计
  data = [
    ['2000-06-05', 116],
    ['2000-06-06', 129],
    ['2000-06-07', 135],
    ['2000-06-08', 86],
    ['2000-06-09', 73],
    ['2000-06-10', 85],
    ['2000-06-11', 73],
    ['2000-06-12', 68],
    ['2000-06-13', 92],
    ['2000-06-14', 130],
    ['2000-06-15', 245],
    ['2000-06-16', 139],
    ['2000-06-17', 115],
    ['2000-06-18', 111],
    ['2000-06-19', 309],
    ['2000-06-20', 206],
    ['2000-06-21', 137],
    ['2000-06-22', 128],
    ['2000-06-23', 85],
    ['2000-06-24', 94],
    ['2000-06-25', 71],
    ['2000-06-26', 106],
    ['2000-06-27', 84],
    ['2000-06-28', 93],
    ['2000-06-29', 85],
    ['2000-06-30', 73],
    ['2000-07-01', 83],
    ['2000-07-02', 125],
    ['2000-07-03', 107],
    ['2000-07-04', 82],
    ['2000-07-05', 44],
    ['2000-07-06', 72],
    ['2000-07-07', 106],
    ['2000-07-08', 107],
    ['2000-07-09', 66],
    ['2000-07-10', 91],
    ['2000-07-11', 92],
    ['2000-07-12', 113],
    ['2000-07-13', 107],
    ['2000-07-14', 131],
    ['2000-07-15', 111],
    ['2000-07-16', 64],
    ['2000-07-17', 69],
    ['2000-07-18', 88],
    ['2000-07-19', 77],
    ['2000-07-20', 83],
    ['2000-07-21', 111],
    ['2000-07-22', 57],
    ['2000-07-23', 55],
    ['2000-07-24', 60],
  ];

  let dateList = data.map(function (item) {
    return item[0];
  });
  let valueList = data.map(function (item) {
    return item[1];
  });

  let consultData = echarts.init(document.getElementById('consult-data'));
  let consultDataOption = {
    // Make gradient line here
    visualMap: [
      {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 400,
      },
    ],

    title: {
      left: '6%',
      top: '6%',
      text: '客户咨询数据统计',
      textStyle: {
        color: '#333',
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: [
      {
        data: dateList,
      },
    ],
    yAxis: [
      {
        splitLine: { show: false },
      },
    ],
    grid: [
      {
        bottom: '10%',
        top: '30%',
      },
    ],
    series: [
      {
        type: 'line',
        showSymbol: false,
        data: valueList,
      },
    ],
  };

  consultData.setOption(consultDataOption);

  // 客户咨询渠道来源
  let consultChannel = echarts.init(document.getElementById('consult-channel'));
  let consultChannelData = {
    title: {
      text: '客户咨询渠道来源',
      left: '6%',
      top: '6%',
      textStyle: {
        color: '#333',
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      bottom: '5%',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
      },
    ],
  };

  consultChannel.setOption(consultChannelData);

  // 站点客资咨询排名
  let category = ['小王', '小李', '小赵', '小马', '小刘', '小张', '小齐'];
  let barData = [3100, 2142, 1218, 581, 431, 383, 163];
  let consultRanking = echarts.init(document.getElementById('consult-ranking'));
  let consultRankingData = {
    title: {
      text: '站点客资咨询排名',
      top: '6%',
      left: '6%',
      textStyle: {
        color: '#333',
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '8%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: false,
    },
    xAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      show: false,
    },
    yAxis: {
      type: 'category',
      data: category,
      splitLine: { show: false },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      offset: 10,
      nameTextStyle: {
        fontSize: 15,
      },
    },
    series: [
      {
        name: '数量',
        type: 'bar',
        data: barData,
        barWidth: 14,
        barGap: 10,
        smooth: true,
        label: {
          normal: {
            show: true,
            position: 'right',
            offset: [5, -2],
            textStyle: {
              color: '#F68300',
              fontSize: 13,
            },
          },
        },
        itemStyle: {
          emphasis: {
            barBorderRadius: 7,
          },
          normal: {
            barBorderRadius: 7,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: '#3977E6' },
              { offset: 1, color: '#37BBF8' },
            ]),
          },
        },
      },
    ],
  };
  consultRanking.setOption(consultRankingData);

  // 咨询人意向分类
  let consultClassify = echarts.init(document.getElementById('consult-classify'));
  let consultClassifyData = {
    title: {
      text: '咨询人意向分类',
      left: '6%',
      top: '6%',
      textStyle: {
        color: '#333',
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      bottom: '5%',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
      },
    ],
  };
  consultClassify.setOption(consultClassifyData);

  // 站点投诉排名
  let complaintCategory = ['小王', '小李', '小赵', '小马', '小刘', '小张', '小齐'];
  let complaintBarData = [3100, 2142, 1218, 581, 431, 383, 163];

  let complaintRanking = echarts.init(document.getElementById('complaint-ranking'));
  let complaintRankingData = {
    title: {
      text: '站点投诉排名',
      top: '6%',
      left: '6%',
      textStyle: {
        color: '#333',
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '8%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: false,
    },
    xAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      show: false,
    },
    yAxis: {
      type: 'category',
      data: category,
      splitLine: { show: false },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      offset: 10,
      nameTextStyle: {
        fontSize: 15,
      },
    },
    series: [
      {
        name: '数量',
        type: 'bar',
        data: barData,
        barWidth: 14,
        barGap: 10,
        smooth: true,
        label: {
          normal: {
            show: true,
            position: 'right',
            offset: [5, -2],
            textStyle: {
              color: '#F68300',
              fontSize: 13,
            },
          },
        },
        itemStyle: {
          emphasis: {
            barBorderRadius: 7,
          },
          normal: {
            barBorderRadius: 7,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: '#3977E6' },
              { offset: 1, color: '#37BBF8' },
            ]),
          },
        },
      },
    ],
  };
  complaintRanking.setOption(complaintRankingData);

  // 客户投诉渠道分析
  let complaintChannel = echarts.init(document.getElementById('complaint-channel'));
  let complaintChannelData = {
    title: {
      text: '客户投诉渠道分析',
      left: '6%',
      top: '6%',
      textStyle: {
        color: '#333',
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      bottom: '5%',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
      },
    ],
  };
  complaintChannel.setOption(complaintChannelData);

  // echarts响应式
  window.addEventListener('resize', function () {
    consultData.resize();
    consultChannel.resize();
    consultRanking.resize();
    consultClassify.resize();
    complaintRanking.resize();
    complaintChannel.resize();
  });
}

// ==============================================================================
// ----------------床位统计-------------------------------------------------------
// ==============================================================================

function initChart2() {
  console.log($('#bed-reside').width());
  console.log('2初始化了');
  // 月度指标完成率排名
  let bedResideCategory = ['小王', '小李', '小赵', '小马', '小刘', '小张', '小齐'];
  let bedResideData = [3100, 2142, 1218, 581, 431, 383, 163];

  let bedResidetRanking = echarts.init(document.getElementById('bed-reside'));
  let bedResidetRankingData = {
    title: {
      text: '月度指标完成率排名',
      top: '6%',
      left: '6%',
      textStyle: {
        color: '#333',
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '8%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: false,
    },
    xAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      show: false,
    },
    yAxis: {
      type: 'category',
      data: bedResideCategory,
      splitLine: { show: false },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      offset: 10,
      nameTextStyle: {
        fontSize: 15,
      },
    },
    series: [
      {
        name: '数量',
        type: 'bar',
        data: bedResideData,
        barWidth: 14,
        barGap: 10,
        smooth: true,
        label: {
          normal: {
            show: true,
            position: 'right',
            offset: [5, -2],
            textStyle: {
              color: '#F68300',
              fontSize: 13,
            },
          },
        },
        itemStyle: {
          emphasis: {
            barBorderRadius: 7,
          },
          normal: {
            barBorderRadius: 7,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: '#3977E6' },
              { offset: 1, color: '#37BBF8' },
            ]),
          },
        },
      },
    ],
  };
  bedResidetRanking.setOption(bedResidetRankingData);

  // 入住率排名
  let bedRateCategory = ['小王', '小李', '小赵', '小马', '小刘', '小张', '小齐'];
  let bedRateData = [3100, 2142, 1218, 581, 431, 383, 163];

  let bedRateRanking = echarts.init(document.getElementById('bed-rate'));
  let bedRateRankingData = {
    title: {
      text: '入住率排名',
      top: '6%',
      left: '6%',
      textStyle: {
        color: '#333',
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '8%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: false,
    },
    xAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      show: false,
    },
    yAxis: {
      type: 'category',
      data: bedRateCategory,
      splitLine: { show: false },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      offset: 10,
      nameTextStyle: {
        fontSize: 15,
      },
    },
    series: [
      {
        name: '数量',
        type: 'bar',
        data: bedRateData,
        barWidth: 14,
        barGap: 10,
        smooth: true,
        label: {
          normal: {
            show: true,
            position: 'right',
            offset: [5, -2],
            textStyle: {
              color: '#F68300',
              fontSize: 13,
            },
          },
        },
        itemStyle: {
          emphasis: {
            barBorderRadius: 7,
          },
          normal: {
            barBorderRadius: 7,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: '#3977E6' },
              { offset: 1, color: '#37BBF8' },
            ]),
          },
        },
      },
    ],
  };
  bedRateRanking.setOption(bedRateRankingData);

  let bedTrend = echarts.init(document.getElementById('bed-trend'));
  bedTrend.setOption({
    title: {
      text: '入住床位趋势图',
      top: '6%',
      left: '3%',
      textStyle: {
        color: '#333',
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '3%',
      right: '3%',
      top: '25%',
      bottom: '3%',
      containLabel: true,
      show: false,
    },
    toolbox: {
      feature: {
        // 去掉图片下载
        // saveAsImage: {}
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['08-30', '08-31', '09-01', '09-02', '09-03', '09-04', '09-05'],
    },
    yAxis: [
      {
        type: 'value',
        name: '对话/访问',
        // nameLocation:'center',
        nameTextStyle: {
          color: '#89A54E',
        },
        axisLabel: {
          textStyle: {
            color: '#89A54E',
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: { show: false },
      },
      {
        nameTextStyle: {
          color: '#4572A7',
        },
        type: 'value',
        name: '对话率%',
        position: 'right',
        axisLine: {
          show: false,
        },
        axisTick: { show: false },
        min: 0,
        max: 200,
        axisLabel: {
          textStyle: {
            color: '#4572A7',
          },
          show: true,
          interval: 'auto',
          formatter: '{value}%',
        },
        show: true,
      },
    ],
    series: [
      {
        name: '访问次数',
        type: 'line',
        stack: '访问次数',
        smooth: true,
        icon: 'line',
        itemStyle: {
          normal: {
            color: '#88e5ff',
            lineStyle: {
              color: '#88e5ff',
            },
          },
        },
        areaStyle: { normal: { color: '#88e5ff' } }, // 添加颜色区域
        data: [0, 0, 0, 134, 0, 0, 0],
      },
      {
        name: '对话量',
        type: 'line',
        stack: '对话量',
        smooth: true,
        itemStyle: {
          normal: {
            color: '#a8f5a1',
            lineStyle: {
              color: '#a8f5a1',
            },
          },
        },
        areaStyle: { normal: { color: '#a8f5a1' } },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: '对话率',
        yAxisIndex: 1,
        type: 'line',
        stack: '对话率',
        smooth: true,
        itemStyle: {
          normal: {
            color: '#b78ffc',
            lineStyle: {
              color: '#b78ffc',
            },
          },
        },
        areaStyle: { normal: { color: '#b78ffc' } },
        data: [50, 100, 120, 55, 23, 78, 200],
      },
    ],
  });

  // echarts响应式
  window.addEventListener('resize', function () {
    bedResidetRanking.resize();
    bedRateRanking.resize();
    bedTrend.resize();
  });
}

// ==============================================================================
// ----------------在院老人-------------------------------------------------------
// ==============================================================================

function initChart3() {
  // 护理等级统计（按站点）
  let nurseLevel = echarts.init(document.getElementById('nurse-level'));
  nurseLevel.setOption({
    title: {
      text: '护理等级统计',
      top: '4%',
      left: '6%',
      textStyle: {
        color: '#333',
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      left: '10%',
      top: '12%',
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      top: '20%',
      containLabel: true,
      show: false,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    series: [
      {
        name: '直接访问',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight',
        },
        barWidth: '40%',
        data: [320, 302, 301, 334, 390, 330, 320],
      },
      {
        name: '邮件营销',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: '联盟广告',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: '视频广告',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight',
        },
        data: [150, 212, 201, 154, 190, 330, 410],
      },
      {
        name: '搜索引擎',
        type: 'bar',
        stack: '总量',
        label: {
          show: true,
          position: 'insideRight',
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320],
      },
    ],
  });

  // 年龄分布

  let ageDis = echarts.init(document.getElementById('age-distribution'));
  ageDis.setOption({
    color: ['#3398DB'],
    title: {
      text: '年龄分布',
      top: '9%',
      left: '6%',
      textStyle: {
        color: '#333',
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      top: '19%',
      bottom: '1%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  });

  // 性别
  let genderDis = echarts.init(document.getElementById('gender-distribution'));
  genderDis.setOption({
    title: {
      text: '性别',
      top: '9%',
      left: '6%',
      textStyle: {
        color: '#333',
        fontSize: 18,
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'center',
      bottom: 0,
      orient: 'horizontal',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
      },
    ],
  });

  // echarts响应式
  window.addEventListener('resize', function () {
    nurseLevel.resize();
    ageDis.resize();
    genderDis.resize();
  });
}
