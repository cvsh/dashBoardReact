import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  MailOutlined,
  FileUnknownOutlined,
  MobileOutlined,
  PictureOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
  ShoppingOutlined,
  ShopOutlined,
  GiftOutlined,
  ExpandOutlined
} from '@ant-design/icons';

import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'Основные',
  icon: DashboardOutlined,
  breadcrumb: true,
  submenu: [
    {
      key: 'dashboard',
      path: `${APP_PREFIX_PATH}/main/home`,
      title: 'Дашборд',
      icon: DashboardOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'planner',
      path: `${APP_PREFIX_PATH}/main/planner`,
      title: 'Планировщик',
      icon: ExpandOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'katalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [ 
        {
          key: 'katalog-goods',
          path: `${APP_PREFIX_PATH}/main/catalog/items`,
          title: 'Товары',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'katalog-categories',
          path: `${APP_PREFIX_PATH}/main/catalog/categories`,
          title: 'Категории',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'katalog-collections',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'Коллекции',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'katalog-combo',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'Комбо',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'Заказы',
      icon: ShoppingOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [ 
        {
          key: 'clients-list',
          path: `${APP_PREFIX_PATH}/main/clients/client-list`,
          title: 'Список клиентов',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'clients-group',
          path: `${APP_PREFIX_PATH}/main/clients/client-group`,
          title: 'Группы клиентов',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: 'banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'Баннеры',
      icon: PictureOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'promocodes',
      path: `${APP_PREFIX_PATH}/main/promocodes`,
      title: 'Промокоды',
      icon: GiftOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'offline',
      path: `${APP_PREFIX_PATH}/main/offline`,
      title: 'Офлайн точки',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [ 
        {
          key: 'offline-addresses',
          path: `${APP_PREFIX_PATH}/main/offline/addresses`,
          title: 'Офлайн адреса',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'offline-geozones',
          path: `${APP_PREFIX_PATH}/main/offline/geozones`,
          title: 'Офлайн геозоны',
          icon: '',
          breadcrumb: true,
          submenu: []
        }
      ]
    },
    {
      key: 'employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'Сотрудники',
      icon: TeamOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'broadcasts',
      path: `${APP_PREFIX_PATH}/main/broadcasts`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: true,
      submenu: []
    },
  ]},
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'Системные',
    icon: DashboardOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/system/settings`,
        title: 'Настройки',
        icon: SettingOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'mobile-app',
        path: `${APP_PREFIX_PATH}/system/mobile`,
        title: 'Мобильное приложение',
        icon: MobileOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/system/logs`,
        title: 'Логи',
        icon: FileUnknownOutlined,
        breadcrumb: true,
        submenu: []
      },
    ]
  }
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
