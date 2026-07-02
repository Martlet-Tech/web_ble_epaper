(function(App) {

  App.overlay = {
    startTime: 0,
    timerInterval: null,

    get el() { return document.getElementById('transferOverlay'); },
    get box() { return document.getElementById('loaderBox'); },
    get progress() { return document.getElementById('loaderProgress'); },
    get time() { return document.getElementById('loaderTime'); },
    get status() { return document.getElementById('statusText'); },

    show() {
      if (!this.el) return;
      this.box.className = 'loader-container';
      this.el.classList.remove('hidden');
      this.el.style.display = 'flex';
      this.status.innerText = '';
      this.progress.style.display = 'block';
      this.startTime = Date.now();
      this.timerInterval = setInterval(() => {
        this.time.innerText = `${((Date.now() - this.startTime) / 1000).toFixed(1)}s`;
      }, 100);
    },

    update(val) {
      if (!this.progress) return;
      if (typeof val === 'number' || /^\d+(\.\d+)?$/.test(String(val))) {
        this.progress.innerText = `${val}%`;
      } else {
        this.progress.innerText = val;
      }
    },

    async complete(msg) {
      msg = msg || '传输成功';
      clearInterval(this.timerInterval);
      this.box.classList.add('success');
      this.status.innerText = `✅ ${msg}`;
      this.progress.style.display = 'none';
      await new Promise(r => setTimeout(r, 2000));
      this.el.classList.add('hidden');
      setTimeout(() => this.el.style.display = 'none', 500);
    },

    async fail(msg) {
      msg = msg || '传输失败';
      clearInterval(this.timerInterval);
      if (!this.box) return;
      this.box.classList.add('warning');
      this.status.innerText = `⚠️ ${msg}`;
      this.progress.style.display = 'none';
      await new Promise(r => setTimeout(r, 2000));
      this.el.classList.add('hidden');
      setTimeout(() => this.el.style.display = 'none', 500);
    },

    done() {
      clearInterval(this.timerInterval);
      this.el.classList.add('hidden');
      setTimeout(() => this.el.style.display = 'none', 500);
    },
  };

})(window.App = window.App || {});
