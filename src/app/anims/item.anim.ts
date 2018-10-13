import { trigger, state, transition, style, animate, keyframes } from '@angular/animations'

export const itemAnim = trigger('item', [
  state('out', style({
    transform: 'scale(1)', 'border-left-width': '3px'
  })),
  state('hover', style({
    transform: 'scale(1.1)', 'border-left-width': '8px'
  })),
  transition('out => hover', animate('100ms ease-in')),
  transition('hover => hover', animate('100ms ease-out'))
])
