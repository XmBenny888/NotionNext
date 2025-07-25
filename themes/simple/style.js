/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    :root {
      --primary-color: #2563eb; /* 主蓝色 */
      --secondary-color: #1e40af; /* 深蓝色 */
      --accent-color: #3b82f6; /* 亮蓝色 */
      --text-primary: #1e293b; /* 主要文本色 */
      --text-secondary: #64748b; /* 次要文本色 */
      --bg-light: #f8fafc; /* 浅色背景 */
      --card-bg: #ffffff; /* 卡片背景 */
    }

    .dark {
      --primary-color: #3b82f6; /* 深色模式主蓝色 */
      --secondary-color: #93c5fd; /* 深色模式次要蓝色 */
      --accent-color: #60a5fa; /* 深色模式强调色 */
      --text-primary: #f8fafc; /* 深色模式主要文本色 */
      --text-secondary: #cbd5e1; /* 深色模式次要文本色 */
      --bg-light: #0f172a; /* 深色模式浅色背景 */
      --card-bg: #1e293b; /* 深色模式卡片背景 */
    }

    // 底色
    body{
        background-color: var(--bg-light);
    }
    .dark body{
        background-color: var(--bg-light);
    }

    // 文本不可选取
    .forbid-copy {
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    #theme-simple #announcement-content {
      background-color: var(--primary-color);
      color: white;
    }

    #theme-simple .blog-item-title {
      color: var(--text-primary);
    }

    .dark #theme-simple .blog-item-title {
      color: var(--text-primary);
    }

    .notion {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    /* 菜单下划线动画 */
    #theme-simple .menu-link {
        text-decoration: none;
        background-image: linear-gradient(var(--primary-color), var(--primary-color));
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
        color: var(--text-primary);
    }

    #theme-simple .menu-link:hover {
        background-size: 100% 2px;
        color: var(--primary-color);
        cursor: pointer;
    }

    /* 按钮样式 */
    .btn-primary {
        background-color: var(--primary-color);
        color: white;
        border-radius: 0.375rem;
        padding: 0.5rem 1rem;
        font-weight: 500;
        transition: all 0.2s;
    }

    .btn-primary:hover {
        background-color: var(--secondary-color);
        transform: translateY(-2px);
    }

    /* 卡片样式 */
    .service-card {
        background-color: var(--card-bg);
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transition: transform 0.3s ease;
    }

    .service-card:hover {
        transform: translateY(-5px);
    }

  `}</style>
}

export { Style }
