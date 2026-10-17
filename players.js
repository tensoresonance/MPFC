// ========== 球員資料 ==========
// 之後要加球員、改號碼、改統計，直接改這裡就好！
const players = [
    {
        number: 7,
        name: "jer",
        position: "前鋒",
        goals: 12,
        assists: 5,
        appearances: 18,
        photo: "images/player7.jpg"   // 之後把相片放到 images 資料夾
    },
    {
        number: 10,
        name: "jefferey",
        position: "中場",
        goals: 8,
        assists: 11,
        appearances: 20,
        photo: "images/player10.jpg"
    },
    {
        number: 1,
        name: "DRAGON守門",
        position: "守門員",
        goals: 0,
        assists: 0,
        appearances: 20,
        photo: "images/player1.jpg"
    },
    {
        number: 4,
        name: "張後衛kING",
        position: "中後衛",
        goals: 2,
        assists: 1,
        appearances: 19,
        photo: "images/player4.jpg"
    },
    {
        number: 9,
        name: "黃DRAGON前鋒",
        position: "前鋒",
        goals: 15,
        assists: 3,
        appearances: 17,
        photo: "images/player9.jpg"
    },
    {
        number: 8,
        name: "林DRAGON中場",
        position: "中場",
        goals: 4,
        assists: 9,
        appearances: 21,
        photo: "images/player8.jpg"
    }
];

// ========== 自動生成球員卡片 ==========
const container = document.getElementById('players-container');

players.forEach(player => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.innerHTML = `
        <div class="player-image">
            <div class="player-number">${player.number}</div>
            <img src="${player.photo}" alt="${player.name}" 
                 onerror="this.src='https://via.placeholder.com/400x400/1A2744/FEBE10?text=${player.number}'">
        </div>
        <div class="player-info">
            <h3 class="player-name">${player.name}</h3>
            <p class="player-position">${player.position}</p>
            <div class="player-stats">
                <div class="stat">
                    <div class="stat-value">${player.goals}</div>
                    <div class="stat-label">進球</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${player.assists}</div>
                    <div class="stat-label">助攻</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${player.appearances}</div>
                    <div class="stat-label">出場</div>
                </div>
            </div>
        </div>
    `;
    container.appendChild(card);
});

// ========== 統計總覽 ==========
const totalGoals = players.reduce((sum, p) => sum + p.goals, 0);
const totalAssists = players.reduce((sum, p) => sum + p.assists, 0);
const totalApps = players.reduce((sum, p) => sum + p.appearances, 0);

const statsContainer = document.getElementById('stats-container');
statsContainer.innerHTML = `
    <div class="stat-card">
        <div class="big-number">${players.length}</div>
        <div>註冊球員</div>
    </div>
    <div class="stat-card">
        <div class="big-number">${totalGoals}</div>
        <div>總進球</div>
    </div>
    <div class="stat-card">
        <div class="big-number">${totalAssists}</div>
        <div>總助攻</div>
    </div>
    <div class="stat-card">
        <div class="big-number">${Math.round(totalApps / players.length)}</div>
        <div>平均出場</div>
    </div>
`;
