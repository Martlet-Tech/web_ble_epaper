(function(App) {

  App.state = {
    LUT_DATA: null,
    useLut: true,
    devicePalette: [],
    outputData: null,
    selectedPaletteIndex: 0,
    cropperInstance: null,
  };

  App.log = function(...args) {
    const el = document.getElementById('status');
    const now = new Date();
    const ts = `[${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}.${String(now.getMilliseconds()).padStart(3, '0')}]`;
    const msg = args.map(a => {
      try { return typeof a === 'object' && a !== null ? JSON.stringify(a, null, 2) : String(a); }
      catch (e) { return '[Unserializable]'; }
    }).join(' ');
    if (el) {
      const line = document.createElement('div');
      line.textContent = ` ${ts} ${msg}`;
      line.style.cssText = 'font-family:monospace;font-size:0.95em;';
      el.appendChild(line);
      el.scrollTop = el.scrollHeight;
    } else {
      console.log(`${ts} ${msg}`);
    }
  };

})(window.App = window.App || {});
