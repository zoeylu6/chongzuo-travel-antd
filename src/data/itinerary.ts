export interface TimeSlot {
  time: string;
  title: string;
  tag?: string;
  description: string;
  features?: string[];
  distance?: string;
  tips?: string[];
  food?: string[];
  rainyAlternative?: {
    description: string;
    route: string[];
    hint?: string;
  };
}

export interface DaySchedule {
  key: string;
  day: number;
  date: string;
  weekday: string;
  title: string;
  route: string[];
  slots: TimeSlot[];
  food?: string[];
}

export const itinerary: DaySchedule[] = [
  {
    key: 'day1',
    day: 1,
    date: '4月30日',
    weekday: '周三',
    title: '崇左南站出发 · 初见山水',
    route: ['崇左南站', '通灵大峡谷', '明仕田园'],
    slots: [
      {
        time: '上午',
        title: '最美高速启程',
        tag: '推荐早发',
        description: '崇左南站取车出发，沿 S60 合那高速一路向西。这条被誉为"最美高速"的公路，穿行于喀斯特峰丛之间，云雾缭绕，如入画境。',
        features: ['建议出发 7:30 前', '车程约 2-2.5 小时', '服务区较少，提前加油'],
        distance: '约 150km · 高速为主'
      },
      {
        time: '上午',
        title: '通灵大峡谷',
        tag: '震撼景观',
        description: '亚洲第一大峡谷，全长 3.8 公里。峡谷深处，一道落差 188.6 米的瀑布从天而降。穿行原始森林，探秘溶洞奇观，感受大自然的鬼斧神工。',
        features: ['原始森林步道', '亚洲单级最高瀑布', '溶洞奇观', '最佳拍照点：瀑布正面观景台']
      },
      {
        time: '下午',
        title: '明仕田园',
        tag: '精华必游',
        description: '誉为"隐者之居"，这里有江南水乡的温婉，又有边关山寨的恬静。乘竹筏漂流，看青山倒影碧波中；骑行田园小径，感受炊烟袅袅的田园诗意。',
        features: ['竹筏漂流 30 分钟', '田园骑行', '日落绝佳观赏地', '壮族民居体验'],
        distance: '通灵→明仕 约 35km · 40分钟'
      },
      {
        time: '晚上',
        title: '明仕田园住宿 · 品尝农家菜',
        description: '入住田园民宿，推窗即是山水画卷。晚餐品尝当地特色农家菜，竹筒饭的清香、酸嘢的爽脆，舌尖上的广西味道。',
        food: ['竹筒饭', '明仕农家菜', '酸嘢', '清蒸河鱼']
      }
    ],
    food: ['竹筒饭', '明仕农家菜', '酸嘢', '清蒸河鱼']
  },
  {
    key: 'day2',
    day: 2,
    date: '5月1日',
    weekday: '劳动节',
    title: '跨国瀑布 · 溶洞咖啡',
    route: ['明仕田园', '德天瀑布', '蓝洞咖啡', '大新县城'],
    slots: [
      {
        time: '上午',
        title: '德天跨国瀑布',
        tag: '核心景点',
        description: '亚洲第一、世界第四大跨国瀑布。瀑布宽 100 多米，落差 70 多米，分三层跌宕而下，气势磅礴。一边是中国德天，一边是越南板约，跨国风情尽收眼底。',
        features: ['三级跌落瀑布群', '中越边境风光', '竹筏近距离观瀑', '最佳机位：53号界碑旁'],
        distance: '明仕→德天 约 37km · 50分钟'
      },
      {
        time: '下午',
        title: '蓝洞咖啡',
        tag: '网红必打卡',
        description: '藏在喀斯特溶洞里的网红咖啡厅。天然溶洞改造，在幽暗的洞穴中品尝一杯特调，透过洞口远眺瀑布与青山，摆烂发呆的绝佳去处。',
        features: ['溶洞咖啡体验', '洞口拍照绝美', '洞内清凉避暑', '瀑布远景视角'],
        distance: '德天→蓝洞 约 5km · 10分钟'
      },
      {
        time: '晚上',
        title: '大新县城住宿 · 宵夜时光',
        description: '返回大新县城入住，晚上可以在县城寻觅地道美食。壮族烤乳猪外酥里嫩，是当地的招牌美味。',
        food: ['壮族烤乳猪', '德天越式美食', '蓝洞特调咖啡', '大新夜市小吃']
      }
    ],
    food: ['壮族烤乳猪', '德天越式美食', '蓝洞特调咖啡', '大新夜市小吃']
  },
  {
    key: 'day3',
    day: 3,
    date: '5月2日',
    weekday: '周五',
    title: '秘境探幽 · 转赴南宁',
    route: ['大新县城', '伏那秘境', '峒那屿湾', '南宁'],
    slots: [
      {
        time: '上午',
        title: '伏那秘境',
        tag: '原生态',
        description: '鲜为人知的原生态秘境，原始森林覆盖，瀑布溪流遍布。这里没有喧嚣的人群，只有纯粹的山水与宁静。徒步其中，感受被大自然包围的治愈感。',
        features: ['原始森林徒步', '野瀑布群', '珍稀动植物', '瑜伽冥想圣地']
      },
      {
        time: '中午',
        title: '峒那屿湾午餐 · 休整小憩',
        description: '乘车前往峒那屿湾，在景区附近农家乐用午餐，品尝百香果排骨、龙州鸡肉粉等当地特色。',
        food: ['百香果排骨', '龙州鸡肉粉', '峒那农家菜']
      },
      {
        time: '下午',
        title: '峒那屿湾',
        tag: '山水画廊',
        description: '被誉为"水上桂林"，乘船穿行于喀斯特山水之间，两岸青山如黛，水面碧波荡漾。这里是电影《花千骨》取景地，仙侠古风扑面而来。',
        features: ['游船观光 1 小时', '《花千骨》取景地', '喀斯特山水绝景', '壮族民俗表演'],
        distance: '伏那→峒那屿湾 约 30km · 40分钟'
      },
      {
        time: '傍晚',
        title: '返回崇左 → 高铁赴南宁',
        description: '游览结束后返回崇左站归还租车，搭乘高铁前往南宁。抵达南宁后入住酒店，感受广西首府的城市脉搏。',
        distance: '峒那→崇左站 约 80km · 1.5小时\n崇左→南宁 高铁约 1 小时'
      }
    ],
    food: ['百香果排骨', '龙州鸡肉粉', '峒那农家菜']
  },
  {
    key: 'day4',
    day: 4,
    date: '5月3日',
    weekday: '周六',
    title: '南宁城市漫游',
    route: ['青秀山公园', '广西民族博物馆', '南宁市区'],
    slots: [
      {
        time: '上午',
        title: '青秀山公园',
        tag: '城市绿肺',
        description: '南宁市区的天然氧吧，登上龙象塔可俯瞰整座城市。山上古木参天，有千年历史的观音禅寺。清晨登山，呼吸清新空气，感受绿城的悠闲时光。',
        features: ['龙象塔登高望远', '观音禅寺祈福', '兰花园、苏铁园', '观光缆车可选']
      },
      {
        time: '下午',
        title: '广西民族博物馆',
        tag: '文化之旅',
        description: '了解广西壮族文化的最佳去处。馆内陈列丰富的民族文物，铜鼓文化展、壮族服饰展令人印象深刻。建筑本身也是一件艺术品，独特的铜鼓造型令人称奇。',
        features: ['铜鼓文化专题展', '壮族服饰与织锦', '建筑本身就是艺术品', '免费参观需预约']
      },
      {
        time: '傍晚',
        title: '南宁夜市寻味',
        description: '晚上漫步南宁街头，寻觅地道美食。老友粉的酸爽、螺蛳粉的独特风味，是广西不可错过的味蕾记忆。',
        food: ['老友粉', '螺蛳粉', '南宁粉饺', '卷筒粉']
      }
    ],
    food: ['老友粉', '螺蛳粉', '南宁粉饺', '卷筒粉']
  },
  {
    key: 'day5',
    day: 5,
    date: '5月4日',
    weekday: '青年节',
    title: '南宁休闲 · 满载而归',
    route: ['睡到自然醒', '三街两巷', '机场返程'],
    slots: [
      {
        time: '上午',
        title: '睡到自然醒',
        tag: '旅行意义',
        description: '经过四天的山水之旅，最后一天睡到自然醒，慢慢享用酒店早餐。旅行的意义，不就在于偶尔的慵懒与自在吗？'
      },
      {
        time: '下午',
        title: '三街两巷历史文化街区',
        tag: '老南宁风情',
        description: '漫步南宁老城区，感受这座城市的历史脉搏。青砖黛瓦、骑楼老街，传统与现代在这里交融。逛逛文创小店，品尝街头小吃，选购广西特色伴手礼。',
        features: ['骑楼老街风情', '文创店铺林立', '特产伴手礼', '复古街拍胜地']
      },
      {
        time: '傍晚',
        title: '南宁吴圩机场 · 返程',
        description: '根据航班时间安排出发，前往南宁吴圩国际机场。带着满满的山水记忆与美食回味，结束这次难忘的广西之旅。',
        food: ['柠檬鸭', '八角粽', '壮族酸嘢', '南宁粉饺'],
        distance: '市区→机场 约 40 分钟车程'
      }
    ],
    food: ['柠檬鸭', '八角粽', '壮族酸嘢', '南宁粉饺']
  }
];

