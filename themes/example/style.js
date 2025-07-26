/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{
    // 底色
    .dark body{
        background-color: black;
    }
    
    // 添加字体定义
    :root {
      --font-sans: 'Inter', system-ui, sans-serif;
      --font-display: 'Montserrat', sans-serif;
    }
    
    body {
      font-family: var(--font-sans);
      line-height: 1.6;
    }
    
    h1, h2, h3, h4 {
      font-family: var(--font-display);
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 0.8rem;
    }
  }</style>
}

export { Style }
