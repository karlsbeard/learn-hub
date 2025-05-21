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

优化后的项目结构清晰分离了前端和后端代码：

```
├── public/                 # 静态资源目录
├── src/                    # 源代码目录
│   ├── app/                # Next.js App Router 应用目录
│   │   ├── api/            # API 路由（后端）
│   │   │   ├── auth/       # 认证相关 API
│   │   │   ├── posts/      # 内容相关 API
│   │   │   └── ...         # 其他 API 路由
│   │   ├── (pages)/        # 前端页面路由组织
│   │   │   ├── page.tsx    # 首页
│   │   │   ├── ai/         # AI 相关页面
│   │   │   ├── frontend/   # 前端技术相关页面 
│   │   │   └── ...         # 其他页面路由
│   │   ├── layout.tsx      # 根布局
│   │   └── globals.css     # 全局样式
│   │
│   ├── components/         # 共享组件目录
│   │   ├── ui/             # 基础 UI 组件
│   │   │   ├── Button/     # 按钮组件
│   │   │   ├── Card/       # 卡片组件
│   │   │   └── ...         # 其他 UI 组件
│   │   ├── layout/         # 布局组件
│   │   │   ├── Navigation/ # 导航组件
│   │   │   ├── Footer/     # 页脚组件
│   │   │   └── ...         # 其他布局组件
│   │   ├── features/       # 特性组件（与业务逻辑相关）
│   │   │   ├── Posts/      # 文章相关组件
│   │   │   ├── Auth/       # 认证相关组件
│   │   │   └── ...         # 其他特性组件
│   │
│   ├── lib/                # 前端实用工具和库
│   │   ├── hooks/          # 自定义 React Hooks
│   │   ├── utils/          # 实用工具函数
│   │   └── constants/      # 常量定义
│   │
│   ├── server/             # 服务端代码（后端）
│   │   ├── db/             # 数据库相关代码
│   │   │   ├── schema.ts   # 数据库模式定义
│   │   │   └── index.ts    # 数据库连接和配置
│   │   ├── services/       # 服务层（业务逻辑）
│   │   │   ├── auth.ts     # 认证服务
│   │   │   ├── posts.ts    # 内容服务
│   │   │   └── ...         # 其他服务
│   │   ├── middlewares/    # 中间件
│   │   ├── utils/          # 后端实用工具函数
│   │   └── config/         # 后端配置
│   │
│   ├── types/              # 类型定义
│   │   ├── api.ts          # API 相关类型
│   │   ├── db.ts           # 数据库相关类型
│   │   └── ...             # 其他类型定义
│   │
│   └── styles/             # 全局样式和 Tailwind 配置
│       ├── theme.ts        # Ant Design 主题配置
│       └── tailwind/       # Tailwind 相关配置
│
├── public/                 # 静态资源
├── .env.local              # 本地环境变量（不提交到版本控制）
├── .env.example            # 环境变量示例（可提交到版本控制）
├── next.config.js          # Next.js 配置
├── tailwind.config.js      # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 项目依赖和脚本
```

## 目录说明

### 前端部分

- **app/(pages)/**: 存放所有前端页面，组织成路由结构
- **components/**: 组件库，分为基础 UI 组件、布局组件和特性组件
  - **ui/**: 可复用的基础 UI 组件，如按钮、卡片等
  - **layout/**: 页面布局相关组件，如导航、页脚等
  - **features/**: 与业务功能相关的复杂组件
- **lib/**: 前端工具函数、自定义 hooks 和常量
- **styles/**: 全局样式定义和主题配置

### 后端部分

- **app/api/**: API 路由（Next.js API 路由），作为后端 API 的入口点
- **server/**: 服务端代码
  - **db/**: 数据库相关代码
  - **services/**: 服务层，实现业务逻辑
  - **middlewares/**: API 中间件
  - **utils/**: 服务端工具函数
  - **config/**: 服务端配置

### 共享部分

- **types/**: 类型定义，前后端共享

## 优化说明

1. **前后端分离**：
   - 前端代码主要在 `app/(pages)/`, `components/`, `lib/` 目录下
   - 后端代码主要在 `app/api/` 和 `server/` 目录下
   - 通过明确的目录结构区分前后端代码

2. **组件组织**：
   - 按照职责将组件分为 UI、布局和特性三类
   - 每个组件都有自己的目录，包含组件文件、样式和单元测试

3. **API 组织**：
   - 在 `app/api/` 下按资源或功能组织 API 路由
   - 将业务逻辑抽离到 `server/services/` 中，保持 API 路由简洁

4. **类型安全**：
   - 在 `types/` 目录中集中定义所有类型
   - 确保前后端共享类型定义，保持一致性

5. **配置分离**：
   - 使用 `.env` 文件管理环境变量
   - 将配置逻辑集中在专门的配置文件中

这种结构适合中小型全栈 Next.js 应用，既保持了 Next.js 的全栈特性，又在逻辑上清晰分离了前端和后端代码。

## 如何使用

1. 克隆项目
2. 安装依赖: `npm install` 或 `yarn` 或 `pnpm install`
3. 复制 `.env.example` 为 `.env.local` 并填写环境变量
4. 运行开发服务器: `npm run dev`

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