export const keyTimes = [
  { event: '萧山机场出发航班', time: '4/29 17:05', icon: 'flight' },
  { event: '南宁→崇左高铁', time: '4/29 20:32', icon: 'train' },
  { event: '取车时间', time: '4/29 22:00', icon: 'car' },
  { event: '还车时间', time: '5/2 20:00', icon: 'car' },
  { event: '崇左→南宁高铁', time: '5/2 20:08', icon: 'train' },
  { event: '南宁机场返程航班', time: '5/4 21:15', icon: 'flight' },
];

export const navigationLinks = [
  { name: '崇左南酒店', address: '维纳斯度假村酒店(广西崇左市府店)', url: 'https://uri.amap.com/marker?position=107.352611,22.393214&name=维纳斯度假村酒店', icon: 'hotel' },
  { name: '通灵大峡谷', address: '景区停车场', url: 'https://uri.amap.com/marker?position=106.467778,22.976389&name=通灵大峡谷景区停车场', icon: 'scenic' },
  { name: '明仕田园酒店', address: '大新明仕山庄', url: 'https://uri.amap.com/marker?position=107.116667,22.866667&name=大新明仕山庄', icon: 'hotel' },
  { name: '德天大瀑布', address: '景区停车场', url: 'https://uri.amap.com/marker?position=106.725278,22.864722&name=德天大瀑布景区停车场', icon: 'scenic' },
  { name: '蓝洞咖啡', address: '溶洞咖啡厅', url: 'https://uri.amap.com/marker?position=106.730556,22.860556&name=蓝洞咖啡景区', icon: 'coffee' },
  { name: '大新县酒店', address: '维也纳国际酒店', url: 'https://uri.amap.com/marker?position=107.200833,22.828889&name=维也纳国际酒店(广西大新德天广场店)', icon: 'hotel' },
  { name: '伏那秘境', address: '景区停车场', url: 'https://uri.amap.com/marker?position=107.058333,22.845278&name=伏那秘境景区停车场', icon: 'scenic' },
  { name: '峒那屿湾', address: '景区停车场', url: 'https://uri.amap.com/marker?position=107.091667,22.801389&name=峒那屿湾景区停车场', icon: 'scenic' },
  { name: '崇左南站', address: '火车站进站口', url: 'https://uri.amap.com/marker?position=107.352611,22.393214&name=崇左南火车站进站口', icon: 'train' },
  { name: '南宁酒店', address: '咏物公共酒店', url: 'https://uri.amap.com/marker?position=108.316667,22.816667&name=咏物公共酒店(南宁民族广场地铁站店)', icon: 'hotel' },
];

