<template>
  <div id="app">
    <header>
      {{ bout }}
    </header>
    <div class="row" v-for="(item, row) in map" :key="row">
      <div @click="cellClick(row, col)" class="cell" v-for="(item1, col) in item" :key="col">
        <span>{{ item1 }}</span>
      </div>
    </div>
    <footer>
      <p v-show="isWin">恭喜[{{ winner }}]方获胜</p>
      <button @click="reset">重新开始</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // 当前回合数
      n: 0,
      // 保存棋子数据的数组
      map: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      // 是否胜利
      isWin: false,
      // 是否平局
      isDraw: false,
      // 获胜方
      winner: '',
    };
  },
  methods: {
    cellClick(row, col) {
      // 判断是否已经胜利了
      if (this.isWin) {
        return;
      }

      // 判断是否点击已经点过的格子
      if (this.map[row][col] !== '') {
        return;
      }
      // 判断当前是X落子还是Y落子
      this.winner = this.n % 2 ? 'X' : 'O';

      // 落子
      this.map[row][col] = this.winner;

      // 轮数+1
      this.n++;
      console.log(this.n);

      // 判断是否胜利
      let result = this.checkWin();
      if (result) {
        this.isWin = true;
        const winner = this.winner;
        // 用闭包缓存胜利方
        (function() {
          setTimeout(function() {
            alert(`恭喜“${winner}”胜利！`);
          }, 100);
        })();
        return;
      }

      // 判断是否平局
      if (this.n === 9) {
        this.isDraw = true;
        setTimeout(function() {
          alert('平局！');
        }, 100);
        return;
      }
      console.log(row, col);
    },
    // 判断是否有一方胜利
    checkWin() {
      // a. 判断横向
      for (let i = 0; i <= 2; i++) {
        if (
          this.map[i][0] !== '' &&
          this.map[i][0] === this.map[i][1] &&
          this.map[i][1] === this.map[i][2]
        ) {
          return true;
        }
      }

      // b. 判断纵向
      for (let i = 0; i <= 2; i++) {
        if (
          this.map[0][i] !== '' &&
          this.map[0][i] === this.map[1][i] &&
          this.map[1][i] === this.map[2][i]
        ) {
          return true;
        }
      }

      // c. 判断斜线方向
      if (
        this.map[0][0] !== '' &&
        this.map[0][0] === this.map[1][1] &&
        this.map[1][1] === this.map[2][2]
      ) {
        return true;
      }
      // d. 判断另一条斜线方向
      if (
        this.map[0][2] !== '' &&
        this.map[0][2] === this.map[1][1] &&
        this.map[1][1] === this.map[2][0]
      ) {
        return true;
      }

      return false;
    },
    // 重新开始
    reset() {
      // this.win = false;
      this.map = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      this.n = 0;
      this.isWin = false;
      this.isDraw = false;
    },
  },
  computed: {
    // 返回当前回合数
    bout() {
      return this.n === 0 ? '等待游戏开始' : `第 ${this.n} 手`;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.row {
  display: flex;
  cursor: pointer;
}
.cell {
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  font-size: 70px;
  border: 1px solid black;
}
header {
  margin-bottom: 15px;
}
footer {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
