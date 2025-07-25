/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    :root {
      --primary-blue: #1e40af; /* 深蓝 */
      --secondary-blue: #3b82f6; /* 中蓝 */
      --light-blue: #93c5fd; /* 浅蓝 */
      --text-dark: #1e293b; /* 文本深色 */
      --text-light: #f8fafc; /* 文本浅色 */
      --gray-light: #f1f5f9; /* 浅灰色背景 */
      --gray-dark: #0f172a; /* 深灰色背景 */
    }

    /* 全局样式重置 */
    body {
      color: var(--text-dark);
      background-color: white;
    }

    .dark body {
      background-color: var(--gray-dark);
      color: var(--text-light);
    }

    /* 文章列表样式 */
    #posts-wrapper {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .post-item {
      border-bottom: 1px solid #e2e8f0;
      padding: 2rem 0;
    }

    .post-item:last-child {
      border-bottom: none;
    }

    .post-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--primary-blue);
      margin-bottom: 0.5rem;
    }

    .post-excerpt {
      color: #64748b;
      margin-bottom: 1rem;
    }

    .post-meta {
      font-size: 0.875rem;
      color: #94a3b8;
    }
  `}</style>
}

export { Style }