export const tips = [
  {
    title: '自驾注意事项',
    icon: 'car',
    items: [
      'S60 合那高速被称为"最美高速"，沿途风景绝美，但注意不要边开边拍照',
      '山区路段弯道较多，控制车速，谨慎驾驶',
      '部分景区路段信号弱，提前下载离线地图',
      '加油站间隔较远，保持油量不低于半箱',
      '五一期间车流较大，景区附近可能堵车，预留充足时间'
    ]
  },
  {
    title: '景点最佳观赏时间',
    icon: 'clock',
    items: [
      '德天瀑布：11:00-14:00 阳光直射，可见彩虹奇观',
      '通灵大峡谷：上午时段，阳光可穿透峡谷',
      '明仕田园：日落时分（约 18:00-19:00）光影最美',
      '峒那屿湾：下午 3-5 点，光线柔和适合拍照',
      '蓝洞咖啡：下午 2-4 点，洞口光线最佳'
    ]
  },
  {
    title: '躲避人流建议',
    icon: 'team',
    items: [
      '景区开门即达：德天瀑布、通灵大峡谷 8:00 开门，建议第一批进入',
      '错峰用餐：11:00 或 13:00 后用餐，避开人流高峰',
      '热门景点下午：五一期间上午人最多，下午相对较少',
      '蓝洞咖啡早到：网红点排队久，建议开门就去或傍晚',
      '明仕竹筏错峰：傍晚时分人少，还能赏日落'
    ]
  },
  {
    title: '出行必备清单',
    icon: 'check',
    items: [
      '衣物：轻薄外套（峡谷内阴凉）、速干衣、舒适运动鞋',
      '防晒防雨：防晒霜、太阳镜、遮阳帽、雨衣/雨伞',
      '证件：身份证、驾驶证、充电宝',
      '现金：部分景区/小店不支持电子支付，备少量现金',
      '摄影设备：相机/手机、充电宝、防水袋（竹筏/游船用）'
    ]
  },
  {
    title: '预算参考',
    icon: 'money',
    items: [
      '租车：经济型约 200-300 元/天，五一可能涨价',
      '油费：全程约 400km，预估 300-400 元',
      '门票：通灵大峡谷 115 元，德天瀑布 80 元，明仕田园 120 元，峒那屿湾 100 元',
      '住宿：明仕田园/大新约 300-500 元/晚，南宁约 200-400 元/晚',
      '人均预算：约 3000-4000 元（含高铁、租车、住宿、门票、餐饮）'
    ]
  }
];