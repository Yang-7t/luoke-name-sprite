// ===== 精灵数据库 - 25只来自《洛克王国世界》的真实精灵 =====
var SPRITES = [
    {
        id: 1,
        name: '迪莫',
        element: 'light',
        elementCN: '光系',
        emoji: '⭐',
        desc: '洛克王国最闪耀的明星精灵！拥有纯净的光之力量，是所有小洛克梦想中的第一伙伴。',
        image: 'images/sprites/dimo.png',
    },
    {
        id: 2,
        name: '火花',
        element: 'fire',
        elementCN: '火系',
        emoji: '🔥',
        desc: '热情活泼的火系初始精灵，尾巴上跳跃着永不熄灭的小火苗，是冒险旅途中最温暖的陪伴。',
        image: 'images/sprites/huohua.png',
    },
    {
        id: 3,
        name: '水蓝蓝',
        element: 'water',
        elementCN: '水系',
        emoji: '💧',
        desc: '温柔可爱的小水灵，身体像果冻般晶莹剔透，最擅长用水花治愈和守护伙伴们。',
        image: 'images/sprites/shuilanlan.png',
    },
    {
        id: 4,
        name: '喵喵',
        element: 'grass',
        elementCN: '草系',
        emoji: '🌿',
        desc: '三只初始精灵中最调皮的那个，头顶的小草会随着心情摇来摇去，生气时甩出飞叶快刀。',
        image: 'images/sprites/miaomiao.png',
    },
    {
        id: 5,
        name: '阿米亚特',
        element: 'normal',
        elementCN: '地系',
        emoji: '🪨',
        desc: '身披坚硬岩石外壳的古代精灵，虽然看起来笨重，但是最忠实的伙伴，陪伴无数小洛克成长。',
        image: 'images/sprites/amiyate.png',
    },
    {
        id: 6,
        name: '白发懒人',
        element: 'normal',
        elementCN: '普通系',
        emoji: '🦥',
        desc: '整天懒洋洋的白毛小可爱，但千万不要被它懒散的外表骗了，认真起来的实力超乎想象。',
        image: 'images/sprites/baifalanren.png',
    },
    {
        id: 7,
        name: '蹦蹦花',
        element: 'grass',
        elementCN: '草系',
        emoji: '🌸',
        desc: '蹦蹦种子的进化形态，头顶开出了大大的花朵，蹦跳之间洒下阵阵花香与治愈的花粉。',
        image: 'images/sprites/bengbenghua.png',
    },
    {
        id: 8,
        name: '布鲁斯',
        element: 'water',
        elementCN: '水系',
        emoji: '🐚',
        desc: '住在贝壳里的小水灵，性格害羞又温柔，当它从壳里探出头来时，周围的水都会变得清澈。',
        image: 'images/sprites/bulusi.png',
    },
    {
        id: 9,
        name: '彩蝶鲨',
        element: 'water',
        elementCN: '水系',
        emoji: '🦈',
        desc: '有着蝴蝶翅膀一样美丽鱼鳍的鲨鱼精灵，游弋于深海珊瑚丛中，是海底最优雅的猎手。',
        image: 'images/sprites/caidiesha.png',
    },
    {
        id: 10,
        name: '电咩咩',
        element: 'electric',
        elementCN: '电系',
        emoji: '⚡',
        desc: '毛茸茸的电气小羊，软绵绵的身体里蕴含着惊人的电力，开心时会噼里啪啦地放电。',
        image: 'images/sprites/dianmiemie.png',
    },
    {
        id: 11,
        name: '翡翠水母',
        element: 'water',
        elementCN: '水系',
        emoji: '🪼',
        desc: '如翡翠般碧绿通透的水母精灵，在深海中散发着迷人的幽光，触手轻舞如同水中芭蕾。',
        image: 'images/sprites/feicuishuimu.png',
    },
    {
        id: 12,
        name: '粉耳星兔',
        element: 'fairy',
        elementCN: '萌系',
        emoji: '🐰',
        desc: '来自星空的粉色小兔子，长长的耳朵能接收到来自星星的信号，是最受欢迎的萌系精灵之一。',
        image: 'images/sprites/fenerxingtu.png',
    },
    {
        id: 13,
        name: '格兰球',
        element: 'grass',
        elementCN: '草系',
        emoji: '🌵',
        desc: '格兰种子的进化形态，圆滚滚的身体像一个小绿球，防御力超强，是草系精灵中的坦克手。',
        image: 'images/sprites/gelanqiu.png',
    },
    {
        id: 14,
        name: '乖乖鹄',
        element: 'flying',
        elementCN: '翼系',
        emoji: '🕊️',
        desc: '像天鹅一样优雅的白色大鸟，性格温顺乖巧，展开翅膀时翼尖洒落星屑般的洁白光羽。',
        image: 'images/sprites/guaiguaihe.png',
    },
    {
        id: 15,
        name: '护主犬',
        element: 'fire',
        elementCN: '火系',
        emoji: '🐕',
        desc: '忠诚的火焰犬精灵，对主人无比忠心，鬃毛燃烧着熊熊火焰，是火系中最可靠的伙伴。',
        image: 'images/sprites/huzhuquan.png',
    },
    {
        id: 16,
        name: '皇家狮鹫',
        element: 'flying',
        elementCN: '翼系',
        emoji: '🦅',
        desc: '翱翔于王城上空的皇家护卫，雪白羽翼之下藏着利爪，是忠诚与荣耀的至高象征。',
        image: 'images/sprites/huangjiashijiu.png',
    },
    {
        id: 17,
        name: '九尾狐',
        element: 'fire',
        elementCN: '火系',
        emoji: '🦊',
        desc: '修炼千年的狐仙精灵，九条尾巴上燃烧着青蓝色的狐火，优雅而强大，传说能预知未来。',
        image: 'images/sprites/jiuweihu.png',
    },
    {
        id: 18,
        name: '灵狐',
        element: 'normal',
        elementCN: '普通系',
        emoji: '🌟',
        desc: '拥有灵性的白狐精灵，身姿优雅灵动如风，据说修炼千年后能洞悉世间一切人心。',
        image: 'images/sprites/linghu.png',
    },
    {
        id: 19,
        name: '魔力猫',
        element: 'grass',
        elementCN: '草系',
        emoji: '🐱',
        desc: '喵喵的最终进化形态，拥有强大的自然魔力，头顶的花朵完全绽放，是草系精灵的巅峰。',
        image: 'images/sprites/molimao.png',
    },
    {
        id: 20,
        name: '帕尔萨斯',
        element: 'dark',
        elementCN: '恶魔系',
        emoji: '🌙',
        desc: '来历神秘而优雅的恶魔精灵，苍白的面容下隐藏着强大的黑暗之力，嘴角总挂着一丝微笑。',
        image: 'images/sprites/paersasi.png',
    },
    {
        id: 21,
        name: '雪影娃娃',
        element: 'ice',
        elementCN: '冰系',
        emoji: '❄️',
        desc: '在雪夜中诞生的冰之精灵，纯白身躯柔软如雪，轻轻挥手就能冻结一整片湖面。',
        image: 'images/sprites/xueyingwawa.png',
    },
    {
        id: 22,
        name: '伊兰亚龙',
        element: 'dragon',
        elementCN: '龙系',
        emoji: '🐉',
        desc: '来自远古的亚龙精灵，身披翠绿鳞甲，虽然还是幼年形态，但龙之血脉中蕴含着无穷潜力。',
        image: 'images/sprites/yilanyalong.png',
    },
    {
        id: 23,
        name: '音速犬',
        element: 'fire',
        elementCN: '火系',
        emoji: '🔥',
        desc: '护主犬的进化形态，奔跑速度快如音速，所过之处只留下一道火焰残影，是速度与力量的化身。',
        image: 'images/sprites/yinsuquan.png',
    },
    {
        id: 24,
        name: '烈火战神',
        element: 'fire',
        elementCN: '火系',
        emoji: '💥',
        desc: '在烈焰中重生的火之战神，全身燃烧着不灭的斗志之火，一拳可焚烧整片黑暗。',
        image: 'images/sprites/liehuozhanshen.png',
    },
    {
        id: 25,
        name: '圣水守护',
        element: 'water',
        elementCN: '水系',
        emoji: '💎',
        desc: '水蓝蓝的最终进化形态，圣洁的水之守护者，身体化作纯净的生命之水，治愈世间一切伤痛。',
        image: 'images/sprites/shengshuishouhu.png',
    },
];

