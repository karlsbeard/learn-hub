module.exports = {
  rules: {
    'jd-commit-rule': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'jd-commit-rule': ({ header }) => {
          const reg =
            /^(feat|fix|bugfix|docs|test|refactor|chore|style|revert|perf|model|build)(\(\w+\))?: (?![0-9\s\W]+$)(?!.*[\u4e00-\u9fa5])(?:(?![\u4e00-\u9fa5]\w*)\w+\s+){3,}[\n\d\w\s:/.]*/

          const isValid = reg.test(header)

          return [
            isValid,
            `提交信息格式无效。请遵循以下规则：
      - 必须以下列类型之一开头：(feat|fix|bugfix|docs|test|refactor|chore|style|revert|perf|build):
      - 不能包含中文或中英文混杂
      - 英文单词至少需要4个
      - 不能仅以符号、日期格式结尾
      - 不能以日期格式结尾（YYYY年MM月DD日）`,
          ]
        },
      },
    },
  ],
  prompt: {
    types: [
      { value: 'feat', name: 'feat:       新增功能 | A new feature' },
      { value: 'fix', name: 'fix:        修复缺陷 | A bug fix' },
      { value: 'bugfix', name: 'bugfix:     修复缺陷 | A bug fix' },
      {
        value: 'refactor',
        name: 'refactor:   代码重构 | A code change that neither fixes a bug nor adds a feature',
      },
      { value: 'docs', name: 'docs:       文档更新 | Documentation only changes' },
      {
        value: 'chore',
        name: 'chore:      其他修改 | Other changes that do not modify src or test files',
      },
      {
        value: 'style',
        name: 'style:      代码格式 | Changes that do not affect the meaning of the code',
      },
      { value: 'revert', name: 'revert:     回退代码 | Revert to a commit' },
      { value: 'perf', name: 'perf:       性能提升 | A code change that improves performance' },
      {
        value: 'test',
        name: 'test:       测试相关 | Adding missing tests or correcting existing tests',
      },
      {
        value: 'build',
        name: 'build:      构建相关 | Changes that affect the build system or external dependencies',
      },
    ],
  },
}
