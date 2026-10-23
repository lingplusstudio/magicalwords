// 🌸 巴赫花精全身體地圖資料庫與控制器 (1 ~ 38 全花精 + 6 大部位 22 視角)

window.FLOWERS_LIST = [
  [1,'龍芽草','Agrimony'],[2,'白楊','Aspen'],[3,'山毛櫸','Beech'],[4,'矢車菊','Centaury'],
  [5,'水蕨','Cerato'],[6,'櫻桃李','Cherry Plum'],[7,'栗苞','Chestnut Bud'],[8,'菊苣','Chicory'],
  [9,'鐵線蓮','Clematis'],[10,'酸蘋果','Crab Apple'],[11,'榆樹','Elm'],[12,'龍膽','Gentian'],
  [13,'荊豆','Gorse'],[14,'石楠','Heather'],[15,'冬青','Holly'],[16,'忍冬','Honeysuckle'],
  [17,'鵝耳櫪','Hornbeam'],[18,'鳳仙花','Impatiens'],[19,'落葉松','Larch'],[20,'溝酸漿','Mimulus'],
  [21,'芥末','Mustard'],[22,'橡樹','Oak'],[23,'橄欖','Olive'],[24,'松樹','Pine'],
  [25,'紅栗','Red Chestnut'],[26,'岩薔薇','Rock Rose'],[27,'岩水','Rock Water'],[28,'線球草','Scleranthus'],
  [29,'聖星百合','Star of Bethlehem'],[30,'甜栗','Sweet Chestnut'],[31,'馬鞭草','Vervain'],[32,'葡萄','Vine'],
  [33,'胡桃','Walnut'],[34,'水堇','Water Violet'],[35,'白栗','White Chestnut'],[36,'野燕麥','Wild Oat'],
  [37,'野玫瑰','Wild Rose'],[38,'楊柳','Willow']
];

window.BODY_STRUCTURE = {
  head: {
    name: '頭頸部',
    views: [
      { id: 'head_front', name: '臉部正面' },
      { id: 'head_top', name: '頭頂俯視' },
      { id: 'head_back', name: '後腦枕骨' },
      { id: 'neck_up', name: '仰頸喉部' },
      { id: 'head_side_r', name: '右側特寫' },
      { id: 'head_side_l', name: '左側特寫' },
      { id: 'neck_shoulder_r', name: '右側帶肩' },
      { id: 'neck_shoulder_l', name: '左側帶肩' }
    ]
  },
  torso: {
    name: '軀幹部',
    views: [
      { id: 'torso_front', name: '軀幹正面' },
      { id: 'torso_back', name: '軀幹背面' },
      { id: 'torso_side_r', name: '右側胸腹' },
      { id: 'torso_side_l', name: '左側胸腹' }
    ]
  },
  arm: {
    name: '手臂部',
    views: [
      { id: 'arm_r_back', name: '右手後側' },
      { id: 'arm_r_front', name: '右手前側' },
      { id: 'arm_l_back', name: '左手後側' },
      { id: 'arm_l_front', name: '左手前側' }
    ]
  },
  leg: {
    name: '下肢腿部',
    views: [
      { id: 'legs_front', name: '雙腿正面' },
      { id: 'legs_back', name: '雙腿背面' },
      { id: 'leg_r_dual', name: '右腿雙側' },
      { id: 'leg_l_dual', name: '左腿雙側' }
    ]
  },
  hand: {
    name: '手掌部',
    views: [
      { id: 'hand_r_dual', name: '右手(背/心)' },
      { id: 'hand_l_dual', name: '左手(背/心)' }
    ]
  },
  foot: {
    name: '雙足底',
    views: [
      { id: 'foot_sole_r', name: '右腳足底' },
      { id: 'foot_sole_l', name: '左腳足底' }
    ]
  }
};