// ===== 哈希函数 =====
function hashName(name) {
    var hash = 0;
    for (var i = 0; i < name.length; i++) {
        hash = ((hash << 5) - hash) + name.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash) % SPRITES.length;
}

// ===== 魔法粒子系统 =====
function spawnParticles(x, y, count) {
    var container = document.getElementById('particles');
    if (!container) return;

    var types = ['star', 'dot', 'spark', 'dot', 'star', 'spark'];
    var colors = ['#FF8BA7', '#7EC8E3', '#F5D67B', '#A8D870', '#FF9F7C'];

    for (var i = 0; i < count; i++) {
        var particle = document.createElement('div');
        var type = types[Math.floor(Math.random() * types.length)];
        var color = colors[Math.floor(Math.random() * colors.length)];

        particle.className = 'particle ' + type;
        particle.style.left = (x + (Math.random() - 0.5) * 80) + 'px';
        particle.style.top = (y + (Math.random() - 0.5) * 40) + 'px';
        particle.style.background = type === 'dot' || type === 'spark' ? color : '';
        particle.style.animationDuration = (3 + Math.random() * 4) + 's';
        particle.style.animationDelay = Math.random() * 0.5 + 's';

        container.appendChild(particle);

        (function (p) {
            setTimeout(function () {
                if (p.parentNode) p.parentNode.removeChild(p);
            }, 5000);
        })(particle);
    }
}

