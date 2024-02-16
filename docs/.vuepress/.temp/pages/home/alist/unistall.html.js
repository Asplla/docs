import comp from "/Users/xu.wang/Documents/Github/Vuepress/docs/.vuepress/.temp/pages/home/alist/unistall.html.vue"
const data = JSON.parse("{\"path\":\"/home/alist/unistall.html\",\"title\":\"卸载\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"home/alist/unistall.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