window.MAP_DATABASE = {
  // === 1. 頭頸部 ===
  head_front: {
    img: 'head_front.jpeg',
    dots: [
      { num: 4, x: 29.0, y: 4.5, desc: '右額角頂端' },
      { num: 18, x: 50.0, y: 3.5, desc: '前額頂端中央' },
      { num: 32, x: 71.0, y: 4.5, desc: '左額角頂端' },
      { num: 15, x: 29.5, y: 11.5, desc: '右前額上段' },
      { num: 30, x: 50.0, y: 11.5, desc: '前額正中上段' },
      { num: 15, x: 70.5, y: 11.5, desc: '左前額上段' },
      { num: 34, x: 17.5, y: 26.5, desc: '右太陽穴髮際' },
      { num: 23, x: 29.5, y: 23.5, desc: '右額骨中央' },
      { num: 34, x: 50.0, y: 22.0, desc: '印堂上方前額' },
      { num: 28, x: 70.5, y: 23.5, desc: '左額骨中央' },
      { num: 5, x: 82.5, y: 26.5, desc: '左太陽穴髮際' },
      { num: 29, x: 50.0, y: 29.5, desc: '印堂/眉間正中' },
      { num: 27, x: 23.0, y: 33.5, desc: '右眉骨上方' },
      { num: 8, x: 26.5, y: 39.5, desc: '右眉弓外側' },
      { num: 33, x: 44.0, y: 41.5, desc: '右內眼角' },
      { num: 30, x: 56.0, y: 41.5, desc: '左內眼角' },
      { num: 29, x: 67.5, y: 38.5, desc: '左眼上眼瞼' },
      { num: 18, x: 77.0, y: 33.5, desc: '左眉骨上方' },
      { num: 27, x: 79.5, y: 40.0, desc: '左外眼角外緣' },
      { num: 15, x: 19.0, y: 46.5, desc: '右耳前顴弓' },
      { num: 9, x: 32.5, y: 51.5, desc: '右顴面部' },
      { num: 2, x: 44.5, y: 53.5, desc: '右側鼻樑' },
      { num: 1, x: 55.5, y: 53.5, desc: '左側鼻樑' },
      { num: 22, x: 67.5, y: 51.5, desc: '左顴面部' },
      { num: 24, x: 80.0, y: 48.0, desc: '左耳前中段' },
      { num: 21, x: 19.5, y: 64.0, desc: '右耳垂下方' },
      { num: 3, x: 21.0, y: 68.5, desc: '右下顎骨角' },
      { num: 31, x: 29.0, y: 62.5, desc: '右嘴角旁' },
      { num: 38, x: 50.0, y: 63.5, desc: '人中與上唇' },
      { num: 4, x: 71.0, y: 62.5, desc: '左嘴角旁' },
      { num: 12, x: 80.5, y: 63.5, desc: '左下顎後緣' },
      { num: 24, x: 80.0, y: 69.0, desc: '左下顎角骨緣' },
      { num: 38, x: 50.0, y: 69.5, desc: '下唇' },
      { num: 15, x: 29.5, y: 73.0, desc: '右下顎頦旁' },
      { num: 2, x: 50.0, y: 77.5, desc: '下巴中央頦部' },
      { num: 15, x: 70.5, y: 73.0, desc: '左下顎頦旁' }
    ]
  },
  head_top: {
    img: 'head_top.jpeg',
    dots: [
      { num: 15, x: 13.0, y: 15.0, desc: '枕骨右外側' },
      { num: 30, x: 25.5, y: 14.5, desc: '枕骨右側區' },
      { num: 24, x: 50.0, y: 12.0, desc: '枕頂正中後段' },
      { num: 37, x: 72.0, y: 14.5, desc: '枕骨左側區' },
      { num: 35, x: 80.5, y: 14.5, desc: '枕骨左外緣' },
      { num: 8, x: 12.0, y: 29.5, desc: '右頂骨後外緣' },
      { num: 37, x: 23.5, y: 29.5, desc: '右頂後區' },
      { num: 27, x: 50.0, y: 29.5, desc: '頂骨正中央' },
      { num: 15, x: 74.5, y: 29.5, desc: '左頂後區' },
      { num: 13, x: 8.5, y: 52.0, desc: '右耳上緣' },
      { num: 4, x: 21.0, y: 52.0, desc: '右頂前區' },
      { num: 18, x: 50.0, y: 52.0, desc: '百會/頂骨前段' },
      { num: 32, x: 76.5, y: 52.0, desc: '左頂前區' },
      { num: 22, x: 87.5, y: 52.0, desc: '左耳上緣' },
      { num: 34, x: 13.5, y: 68.0, desc: '額右側緣' },
      { num: 15, x: 24.5, y: 68.0, desc: '額右內區' },
      { num: 30, x: 50.0, y: 71.0, desc: '前額正中央' },
      { num: 15, x: 74.5, y: 68.0, desc: '額左內區' },
      { num: 5, x: 82.5, y: 68.0, desc: '額左側緣' },
      { num: 34, x: 50.0, y: 84.5, desc: '前額髮際前緣' }
    ]
  },
  head_back: {
    img: 'head_back.jpeg',
    dots: [
      { num: 15, x: 22.0, y: 10.0, desc: '枕骨右上緣' },
      { num: 27, x: 50.0, y: 5.0, desc: '頂骨後端正中' },
      { num: 37, x: 77.0, y: 10.0, desc: '枕骨左上緣' },
      { num: 37, x: 31.0, y: 17.5, desc: '枕部右側上段' },
      { num: 30, x: 69.5, y: 17.5, desc: '枕部左側上段' },
      { num: 35, x: 29.0, y: 31.0, desc: '枕部右側中段' },
      { num: 24, x: 50.0, y: 30.0, desc: '後腦正中線(枕外隆凸)' },
      { num: 15, x: 71.5, y: 31.0, desc: '枕部左側中段' },
      { num: 4, x: 30.5, y: 48.0, desc: '右風池/天柱區' },
      { num: 30, x: 69.5, y: 48.0, desc: '左風池/天柱區' },
      { num: 13, x: 33.5, y: 70.0, desc: '後頸右側緣' },
      { num: 34, x: 50.0, y: 70.0, desc: '後頸正中(大椎穴一帶)' },
      { num: 22, x: 66.5, y: 70.0, desc: '後頸左側緣' }
    ]
  },
  neck_up: {
    img: 'neck_up.jpeg',
    dots: [
      { num: 9, x: 25.5, y: 40.5, desc: '右耳垂下方' },
      { num: 10, x: 54.0, y: 41.5, desc: '前頸喉結/舌骨區' },
      { num: 31, x: 33.5, y: 63.0, desc: '右側胸鎖乳突肌' },
      { num: 34, x: 54.0, y: 68.5, desc: '喉結下方/天突穴' },
      { num: 31, x: 72.5, y: 63.0, desc: '左側胸鎖乳突肌' },
      { num: 2, x: 22.5, y: 74.0, desc: '右鎖骨上窩' },
      { num: 31, x: 83.5, y: 74.0, desc: '左鎖骨端' }
    ]
  },
  head_side_r: {
    img: 'head_side_r.jpeg',
    dots: [
      { num: 24, x: 7.5, y: 27.5, desc: '後枕外粗隆' },
      { num: 27, x: 34.0, y: 6.0, desc: '頂骨後段' },
      { num: 18, x: 50.5, y: 4.5, desc: '百會頂骨區' },
      { num: 30, x: 71.5, y: 7.5, desc: '前頂側區' },
      { num: 34, x: 86.0, y: 22.0, desc: '前額外緣' },
      { num: 29, x: 87.5, y: 27.0, desc: '前額下緣' },
      { num: 27, x: 89.5, y: 30.5, desc: '眉外緣' },
      { num: 30, x: 20.0, y: 21.5, desc: '枕頂側交界' },
      { num: 37, x: 32.5, y: 17.5, desc: '顳頂區上部' },
      { num: 4, x: 48.0, y: 13.5, desc: '頂骨側部' },
      { num: 15, x: 67.5, y: 14.5, desc: '額顳側部' },
      { num: 15, x: 18.5, y: 32.5, desc: '枕下區' },
      { num: 8, x: 32.0, y: 29.5, desc: '顳骨鱗部' },
      { num: 13, x: 46.5, y: 28.5, desc: '右耳廓上方' },
      { num: 34, x: 61.5, y: 27.0, desc: '耳上方髮際' },
      { num: 23, x: 73.0, y: 24.5, desc: '前額側部' },
      { num: 8, x: 73.5, y: 35.5, desc: '右眉弓' },
      { num: 33, x: 85.0, y: 36.5, desc: '右眼內外眥' },
      { num: 30, x: 20.5, y: 50.0, desc: '枕下部後緣' },
      { num: 20, x: 28.5, y: 48.0, desc: '耳後乳突區' },
      { num: 15, x: 57.5, y: 45.0, desc: '顴弓面頰' },
      { num: 9, x: 77.0, y: 48.0, desc: '顴面區' },
      { num: 2, x: 91.0, y: 49.5, desc: '鼻翼側緣' },
      { num: 38, x: 87.5, y: 58.0, desc: '上唇側緣' },
      { num: 21, x: 56.5, y: 57.5, desc: '耳垂前方' },
      { num: 31, x: 74.0, y: 58.0, desc: '口角旁' },
      { num: 9, x: 43.5, y: 62.0, desc: '耳垂下方' },
      { num: 3, x: 58.0, y: 64.0, desc: '下顎骨角' },
      { num: 15, x: 73.0, y: 66.5, desc: '下顎頦旁' },
      { num: 2, x: 84.5, y: 68.5, desc: '下巴側緣' },
      { num: 20, x: 33.5, y: 67.5, desc: '頸後側中段' },
      { num: 22, x: 28.0, y: 76.5, desc: '項韌帶上段' },
      { num: 31, x: 48.5, y: 76.5, desc: '胸鎖乳突肌中段' },
      { num: 10, x: 65.5, y: 76.5, desc: '前頸喉結區' },
      { num: 34, x: 72.0, y: 86.5, desc: '胸骨上切跡' }
    ]
  },
  head_side_l: {
    img: 'head_side_l.jpeg',
    dots: [
      { num: 18, x: 52.5, y: 3.5, desc: '百會頂骨區' },
      { num: 27, x: 71.5, y: 5.5, desc: '頂骨後段' },
      { num: 30, x: 32.5, y: 7.5, desc: '前頂側區' },
      { num: 34, x: 15.0, y: 16.0, desc: '前額外緣' },
      { num: 29, x: 16.5, y: 22.0, desc: '前額下緣' },
      { num: 18, x: 14.5, y: 26.5, desc: '眉外緣' },
      { num: 37, x: 81.5, y: 15.0, desc: '顳頂區上部' },
      { num: 15, x: 71.0, y: 23.5, desc: '枕下區' },
      { num: 35, x: 83.5, y: 25.5, desc: '枕部側緣' },
      { num: 24, x: 95.0, y: 30.0, desc: '後枕外粗隆' },
      { num: 15, x: 37.0, y: 13.5, desc: '額顳側部' },
      { num: 32, x: 55.0, y: 13.5, desc: '頂骨側部' },
      { num: 28, x: 30.0, y: 24.5, desc: '前額側部' },
      { num: 5, x: 42.0, y: 29.5, desc: '耳上方髮際' },
      { num: 22, x: 56.5, y: 29.5, desc: '顳骨鱗部' },
      { num: 30, x: 16.5, y: 34.0, desc: '左眼內角/眉弓' },
      { num: 29, x: 28.5, y: 37.5, desc: '左眼眼瞼' },
      { num: 27, x: 44.5, y: 39.0, desc: '顴弓上緣' },
      { num: 4, x: 70.0, y: 47.0, desc: '枕下部後緣' },
      { num: 1, x: 12.0, y: 49.5, desc: '鼻樑鼻尖左側' },
      { num: 22, x: 27.5, y: 50.0, desc: '顴骨臉頰' },
      { num: 24, x: 44.0, y: 50.0, desc: '耳前中段' },
      { num: 38, x: 17.5, y: 58.5, desc: '上唇側緣' },
      { num: 4, x: 29.5, y: 59.0, desc: '口角旁' },
      { num: 12, x: 45.0, y: 60.5, desc: '耳垂前方' },
      { num: 2, x: 18.5, y: 69.5, desc: '下巴側緣' },
      { num: 15, x: 30.5, y: 69.5, desc: '下顎頦旁' },
      { num: 24, x: 43.5, y: 69.0, desc: '下顎骨角' },
      { num: 30, x: 60.0, y: 62.0, desc: '耳垂正下方' },
      { num: 38, x: 67.5, y: 62.0, desc: '耳後下緣' },
      { num: 13, x: 76.5, y: 63.5, desc: '後頸側緣' },
      { num: 10, x: 39.5, y: 77.0, desc: '前頸喉結區' },
      { num: 31, x: 54.5, y: 78.0, desc: '胸鎖乳突肌中段' },
      { num: 34, x: 35.5, y: 87.0, desc: '胸骨上切跡' }
    ]
  },
  neck_shoulder_r: {
    img: 'neck_shoulder_r.jpeg',
    dots: [
      { num: 24, x: 27.0, y: 20.5, desc: '後腦枕外粗隆' },
      { num: 27, x: 44.5, y: 2.5, desc: '頂骨後段' },
      { num: 18, x: 64.5, y: 2.5, desc: '百會/頂骨中段' },
      { num: 30, x: 78.5, y: 8.5, desc: '前額頂側' },
      { num: 34, x: 85.5, y: 16.5, desc: '前額髮際外側' },
      { num: 29, x: 87.5, y: 19.5, desc: '前額下段側緣' },
      { num: 27, x: 89.0, y: 22.0, desc: '眉外側端' },
      { num: 30, x: 33.5, y: 16.5, desc: '枕頂交界區' },
      { num: 37, x: 44.0, y: 12.0, desc: '顳頂區上段' },
      { num: 4, x: 57.5, y: 12.0, desc: '頂顳前區' },
      { num: 15, x: 71.0, y: 11.5, desc: '前額顳側' },
      { num: 15, x: 34.0, y: 23.5, desc: '枕下區' },
      { num: 8, x: 43.5, y: 21.0, desc: '顳骨鱗部' },
      { num: 13, x: 56.5, y: 21.0, desc: '右耳廓正上方' },
      { num: 34, x: 67.5, y: 23.0, desc: '耳上方髮際' },
      { num: 23, x: 76.5, y: 19.5, desc: '前額側面' },
      { num: 8, x: 77.0, y: 26.5, desc: '右眉骨' },
      { num: 33, x: 87.0, y: 24.5, desc: '右內外眥周圍' },
      { num: 30, x: 35.5, y: 32.5, desc: '耳後枕下段' },
      { num: 20, x: 44.5, y: 33.5, desc: '耳後乳突區' },
      { num: 15, x: 69.0, y: 29.5, desc: '右顴弓面頰' },
      { num: 9, x: 79.5, y: 33.0, desc: '右顴面部' },
      { num: 2, x: 88.5, y: 30.5, desc: '鼻尖與鼻翼' },
      { num: 38, x: 86.0, y: 36.5, desc: '上唇側緣' },
      { num: 21, x: 66.5, y: 38.0, desc: '耳垂前方' },
      { num: 31, x: 77.5, y: 37.0, desc: '口角旁' },
      { num: 9, x: 53.0, y: 40.5, desc: '耳垂正下方' },
      { num: 3, x: 67.5, y: 41.5, desc: '下顎骨角' },
      { num: 15, x: 77.5, y: 42.5, desc: '下顎頦旁' },
      { num: 2, x: 83.0, y: 44.5, desc: '下巴側緣' },
      { num: 20, x: 44.0, y: 44.0, desc: '後頸側部' },
      { num: 22, x: 38.5, y: 42.5, desc: '項韌帶上段' },
      { num: 31, x: 55.0, y: 47.0, desc: '胸鎖乳突肌中段' },
      { num: 10, x: 65.5, y: 47.5, desc: '前頸喉結區' },
      { num: 34, x: 68.0, y: 52.0, desc: '胸骨上切跡前' },
      { num: 23, x: 31.0, y: 53.5, desc: '肩胛岡上部' },
      { num: 22, x: 40.5, y: 55.0, desc: '斜方肌前緣' },
      { num: 2, x: 52.0, y: 56.5, desc: '鎖骨上窩' },
      { num: 8, x: 32.5, y: 58.5, desc: '斜方肌後側' },
      { num: 2, x: 26.5, y: 59.5, desc: '背側肩胛緣' },
      { num: 31, x: 31.0, y: 64.0, desc: '肩峰/三角肌' },
      { num: 36, x: 58.0, y: 69.5, desc: '胸肌外緣' },
      { num: 22, x: 73.0, y: 67.0, desc: '胸骨端' },
      { num: 29, x: 79.5, y: 74.0, desc: '胸骨角一帶' }
    ]
  },
  neck_shoulder_l: {
    img: 'neck_shoulder_l.jpeg',
    dots: [
      { num: 18, x: 43.5, y: 2.5, desc: '百會/頂骨中段' },
      { num: 27, x: 56.0, y: 2.5, desc: '頂骨後段' },
      { num: 30, x: 26.5, y: 7.5, desc: '前頂側區' },
      { num: 34, x: 17.5, y: 15.0, desc: '前額外緣' },
      { num: 29, x: 16.5, y: 20.0, desc: '前額下緣' },
      { num: 18, x: 16.0, y: 22.5, desc: '眉外側端' },
      { num: 15, x: 36.5, y: 11.5, desc: '額顳側區' },
      { num: 32, x: 49.0, y: 11.5, desc: '頂顳前區' },
      { num: 15, x: 62.5, y: 16.5, desc: '枕下區' },
      { num: 37, x: 70.0, y: 15.0, desc: '顳頂區上段' },
      { num: 35, x: 71.0, y: 22.0, desc: '枕頂側交界' },
      { num: 24, x: 81.0, y: 20.5, desc: '後腦枕外粗隆' },
      { num: 28, x: 29.5, y: 18.5, desc: '前額側部' },
      { num: 5, x: 41.5, y: 20.0, desc: '耳上方髮際' },
      { num: 22, x: 50.5, y: 21.0, desc: '顳骨鱗部' },
      { num: 30, x: 17.5, y: 26.0, desc: '左眼內角/眉弓' },
      { num: 29, x: 29.5, y: 28.5, desc: '左眼眼瞼' },
      { num: 27, x: 40.5, y: 28.0, desc: '耳前上段' },
      { num: 4, x: 70.0, y: 29.5, desc: '枕下部後緣' },
      { num: 1, x: 19.5, y: 31.0, desc: '鼻樑鼻尖左側' },
      { num: 22, x: 28.5, y: 32.5, desc: '顴面區' },
      { num: 24, x: 40.5, y: 33.5, desc: '左耳前中段' },
      { num: 38, x: 23.5, y: 37.0, desc: '上唇側緣' },
      { num: 4, x: 30.5, y: 37.5, desc: '口角旁' },
      { num: 12, x: 40.5, y: 38.5, desc: '耳垂前方' },
      { num: 2, x: 26.5, y: 44.5, desc: '下巴側緣' },
      { num: 15, x: 30.5, y: 43.5, desc: '下顎頦旁' },
      { num: 24, x: 40.5, y: 43.0, desc: '下顎骨角' },
      { num: 30, x: 54.5, y: 40.5, desc: '耳垂正下方' },
      { num: 38, x: 61.5, y: 42.5, desc: '耳後下緣' },
      { num: 13, x: 67.5, y: 42.5, desc: '後頸側部' },
      { num: 10, x: 43.5, y: 47.5, desc: '前頸喉結區' },
      { num: 34, x: 37.5, y: 51.5, desc: '胸骨上切跡前' },
      { num: 31, x: 55.0, y: 52.5, desc: '胸鎖乳突肌中段' },
      { num: 13, x: 69.5, y: 55.5, desc: '後頸外側緣' },
      { num: 23, x: 76.5, y: 54.0, desc: '斜方肌頂部' },
      { num: 12, x: 71.0, y: 62.0, desc: '鎖骨上切跡側' },
      { num: 25, x: 77.0, y: 58.5, desc: '肩胛岡前區' },
      { num: 15, x: 82.5, y: 66.5, desc: '背側斜方肌' },
      { num: 22, x: 40.5, y: 69.5, desc: '胸骨柄前側' },
      { num: 31, x: 54.0, y: 70.0, desc: '左肩峰與三角肌' },
      { num: 29, x: 33.5, y: 81.0, desc: '胸骨左緣' }
    ]
  },

  // === 2. 軀幹部 ===
  torso_front: {
    img: 'torso_front.jpeg',
    dots: [
      { num: 10, x: 50.0, y: 3.5, desc: '咽喉結部' },
      { num: 31, x: 42.0, y: 4.5, desc: '右頸側肌' },
      { num: 31, x: 62.0, y: 5.5, desc: '左胸鎖乳突肌' },
      { num: 2, x: 37.0, y: 7.5, desc: '右鎖骨上窩' },
      { num: 34, x: 50.0, y: 9.5, desc: '胸骨上切跡天突' },
      { num: 22, x: 50.0, y: 13.0, desc: '胸骨柄' },
      { num: 36, x: 30.5, y: 13.0, desc: '右胸大肌外緣' },
      { num: 31, x: 71.0, y: 13.0, desc: '左胸鎖連接處' },
      { num: 29, x: 50.0, y: 16.0, desc: '胸骨體上段' },
      { num: 4, x: 50.0, y: 19.5, desc: '心輪/胸骨中段' },
      { num: 14, x: 60.5, y: 19.0, desc: '左乳中內側' },
      { num: 16, x: 70.0, y: 19.5, desc: '左胸外側肋骨' },
      { num: 16, x: 55.5, y: 22.0, desc: '劍突下心窩橫帶' },
      { num: 23, x: 40.0, y: 24.5, desc: '右肋緣角上' },
      { num: 11, x: 40.0, y: 27.5, desc: '右肋弓中段' },
      { num: 24, x: 51.0, y: 26.5, desc: '上腹/胃脘區' },
      { num: 31, x: 70.5, y: 24.5, desc: '左肋緣' },
      { num: 13, x: 70.0, y: 27.5, desc: '左季肋部' },
      { num: 15, x: 30.0, y: 24.0, desc: '右前側肋骨' },
      { num: 15, x: 29.0, y: 30.5, desc: '右側腹肋緣' },
      { num: 19, x: 51.5, y: 31.5, desc: '中腹水分穴' },
      { num: 16, x: 38.0, y: 33.5, desc: '右腹直肌外緣' },
      { num: 12, x: 65.5, y: 32.5, desc: '左中腹直肌' },
      { num: 30, x: 72.5, y: 33.5, desc: '左側腹外斜肌' },
      { num: 29, x: 51.0, y: 35.5, desc: '臍周神闕' },
      { num: 36, x: 30.0, y: 40.5, desc: '右腰髂窩上' },
      { num: 23, x: 38.5, y: 37.5, desc: '右下腹部' },
      { num: 3, x: 38.5, y: 39.5, desc: '右髂前上棘內' },
      { num: 3, x: 48.0, y: 38.5, desc: '下腹氣海' },
      { num: 26, x: 65.0, y: 39.0, desc: '左下腹大腸區' },
      { num: 8, x: 38.5, y: 43.5, desc: '右腹股溝上段' },
      { num: 24, x: 47.5, y: 43.5, desc: '關元穴正中' },
      { num: 1, x: 58.5, y: 43.5, desc: '左下腹丹田旁' },
      { num: 20, x: 72.5, y: 43.5, desc: '左下腹骨盆緣' },
      { num: 15, x: 80.5, y: 43.5, desc: '左髂脊外緣' },
      { num: 17, x: 21.0, y: 44.0, desc: '右腰側肋緣' },
      { num: 28, x: 20.0, y: 47.0, desc: '右髂嵴轉折' },
      { num: 26, x: 29.0, y: 47.5, desc: '右骨盆前區' },
      { num: 3, x: 37.5, y: 47.5, desc: '右腹股溝橫紋' },
      { num: 31, x: 47.5, y: 47.5, desc: '恥骨聯合上中' },
      { num: 27, x: 63.5, y: 47.5, desc: '左腹股溝深處' },
      { num: 5, x: 23.5, y: 51.5, desc: '右大轉子外前' },
      { num: 13, x: 29.5, y: 51.5, desc: '右腹股溝中段' },
      { num: 15, x: 36.5, y: 51.5, desc: '右大腿根部' },
      { num: 4, x: 44.5, y: 51.5, desc: '右恥骨結節' },
      { num: 22, x: 51.0, y: 49.5, desc: '恥骨角正中' },
      { num: 21, x: 58.0, y: 51.5, desc: '左恥骨結節' },
      { num: 6, x: 71.0, y: 51.5, desc: '左大腿根內側' },
      { num: 26, x: 83.5, y: 51.5, desc: '左髖大轉子' }
    ]
  },
  torso_back: {
    img: 'torso_back.jpeg',
    dots: [
      { num: 13, x: 43.5, y: 4.5, desc: '後頸右外緣' },
      { num: 22, x: 59.0, y: 4.5, desc: '後頸左外緣' },
      { num: 34, x: 51.5, y: 4.5, desc: '頸椎C2-C4正中' },
      { num: 25, x: 26.5, y: 8.5, desc: '右肩胛岡上窩' },
      { num: 23, x: 36.5, y: 8.5, desc: '右斜方肌項段' },
      { num: 37, x: 51.5, y: 7.5, desc: '第七頸椎大椎穴' },
      { num: 23, x: 67.5, y: 8.5, desc: '左斜方肌項段' },
      { num: 8, x: 77.0, y: 8.5, desc: '左肩胛岡上窩' },
      { num: 4, x: 51.5, y: 11.5, desc: '胸椎T1-T3上段' },
      { num: 15, x: 25.5, y: 13.5, desc: '右肩胛骨體外' },
      { num: 31, x: 36.5, y: 13.5, desc: '右肩胛內側緣' },
      { num: 2, x: 67.5, y: 13.5, desc: '左肩胛內側緣' },
      { num: 31, x: 79.5, y: 13.5, desc: '左肩胛骨體外' },
      { num: 20, x: 51.5, y: 16.5, desc: '胸椎T4-T5正中' },
      { num: 11, x: 21.5, y: 18.0, desc: '右腋下後背側' },
      { num: 19, x: 42.5, y: 18.5, desc: '右背脊內側帶' },
      { num: 4, x: 67.5, y: 19.5, desc: '左背中段' },
      { num: 3, x: 79.5, y: 19.0, desc: '左背外側緣' },
      { num: 25, x: 32.5, y: 23.0, desc: '右背肋下部' },
      { num: 13, x: 42.5, y: 25.0, desc: '右下胸椎旁' },
      { num: 29, x: 51.5, y: 25.0, desc: '胸椎T9-T11段' },
      { num: 5, x: 69.5, y: 25.0, desc: '左背肋骨區' },
      { num: 17, x: 28.5, y: 35.5, desc: '右腰側部' },
      { num: 21, x: 34.5, y: 32.0, desc: '右側腰肌上' },
      { num: 10, x: 42.5, y: 32.0, desc: '右側腰椎旁' },
      { num: 20, x: 63.5, y: 32.0, desc: '左側腰肌上' },
      { num: 12, x: 71.0, y: 32.0, desc: '左側腰肌外' },
      { num: 24, x: 77.0, y: 35.5, desc: '左腰外側緣' },
      { num: 38, x: 51.5, y: 33.5, desc: '腰椎L2-L4段' },
      { num: 36, x: 51.5, y: 38.5, desc: '腰薦交界區' },
      { num: 6, x: 35.5, y: 39.5, desc: '右髂後上棘' },
      { num: 38, x: 69.0, y: 39.5, desc: '左髂後上棘' },
      { num: 24, x: 51.5, y: 41.5, desc: '薦椎/八髎穴' },
      { num: 15, x: 28.5, y: 43.5, desc: '右臀大肌外上' },
      { num: 4, x: 77.0, y: 43.5, desc: '左臀大肌外上' },
      { num: 27, x: 20.5, y: 47.0, desc: '右臀大轉子' },
      { num: 37, x: 28.0, y: 49.5, desc: '右臀外側部' },
      { num: 30, x: 40.0, y: 47.0, desc: '右臀大肌主體' },
      { num: 30, x: 65.5, y: 47.0, desc: '左臀大肌主體' },
      { num: 34, x: 78.5, y: 49.5, desc: '左臀外側部' },
      { num: 28, x: 88.0, y: 47.0, desc: '左髖關節緣' },
      { num: 5, x: 88.0, y: 50.5, desc: '左臀下皺襞緣' }
    ]
  },
  torso_side_r: {
    img: 'torso_side_r.jpeg',
    dots: [
      { num: 31, x: 24.5, y: 27.5, desc: '背側斜方肌' },
      { num: 36, x: 73.0, y: 30.5, desc: '胸前側大肌' },
      { num: 15, x: 83.5, y: 39.0, desc: '前胸外緣' },
      { num: 3, x: 37.5, y: 38.5, desc: '右側胸背肋骨' },
      { num: 5, x: 34.5, y: 48.0, desc: '右側背肋下段' },
      { num: 33, x: 53.5, y: 47.5, desc: '右腋下肋間隙' },
      { num: 12, x: 22.5, y: 55.5, desc: '右腰後側緣' },
      { num: 24, x: 33.5, y: 62.0, desc: '右腰後肌' },
      { num: 34, x: 48.0, y: 62.0, desc: '右腰側肋緣下' },
      { num: 15, x: 68.0, y: 62.0, desc: '右側腹直肌外' },
      { num: 16, x: 80.5, y: 62.0, desc: '前側腹腹白線' },
      { num: 38, x: 37.5, y: 72.0, desc: '右臀大肌上緣' },
      { num: 17, x: 53.0, y: 73.5, desc: '右髂嵴中段' },
      { num: 36, x: 71.0, y: 73.5, desc: '右下腹部' },
      { num: 30, x: 17.5, y: 88.0, desc: '右臀後突部' },
      { num: 4, x: 37.5, y: 78.5, desc: '右臀大肌中層' },
      { num: 34, x: 34.5, y: 88.0, desc: '右臀下部' },
      { num: 28, x: 53.0, y: 84.5, desc: '右骨盆大轉子' },
      { num: 5, x: 51.5, y: 92.5, desc: '右大腿外側根' },
      { num: 26, x: 67.5, y: 84.5, desc: '右前腹股溝' },
      { num: 13, x: 67.5, y: 92.5, desc: '右大腿前根部' }
    ]
  },
  torso_side_l: {
    img: 'torso_side_l.jpeg',
    dots: [
      { num: 15, x: 73.5, y: 28.0, desc: '左斜方背側' },
      { num: 25, x: 78.0, y: 40.5, desc: '左肩胛後緣' },
      { num: 31, x: 20.0, y: 35.0, desc: '左胸肌上端' },
      { num: 16, x: 14.5, y: 41.5, desc: '左胸肌前緣' },
      { num: 11, x: 48.0, y: 41.5, desc: '左側腋下肋骨' },
      { num: 31, x: 21.0, y: 51.0, desc: '左胸肋交界' },
      { num: 25, x: 52.0, y: 49.5, desc: '左側肋骨中段' },
      { num: 21, x: 75.5, y: 56.5, desc: '左後肋緣' },
      { num: 13, x: 22.0, y: 58.5, desc: '左季肋部' },
      { num: 37, x: 44.0, y: 62.5, desc: '左側肋骨下段' },
      { num: 17, x: 62.5, y: 62.5, desc: '左側腰肌' },
      { num: 30, x: 25.5, y: 67.5, desc: '左腰側前緣' },
      { num: 12, x: 12.0, y: 70.5, desc: '左前腹壁' },
      { num: 26, x: 23.5, y: 76.5, desc: '左下腹側' },
      { num: 15, x: 43.0, y: 75.5, desc: '左髂嵴正側' },
      { num: 6, x: 61.5, y: 75.5, desc: '左腰臀交界' },
      { num: 20, x: 26.5, y: 82.5, desc: '左腹股溝外' },
      { num: 27, x: 39.5, y: 88.0, desc: '左恥骨聯合前' },
      { num: 6, x: 27.5, y: 94.5, desc: '左大腿前內側' },
      { num: 37, x: 60.0, y: 88.0, desc: '左臀外肌' },
      { num: 37, x: 48.5, y: 94.5, desc: '左大腿外側根' },
      { num: 30, x: 75.0, y: 91.5, desc: '左臀後突部' }
    ]
  },

  // === 3. 手臂部 ===
  arm_r_back: {
    img: 'arm_r_back.jpeg',
    dots: [
      { num: 24, x: 50.0, y: 19.5, desc: '右三角肌後束' },
      { num: 5, x: 42.0, y: 33.5, desc: '右上臂內後緣' },
      { num: 32, x: 50.0, y: 32.5, desc: '右上臂外側部' },
      { num: 11, x: 51.5, y: 56.5, desc: '右前臂近端伸肌' },
      { num: 16, x: 57.0, y: 66.5, desc: '右腕關節尺側' },
      { num: 37, x: 60.5, y: 56.5, desc: '右前臂骨幹後側' }
    ]
  },
  arm_r_front: {
    img: 'arm_r_front.jpeg',
    dots: [
      { num: 24, x: 51.0, y: 21.5, desc: '右三角肌前束' },
      { num: 32, x: 45.0, y: 35.5, desc: '右上臂外側緣' },
      { num: 11, x: 56.5, y: 35.5, desc: '右上臂肱二頭肌' },
      { num: 5, x: 57.5, y: 53.5, desc: '右肘窩尺側' },
      { num: 11, x: 54.0, y: 58.5, desc: '右前臂內前緣' },
      { num: 37, x: 33.0, y: 58.5, desc: '右前臂橈側緣' },
      { num: 17, x: 43.5, y: 58.5, desc: '右前臂屈肌正中' },
      { num: 19, x: 35.5, y: 69.5, desc: '右前臂下段腕橫紋' }
    ]
  },
  arm_l_back: {
    img: 'arm_l_back.jpeg',
    dots: [
      { num: 38, x: 51.5, y: 32.0, desc: '左上臂後外側' },
      { num: 29, x: 55.0, y: 40.5, desc: '左肘內後緣' },
      { num: 18, x: 47.5, y: 58.0, desc: '左前臂尺骨後緣' },
      { num: 37, x: 35.5, y: 61.5, desc: '左前臂伸肌中段' },
      { num: 8, x: 31.0, y: 68.5, desc: '左腕背側外緣' },
      { num: 37, x: 41.5, y: 68.5, desc: '左腕骨背側' }
    ]
  },
  arm_l_front: {
    img: 'arm_l_front.jpeg',
    dots: [
      { num: 38, x: 57.5, y: 23.0, desc: '左三角肌前緣' },
      { num: 20, x: 53.5, y: 38.0, desc: '左肱二頭肌區' },
      { num: 29, x: 51.5, y: 52.0, desc: '左肘前窩' },
      { num: 18, x: 55.5, y: 58.0, desc: '左前臂旋前圓肌' },
      { num: 37, x: 61.0, y: 64.0, desc: '左前臂內緣' },
      { num: 37, x: 75.0, y: 58.0, desc: '左前臂橈側伸肌' },
      { num: 13, x: 66.5, y: 63.5, desc: '左前臂掌長肌' },
      { num: 8, x: 77.0, y: 66.5, desc: '左腕掌側緣' },
      { num: 30, x: 73.0, y: 71.0, desc: '左腕掌橫紋區' }
    ]
  },

  // === 4. 下肢腿部 ===
  legs_front: {
    img: 'legs_front.jpeg',
    dots: [
      { num: 23, x: 33.0, y: 4.5, desc: '右下腹部' },
      { num: 3, x: 33.0, y: 7.5, desc: '右髂窩前' },
      { num: 26, x: 60.5, y: 6.0, desc: '左下腹大腸區' },
      { num: 36, x: 22.0, y: 9.5, desc: '右腰側緣' },
      { num: 17, x: 16.5, y: 12.0, desc: '右腰外側骨嵴' },
      { num: 8, x: 33.0, y: 12.0, desc: '右腹股溝上段' },
      { num: 24, x: 42.0, y: 12.0, desc: '右下腹丹田旁' },
      { num: 1, x: 56.5, y: 12.0, desc: '左下腹丹田旁' },
      { num: 20, x: 71.5, y: 12.0, desc: '左骨盆內緣' },
      { num: 15, x: 79.5, y: 12.0, desc: '左髂嵴外緣' },
      { num: 28, x: 10.5, y: 16.5, desc: '右大轉子上方' },
      { num: 26, x: 22.0, y: 16.5, desc: '右骨盆前區' },
      { num: 3, x: 31.0, y: 16.5, desc: '右腹股溝橫紋' },
      { num: 31, x: 42.0, y: 16.5, desc: '右恥骨上區' },
      { num: 22, x: 49.5, y: 16.5, desc: '恥骨聯合正中' },
      { num: 27, x: 63.5, y: 16.5, desc: '左腹股溝深處' },
      { num: 5, x: 10.5, y: 22.0, desc: '右大轉子外緣' },
      { num: 13, x: 22.0, y: 22.0, desc: '右腹股溝中段' },
      { num: 15, x: 31.0, y: 22.0, desc: '右大腿根部' },
      { num: 4, x: 42.0, y: 22.0, desc: '右恥骨結節' },
      { num: 21, x: 55.0, y: 22.0, desc: '左恥骨結節' },
      { num: 6, x: 70.0, y: 22.0, desc: '左大腿根內側' },
      { num: 37, x: 78.5, y: 22.0, desc: '左髖大轉子' },
      { num: 32, x: 11.5, y: 29.5, desc: '右大腿外側上' },
      { num: 29, x: 23.0, y: 29.5, desc: '右大腿股前肌' },
      { num: 7, x: 34.5, y: 34.5, desc: '右股直肌主體' },
      { num: 15, x: 46.5, y: 37.5, desc: '右大腿內側副韌帶' },
      { num: 13, x: 12.0, y: 41.5, desc: '右大腿外側中' },
      { num: 24, x: 23.5, y: 41.5, desc: '右大腿外側肌' },
      { num: 22, x: 49.5, y: 24.5, desc: '會陰前緣' },
      { num: 30, x: 53.0, y: 29.5, desc: '左股薄肌上段' },
      { num: 8, x: 65.5, y: 34.5, desc: '左大腿股直肌' },
      { num: 3, x: 76.5, y: 30.5, desc: '左大腿闊筋膜張肌' },
      { num: 24, x: 53.5, y: 42.5, desc: '左大腿內收肌下' },
      { num: 27, x: 30.0, y: 54.0, desc: '右膝髕骨中心' },
      { num: 12, x: 51.5, y: 55.5, desc: '左膝內側副韌帶' },
      { num: 33, x: 63.5, y: 55.5, desc: '左膝髕骨中心' },
      { num: 4, x: 76.5, y: 55.5, desc: '左膝外側副韌帶' },
      { num: 35, x: 15.5, y: 64.0, desc: '右小腿腓骨上段' },
      { num: 16, x: 30.0, y: 64.0, desc: '右脛骨前肌上段' },
      { num: 3, x: 41.5, y: 64.0, desc: '右小腿內側上' },
      { num: 37, x: 52.0, y: 64.0, desc: '左小腿內側上' },
      { num: 8, x: 65.5, y: 64.0, desc: '左脛骨前肌上段' },
      { num: 24, x: 77.5, y: 64.0, desc: '左小腿腓骨上段' },
      { num: 4, x: 16.5, y: 71.5, desc: '右小腿外側中' },
      { num: 26, x: 30.0, y: 74.0, desc: '右小腿脛骨中段' },
      { num: 15, x: 53.0, y: 72.0, desc: '左小腿內側中' },
      { num: 4, x: 65.5, y: 74.0, desc: '左小腿脛骨中段' },
      { num: 12, x: 77.5, y: 72.0, desc: '左小腿外側中' },
      { num: 12, x: 32.0, y: 83.5, desc: '右踝關節前' },
      { num: 34, x: 64.0, y: 83.5, desc: '左踝關節前' },
      { num: 30, x: 26.5, y: 89.5, desc: '右腳背第三蹠骨' },
      { num: 29, x: 21.0, y: 92.0, desc: '右足背外側緣' },
      { num: 15, x: 35.5, y: 92.5, desc: '右腳大拇趾背' },
      { num: 3, x: 41.5, y: 89.5, desc: '右內踝下緣' },
      { num: 14, x: 42.0, y: 85.5, desc: '右內踝上緣' },
      { num: 35, x: 55.0, y: 90.0, desc: '左內踝前緣' },
      { num: 37, x: 61.5, y: 92.0, desc: '左腳大拇趾背' },
      { num: 34, x: 71.5, y: 89.5, desc: '左腳背第三蹠骨' },
      { num: 15, x: 74.5, y: 92.0, desc: '左足背外側緣' }
    ]
  },
  legs_back: {
    img: 'legs_back.jpeg',
    dots: [
      { num: 6, x: 31.0, y: 6.5, desc: '右髂骨後部' },
      { num: 36, x: 47.5, y: 5.5, desc: '腰薦正中上' },
      { num: 38, x: 63.5, y: 6.5, desc: '左髂骨後部' },
      { num: 24, x: 47.5, y: 9.5, desc: '薦骨/尾椎骨' },
      { num: 15, x: 22.0, y: 13.5, desc: '右臀大肌外上' },
      { num: 4, x: 73.5, y: 13.5, desc: '左臀大肌外上' },
      { num: 27, x: 12.0, y: 18.5, desc: '右髖大轉子' },
      { num: 37, x: 22.5, y: 20.0, desc: '右臀大肌外側' },
      { num: 30, x: 38.0, y: 18.5, desc: '右臀大肌中心' },
      { num: 30, x: 57.0, y: 18.5, desc: '左臀大肌中心' },
      { num: 34, x: 73.0, y: 20.0, desc: '左臀大肌外側' },
      { num: 28, x: 84.0, y: 18.5, desc: '左髖大轉子' },
      { num: 5, x: 84.0, y: 23.5, desc: '左臀下皺襞緣' },
      { num: 3, x: 19.5, y: 34.0, desc: '右股二頭肌外側' },
      { num: 34, x: 27.5, y: 34.0, desc: '右大腿後側外肌' },
      { num: 26, x: 37.5, y: 34.0, desc: '右股二頭肌主體' },
      { num: 2, x: 44.0, y: 34.0, desc: '右半腱半膜肌' },
      { num: 26, x: 51.5, y: 34.0, desc: '左半腱半膜肌' },
      { num: 1, x: 61.5, y: 34.0, desc: '左股二頭肌主體' },
      { num: 32, x: 73.5, y: 31.5, desc: '左大腿外側肌' },
      { num: 13, x: 74.5, y: 41.5, desc: '左大腿後外下' },
      { num: 4, x: 23.5, y: 52.0, desc: '右膕窩外緣' },
      { num: 38, x: 35.5, y: 54.0, desc: '右膕窩正中' },
      { num: 12, x: 48.0, y: 54.0, desc: '兩膝膕窩交界' },
      { num: 27, x: 60.5, y: 54.0, desc: '左膕窩正中' },
      { num: 24, x: 31.0, y: 64.0, desc: '右腓腸肌外側頭' },
      { num: 3, x: 40.5, y: 64.0, desc: '右腓腸肌內側頭' },
      { num: 37, x: 47.5, y: 62.0, desc: '右脛神經分枝' },
      { num: 15, x: 57.0, y: 64.0, desc: '左腓腸肌內側頭' },
      { num: 35, x: 66.0, y: 64.0, desc: '左腓腸肌外側頭' },
      { num: 12, x: 33.5, y: 74.0, desc: '右比目魚肌外側' },
      { num: 1, x: 42.0, y: 74.0, desc: '右小腿肚下端' },
      { num: 15, x: 48.0, y: 76.5, desc: '右內踝上肌腱' },
      { num: 3, x: 50.5, y: 68.0, desc: '左小腿後內側上' },
      { num: 26, x: 62.5, y: 71.5, desc: '左小腿後內橫線' },
      { num: 7, x: 55.0, y: 74.0, desc: '左小腿肚下端' },
      { num: 4, x: 64.0, y: 74.0, desc: '左比目魚肌外側' },
      { num: 34, x: 40.5, y: 84.0, desc: '右跟腱阿基里斯' },
      { num: 12, x: 58.0, y: 84.0, desc: '左跟腱阿基里斯' },
      { num: 34, x: 30.5, y: 92.5, desc: '右外踝下足跟' },
      { num: 9, x: 39.5, y: 93.0, desc: '右足跟骨正中' },
      { num: 3, x: 47.0, y: 96.5, desc: '右內踝後溝' },
      { num: 21, x: 52.0, y: 96.5, desc: '左內踝後溝' },
      { num: 31, x: 58.0, y: 93.0, desc: '左足跟骨正中' },
      { num: 29, x: 68.0, y: 93.0, desc: '左外踝下足跟' }
    ]
  },
  leg_r_dual: {
    img: 'leg_r_dual.jpeg',
    dots: [
      // 左半圖：右腿外側
      { num: 38, x: 19.0, y: 10.5, desc: '[右外] 臀大肌上外' },
      { num: 17, x: 26.5, y: 10.5, desc: '[右外] 髂脊中段' },
      { num: 36, x: 33.5, y: 14.5, desc: '[右外] 腹斜肌下' },
      { num: 4, x: 19.0, y: 16.5, desc: '[右外] 臀中肌' },
      { num: 30, x: 9.5, y: 22.5, desc: '[右外] 臀後隆起' },
      { num: 34, x: 18.0, y: 24.5, desc: '[右外] 臀下皺襞' },
      { num: 28, x: 25.5, y: 22.0, desc: '[右外] 股骨大轉子' },
      { num: 26, x: 33.5, y: 22.0, desc: '[右外] 腹股溝外' },
      { num: 5, x: 25.0, y: 28.5, desc: '[右外] 大腿外根部' },
      { num: 13, x: 33.5, y: 28.5, desc: '[右外] 股前上部' },
      { num: 1, x: 16.5, y: 40.0, desc: '[右外] 股後二頭肌' },
      { num: 32, x: 24.5, y: 35.0, desc: '[右外] 髂脛束上段' },
      { num: 13, x: 24.5, y: 44.0, desc: '[右外] 髂脛束下段' },
      { num: 29, x: 30.5, y: 35.0, desc: '[右外] 股直肌外緣' },
      { num: 24, x: 30.0, y: 44.0, desc: '[右外] 股外側肌' },
      { num: 7, x: 35.5, y: 35.5, desc: '[右外] 股外側肌前' },
      { num: 27, x: 22.0, y: 53.0, desc: '[右外] 右膝外側髕骨' },
      { num: 35, x: 17.0, y: 66.5, desc: '[右外] 腓骨長肌上' },
      { num: 16, x: 25.5, y: 66.5, desc: '[右外] 脛骨前肌外' },
      { num: 4, x: 17.0, y: 77.0, desc: '[右外] 腓骨肌下段' },
      { num: 26, x: 25.0, y: 77.0, desc: '[右外] 脛骨前外緣' },
      { num: 12, x: 18.0, y: 87.5, desc: '[右外] 右外踝上方' },
      { num: 31, x: 14.0, y: 96.5, desc: '[右外] 足跟外側' },
      { num: 29, x: 26.5, y: 97.0, desc: '[右外] 第五蹠骨底' },
      { num: 30, x: 35.5, y: 94.5, desc: '[右外] 小趾外側緣' },
      // 右半圖：右腿內側
      { num: 32, x: 62.0, y: 13.0, desc: '[右內] 鼠蹊部(女32/男37)' },
      { num: 37, x: 62.0, y: 15.0, desc: '[右內] 鼠蹊部(女32/男37)' },
      { num: 6, x: 66.5, y: 19.5, desc: '[右內] 恥骨結節內' },
      { num: 10, x: 71.5, y: 18.5, desc: '[右內] 坐骨結節旁' },
      { num: 26, x: 76.0, y: 16.5, desc: '[右內] 會陰坐骨支' },
      { num: 15, x: 56.0, y: 23.5, desc: '[右內] 腹股溝前內' },
      { num: 4, x: 64.0, y: 23.5, desc: '[右內] 股薄肌起點' },
      { num: 30, x: 79.5, y: 23.5, desc: '[右內] 臀內側坐骨' },
      { num: 7, x: 60.0, y: 40.0, desc: '[右內] 股內側肌群' },
      { num: 15, x: 67.5, y: 40.0, desc: '[右內] 縫匠肌中段' },
      { num: 26, x: 76.5, y: 40.0, desc: '[右內] 大收肌後緣' },
      { num: 27, x: 72.0, y: 53.0, desc: '[右內] 膝內側關節隙' },
      { num: 16, x: 70.0, y: 67.0, desc: '[右內] 脛骨前肌內' },
      { num: 3, x: 77.0, y: 67.0, desc: '[右內] 脛骨後肌中' },
      { num: 15, x: 88.0, y: 67.0, desc: '[右內] 比目魚肌內' },
      { num: 26, x: 77.5, y: 77.5, desc: '[右內] 脛骨內側下段' },
      { num: 7, x: 85.0, y: 77.5, desc: '[右內] 跟腱內前側' },
      { num: 12, x: 73.0, y: 87.0, desc: '[右內] 內踝上方' },
      { num: 14, x: 80.0, y: 87.0, desc: '[右內] 內踝正中' },
      { num: 12, x: 88.0, y: 87.0, desc: '[右內] 內踝後方' },
      { num: 15, x: 64.5, y: 94.5, desc: '[右內] 大腳趾內側' },
      { num: 3, x: 71.5, y: 97.0, desc: '[右內] 足弓第一蹠' },
      { num: 21, x: 81.5, y: 97.0, desc: '[右內] 足跟內側面' }
    ]
  },
  leg_l_dual: {
    img: 'leg_l_dual.jpeg',
    dots: [
      // 左半圖：左腿內側
      { num: 32, x: 34.0, y: 11.5, desc: '[左內] 鼠蹊部(女32/男37)' },
      { num: 37, x: 34.0, y: 13.5, desc: '[左內] 鼠蹊部(女32/男37)' },
      { num: 26, x: 19.5, y: 16.5, desc: '[左內] 會陰坐骨支' },
      { num: 10, x: 23.5, y: 18.5, desc: '[左內] 坐骨結節旁' },
      { num: 6, x: 27.5, y: 19.5, desc: '[左內] 恥骨結節內' },
      { num: 30, x: 14.5, y: 22.0, desc: '[左內] 臀內側坐骨' },
      { num: 21, x: 28.5, y: 22.5, desc: '[左內] 恥骨聯合內' },
      { num: 6, x: 37.5, y: 22.5, desc: '[左內] 腹股溝前內' },
      { num: 26, x: 12.0, y: 33.5, desc: '[左內] 大收肌後緣' },
      { num: 2, x: 20.5, y: 33.5, desc: '[左內] 股薄肌上部' },
      { num: 30, x: 28.0, y: 31.5, desc: '[左內] 縫匠肌上部' },
      { num: 24, x: 25.5, y: 44.5, desc: '[左內] 股薄肌下段' },
      { num: 8, x: 35.0, y: 35.5, desc: '[左內] 股內側肌群' },
      { num: 38, x: 10.5, y: 56.0, desc: '[左內] 膝後膕窩內' },
      { num: 12, x: 20.5, y: 56.0, desc: '[左內] 膝內側半月板' },
      { num: 33, x: 28.0, y: 56.0, desc: '[左內] 膝內側副韌帶' },
      { num: 3, x: 10.0, y: 65.5, desc: '[左內] 腓腸肌內側' },
      { num: 37, x: 17.5, y: 65.5, desc: '[左內] 脛骨後肌中' },
      { num: 8, x: 25.5, y: 65.5, desc: '[左內] 脛骨前肌內' },
      { num: 1, x: 9.5, y: 77.0, desc: '[左內] 比目魚肌內' },
      { num: 15, x: 16.5, y: 77.0, desc: '[左內] 脛骨內側下' },
      { num: 4, x: 23.5, y: 77.0, desc: '[左內] 脛前肌下段' },
      { num: 34, x: 16.0, y: 87.0, desc: '[左內] 內踝上方' },
      { num: 3, x: 13.5, y: 97.0, desc: '[左內] 足跟內側面' },
      { num: 35, x: 25.5, y: 97.0, desc: '[左內] 足弓第一蹠' },
      { num: 37, x: 36.0, y: 95.5, desc: '[左內] 大腳趾內側' },
      // 右半圖：左腿外側
      { num: 26, x: 57.0, y: 9.0, desc: '[左外] 腹斜肌下' },
      { num: 20, x: 55.0, y: 14.5, desc: '[左外] 髂前上棘' },
      { num: 15, x: 69.0, y: 9.0, desc: '[左外] 髂脊中段' },
      { num: 6, x: 77.5, y: 9.0, desc: '[左外] 臀大肌上外' },
      { num: 27, x: 67.5, y: 19.5, desc: '[左外] 股骨大轉子' },
      { num: 30, x: 88.5, y: 21.0, desc: '[左外] 臀後隆起' },
      { num: 6, x: 60.5, y: 25.0, desc: '[左外] 腹股溝外' },
      { num: 37, x: 71.5, y: 25.0, desc: '[左外] 臀中肌下部' },
      { num: 8, x: 61.5, y: 38.0, desc: '[左外] 股外側肌前' },
      { num: 3, x: 70.0, y: 38.0, desc: '[左外] 髂脛束主體' },
      { num: 34, x: 79.5, y: 37.0, desc: '[左外] 股二頭肌外' },
      { num: 26, x: 87.5, y: 33.5, desc: '[左外] 股後外側緣' },
      { num: 33, x: 71.0, y: 55.5, desc: '[左外] 膝外側關節隙' },
      { num: 4, x: 79.0, y: 55.5, desc: '[左外] 膝外側副韌帶' },
      { num: 38, x: 87.0, y: 56.5, desc: '[左外] 膝後膕窩外' },
      { num: 8, x: 74.0, y: 65.5, desc: '[左外] 脛骨前肌外' },
      { num: 24, x: 84.0, y: 65.5, desc: '[左外] 腓骨長肌上' },
      { num: 4, x: 76.0, y: 76.5, desc: '[左外] 脛骨前外緣' },
      { num: 12, x: 84.0, y: 76.5, desc: '[左外] 腓骨肌下段' },
      { num: 34, x: 82.5, y: 87.0, desc: '[左外] 左外踝上方' },
      { num: 15, x: 62.5, y: 95.0, desc: '[左外] 小趾外側緣' },
      { num: 34, x: 75.0, y: 97.0, desc: '[左外] 第五蹠骨底' },
      { num: 9, x: 87.5, y: 96.5, desc: '[左外] 足跟外側' }
    ]
  },

  // === 5. 手掌部 ===
  hand_r_dual: {
    img: 'hand_r_dual.jpeg',
    dots: [
      // 上半圖：右手手背（大拇指在左）
      { num: 25, x: 14.5, y: 34.0, desc: '[右手背] 大拇指第一掌骨' },
      { num: 5, x: 26.5, y: 34.0, desc: '[右手背] 食中指手背中段' },
      { num: 19, x: 38.0, y: 34.0, desc: '[右手背] 無名小指尺側緣' },
      // 下半圖：右手手心（大拇指在右）
      { num: 32, x: 57.5, y: 77.0, desc: '[右手心] 小魚際肌尺側' },
      { num: 4, x: 67.5, y: 77.0, desc: '[右手心] 掌心勞宮穴中' },
      { num: 15, x: 82.0, y: 77.0, desc: '[右手心] 大魚際肌拇指側' }
    ]
  },
  hand_l_dual: {
    img: 'hand_l_dual.jpeg',
    dots: [
      // 上半圖：左手手背（大拇指在右）
      { num: 8, x: 44.5, y: 32.0, desc: '[左手背] 大拇指掌指關節' },
      { num: 3, x: 32.0, y: 32.0, desc: '[左手背] 食中指手背橈側' },
      { num: 15, x: 17.5, y: 32.0, desc: '[左手背] 無名小指尺側緣' },
      { num: 15, x: 32.0, y: 44.5, desc: '[左手背] 手背近端腕橫紋' },
      // 下半圖：左手手心（大拇指在左）
      { num: 31, x: 62.5, y: 80.0, desc: '[左手心] 大魚際肌拇指側' },
      { num: 3, x: 76.5, y: 80.0, desc: '[左手心] 掌心勞宮穴中' },
      { num: 22, x: 86.5, y: 80.0, desc: '[左手心] 小魚際肌尺側' }
    ]
  },

  // === 6. 雙足底 ===
  foot_sole_r: {
    img: 'foot_sole_r.jpeg',
    dots: [
      { num: 20, x: 42.5, y: 49.0, desc: '右足底心湧泉穴' }
    ]
  },
  foot_sole_l: {
    img: 'foot_sole_l.jpeg',
    dots: [
      { num: 4, x: 43.5, y: 50.0, desc: '左足底心湧泉穴' }
    ]
  }
};