// ===== 页面切换 =====
var inputPage = document.getElementById('input-page');
var resultPage = document.getElementById('result-page');

function showPage(page) {
    inputPage.classList.remove('active');
    resultPage.classList.remove('active');
    if (page === 'input') {
        inputPage.classList.add('active');
    } else {
        resultPage.classList.add('active');
    }
}

// ===== 获取 URL 参数 =====
function getQueryParam(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// ===== 提交名字 =====
function onSubmit() {
    var input = document.getElementById('name-input');
    var name = input.value.trim();

    if (!name) {
        input.focus();
        input.style.borderColor = '#FF8BA7';
        input.style.boxShadow = '0 0 0 6px rgba(255,139,167,0.12)';
        setTimeout(function () {
            input.style.borderColor = '#F0E0E5';
            input.style.boxShadow = 'none';
        }, 800);
        return;
    }

    var btn = document.getElementById('submit-btn');
    var btnRect = btn.getBoundingClientRect();
    spawnParticles(btnRect.left + btnRect.width / 2, btnRect.top + btnRect.height / 2, 20);

    var url = new URL(window.location);
    url.searchParams.set('name', name);
    window.history.pushState({}, '', url);

    setTimeout(function () {
        showResult(name);
    }, 300);
}

// ===== 元素表情和光晕映射 =====
var ELEMENT_EMOJI = {
    fire: '🔥',
    water: '💧',
    grass: '🌿',
    light: '⭐',
    dark: '🌙',
    ice: '❄️',
    dragon: '🐉',
    fairy: '🎀',
    flying: '🐦',
    fight: '👊',
    electric: '⚡',
    normal: '🌟',
    mecha: '⚙️',
};

var ELEMENT_GLOW = {
    fire: 'radial-gradient(circle, rgba(255,138,101,0.3) 0%, transparent 70%)',
    water: 'radial-gradient(circle, rgba(79,195,247,0.3) 0%, transparent 70%)',
    grass: 'radial-gradient(circle, rgba(129,199,132,0.3) 0%, transparent 70%)',
    light: 'radial-gradient(circle, rgba(255,238,88,0.35) 0%, transparent 70%)',
    dark: 'radial-gradient(circle, rgba(149,117,205,0.3) 0%, transparent 70%)',
    ice: 'radial-gradient(circle, rgba(128,222,234,0.3) 0%, transparent 70%)',
    dragon: 'radial-gradient(circle, rgba(186,104,200,0.3) 0%, transparent 70%)',
    fairy: 'radial-gradient(circle, rgba(240,98,146,0.25) 0%, transparent 70%)',
    flying: 'radial-gradient(circle, rgba(176,190,197,0.25) 0%, transparent 70%)',
    fight: 'radial-gradient(circle, rgba(255,138,101,0.3) 0%, transparent 70%)',
    electric: 'radial-gradient(circle, rgba(255,213,79,0.3) 0%, transparent 70%)',
    normal: 'radial-gradient(circle, rgba(224,224,224,0.25) 0%, transparent 70%)',
    mecha: 'radial-gradient(circle, rgba(144,164,174,0.25) 0%, transparent 70%)',
};

// ===== 显示结果 =====
function showResult(name) {
    var idx = hashName(name);
    var sprite = SPRITES[idx];

    document.getElementById('result-name-display').textContent = '「' + name + '」';
    var displayEmoji = sprite.emoji || ELEMENT_EMOJI[sprite.element] || '⭐';
    document.getElementById('sprite-name').textContent = displayEmoji + ' ' + sprite.name;
    document.getElementById('sprite-desc').textContent = sprite.desc;

    var badge = document.getElementById('sprite-element');
    badge.textContent = sprite.elementCN;
    badge.className = 'element-badge ' + sprite.element;

    // 优先显示真实图片
    var avatar = document.getElementById('sprite-avatar');
    var img = document.getElementById('sprite-image');
    var glow = document.querySelector('.sprite-glow');

    // 先尝试加载图片
    img.src = sprite.image;
    img.alt = sprite.name;

    var testImg = new Image();
    testImg.onload = function () {
        img.style.display = 'block';
        avatar.style.display = 'none';
        glow.style.background = ELEMENT_GLOW[sprite.element] || '';
    };
    testImg.onerror = function () {
        // 图片加载失败，显示CSS头像
        var avatarEmoji = avatar.querySelector('.sprite-emoji');
        avatar.className = 'sprite-avatar ' + sprite.element;
        avatarEmoji.textContent = sprite.emoji || ELEMENT_EMOJI[sprite.element] || '⭐';
        avatar.style.display = 'flex';
        img.style.display = 'none';
        glow.style.background = ELEMENT_GLOW[sprite.element] || '';
    };
    testImg.src = sprite.image;

    showPage('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== 重新测试 =====
function onRetry() {
    var url = new URL(window.location);
    url.searchParams.delete('name');
    window.history.pushState({}, '', url);

    showPage('input');
    document.getElementById('name-input').value = '';
    document.getElementById('name-input').focus();
}

// ===== 分享 =====
function onShare() {
    var url = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: '洛克王国：世界 - 你的本命精灵',
            text: '来看看你的本命洛克王国精灵是谁？',
            url: url,
        }).catch(function () {
            copyToClipboard(url);
        });
    } else {
        copyToClipboard(url);
    }
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
            showToast('链接已复制 ✦ 分享给朋友吧');
        }).catch(function () {
            showToast('分享链接：\n' + text);
        });
    } else {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast('链接已复制 ✦ 分享给朋友吧');
        } catch (e) {
            showToast('分享链接：\n' + text);
        }
        document.body.removeChild(textarea);
    }
}

function showToast(message) {
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    toast.offsetHeight;
    toast.classList.add('show');

    setTimeout(function () {
        toast.classList.remove('show');
        setTimeout(function () {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 300);
    }, 2200);
}

// ===== 输入框事件 =====
document.getElementById('name-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        onSubmit();
    }
});

document.getElementById('name-input').addEventListener('focus', function () {
    var rect = this.getBoundingClientRect();
    spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 8);
});

// ===== 页面初始化 =====
(function init() {
    var name = getQueryParam('name');
    if (name) {
        showResult(name);
    } else {
        showPage('input');
    }
})();
