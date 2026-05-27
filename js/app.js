// ===== 精灵数据库 =====
var SPRITES = [
    {
        id: 1,
        name: '火花',
        element: 'fire',
        elementCN: '火系',
        emoji: '🔥',
        desc: '热情活泼的火系初始精灵，尾巴上燃烧着永不熄灭的小火苗，是无数小洛克最初的伙伴。',
        image: 'images/sprites/huohua.png',
    },
    {
        id: 2,
        name: '水蓝蓝',
        element: 'water',
        elementCN: '水系',
        emoji: '💧',
        desc: '温柔可爱的小水灵，身体像果冻一样晶莹剔透，最擅长用水花治愈伙伴们。',
        image: 'images/sprites/shuilanlan.png',
    },
    {
        id: 3,
        name: '喵喵',
        element: 'grass',
        elementCN: '草系',
        emoji: '🌿',
        desc: '三只初始精灵中最调皮的那个，头顶的小草会随着心情摇摆，生气时会甩出飞叶。',
        image: 'images/sprites/miaomiao.png',
    },
    {
        id: 4,
        name: '迪莫',
        element: 'light',
        elementCN: '光系',
        emoji: '⭐',
        desc: '洛克王国最闪耀的明星精灵！拥有纯净的光之力量，是所有小洛克梦想中的伙伴。',
        image: 'images/sprites/dimo.png',
    },
    {
        id: 5,
        name: '艾米',
        element: 'light',
        elementCN: '光系',
        emoji: '☀️',
        desc: '来自光之国的可爱精灵，温暖的光芒能驱散一切黑暗，是迪莫最好的朋友。',
        image: 'images/sprites/aimi.png',
    },
    {
        id: 6,
        name: '圣光迪莫',
        element: 'light',
        elementCN: '光系',
        emoji: '✨',
        desc: '迪莫的圣光进化形态！神圣的光芒环绕全身，据说拥有净化一切邪恶的力量。',
        image: 'images/sprites/shengGDimo.png',
    },
    {
        id: 7,
        name: '烈火战神',
        element: 'fire',
        elementCN: '火系',
        emoji: '💥',
        desc: '在烈焰中重生的火之战士，全身燃烧着不灭的斗志之火，是火系精灵的骄傲。',
        image: 'images/sprites/liehuoZS.png',
    },
    {
        id: 8,
        name: '武斗酷猫',
        element: 'fight',
        elementCN: '武系',
        emoji: '🐱',
        desc: '普通的家猫经过千锤百炼后觉醒的形态，拳法伶俐、身姿矫健的格斗大师。',
        image: 'images/sprites/wudouKM.png',
    },
    {
        id: 9,
        name: '冰龙王',
        element: 'ice',
        elementCN: '冰系',
        emoji: '❄️',
        desc: '盘踞在极寒之地的冰之王者，吐息之间冻结万物，却有着一颗守护子民的温柔内心。',
        image: 'images/sprites/binglongwang.png',
    },
    {
        id: 10,
        name: '萌之王者',
        element: 'fairy',
        elementCN: '萌系',
        emoji: '👑',
        desc: '可爱就是正义！萌之王者用无法抵挡的可爱力量征服对手，是萌系精灵的顶点。',
        image: 'images/sprites/mengzhiWZ.png',
    },
    {
        id: 11,
        name: '暗夜魔王',
        element: 'dark',
        elementCN: '恶魔系',
        emoji: '🌙',
        desc: '从深渊中崛起的暗夜君主，掌控着令人畏惧的黑暗力量，但内心深处渴望光明。',
        image: 'images/sprites/anyeMW.png',
    },
    {
        id: 12,
        name: '机甲女王',
        element: 'mecha',
        elementCN: '机械系',
        emoji: '🤖',
        desc: '科技与力量的完美结合，驾驶着巨型机甲的机械女王，是洛克王国最强的火力输出。',
        image: 'images/sprites/jijiaNW.png',
    },
    {
        id: 13,
        name: '上古战神',
        element: 'fight',
        elementCN: '武系',
        emoji: '⚔️',
        desc: '沉睡千年的远古战将，身披黄金战甲，一拳可碎山岳，是传说中的武系至尊。',
        image: 'images/sprites/shangguZS.png',
    },
    {
        id: 14,
        name: '皇家狮鹫',
        element: 'flying',
        elementCN: '翼系',
        emoji: '🦅',
        desc: '翱翔于王城上空的皇家护卫，雪白的羽翼洒落星光，是忠诚与荣耀的象征。',
        image: 'images/sprites/huangjiaSJ.png',
    },
    {
        id: 15,
        name: '帕尔萨斯',
        element: 'dark',
        elementCN: '恶魔系',
        emoji: '🦇',
        desc: '来历神秘的恶魔精灵，优雅而危险，嘴角总是挂着一丝捉摸不透的微笑。',
        image: 'images/sprites/paersasi.png',
    },
    {
        id: 16,
        name: '雪影娃娃',
        element: 'ice',
        elementCN: '冰系',
        emoji: '⛄',
        desc: '在雪夜中诞生的冰娃娃，纯白的身体像雪一样柔软，但千万不要小看她冻结一切的能力。',
        image: 'images/sprites/xueyingWW.png',
    },
    {
        id: 17,
        name: '九天龙尊',
        element: 'dragon',
        elementCN: '龙系',
        emoji: '🐉',
        desc: '腾飞于九天之上的巨龙，龙鳞闪耀着星辰的光辉，传说见到它的人都会获得好运。',
        image: 'images/sprites/jiutianLZ.png',
    },
    {
        id: 18,
        name: '圣翼天使',
        element: 'flying',
        elementCN: '翼系',
        emoji: '👼',
        desc: '从天堂降临的六翼天使，洁白的羽翼能治愈一切伤痛，是希望与救赎的化身。',
        image: 'images/sprites/shengyiTS.png',
    },
    {
        id: 19,
        name: '梦幻卡洛儿',
        element: 'fairy',
        elementCN: '萌系',
        emoji: '🎀',
        desc: '从童话中走出来的梦幻精灵，身边总是飘散着糖果和星屑，让见到她的人忘记烦恼。',
        image: 'images/sprites/menghuanKLE.png',
    },
    {
        id: 20,
        name: '蓝焰行者',
        element: 'fire',
        elementCN: '火系',
        emoji: '💎',
        desc: '行走于荒野的独行侠，幽蓝色的火焰是他的标志，冷酷外表下藏着一颗炽热的心。',
        image: 'images/sprites/lanyanXZ.png',
    },
    {
        id: 21,
        name: '雷霆虎',
        element: 'electric',
        elementCN: '电系',
        emoji: '⚡',
        desc: '吼声如雷霆、奔跑如闪电的猛虎，是森林中最令人敬畏的猎手，电系精灵的骄傲。',
        image: 'images/sprites/leitinghu.png',
    },
    {
        id: 22,
        name: '翡翠水母',
        element: 'water',
        elementCN: '水系',
        emoji: '🪼',
        desc: '在深海中漂浮的翡翠色水母，触手散发着迷人的荧光，是海底世界最美的风景。',
        image: 'images/sprites/feicuiSM.png',
    },
    {
        id: 23,
        name: '龙之飞儿',
        element: 'dragon',
        elementCN: '龙系',
        emoji: '🐲',
        desc: '小龙仔的可爱形态，虽然体型娇小但血脉中流淌着真龙的力量，潜力不可限量。',
        image: 'images/sprites/longzhiFE.png',
    },
    {
        id: 24,
        name: '灵狐',
        element: 'normal',
        elementCN: '普通系',
        emoji: '🦊',
        desc: '拥有九条尾巴的灵性白狐，优雅灵动，传说她已经修炼了千年，能洞悉人心。',
        image: 'images/sprites/linghu.png',
    },
    {
        id: 25,
        name: '恩佐',
        element: 'dark',
        elementCN: '恶魔系',
        emoji: '🎩',
        desc: '洛克王国最神秘的反派角色，天才魔法师，虽然行事偏激但有着自己的信念与坚持。',
        image: 'images/sprites/enzuo.png',
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

        // 自动清理
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

    // 生成魔法粒子
    var btn = document.getElementById('submit-btn');
    var btnRect = btn.getBoundingClientRect();
    spawnParticles(btnRect.left + btnRect.width / 2, btnRect.top + btnRect.height / 2, 20);

    // 更新 URL 参数并显示结果
    var url = new URL(window.location);
    url.searchParams.set('name', name);
    window.history.pushState({}, '', url);

    // 稍作延迟让粒子动画先播放
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

    // 显示 CSS 精灵头像
    var avatar = document.getElementById('sprite-avatar');
    var avatarEmoji = avatar.querySelector('.sprite-emoji');
    var img = document.getElementById('sprite-image');
    var glow = document.querySelector('.sprite-glow');

    avatar.className = 'sprite-avatar ' + sprite.element;
    avatarEmoji.textContent = sprite.emoji || ELEMENT_EMOJI[sprite.element] || '⭐';
    avatar.style.display = 'flex';
    img.style.display = 'none';

    // 更新光晕颜色
    glow.style.background = ELEMENT_GLOW[sprite.element] || '';

    // 尝试加载真实图片
    var testImg = new Image();
    testImg.onload = function () {
        img.src = sprite.image;
        img.alt = sprite.name;
        img.style.display = 'block';
        avatar.style.display = 'none';
    };
    testImg.onerror = function () {
        // 保持 CSS 头像
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

// ===== 输入框回车事件 =====
document.getElementById('name-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        onSubmit();
    }
});

// 输入框点击时生成少量粒子
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