// 身體地圖跨環境相容控制器 (自動偵測主網頁 bm- 前綴或獨立測試環境)
(function() {
  let curGrp = 'head';
  let curView = 'head_front';

  function setup() {
    const groupNav = document.getElementById('bm-group-nav') || document.getElementById('group-nav');
    const viewNav = document.getElementById('bm-view-nav') || document.getElementById('view-nav');
    const selEl = document.getElementById('bm-flower-select') || document.getElementById('fl-select');
    const imgEl = document.getElementById('bm-map-img') || document.getElementById('map-img');
    const dotsBox = document.getElementById('bm-dots-container') || document.getElementById('dots-container');
    const infoEl = document.getElementById('bm-info-box') || document.getElementById('info-box');

    if (!groupNav || !viewNav || !selEl || !imgEl || !dotsBox) return;

    const isMainSite = !!document.getElementById('bm-group-nav');
    const prefix = isMainSite ? 'bm-' : '';

    // 1. 初始化 1 ~ 38 花精下拉清單
    let optHtml = '<option value="">-- 請選擇花精 (1 ~ 38 全花精) --</option>';
    window.FLOWERS_LIST.forEach(([num, zh, en]) => {
      optHtml += `<option value="${num}">${String(num).padStart(2, '0')}. ${zh} ${en}</option>`;
    });
    selEl.innerHTML = optHtml;

    // 2. 建立第一層大部位選單
    function renderGroups() {
      groupNav.innerHTML = '';
      Object.keys(window.BODY_STRUCTURE).forEach(grpKey => {
        const btn = document.createElement('button');
        btn.className = `${prefix}group-btn ${grpKey === curGrp ? 'active' : ''}`;
        btn.dataset.grp = grpKey;
        btn.textContent = window.BODY_STRUCTURE[grpKey].name;
        btn.onclick = () => {
          curGrp = grpKey;
          groupNav.querySelectorAll(`.${prefix}group-btn`).forEach(b => b.classList.toggle('active', b === btn));
          const firstView = window.BODY_STRUCTURE[grpKey].views[0].id;
          renderViews(grpKey);
          switchView(firstView);
        };
        groupNav.appendChild(btn);
      });
    }

    // 3. 建立第二層視角標籤
    function renderViews(grpKey) {
      viewNav.innerHTML = '';
      const views = window.BODY_STRUCTURE[grpKey].views;
      views.forEach(v => {
        const btn = document.createElement('button');
        btn.className = `${prefix}view-btn ${v.id === curView ? 'active' : ''}`;
        btn.dataset.view = v.id;
        btn.textContent = v.name;
        btn.onclick = () => switchView(v.id);
        viewNav.appendChild(btn);
      });
    }

    // 4. 切換具體視角並渲染
    function switchView(viewKey) {
      curView = viewKey;
      viewNav.querySelectorAll(`.${prefix}view-btn`).forEach(b => b.classList.toggle('active', b.dataset.view === viewKey));

      const vData = window.MAP_DATABASE[viewKey];
      if (!vData) return;

      imgEl.src = vData.img;
      dotsBox.innerHTML = '';

      vData.dots.forEach(d => {
        const dot = document.createElement('div');
        dot.className = `${prefix}zone-dot`;
        dot.dataset.num = d.num;
        dot.dataset.desc = d.desc;
        dot.style.left = d.x + '%';
        dot.style.top = d.y + '%';
        dot.title = `${d.num} 號：${d.desc}`;

        dot.onclick = () => {
          selEl.value = d.num;
          highlightNum(d.num);
        };
        dotsBox.appendChild(dot);
      });

      if (selEl.value) highlightNum(selEl.value);
    }

    // 5. 命中高亮與關聯提示
    function highlightNum(num) {
      const dots = dotsBox.querySelectorAll(`.${prefix}zone-dot`);
      let hitDescs = [];

      dots.forEach(d => {
        if (d.dataset.num === String(num)) {
          d.classList.add('highlight');
          hitDescs.push(d.dataset.desc);
        } else {
          d.classList.remove('highlight');
        }
      });

      if (!num) {
        if (infoEl) infoEl.innerHTML = '請選擇花精或點擊圖中的圓圈熱區進行定位。';
        return;
      }

      const fl = window.FLOWERS_LIST.find(f => f[0] === Number(num));
      const flTitle = fl ? `【${fl[0]}號 ${fl[1]} ${fl[2]}】` : `【${num} 號花精】`;

      const locs = [];
      Object.keys(window.BODY_STRUCTURE).forEach(gKey => {
        window.BODY_STRUCTURE[gKey].views.forEach(v => {
          const vData = window.MAP_DATABASE[v.id];
          if (vData && vData.dots.some(d => d.num === Number(num))) {
            locs.push(`${window.BODY_STRUCTURE[gKey].name}-${v.name}`);
          }
        });
      });

      let msg = `<b>${flTitle}</b><br>`;
      if (hitDescs.length) {
        msg += `📍 <b>當前視角亮燈部位：</b><br>• ` + hitDescs.join('<br>• ');
      } else {
        msg += `⚠️ 此視角無該花精反射區。`;
      }

      if (locs.length) {
        msg += `<br><small style="color:#666;margin-top:6px;display:block;">🔎 本花精亦分佈於：${locs.join('、')}</small>`;
      }
      if (infoEl) infoEl.innerHTML = msg;
    }

    selEl.onchange = e => highlightNum(e.target.value);

    // 暴露全域跳轉 API
    window.bmHighlightNum = highlightNum;
    window.initBodyMapEngine = setup;

    // 啟動首頁渲染
    renderGroups();
    renderViews(curGrp);
    switchView(curView);
  }

  // 自動依載入時機啟動
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
