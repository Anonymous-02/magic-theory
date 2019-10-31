/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Adept': '熟练',
	'adept': '熟练',
    'advise notables': '通知著名人士',
    'abstraction': '抽象',
    'Clean Stables': '清理马厩',
    'Clear': '清理',
    'close': '关闭',
    'combat': '战斗',
    'Craft Gem': '工艺宝石',
    'craft rune': '工艺符文',
    'dark mode': '黑暗模式',
    'Deep Pockets': '深口袋',
    'Sell Gem': '出售宝石',
    'Sell Herbs': '出售草药',
    'Sell Scroll': '出售卷轴',
    'Tomes': '著作',
	'max Tomes': '著作上限',
    'rest': '休息',
    'reset': '重置',
    'resting': '休息中',
    'pouch': '小袋',
    'player': '玩家',
    'save': '保存',
    'load': '加载',
    'LOADING DATA...': '加载数据...',
    'main': '主界面',
    'max gold': '黄金上限',
    'manas': '法力',
    'get save': '下载存档',
    'event': '事件',
    '[Drop Save]': '[读档]',
    'souls': '灵魂',
    'max souls': '灵魂上限',
    'Stop All': '全部停止',
    'study': '学习',
    'stamina': '耐力',
    'gems': '宝石原石',
    'unlock': '解锁',
    'gold': '黄金',
    'loot': '掠夺',
    'working from home.': '在家工作。',
    'water gem': '水之宝石',
    'wizard': '巫师',
    'wood pipe': '木管',
    'A tattered scroll': '一个破烂的卷轴',
    'air gem': '空气宝石',
    'air runes': '空气符文',
    'airaffinity': '空气亲和力',
	'airsource': '空气源泉',
	'air': '气',
	'max air': '气上限',
    'alchemist': '炼金术士',
    'alembic': '蒸馏器',
    'alkahest': '剧情',
    'almagest': '天文学大成',
    'fire gem': '火之宝石',
    'fire sign': '火象星座',
    'grind bones': '研磨骨头',
    'grind': '研磨',
    'name': '名字',
    'title': '头衔',
    'level': '等级',
    'life': '生命值',
    'rest life': '生命值恢复',
	'max life': '生命上限',
    'light gem': '光之宝石',
    'max light gem': '光之宝石上限',
    'mage': '法师',
    'exp': '经验值',
    'skill points': '技能点',
    'luck': '幸运值',
    'defense': '防御',
    'dodge': '闪避',
    'damage bonus': '伤害加成',
    'hit bonus': '命中加成',
    'speed': '速度',
    'weapon': '武器',
    'fists': '拳头',
    'resists': '抵抗',
    'distance': '距离',
    'mount': '坐骑',
    'None': '无',
    'purse': '钱包',
    'prism': '棱镜',
    'Buy scroll': '购买卷轴',
    'Purchase Gem': '购买宝石',
    'Read Palms': '看手相',
    'research': '研究',
    'rune stones': '符文石',
    'max rune stones': '符文石上限',
    'Scribe Scroll': '抄写卷轴',
    'You buy a strange scroll from a travelling peddlar. If you could only decipher the cryptic symbols.': '你从一个流动小贩那里买了一幅奇怪的画卷。但愿你能破译这些神秘的符号。',
    'Choose': '选择',
    'class': '课程',
	'job, class': '职业，课程',
    'hp': '生命',
    'scrolls': '卷轴',
    'sell': '出售',
    'shadow gem': '暗影宝石',
    'max shadow gem': '暗影宝石上限',
    'Stop': '停止',
    'studying scrolls': '学习卷轴',
    'immunities': '抵抗力',
    'pouch (': '小袋（',
    'upgrades': '升级',
    'travel': '旅行',
    'travel map': '旅行地图',
    'travel pack': '旅行包',
    'travel tent': '旅行帐篷',
    'Treat Ailments': '治疗疾病',
    'velvet bag': '绒布袋',
    'effects': '效果',
    'End Apprenticeship': '结束学徒制',
    'Energy Transfusion': '能量输入',
    'expanded cellars': '扩大酒窖',
    'Apprenticeship': '学徒制',
    'expedient retreat': '权宜之计撤退',
    'animal companion': '动物伴侣',
    'study Improved': '学习提升',
    'sublimate lore': '升华知识',
    'Study arcane scrolls': '研究奥术卷轴',
    'Slay Master': '杀戮大师',
    'cost': '成本',
    'Titles': '标题',
    'imbue gem (air': '灌输宝石 (空气',
    'Imbue gem (arcane': '灌输宝石 (奥术',
    'Imbue Gem (Fire': '灌输宝石 (火',
    'imbue gem (light': '灌输宝石 (光',
    'Imbue gem (shadow': '灌输宝石 (暗影',
    'Imbue gem (spirit': '灌输宝石 (精神',
    'Imbue Gem (Water': '灌输宝石 (水',
    'Imbue lifegem': '灌输自然宝石',
    'imbue stone': '灌输土坷垃',
    'infused body': '注入体内',
    'inner fire': '内部火',
    'inner light': '内部光',
    'Hold Seance': '举行集会',
    'holy candle': '圣烛',
    'home': '家',
    'After paying a small fee, you became apprenticed to a local wizard.': '支付少量费用后，您就成了当地巫师的学徒。',
    'animal handling': '驯养动物',
    'appentice to a notable wizard': '引诱到一个著名的巫师',
    'apple bobbing': '咬苹果',
    'apprentice': '学徒',
    'Apprentice': '学徒',
    'arcana': '奥秘',
    'arcane': '奥术',
    'arcane body': '奥术身体',
    'arcane gem': '奥术宝石',
    'max arcane gem': '奥术宝石上限',
    'arcane orb': '奥术球',
    'arcane thievery': '奥术窃取',
    'arcane trickster': '奥术魔法师',
    'archlock': '弓锁',
    'armillary sphere': '浑天仪',
    'auto-save': '自动保存',
    'autonomic mending': '自主修复',
    'bag of holding': '储存宝袋',
    'bag of tricks': '魔法袋',
    'basement': '地下室',
    'battle mage': '战斗法师',
    'Become an apprentice.': '成为一个学徒。',
    'rune pouch': '符文袋',
    'Run Errands': '跑腿',
	'running errands': '正在跑腿',
    'Do Chores': '做家务',
    'filch pumpkins': '窃取南瓜',
    'cot': '婴儿床',
    'Done': '完成',
    'earth gem': '土之宝石',
    'equip': '装备',
    'feet': '脚',
    'Find': '寻找',
    'Owned': '已拥有',
    'need': '需要',
    'Offer Services': '提供服务',
    'old nag': '老唠叨',
    'poison affinity': '毒性亲和力',
    'progress cost': '进度成本',
    'poison veins': '毒脉',
    'skills': '技能',
    'Promotion': '晋升',
    'Skill Points': '技能点',
    'slot: rest': '插槽：休息',
    'bones': '骨头',
    'max bones': '骨头上限',
    'chant': '歌唱',
	'\n		chant': '歌唱',
	'chanting': '歌唱中',
    'cauldron': '坩埚',
    'Buy': '购买',
    'chest': '胸部',
    'Compile Tome': '编译巨著',
    'crystal mind': '水晶心灵',
    'crystal ball': '水晶球',
    'doomsayer': '末日审判者',
    'Furnishing': '家具',
    'Sell': '出售',
    'Space': '空间',
    'Really brightens up the place.': '确实使这个地方变亮了。',
    'Perfect for robins.': '完美的知更鸟。',
    'potted milkweed': '盆栽的乳草',
    'Wishing wells': '许愿井',
    'witch\'s sabbat': '女巫的安息日',
    'trap soul': '灵魂陷阱',
    'workbench': '工作台',
    'water sign': '水象星座',
    'earth sign': '土象星座',
    'wind sign': '风象星座',
    'Mortar and Pestle': '研钵和研杵',
    'Magic Horseshoes': '魔法马蹄铁',
    'Magic circle': '魔法圈',
    'magic circle': '魔法圈',
    'birdcage': '鸟笼',
    'blood gem': '血之宝石',
    'blood mage': '血法师',
    'lvl': '等级',
    'magic heist': '魔法抢劫',
    'mana': '法力',
    'lore': '知识',
    'Prologue': '序言',
    'An idle waif with no prospects to speak of...': '你是一个毫无前途，而又游手好闲的流浪汉...',
    'Keep your money safe.': '保管好你的钱。',
    'seems a tad pricey for a bag.': '对于一个包来说，它似乎有点贵。',
    'it\'s stable employment': '这是项稳定的工作',
    'Gold Coins': '金币',
    'Scroll of arcane lore': '记载着奥术知识的卷轴',
    'Research into the Arcane': '奥术研究',
    'locks': '锁定',
    'max research': '研究上限',
    'standard apprentice work.': '标准的学徒工作。',
    'Do Chores Improved': '做家务奖励提升',
    'satchel': '书包',
    'Decent': '正直的',
    'You are turning out to be an upstanding spellcaster.': '你正在变成一名正直的施法者',
    'steal pumpkins from nearby homes': '从附近的人家中偷点南瓜',
    'pumpkins': '南瓜',
    'max pumpkins': '南瓜上限',
    'Carry more scrolls.': '能携带更多卷轴。',
    'max scrolls': '卷轴上限',
    'falconer': '训鹰人',
    'Tend your master\'s owls and falcons.': '照顾导师的猫头鹰及猎鹰。',
    'herbalist': '草药师',
    'herbalism': '草药学',
    'herbalism exp': '草药学经验',
    'Gather herbs for your master\'s potions and alchemy.': '采集草药作为材料来满足导师在药剂和炼金术上的需要。',
    'carve lantern': '刻南瓜灯',
    'smash pumpkin': '打碎南瓜',
    'pumpkin seeds': '南瓜种子',
    'pumpkin carriage': '南瓜马车',
    'jack o\' lantern': '杰克南瓜',
    'max jack o\' lantern': '杰克南瓜上限',
    'seed sack': '种子袋',
    'max pumpkin seeds': '南瓜种子上限',
    'you need to have a word with the sack-maker\'s guild.': '你需要和制袋协会谈谈。',
    'Unlock': '解锁',
    'nothing is more important to a wizard than the depth of their lore.': '对于一个巫师来说，一切都不如知识的深度重要。',
    'If your max gold is not enough to buy a new home, free space for more chests.': '如果你达到黄金上限都买不起新家，腾出点地方买更多的箱子吧。',
    'small chest': '小箱子',
    'Slightly better than sleeping on the floor': '比睡在地板上稍微好点',
    'A small wooden chest.': '一个小木箱。',
    'Switch': '更换',
    'floor space': '房间面积',
    'A small bench for arts and crafts. Necessary for many wizard studies.': '一个用来做各种工艺品的小工作台。许多巫师研究都需要它。',
    'alcove': '小角落',
    'A small corner beneath the stairs of your Master\'s domicile.': '你导师住处的楼梯下方的小角落',
    'max floor space': '最大房间面积',
    'goodbye hayloft.': '再见了，干草棚。',
    'Moving In': '搬家',
    'After taking your savings, your new master grants you a small nook under the stairs.': '在拿走你的积蓄后，你的新导师让你住在楼梯下的角落里。',
    'max inventory': '库存上限',
    'iron chest': '铁箱子',
    'Run Errands Improved': '跑腿奖励提升',
    'crafting': '制造',
    'an absolutely vital skill for a wizard to craft arcane items.': '对巫师来说，拥有制造奥术物品的能力是极其重要的。',
    'workspace': '工作区',
    'rest stamina': '耐力恢复',
    'rest fire': '火恢复',
    'rest manas': '法力恢复',
    'garden': '花园',
    'languages': '语言',
    'max arcana': '奥秘上限',
    'wax candle': '蜡烛',
	'candle': '火烛',
	'max candle': '火烛上限',
    'A tiny glowing candle.': '一根小小的发光的蜡烛。',
    'You no take candle!': '你不能拿走我的蜡烛！',
    'restless nights': '不眠之夜',
    'continue working even while idle': '即使有空闲时间也要不停工作',
    'a good apprentice knows there are 30 hours to the day.': '优秀的学徒明白，一天有30个小时。',
    'focus': '专注',
	'focus Improved': '专注已升级',
    'quicken your skills with magic energy.': '用魔法来加速增强你的能力。',
    'Focus': '专注',
    'Profound mystical knowledge': '深奥的神秘知识',
    'scroll rack': '卷轴架',
    'train lore rate': '知识训练速度',
    'books and scrolls are written in many obscure languages. learn as many as possible.': '许多书籍和卷轴都是用各种晦涩难懂的语言书写的。尽可能多的学习各种语言吧。',
    'bind codex': '装订成册',
    'Codices': '手册',
    'codices': '手册',
	'max Codices': '手册上限',
    'Codex of arcane lore': '关于奥术知识的手册',
    'internalize a vast amount of existing knowledge.': '将大量的现有知识吸收成为你的一部分',
    'latticed shelves for easy scroll storage.': '架子上有一个个格子，便于储存卷轴',
    'bookshelf': '书架',
    'A single bookshelf for your books.': '一个专门来放你的书的书架。',
    'scribe': '抄写员',
    'Become your master\'s personal scribe.': '成为你导师的私人抄写员。',
    'raw magical energy': '原始的魔法能量',
    'Bind Spellbook': '装订魔法书',
	'binding spells': '装订魔法书',
    'The portal to true magic.': '通往真正魔法之门。',
    'prestidigitation': '变戏法',
    'Why study when you can perform parlor tricks for coin?': '既然你能通过表演一些小把戏来赚钱，那你为什么要学习呢？',
    'spellbook': '魔法书',
    'lore exp': '知识经验值',
    'Book Of Spells': '魔法书',
    'Under your master\'s critical eye, you compile your very own book of spells.': '在导师挑剔的目光下，你完成了自己的魔法书。',
    'spells': '法术',
    'loom': '织布机',
    'Treasure chest.': '宝箱。',
    'unlocks the art of weaving': '开启编织的艺术',
    'duration': '持续时间',
    'Learn': '学习',
    'lines of arcane energy damage all enemies.': '通过奥术射线攻击所有敌人。',
    'prismatic spray': '棱柱喷射',
    'minor mana': '次级法力',
    'magic missile': '魔法飞弹',
    'lesser mana': '较少法力',
    'weaving': '编织',
    'max crafting': '制造技能上限',
    'Cast': '施放',
    'Memorize': '记忆',
    'Memorized': '已记忆',
    'Level': '等级',
    'Remove': '移除',
    'Alternate Wizard classes of this tier will be locked.': '这一层的其它巫师课程将被锁定。',
    'Confirm': '确认',
    'Cancel': '取消',
    'In return for your new services, your master grants you a small allowance for your studies. The position does require of course, some initial fees...': '作为对你新服务的回报，你的主人会给你一小笔钱去学习。当然，这个职位需要一些初始费用……',
    'Leaky Cellar': '漏水的地窖',
    'adventure': '探险',
    'basin': '水池',
    'Basin of water.': '一池水',
    'water': '水',
    'max water': '水上限',
    'crafting table': '制造桌',
    'Wide table for crafting projects.': '用来制造东西的宽桌。',
    'train crafting rate': '制造训练速度',
    'pedestal': '读书台',
    'A pedestal for reading magic tomes. Improves study habits.': '一个能用来读魔法书的台子。提升你学习的兴趣。',
    'study research': '学习获得的研究',
    'writing desk': '写字台',
    'A desk for working and scribing.': '供工作和书写的桌子.',
    'max languages': '语言等级上限',
    'anatomy': '解剖学',
    'spirit lore': '精神知识',
	'max spirit lore': '精神知识上限',
    'wood dagger': '木质匕首',
    'leather shortsword': '皮革短剑',
    'the study of physical form.': '对物理形态的研究。',
    'leather jerkin': '皮革上衣',
    'Title Earned: Master Of The Cellar': '头衔获得：酒窖之主',
    'Master Of The Cellar': '酒窖之主',
    'mule': '骡子',
    'herbs': '草药',
    'map stars': '地图星',
    'max nature': '自然上限',
    'max trickery': '诡计上限',
    'heart of stone': '石之心',
    'right': '右',
    'left': '左',
    'ring': '戒指',
    'activity exp': '当前行动经验',
    'max lore': '知识技能上限',
    'train herbalism rate': '草药学训练速度',
    'train alchemy rate': '炼金术训练速度',
    'siver\'s gate': '西弗门',
    'Speak to Birds': '和鸟说话',
    'third eye': '第三只眼',
    'Unequip': '卸下',
    'Use': '使用',
    'Sell All': '全部出售',
    'apple🎃 (': '苹果🎃 (',
    'apple': '苹果',
    'back': '背部',
    'bodies': '尸体',
    'max bodies': '尸体上限',
    'bone dust': '骨粉',
    'Coagulate Gem': '凝结宝石',
    'cobwebs': '蜘蛛网',
    'max cobwebs': '蜘蛛网上限',
    'coin tricks': '硬币戏法',
    'max gem': '成品宝石上限',
    'max gems': '宝石原石上限',
    'max herbs': '草药上限',
    'neophyte': '初学者',
    'herb pouch': '草药袋',
    'three-sided coin': '三面硬币',
    'compile bestiary': '编译动物寓言集',
    'compile witchhammer': '编译女巫锤',
    'cooking pot': '蒸煮锅',
    'tenwick\'s travel map': '滕维克旅游地图',
    'trick & treat': '款待&捣蛋',
    'unseen scribe': '无形抄写员',
    'unholy specimens': '邪恶的标本',
    'gather herbs': '收集草药',
    'gem box': '宝石盒',
    'max gem box': '宝石盒上限',
    'nature': '自然',
    'nature gem': '自然宝石',
    'oracle': '神谕',
    'oracular insight': '神谕的洞察力',
    'alchemy': '炼金术',
    'nature lore': '自然知识',
	'max nature lore': '自然知识上限',
	'nature lore exp': '自然知识经验',
    'trickery': '诡计',
    'water runes': '水符文',
    'water lore': '水流知识',
    'wooden bed': '木床',
    'creeping vine': '匍匐藤蔓',
    'craft phylactory': '工艺植物学',
    'watersource': '水资源',
    'furniture': '家具',
    'funerary rites': '丧葬仪式',
    'trickery exp': '诡计经验',
    'The final step on the twisting stairwell of apprenticeship.': '学徒制如同扭曲盘旋直上的阶梯，你将踏上最后一阶。',
    'who prices these bags?!': '谁给这些袋子定价？',
    'Why does Master charge so many fees?': '师父为何要收取这么多费用？',
    'dissection': '解剖',
    'max dissection': '解剖上限',
    'train dissection rate': '解剖训练速度',
    'lillit\'s spring': '莉莉特之泉',
    'human bones.': '人类的骨头。',
    'a mount that doesn\'t require much training.': '一个不需要太多训练的坐骑。',
    'tradition tells of a spring with enchanted waters. investigations might prove revealing.': '传说有一泓泉水被施与魔法。调查可能会揭示其中的真相。',
    'Pillage Graves': '盗墓',
    'embalming': '尸体保存',
    'max embalming': '尸体保存上限',
    'train embalming rate': '尸体保存训练速度',
    'embalming exp': '尸体保存经验',
    'shadowlore': '暗影学识',
    'train shadowlore rate': '暗影学识训练速度',
    'Dig up old graves for magical reagents. These guys are like 300 years old, they won\'t mind.': '挖开古墓来获取魔法材料。这些家伙看起来死了超过三百年了，他们是不会介意的。',
    'it\'s for a good cause.': '这么做是有正当理由的。',
    'virtue': '道德',
    'You sense something buried nearby.': '你感觉到附近埋着什么东西。',
    'hidden cache': '隐藏地点',
    'mana tree': '魔法树',
    'a tree by a magic spring exhibits surprising qualities': '魔法泉旁的一棵树展现出惊人的品质',
    'mystic waters': '神秘的水',
    'water suffused with enchantments': '水中含有魔法',
    'befuddlement': '迷惑',
    'placid grove': '宁静的树林',
    'only the rare glimpse of wildlife breaks the stillness of the grove.': '只有罕见的野生动物一瞥打破了小树林的寂静',
    'every budding mage needs to start somewhere.': '每个初露头角的魔法师都要从某处开始。',
    'bone pendant': '骨质吊坠',
    'wood greaves': '木制护胫',
    'robe': '长袍',
    'amulet': '护身符',
    'sunny field': '阳光旷野',
    'musty library': '发霉的图书馆',
    'dissect cadaver': '解剖尸体',
    'dissect a body for components. only the best pieces will serve.': '解剖身体来获得其中的一部分。只有最好的那部分才能留下来。',
    'skull': '头骨',
    'shadow': '暗影',
    'Various fine gemstones.': '各种精美的宝石。',
    'grind bones into dust': '把骨头磨成灰',
    'a good apprentice spends all their free time in the library. after doing chores, of course.': '一个优秀的学徒会把所有的空闲时间都花在图书馆里。当然，是在做完家务之后。',
    'occult tapestry': '神秘的挂毯',
    'a tapestry with strange, hidden meanings': '一幅有着奇怪的、隐藏深意的挂毯',
    'workbook': '练习书',
    'a book on the practical applications of magic': '一本关于魔法的实际应用的书',
    'magical primer': '魔法读本',
    'an introduction to magical theory.': '有关魔法理论的导论。',
    'dusty chest': '满是灰尘的箱子',
    'A battered, wooden chest.': '一个破旧的木箱。',
    'Goblins, Goblins!': '哥布林，哥布林！',
    'Rumors hint at a camp of goblins in the vicinity. As an aspiring wizard, convention dictates you test your mettle on their lives.': '谣传周边有哥布林的营地。由于你是一名积极的巫师，协会命令你去干掉他们，来证明自己的勇气，',
    'goblin camp': '哥布林营地',
    'arag heights': '阿拉戈高地',
    'barren mountains over arazor': '阿拉佐上方的荒山',
    'eryl eyot': '伊瑞尔之岛',
    'the small and tranquil island is inhabited by an old hermit named thyffr': '这个宁静的小岛上住着一位年老的隐士，他的名字叫瑟夫',
    'Nestled in the fog of the midlands, the village of Hallomar holds a yearly celebration in its pumpkin patch.': '万圣村坐落在中部地区的迷雾当中，每年都会在南瓜地中举办庆祝活动。',
    'hallomar': '万圣村',
    'concentration': '集中',
    'keep your mind and nerves sharp under pressure.': '在压力下保持头脑清醒，神经敏锐。',
    'just don\'t wander too far from the village.': '只是别在离村子太远的地方徘徊。',
    'stony hills': '乱石丘陵',
    'composure': '镇静',
    'remain unfazed under strain.': '在压力下保持镇定。',
    'treffil woods': '崔菲尔之林',
    'these enchanted woods are not particularly dangerous.': '这些魔法森林并没有那么危险。',
    'the pesky creatures are everywhere.': '这种令人厌恶的生物到处都是。',
    'foggy dale': '起雾的山谷',
    'The fog here is so thick, you can\'t see your own hands.': '这里的雾太大了，你连自己的手都看不见。',
    'outright confusion in your studies': '你的研究完全混乱',
    'unease': '不安',
    'a general feeling of unwell': '一种不舒服的感觉',
    'weariness': '疲倦',
    'the fatigue of mental strain': '精神紧张的疲劳',
    'frustration': '挫败感',
    'rising book-throwing urges': '有种把书扔出去的冲动',
    'madness': '疯狂',
    'warping of your mind under magical influences': '在魔法的影响下你的思想逐渐扭曲',
    'pumpkin patch': '南瓜地',
    'In Hallomar\'s autumn fields grow some of the largest pumpkins to be found.': '秋天的万圣村，田地中生长着巨大的南瓜，这种南瓜是别处没有的。',
    'LOOT': '掠夺',
    'cobwebs🎃, pumpkins': '蜘蛛网🎃, 南瓜',
    'haunted glade': '闹鬼的空地',
    'Trees here have an eerie aspect': '这里的树外形非常怪异',
    'Exploring...': '探索中...',
    'starry night': '繁星之夜',
    'a clear sky affords an endless view of the firmament.': '透过晴朗的天空可以看到无尽的苍穹。',
    'Title Earned: Harvest Reveller': '获取头衔：：收割者',
    'graveyard': '墓地',
    'hestia\'s cottage': '赫斯提的小屋',
    'Deep in Thangmor forest, the great witch Hestia keeps a small, secluded cabin. On rare occasions she even takes visitors.': '在唐穆尔森林深处，伟大的女巫赫斯提有一个与世隔绝的小木屋。在极少数情况下，她甚至会接待客人。',
    'The graveyard beside Hallomar is nearly abandoned now. Low murmurs and eerie croakings haunt the autumn nights.': '万圣村旁的墓地现在已经快荒废了。秋天的夜晚，这里萦绕着轻声的低语和怪异的叫声。',
    'explore treffil wood': '探索崔菲尔之林',
    'the woods posses many features of interest to the magical scholar.': '这片树林拥有者许多特性，因此吸引了许多魔法学者',
    'allies': '盟友',
    'enemies': '敌人',
    'virtue : evil': '道德:邪恶',
    'evil': '邪恶',
    'stress': '压力',
    'compact mode': '紧凑模式',
    '\r\n			Next Improvement': '下一次提升',
    'Hide Maxed': '隐藏已满',
    'apprentice to a notable wizard': '著名巫师的学徒',
    'garden': '花园',
    'pets': '宠物',
    'bed': '床',
    'max': '最大',
    'max: ∞': '最大：∞',
    'purchase cost': '购买费用',
    'linguisticizing': '语言化',
    'reading lore': '阅读知识',
	'\n\n		progress': '进度',
    'damage': '伤害',
    'dot': '标记',
    'spiritsource': '精神源泉',
    'spirit': '精神',
	'max spirit': '精神上限',
    'school': '学院派',	//游戏里应该是指水、火、气、光等这些魔法分类
    'spirit gem': '精神宝石',
    'max spirit gem': '精神宝石上限',
    'Enter': '进入',
    'Retreat': '撤退',
    'astronomy': '天文学',
    'enchanting': '附魔',
    'max enchanting': '附魔上限',
    'train enchanting rate': '附魔训练速度',
    'enchanting table': '附魔桌',
    'divination': '占卜',
    'lumenology': '荧光知识',
    'mysticism': '神秘主义',
    'potions': '药剂学',
    'pyromancy': '火焰知识',
    'a compilation of gloomy dwarven drinking songs': '令人沮丧的矮人诗酒歌集',
    'dwarven dirges': '矮人挽歌',
    'a weighty tome of knowledge.': '一个沉重的知识之书。',
    'breviary': '赞美经',
    'train languages rate': '语言的训练速度',
    'lightsource': '光明源泉',
    'light': '光',
    'max light': '光上限',
    'max mana': '法力上限',
    'max alchemy': '炼金术上限',
    'firesource': '火焰源泉',
    'fire': '火',
    'fireplace': '壁炉',
    'A cozy place for cooking food and brewing potions.': '一个舒适的地方，用于烹饪食物和酿造药水。',
	'earthsource': '土地源泉',
    'starsource': '星星源泉',
    'shadowsource': '暗影源泉',
    'potsource': '药剂源泉',
    'dream catcher': '梦境捕捉',
    'fine crucible': '细坩埚',
    'max fire': '火上限',
    'transfusions': '输血',
    'urn': '骨坛',
    'sextant': '六分仪',
    'reliquary': '宝库',
    'A cramped cage for keeping tiny test subjects.': '狭窄的笼子，用于存放微小的测试对象。',
    'rusty cage': '生锈的笼子',
    'terrarium': '玻璃罩',
    'a glass enclosure of dirt, insects, and wormy things.': '灰尘，昆虫和蠕虫的玻璃罩。',
    'earth': '地',
    'air lore': '大气知识',
    'max air lore': '大气知识上限',
    'max herbalism': '草药学上限',
    'max pyromancy': '火焰知识上限',
    'max shadowlore': '暗影知识上限',
    'brass candelabra': '黄铜烛台',
    'the knowledge of what has come before reveals what is yet possible.': '对过去发生的事情的认识可以预测将要发生的事情',
    'history': '历史',
    'Pace your home as you comtemplate the arcane.': '在家中踱步思索奥术',
    'pace': '踱步',
    'pace Improved': '踱步提升',
    'pacing': '踱步中',
    'lemurian lexicon': '狐猴词典',
    'interpret the strange whisperings of spirits': '解释精怪们的耳语',
    'sylvan syllabary': '树精音节',
    'card deck': '卡座',
    'ceaseless bellows': '不竭风笛',
    'windchime': '风铃',
    'crystal solidifier': '晶体固化剂',
    'tend animals': '照料动物',
    'occult endurance': '神秘耐力',
    'Spin Gold': '点石成金',
    'spinning': '正在戳',
    'starcharts': '星图',
    'animal handling exp': '驯养动物经验',
    'max animal handling': '驯养动物上限',
    'max astronomy': '天文学上限',
    'max divination': '占卜上限',
    'max starcharts': '星图上限',
    'train astronomy rate': '天文学训练速度',
    'train divination rate': '占卜训练速度',
    'minerology': '挖地知识',
    'max earth': '土上限',
    'summoning': '召唤',
    'scrying': '水晶球占卜',
	'max summoning': '召唤上限',
    'train summoning rate': '召唤训练速度',
    'max stress': '压力上限',
    'unending tome': '挖坑不填',
    'some books have no end': '有些书写着写着就太监了',
    'max water lore': '水流知识上限',
    'bottomless pitcher': '无底瓶子',
    'celestial globe': '天象仪',
    'cellar': '地窖',
    'chirography': '书法',
    'wateraffinity': '水性亲和',
    'water affinity': '水 性亲和',
    'bestiary': '兽人传说',
    'compendium of magical creatures': '魔法生物纲要',
    'a manual of the human body': '人体手册',
    'coporis fabrica': '人体构造',
	'max anatomy': '解剖学上限',
    'train anatomy rate': '解剖学训练速度',
    'unholy candle': '邪恶火烛',
    'truesight': '真视',
    'max shadow': '暗影上限',
    'spellcraft': '法术学识',
    'max spellcraft': '法术学识上限',
    'max scrying': '水晶球占卜上限',
    'max minerology': '挖地知识上限',
    'chronomancy': '时间学识',
    'train chronomancy rate': '时间学识训练速度',
    'max chronomancy': '时间学识上限',
    'charm': '魅惑',
    'conjuration': '召唤学',
    'max conjuration': '召唤学上限',
    'demonology': '恶魔学',
    'max demonology': '恶魔学上限',
    'max lumenology': '荧光知识上限',
    'magic beasts': '魔法生物学',
    'max magic beasts': '魔法生物学上限',
    'planes lore': '飞行知识',
    'max planes lore': '飞行知识上限',
    'max stamina': '耐力上限',
    'timesplit': '时间分割',
    'tempus': '时源',
    'max tempus': '时源上限',
    'void': '虚空',
    'max void': '虚空上限',
    'max activity': '行动上限',
    'pendulum': '钟摆',
    'timesource': '时间源泉',
    'train demonology rate': '恶魔学训练速度',
    'train potions rate': '药剂学训练速度',
    'max potions': '药剂学上限',
    'train scrying rate': '水晶球占卜训练速度',
    'train spellcraft rate': '法术学识训练速度',
    'max mysticism': '神秘主义上限',
    'max reanimation': '复活术上限',
    'reanimation': '复活术',
    'train reanimation rate': '复活术训练速度',
    'gem': '成品宝石',
    'max bone dust': '骨粉上限',
    'demonic dictionary': '恶魔字典',
    'fazbit\'s fixations': '法兹比的凝视',
    'reveler\'s rite': '适时狂欢',
    'scribe a copy the seminal text in practical alchemy': '抄写一份关于实用炼金术的开创性文本的副本',
    'corivar called fazbit a mad crank. then came begging for his manuals.': '有的人说法兹比是个疯子，然后乞求他的手稿',
    'Dragon Tongue': '龙舌',
    'celerity': '疾速',
    'demonic pact': '恶魔契约',
    'earth soul': '大地之魂',
    'earthaffinity': '土地亲和',
    'evanescence': '消逝',
    'fireaffinity': '火焰亲和',
    'fatalist': '宿命论',
    'swirling globe': '旋转球体',
    'metronome': '节拍器',
    'mendicant': '乞讨',
    'Sacrifice luxury for higher attainments.': '放弃奢华以获得更高的成就感。',
    'long-stem pipe': '长杆管',
    'ghost chains': '鬼链',
    'summon familiar': '召唤恶魔生物',
    'forewarned': '征兆',
    'casgair\'s conjured canopy': '卡斯的魔法斗篷',
    'heresiarch': '异端领袖',
    'ghost compiler': '鬼魂编译员',
    'max ghost compiler': '鬼魂编译员上限',
    'max unseen scribe': '无形抄写员上限',
    'greater arcane body': '巨大奥术身体',
    'gryffon': '格里芬',
    'workshop': '车间',
    'void lore': '虚空知识',
    'max void lore': '虚空知识上限',
    'minions': '奴隶',
    'max minions': '奴隶上限',
    'minions maxAllies': '最大奴隶上阵数',
    'max Codices research': '手册的研究上限',
    'fingers': '手指',
    'neck': '颈部',
    'shins': '腿部',
    'waist': '腰',
    'hands': '手',
    'head': '头',
    'murder': '谋杀',
    'blood siphon': '吸血',
    'vile experiment': '卑鄙试验',
	'dissection exp': '解剖经验',
	'divination exp': '占卜经验',
    'charms': '魅惑',
    'max charms': '魅惑上限',
    'train charms rate': '魅惑训练速度',
    'runic lore': '符文学',
    'outdoors': '户外',
    'prison': '监狱',
    'armssource': '武器来源',
    'stables': '马厩',
	'enchantsource': '附魔源泉',
    'ziggurat': '尖塔',
    'weapon rack': '武器架',
    'warding lanterns': '灯笼守卫',
    'vivarium': '活体容器',
    'vault': '拱顶',
    'vat': '缸',
    'codex annihilus': '食书虫',
    'darkmagician': '黑暗魔法师',
    'seer': '先知',
    'enchanter': '附魔师',
    'eat children': '吃小孩',
    'commune': '密谈',
    'bone collector': '骨头收集器',
    'magic skull': '魔法头骨',
    'necromancy': '死灵法术',
    'max necromancy': '死灵法术上限',
    'train necromancy rate': '死灵法术训练速度',
    'necromancer': '死灵法师',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '\n			Train': '训练',
    '\n			Stop': '停止',
    'No space remaining. Sell items or find a new Home.\n		': '没有剩余空间。 出售物品或找到新家。',
    '\n		Roll-over Item and hold {Shift} + {Number} to assign quickslot.': '滚动物品并按住{Shift} + {数字}可以分配快速插槽。',
    '\n		Press {Number} again to use quickslot Item.\n	': '再次按{数字}以使用快速插槽物品。',
    '\n		rest': '休息',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
	
	'Upgrade Unlocked: ': '升级解锁：',
	'Action Unlocked: ': '行动解锁：',
	'Resource Unlocked: ': '资源解锁：',
	'Class Unlocked: ': '课程解锁：',
	'Unlocked: ': '解锁：',
	'Locale Unlocked: ': '地点解锁：',
	'Furniture Unlocked: ': '家具解锁：',
	'Skill Unlocked: ': '技能解锁：',
	'Home Unlocked: ': '住房解锁：',
	'Dungeon Unlocked: ': '地牢解锁：',
	'Potion Unlocked: ': '药剂解锁：',
	'slot: ': '插槽：',
	'kind: ': '类型：',
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
	
	'🎃': '🎃',
	"🎃:": "🎃：",
	
	', furniture': '，家具',
	', spiritsource': '，精神源泉',
	', naturesource': '，自然源泉',
	', pets': '，宠物',
	', shadowsource': '，暗影源泉',
	', airsource': '，空气源泉',
	', enchantsource': '，附魔源泉',
	', home': '，家',
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
	/:?\s*\-?\d+(\.\d+)?\s*~\s*\d+(\.\d+)?/,  // : 1.5 ~ 2.5
	/:?\s*\d+\s*\/\s*\d+\s*/,	// : 13 / 14
	/:?\s*\d+(\.\d+)?,\s\+?\d+(\.\d+)?/, // : 0.1, +1
    /(🎃)?:?\s*\(?[+\-]?x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
	/:?\s*\d+%\s*/, //12%
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    //[/^Usages: (\d+)\/$/, '用途：$1\/'],
    //[/^workers: (\d+)\/$/, '工人：$1\/'],

]);
