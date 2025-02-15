
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/employees"
  },
  {
    "renderMode": 2,
    "route": "/create-employees"
  },
  {
    "renderMode": 2,
    "route": "/update-employee/123"
  },
  {
    "renderMode": 0,
    "route": "/update-employee/*"
  },
  {
    "renderMode": 2,
    "route": "/details-employee/123"
  },
  {
    "renderMode": 0,
    "route": "/details-employee/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/employees",
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/employees",
    "route": "/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 4913, hash: '0e5f7a5537d6483ad0a3c2afd21c96031bc3ac3643677d73709d2b1452a5e3b7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1012, hash: 'f39ba730e8647597fbfbf7e856a3a6971bbabd37623a3280a80b60e264816236', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['employees/index.html', {size: 11584, hash: '4cea5381b7ac337d3cdfc450b3b21b2ba9f29b8f7dff9951d99d43d21860e13a', text: () => import('./assets-chunks/employees_index_html.mjs').then(m => m.default)}], 
['create-employees/index.html', {size: 16977, hash: '6898c13572adeadb50b41873c9ef1939cdc5795404f486b83c7b7c416e0abb4b', text: () => import('./assets-chunks/create-employees_index_html.mjs').then(m => m.default)}], 
['update-employee/123/index.html', {size: 17001, hash: 'e023a07cdfeb4eaa0eb3ad2867fa52336ec95ed784a89db95073f8e6d1215038', text: () => import('./assets-chunks/update-employee_123_index_html.mjs').then(m => m.default)}], 
['details-employee/123/index.html', {size: 14157, hash: '8bffda5946a1d3eb590b4375028098baa3d8a00b888debc7bcfdc88f2e820f0f', text: () => import('./assets-chunks/details-employee_123_index_html.mjs').then(m => m.default)}], 
['styles-HWWAQ5UR.css', {size: 231710, hash: 'lm/mL54yJMc', text: () => import('./assets-chunks/styles-HWWAQ5UR_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
