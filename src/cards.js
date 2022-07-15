module.exports = {
  default: `
    <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" role="img">
      <title>{{name}} 的 B 站统计数据</title>
      <defs>
        <style>
          @font-face {
            font-family: "Press Start 2P";
            src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAWQAAsAAAAACcwAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAEoAAABgZiCJlGNtYXAAAAFUAAAAawAAAXIQ+QwzZ2FzcAAAAcAAAAAIAAAACAAAABBnbHlmAAAByAAAAUEAAALEOcANT2hlYWQAAAMMAAAANAAAADYTIUnRaGhlYQAAA0AAAAAYAAAAJAPpA+pobXR4AAADWAAAABMAAAAaBGUBd2xvY2EAAANsAAAAGgAAABoEXAO4bWF4cAAAA4gAAAAYAAAAIAAQACFuYW1lAAADoAAAAdkAAAOcwC/+3HBvc3QAAAV8AAAAFAAAACD/uAA+eJxjYGF+wTiBgZWBgamLKYKBgcEbQjPGMRgxHgLyQVIwwC6AYDM4Rwa5MhxgUGDIZ34B4gPNKVNgYJgPYjO9A4spMDADADlKDJkAAHicY2BgYGaAYBkGRgYQyAHyGMF8FoYAIC0AhCB5BQY9BmMGUwZLBj+G/P//oSKGQBFziMj/h/+v/L/0/+L/C//3/J8DNQ0FMLJhimGoQeExAd3GwsrAxsDOwYlNNRch47gJ20hfAACUnhU6AAABAAH//wAPeJxlkjFuwzAMRSl7TIBCLYSi6FAIQk9gCDlUpk6eeABPnXLHTp4yEYmRT1J1YsSCZZsgHz+/RT0xcX/s/6inHb0QHWKOIceccipxqIW7edmHUW9hRurlFMYwMi8T0/YKJMThHEaw6FCHJMIiGv/vsbN4LHXAPiQGETmoYb6+sjOo5X5ablsQY/uQiq2cCKXQINz9QJYAofLsspdnFggp1+w8JWINRtT6EfOA1828wfjLI+ttZUW3CapiY1x/za2z17lPbtS2Pt6nch0limVKf/RK6ysaInVzrf2gr9a/3h3RO9hHnxEu3v3cHEJ/2KMw4bbhk5e9mtQ9sN+VnM2dxo6qLcAsVaQFZvYyuVvukYbBo+cZzV38Z/xvW5GkTaXnyMa8nIyw6ujmdgqrHj5X8A2b2VvbSZzcH3+i7AbrvNWzAAAAeJxjYGRgYGBmYJD5I/Q0nt/mKwcz8wugCMMVdYVvYLrs8SQgVcucDRZnZ2ACiQIASNMLWHicY2BkYGB+wcAAI4GAkQEVMAIAM8cB2nicY37BUMvAwPALTKIAAD0mAuAAAAAAIAAmADIASABuAJQAtADSAQABJgFEAWIAAHicY2BkYGDgYVBgYGYAAUYGNAAABPkAMnicjVHBahsxEH27cVJ6qOmh9BACFTk54Kw3dg4hhpJg4lNIFicEcquxxe4Ge7VIcoLdW/+k/Yn+QOmpH1D6BT330HPfyoI0ppiuWOnNm3kzoxGAl/iKAMtvyn+JA9RpLXGIZ3jv8Qbe4IPHNbzGR4838QKfPd7CK3zxuI5tfKcqqD2n9QO/PA6wE3zzOEQ9+OnxBt4Gvz2uoRkeeryJ7fCdx1tohAuP6zgMP/VUOdd5mlnRjg/a4jqTItHSGHFlh5pkQlPdyZEVpzObKW1EY6TG85OFKmTnKCqk3WuKh9xmYiCN1PdyLPqqsOJiOJVi92mqFXMg09lkqDtRHMfd3u3grOv8zt1O9r17pRvP3khtclUIJ/6XLLO2PG61zEjnpTWRySeR0mnrsn+OHhRKzKGRI0UGC4E2YhxwF7gmI3km9EsYLoErxgxpLyMT71W4Y8TIsaeY8czIaadokFcYs8oJFkQFIzs4QuSQxR6ajHpgB5VKYOBqSarvuY/J9J2qyn3B2lPX0+7artZ7qwopu5w4tsNOYre6nMctvWdEj/pHdaXdX1Gvn83T2Bt3K8ObVvcRf1X+32rVC1m+2DFaXIaTrV6uJGeYq8o84VlNPqX/kpM7/wNvhrUqAAAAeJxjYGYAg/9bGYwYMAEPACzOAfY=) format("woff");
            font-weight: normal;
            font-style: normal;
          }
        </style>
      </defs>
      <rect id="bg" stroke="#e0dbdb" fill="none" width="100%" height="100%" rx="2%" />
      <svg width="120" height="120" viewBox="0 0 100 100">
        <defs>
          <clipPath id="avatar">
            <circle r="30" cx="50" cy="50" />
          </clipPath>
        </defs>
        <image id="face" href="{{face}}" x="20" y="20"
          width="60" height="60" clip-path="url(#avatar)" />
        <image id="pendant" href="{{pendant}}" width="100" height="100" />
      </svg>
      <g>
        <text id="name" x="120" y="40" font-size="14" font-weight="bold" fill="#26abe3">
          {{name}}
        </text>
        <text id="id" x="121" y="60" font-size="8" fill="#999" font-family="'Press Start 2P'">No.{{id}}</text>
        <g fill="#333">
          <text id="follower" x="120" y="90" font-size="12">粉丝 {{follower}}</text>
          <text id="following" x="210" y="90" font-size="12">关注 {{following}}</text>
          <text id="charge" x="300" y="90" font-size="12">充电 {{charge}}</text>
        </g>
      </g>
    </svg>
  `,
};
