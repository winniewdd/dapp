import { GearIcon, Component1Icon, RocketIcon } from '@radix-ui/react-icons'

export const menus = [
    {
        name: 'Console',
        href: '/control',
        icon: RocketIcon,
        external: false
    },
    {
        name: 'Manage',
        href: '/manage',
        icon: Component1Icon,
        external: false
    },
    {
      name: 'Setting',
      href: '/setting',
      icon: GearIcon,
      external: false
  }
]
