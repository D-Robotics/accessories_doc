// 配件旧站 /accessories_doc/ 拆分为双目 /accessories_stereo_camera_doc/ + IMU /accessories_bmi088_doc/ 两站后的页级迁移重定向。
//
// 为什么不用官方 @docusaurus/plugin-client-redirects：
// 1) 官方插件 to 不分语言，同一条 {from,to} 应用到所有 locale，而这里中英文目标不同
//    （新站 zh 无 /en/ 前缀、en 带 /en/ 前缀），官方做不到；
// 2) 旧文档仍保留在仓内、占着原路由，官方插件会「覆盖已存在路径的 redirect 直接忽略」、
//    不生效。故用本 postBuild 插件直接覆盖旧路由生成跳转页（HTTP 200 meta-refresh，非 301）。
//
// 迁移映射见 doc-plans/plan-url-migration.md §9.H.4（21 机械前缀替换 + 3 例外）。
const path = require('path');
const fs = require('fs-extra');

// from 相对各语言版本站点根（默认语言 build/、英文 build/en/，baseUrl 由部署层映射），
// 与旧站 URL 一一对应：from=/stereo_camera_gs130w/downloads → 旧站 /accessories_doc/stereo_camera_gs130w/downloads。
// base = 新站 baseUrl；path = 新站相对 baseUrl 的路径（不含 locale 前缀）。
const REDIRECTS = [
  // stereo_camera_gs130w（6 条 → 双目同名路径）
  { from: '/stereo_camera_gs130w/downloads', base: '/accessories_stereo_camera_doc/', path: 'stereo_camera_gs130w/downloads' },
  { from: '/stereo_camera_gs130w/hardware', base: '/accessories_stereo_camera_doc/', path: 'stereo_camera_gs130w/hardware' },
  { from: '/stereo_camera_gs130w/installation', base: '/accessories_stereo_camera_doc/', path: 'stereo_camera_gs130w/installation' },
  { from: '/stereo_camera_gs130w/product_overview', base: '/accessories_stereo_camera_doc/', path: 'stereo_camera_gs130w/product_overview' },
  { from: '/stereo_camera_gs130w/quick_start', base: '/accessories_stereo_camera_doc/', path: 'stereo_camera_gs130w/quick_start' },
  { from: '/stereo_camera_gs130w/software', base: '/accessories_stereo_camera_doc/', path: 'stereo_camera_gs130w/software' },
  // stereo_camera_gs130wi（6 条 → 双目同名路径）
  { from: '/stereo_camera_gs130wi/downloads', base: '/accessories_stereo_camera_doc/', path: 'stereo_camera_gs130wi/downloads' },
  { from: '/stereo_camera_gs130wi/hardware', base: '/accessories_stereo_camera_doc/', path: 'stereo_camera_gs130wi/hardware' },
  { from: '/stereo_camera_gs130wi/installation', base: '/accessories_stereo_camera_doc/', path: 'stereo_camera_gs130wi/installation' },
  { from: '/stereo_camera_gs130wi/product_overview', base: '/accessories_stereo_camera_doc/', path: 'stereo_camera_gs130wi/product_overview' },
  { from: '/stereo_camera_gs130wi/quick_start', base: '/accessories_stereo_camera_doc/', path: 'stereo_camera_gs130wi/quick_start' },
  { from: '/stereo_camera_gs130wi/software', base: '/accessories_stereo_camera_doc/', path: 'stereo_camera_gs130wi/software' },
  // imu_module（4 条 → IMU 同名路径，去 imu_module/ 前缀）
  { from: '/imu_module/downloads', base: '/accessories_bmi088_doc/', path: 'downloads' },
  { from: '/imu_module/hardware', base: '/accessories_bmi088_doc/', path: 'hardware' },
  { from: '/imu_module/installation', base: '/accessories_bmi088_doc/', path: 'installation' },
  { from: '/imu_module/quick_start', base: '/accessories_bmi088_doc/', path: 'quick_start' },
  // imu_module/software（5 条 → IMU software 同名）
  { from: '/imu_module/software/c_api', base: '/accessories_bmi088_doc/', path: 'software/c_api' },
  { from: '/imu_module/software/iio', base: '/accessories_bmi088_doc/', path: 'software/iio' },
  { from: '/imu_module/software/overview', base: '/accessories_bmi088_doc/', path: 'software/overview' },
  { from: '/imu_module/software/python_api', base: '/accessories_bmi088_doc/', path: 'software/python_api' },
  { from: '/imu_module/software/ros2', base: '/accessories_bmi088_doc/', path: 'software/ros2' },
  // 例外（非机械映射）
  { from: '/imu_module/product_overview', base: '/accessories_bmi088_doc/', path: 'introduction' }, // 改名 product_overview → introduction
  { from: '/accessories', base: '/accessories_stereo_camera_doc/', path: 'overview' }, // 旧首页 → 双目首页
  { from: '/search', base: '/accessories_stereo_camera_doc/', path: 'search' }, // 旧搜索 → 双目搜索
];

function toUrl(r, locale) {
  const localePrefix = locale === 'en' ? 'en/' : '';
  return `https://developer.d-robotics.cc${r.base}${localePrefix}${r.path}`;
}

// 与官方 client-redirects 生成的跳转页同构（meta refresh + canonical + JS 兜底）
function renderRedirectPage(toUrl) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${toUrl}">
    <link rel="canonical" href="${toUrl}" />
  </head>
  <script>
    window.location.href = '${toUrl}';
  </script>
</html>
`;
}

module.exports = function legacyRedirects() {
  return {
    name: 'legacy-redirects',
    async postBuild({ outDir }) {
      const locale = path.basename(path.resolve(outDir)) === 'en' ? 'en' : 'zh-Hans';
      for (const r of REDIRECTS) {
        const filePath = path.join(outDir, r.from.replace(/^\/+/, ''), 'index.html');
        // 直接覆盖：旧文档仍保留在仓库，但原路由一律生成跳转页（不依赖删旧文档腾空路由）
        await fs.outputFile(filePath, renderRedirectPage(toUrl(r, locale)));
      }
    },
  };
};
