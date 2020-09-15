//----------------------------------------------------------------------------
// myBootstrapTable.js用于处理页面中的bootstrap-table表格初始化及数据加载----------
//----------------------------------------------------------------------------

// console.log(document.getElementById('pc'));

// 访问时长排名
$('#visit-time').bootstrapTable({
  pagination: true,
  pageSize: 10,
  headerStyle: {
    css: {
      'background-color': '#f2f2f2',
    },
  },
  columns: [
    {
      field: 'id',
      title: '序号',
      align: 'center',
      cellStyle: {
        fontSize: 13,
      },
    },
    {
      field: 'name',
      title: '组织名称',
      align: 'center',
    },
    {
      field: 'pc',
      title: 'PC端(min)',
      align: 'center',
    },
    {
      field: 'mobile',
      title: '移动端(min)',
      align: 'center',
    },
  ],
  data: [
    {
      id: 1,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 2,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 3,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 4,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 5,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 6,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 8,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 9,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 10,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 11,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
    {
      id: 7,
      name: '悦华安养洪武服务中心',
      pc: '165',
      mobile: '17',
    },
  ],
});

// 使用内容明细
$('#content-detail').bootstrapTable({
  pagination: true,
  pageSize: 12,
  headerStyle: {
    css: {
      'background-color': '#f2f2f2',
    },
  },
  columns: [
    {
      field: 'id',
      title: '序号',
      align: 'center',
    },
    {
      field: 'accountNumber',
      title: '账号',
      align: 'center',
    },
    {
      field: 'guestEntering',
      title: '客资录入',
      align: 'center',
    },
    {
      field: 'checkRegister',
      title: '入住登记',
      align: 'center',
    },
    {
      field: 'acessment',
      title: '评估',
      align: 'center',
    },
    {
      field: 'assetsRegister',
      title: '资源库登记',
      align: 'center',
    },
    {
      field: 'servicePlan',
      title: '服务计划执行',
      align: 'center',
    },
  ],
  data: [
    {
      id: '1',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
    {
      id: '2',
      accountNumber: '悦华安养洪武服务中心',
      guestEntering: '客资录入',
      checkRegister: '80',
      acessment: '80',
      assetsRegister: '80',
      servicePlan: '80',
    },
  ],
});

// 家庭养老床位统计
$('#bed-statistics').bootstrapTable({
  pagination: true,
  columns: [
    {
      field: 'id',
      title: '序号',
      align: 'center',
    },
    {
      field: 'name',
      title: '组织名称',
      align: 'center',
    },
    {
      field: 'total',
      title: '床位总数',
      align: 'center',
    },
    {
      field: 'selfCare',
      title: '自理',
      align: 'center',
    },
    {
      field: 'slight',
      title: '轻度失能',
      align: 'center',
    },
    {
      field: 'medium',
      title: '中度失能',
      align: 'center',
    },
    {
      field: 'serious',
      title: '重度失能',
      align: 'center',
    },
    {
      field: 'lookAfter',
      title: '已看护',
      align: 'center',
    },
  ],
  data: [
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      total: '60',
      selfCare: '30',
      slight: '10',
      medium: '10',
      serious: '10',
      lookAfter: '23',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      total: '60',
      selfCare: '30',
      slight: '10',
      medium: '10',
      serious: '10',
      lookAfter: '23',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      total: '60',
      selfCare: '30',
      slight: '10',
      medium: '10',
      serious: '10',
      lookAfter: '23',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      total: '60',
      selfCare: '30',
      slight: '10',
      medium: '10',
      serious: '10',
      lookAfter: '23',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      total: '60',
      selfCare: '30',
      slight: '10',
      medium: '10',
      serious: '10',
      lookAfter: '23',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      total: '60',
      selfCare: '30',
      slight: '10',
      medium: '10',
      serious: '10',
      lookAfter: '23',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      total: '60',
      selfCare: '30',
      slight: '10',
      medium: '10',
      serious: '10',
      lookAfter: '23',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      total: '60',
      selfCare: '30',
      slight: '10',
      medium: '10',
      serious: '10',
      lookAfter: '23',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      total: '60',
      selfCare: '30',
      slight: '10',
      medium: '10',
      serious: '10',
      lookAfter: '23',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      total: '60',
      selfCare: '30',
      slight: '10',
      medium: '10',
      serious: '10',
      lookAfter: '23',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      total: '60',
      selfCare: '30',
      slight: '10',
      medium: '10',
      serious: '10',
      lookAfter: '23',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      total: '60',
      selfCare: '30',
      slight: '10',
      medium: '10',
      serious: '10',
      lookAfter: '23',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      total: '60',
      selfCare: '30',
      slight: '10',
      medium: '10',
      serious: '10',
      lookAfter: '23',
    },
  ],
});

console.log($('#bed-statistics').css('display'));

// 站点服务----完成率排名（年度）
$('#station-year').bootstrapTable({
  pagination: true,
  columns: [
    {
      field: 'id',
      title: '序号',
      align: 'center',
    },
    {
      field: 'name',
      title: '组织名称',
      align: 'center',
    },
    {
      field: 'rate',
      title: '完成率',
      align: 'center',
    },
  ],
  data: [
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '2',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
  ],
});

// 站点服务----完成率排名（当月）
$('#station-month').bootstrapTable({
  pagination: true,
  columns: [
    {
      field: 'id',
      title: '序号',
      align: 'center',
    },
    {
      field: 'name',
      title: '组织名称',
      align: 'center',
    },
    {
      field: 'rate',
      title: '完成率',
      align: 'center',
    },
  ],
  data: [
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '2',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
  ],
});

// 上门服务----完成率排名（年度）
$('#server-year').bootstrapTable({
  pagination: true,
  columns: [
    {
      field: 'id',
      title: '序号',
      align: 'center',
    },
    {
      field: 'name',
      title: '组织名称',
      align: 'center',
    },
    {
      field: 'rate',
      title: '完成率',
      align: 'center',
    },
  ],
  data: [
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '2',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
  ],
});

// 上门服务----完成率排名（当月）
$('#server-month').bootstrapTable({
  pagination: true,
  columns: [
    {
      field: 'id',
      title: '序号',
      align: 'center',
    },
    {
      field: 'name',
      title: '组织名称',
      align: 'center',
    },
    {
      field: 'rate',
      title: '完成率',
      align: 'center',
    },
  ],
  data: [
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '2',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
    {
      id: '1',
      name: '悦华安养洪武服务中心',
      rate: '60%',
    },
  ],
});

// 任务计划看板
function detailFormatter(index, row) {
  // let html = [];
  // $.each(row, function (key, value) {
  //   html.push('<p><b>' + key + ':</b> ' + value + '</p>');
  // });
  // return html.join('');
  let div = `
    <div class="px-4">
        <p style="font-weight:700;font-size:16px;">一、主要指标权重占比75%</p>
        <div class="px-3 py-3">
          <table class="w-100 border-0 subTable" id="sub-table">
            <thead>
              <th>工作内容</th>
              <th>目标</th>
              <th>权重分值</th>
              <th>完成情况</th>
              <th>个人自评</th>
              <th>主管评分</th>
            </thead>
            <tbody>
              <tr>
                <td>享清福智慧养老云平台</td>
                <td>1、享清福智慧养老云平台产品介绍PPT修改    2、老人入住月账单填写规则梳理</td>
                <td>15</td>
                <td>已完成</td>
                <td>14.5</td>
                <td>15</td>
              </tr>
              <tr>
                <td>享清福智慧养老云平台</td>
                <td>1、享清福智慧养老云平台产品介绍PPT修改    2、老人入住月账单填写规则梳理</td>
                <td>15</td>
                <td>已完成</td>
                <td>14.5</td>
                <td>15</td>
              </tr>
              <tr>
                <td>享清福智慧养老云平台</td>
                <td>1、享清福智慧养老云平台产品介绍PPT修改    2、老人入住月账单填写规则梳理</td>
                <td>15</td>
                <td>已完成</td>
                <td>14.5</td>
                <td>15</td>
              </tr>
              <tr>
                <td>享清福智慧养老云平台</td>
                <td>1、享清福智慧养老云平台产品介绍PPT修改    2、老人入住月账单填写规则梳理</td>
                <td>15</td>
                <td>已完成</td>
                <td>14.5</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-weight:700;font-size:16px;">二、基础指标权重占比25%</p>
        <div class="px-3 py-3">
          <table class="w-100 border-0 subTable">
            <thead>
              <th>考核内容</th>
              <th>评分颁发</th>
              <th>权重分值</th>
              <th>完成情况</th>
              <th>个人自评</th>
              <th>主管评分</th>
            </thead>
            <tbody>
              <tr>
                <td>工作纪律</td>
                <td>迟到一次扣1分，旷工或受处分1次为0分</td>
                <td>15</td>
                <td>已完成</td>
                <td>14.5</td>
                <td>15</td>
              </tr>
              <tr>
                <td>企业文化</td>
                <td>按企业文化要求作为衡量标准</td>
                <td>15</td>
                <td>已完成</td>
                <td>14.5</td>
                <td>15</td>
              </tr>
              <tr>
                <td>客户投诉</td>
                <td>被投诉1次扣即为0分</td>
                <td>15</td>
                <td>已完成</td>
                <td>14.5</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  `;
  console.log(row);
  return div;
}

$('#task').bootstrapTable({
  // 分页相关设置
  pagination: true,
  pageSize: 15,
  pageList: [10, 15, 20],
  paginationHAlign: 'right',
  paginationVAlign: 'bottom',
  paginationDetailHAlign: 'left',
  onlyInfoPagination: false,
  showExtendedPagination: true,
  detailView: true,
  detailViewByClick: true,
  // 搜索输入框相关设置
  search: true,
  searchText: '',
  showSearchButton: false,
  searchAlign: 'right',
  showButtonIcons: true,
  showButtonText: true,
  // 详细试图表
  detailFormatter: 'detailFormatter',
  showColumnsSearch: true,
  showColumns: true,
  smartDisplay: true,
  columns: [
    {
      field: 'id',
      title: '序号',
      align: 'center',
    },
    {
      field: 'name',
      title: '姓名',
      align: 'center',
    },
    {
      field: 'position',
      title: '岗位',
      align: 'center',
    },
    {
      field: 'department',
      title: '所在部门',
      align: 'center',
    },
    {
      field: 'total',
      title: '总得分',
      align: 'center',
    },
    {
      field: 'checkName',
      title: '考评人姓名',
      align: 'center',
    },
    {
      field: 'checkPosition',
      title: '考评人岗位',
      align: 'center',
    },
  ],
  data: [
    {
      id: '1',
      name: '张晓晓',
      position: '高管',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '2',
      name: '张晓晓',
      position: '产品经理',
      department: '桑榆未晚',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '3',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '4',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '5',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '6',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '7',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '98',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
    {
      id: '1',
      name: '张晓晓',
      position: '产品经理',
      department: '享清福事业部',
      total: '89',
      checkName: '李晓霞',
      checkPosition: '总监',
    },
  ],
});
