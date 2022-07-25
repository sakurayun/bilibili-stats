module.exports = {
  default: `
  <svg width="400" height="120" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>{{name}}的 B 站统计数据</title>
    <defs>
      <style>
        @font-face {
          font-family: "Press Start 2P";
          src: url(data:application/font-woff;charset=utf-8;base64,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) format("woff");
          font-weight: normal;
          font-style: normal;
        }
      </style>
    </defs>
    <rect id="bg" x="0.5" y="0.5" stroke="#e0dbdb" fill="none" width="399" height="119" rx="5" />
    <svg width="119" height="119" viewBox="0 0 100 100">
      <defs>
        <clipPath id="avatar">
          <circle r="30" cx="50" cy="50" />
        </clipPath>
      </defs>
      <image id="face" href="{{face}}" x="20" y="20" width="60" height="60" clip-path="url(#avatar)" />
      <image id="pendant" href="{{pendant}}" width="100" height="100" />
    </svg>
    <g>
      <text id="name" x="122" y="40" font-size="14" font-weight="bold" fill="#26abe3">
        {{name}}
      </text>
      <text id="id" x="122" y="60" font-size="8" fill="#919191" font-family="'Press Start 2P'">No.{{id}}</text>
      <g fill="#8b8b8b">
        <text id="follower" x="122" y="90" font-size="12">粉丝 {{follower}}</text>
        <text id="following" x="212" y="90" font-size="12">关注 {{following}}</text>
        <text id="charge" x="302" y="90" font-size="12">充电 {{charge}}</text>
      </g>
    </g>
  </svg>
  `,
  pink: `
  <svg width="400" height="120" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>{{name}}的 B 站统计数据</title>
    <defs>
      <style>
        @font-face {
          font-family: "Press Start 2P";
          src: url(data:application/font-woff;charset=utf-8;base64,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) format("woff");
          font-weight: normal;
          font-style: normal;
        }
      </style>
    </defs>
    <rect id="bg" x="0.5" y="0.5" stroke="#e0dbdb" fill="none" width="399" height="119" rx="5" />
    <svg width="119" height="119" viewBox="0 0 100 100">
      <defs>
        <clipPath id="avatar">
          <circle r="30" cx="50" cy="50" />
        </clipPath>
      </defs>
      <image id="face" href="{{face}}" x="20" y="20" width="60" height="60" clip-path="url(#avatar)" />
      <image id="pendant" href="{{pendant}}" width="100" height="100" />
    </svg>
    <g>
      <text id="name" x="122" y="40" font-size="14" font-weight="bold" fill="#fb7299">
        {{name}}
      </text>
      <text id="id" x="122" y="60" font-size="8" fill="#919191" font-family="'Press Start 2P'">No.{{id}}</text>
      <g fill="#8b8b8b">
        <text id="follower" x="122" y="90" font-size="12">粉丝 {{follower}}</text>
        <text id="following" x="212" y="90" font-size="12">关注 {{following}}</text>
        <text id="charge" x="302" y="90" font-size="12">充电 {{charge}}</text>
      </g>
    </g>
  </svg>
  `,
};
