declare module '*.css';
declare module '*.scss';

import '@awesome.me/webawesome/dist/custom-elements-jsx.d.ts';

declare global {
  interface HTMLElementTagNameMap {
    'wa-button': HTMLElement & {
      variant:
        | 'default'
        | 'primary'
        | 'success'
        | 'neutral'
        | 'warning'
        | 'danger'
        | 'text';
      size: 'small' | 'medium' | 'large';
      disabled: boolean;
    };
    'wa-icon': HTMLElement & {
      name: string;
      label?: string;
    };
    'wa-input': HTMLElement & {
      value: string;
      placeholder?: string;
      disabled?: boolean;
    };
    'wa-card': HTMLElement & {
      title?: string;
      subtitle?: string;
      image?: string;
    };
  }
}
