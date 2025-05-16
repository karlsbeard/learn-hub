# Learn Hub - 个人学习与技术分享网站

这是一个基于 Next.js 构建的个人学习笔记和技术分享网站，旨在记录学习历程、沉淀技术知识，并探索前端最佳实践。

## 项目特点

- 基于 Next.js App Router 构建，支持服务端渲染和静态站点生成
- 支持 SEO 优化，通过元数据和 OpenGraph 图像提升社交媒体分享体验
- 响应式布局，适配各种设备屏幕
- 使用 TypeScript 提供类型安全
- 使用 Biome 进行代码格式化和 linting
- 采用模块化设计，便于扩展和维护

## 主要技术栈

- **框架**：Next.js 15.x
- **前端库**：React 19
- **样式**：Tailwind CSS 4.x
- **代码质量**：Biome
- **部署目标**：Vercel / GitHub Pages

## 内容模块

网站主要包含两大内容模块：

### 人工智能

- Python
- PyTorch
- LangChain
- RAG（检索增强生成）
- AI Agent
- MCP（大规模内容处理）

### 前端技术

- React
- Vue
- Webpack
- Next.js
- SSR（服务端渲染）
- SEO（搜索引擎优化）

## 快速开始

1. 克隆仓库

```bash
git clone https://github.com/yourusername/learn-hub.git
cd learn-hub
```

2. 安装依赖

```bash
pnpm install
```

3. 启动开发服务器

```bash
pnpm dev
```

4. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 构建与部署

构建生产版本：

```bash
pnpm build
```

本地预览生产版本：

```bash
pnpm start
```

## 项目结构

```
learn-hub/
├── src/
│   ├── app/              # Next.js App Router 路由定义
│   ├── components/       # 可复用组件
│   └── types/            # TypeScript 类型定义
├── public/               # 静态资源
├── biome.json            # Biome 配置
└── package.json          # 项目依赖
```

## 代码规范

本项目使用 Biome 进行代码格式化和 linting，可通过以下命令运行：

```bash
# 格式化代码
pnpm format

# 检查代码
pnpm lint

# 运行所有检查并尝试修复
pnpm check
```

## License

MIT
