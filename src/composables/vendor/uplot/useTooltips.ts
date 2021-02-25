export default function useTooltips(pluginOpts?: any) {
  function init(u: any, opts: any) {
    const plot = u.root.querySelector('.u-over');

    // Cursor tooltip
    const ttc = u.cursortt = document.createElement('div');
    ttc.className = 'tooltip';
    ttc.textContent = '(x,y)';
    ttc.style.pointerEvents = 'none';
    ttc.style.position = 'absolute';
    ttc.style.background = 'rgba(0,0,255,0.1)';
    plot.appendChild(ttc);

    // Series tooltip
    u.seriestt = opts.series.map((s: any, i: any) => {
      if (i === 0) return false;

      const tt = document.createElement('div');
      tt.className = 'tooltip';
      tt.textContent = 'Tooltip!';
      tt.style.pointerEvents = 'none';
      tt.style.position = 'absolute';
      tt.style.background = 'rgba(0,0,0,0.1)';
      tt.style.color = s.color;
      tt.style.display = s.show ? 'block' : 'none';
      plot.appendChild(tt);
      return tt;
    });

    function hideTips() {
      ttc.style.display = 'none';
      u.seriestt.forEach((tt: any, i: any) => {
        if (i === 0) return;

        tt.style.display = 'none';
      });
    }

    function showTips() {
      ttc.style.display = 'block';
      u.seriestt.forEach((tt: any, i: any) => {
        if (i === 0) return;

        const s = u.series[i];
        tt.style.display = s.show ? null : 'none';
      });
    }

    plot.addEventListener('mouseleave', () => {
      if (!u.cursor._lock) {
        // u.setCursor({left: -10, top: -10});
        hideTips();
      }
    });

    plot.addEventListener('mouseenter', () => {
      showTips();
    });

    hideTips();
  }

  function setCursor(u) {
    const { left, top, idx } = u.cursor;

    // this is here to handle if initial cursor position is set
    // not great (can be optimized by doing more enter/leave state transition tracking)
    //   if (left > 0)
    //     u.cursortt.style.display = null;

    u.cursortt.style.left = `${left}px`;
    u.cursortt.style.top = `${top}px`;
    u.cursortt.textContent = `(${u.posToVal(left, 'x').toFixed(2)}, ${u.posToVal(top, 'y').toFixed(2)})`;

    // can optimize further by not applying styles if idx did not change
    u.seriestt.forEach((tt, i) => {
      if (i === 0) return;

      const s = u.series[i];

      if (s.show) {
        // this is here to handle if initial cursor position is set
        // not great (can be optimized by doing more enter/leave state transition tracking)
        //   if (left > 0)
        //     tt.style.display = null;

        const xVal = u.data[0][idx];
        const yVal = u.data[i][idx];

        tt.textContent = `(${xVal}, ${yVal})`;

        tt.style.left = `${Math.round(u.valToPos(xVal, 'x'))}px`;
        tt.style.top = `${Math.round(u.valToPos(yVal, s.scale))}px`;
      }
    });
  }

  return {
    hooks: {
      init,
      setCursor,
      setScale: [
        (u, key) => {
          // console.log('setScale', key);
        },
      ],
      setSeries: [
        (u, idx) => {
          // console.log('setSeries', idx);
        },
      ],
    },
  };
}
