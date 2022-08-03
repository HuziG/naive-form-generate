// 布局型组件 【左面板】
export const layoutComponents = [
  {
    __config__: {
      layout: 'rowFormItem',
      tagIcon: 'i-ic:outline-align-horizontal-left',
      tag: 'n-grid',
      label: '行容器',
      layoutTree: true,
      document: 'https://element.eleme.cn/#/zh-CN/component/layout#row-attributes',
    },
    type: 'default',
    justify: 'start',
    align: 'top',
  },
  {
    __config__: {
      label: '按钮',
      showLabel: true,
      changeTag: true,
      labelWidth: null,
      tag: 'n-button',
      tagIcon: 'i-ic:outline-outbond',
      span: 24,
      layout: 'colFormItem',
      document: 'https://www.naiveui.com/zh-CN/light/components/button',
    },
    __slot__: {
      default: '主要按钮',
    },
    __setting__: {
      attrType: {
        formType: 'select',
        default: 'button',
        options: ['button', 'submit', 'reset'],
      },
      block: {
        formType: 'switch',
        default: false,
      },
      bordered: {
        formType: 'switch',
        default: false,
      },
      circle: {
        formType: 'switch',
        default: false,
      },
      color: {
        formType: 'input',
        default: '',
      },
      dashed: {
        formType: 'switch',
        default: false,
      },
      disabled: {
        formType: 'switch',
        default: false,
      },
      focusable: {
        formType: 'switch',
        default: true,
      },
      ghost: {
        formType: 'switch',
        default: false,
      },
      nativeFocusBehavior: {
        formType: 'switch',
        default: false,
      },
      iconPlacement: {
        formType: 'switch',
        default: false,
      },
      keyboard: {
        formType: 'switch',
        default: true,
      },
      loading: {
        formType: 'switch',
        default: false,
      },
      quaternary: {
        formType: 'switch',
        default: false,
      },
      round: {
        formType: 'switch',
        default: false,
      },
      size: {
        formType: 'select',
        default: 'medium',
        options: ['tiny', 'small', 'medium', 'large'],
      },
      secondary: {
        formType: 'switch',
        default: false,
      },
      strong: {
        formType: 'switch',
        default: false,
      },
      tertiary: {
        formType: 'switch',
        default: false,
      },
      text: {
        formType: 'switch',
        default: false,
      },
      textColor: {
        formType: 'input',
        default: undefined,
      },
      type: {
        formType: 'select',
        default: 'default',
        options: ['default', 'tertiary', 'primary', 'success', 'info', 'warning', 'error'],
      },
      tag: {
        formType: 'input',
        default: 'button',
      },
    },
  },
]
