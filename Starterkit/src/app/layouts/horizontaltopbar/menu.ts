import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 2,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/dashboard',
                parentId: 1
            },
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
                link: '/',
                parentId: 1
            },
            {
                id: 4,
                label: 'MENUITEMS.DASHBOARDS.LIST.CRYPTO',
                link: '/',
                parentId: 1
            },
            {
                id: 5,
                label: 'MENUITEMS.DASHBOARDS.LIST.BLOG',
                link: '/',
                parentId: 1
            },
        ]
    },
    {
        id: 6,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'bx-tone',
        isUiElement: true,
        subItems: [
            {
                id: 7,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/',
                parentId: 6
            },
            {
                id: 8,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/',
                parentId: 6
            },
            {
                id: 9,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/',
                parentId: 6
            },
            {
                id: 10,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/',
                parentId: 6
            },
            {
                id: 11,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/',
                parentId: 6
            },
            {
                id: 12,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/',
                parentId: 6
            },
            {
                id: 13,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/',
                parentId: 6
            },
            {
                id: 14,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/',
                parentId: 6
            },
            {
                id: 15,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/',
                parentId: 6
            },
            {
                id: 16,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/',
                parentId: 6
            },
            {
                id: 16,
                label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
                link: '/',
                parentId: 6
            },
            {
                id: 17,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/',
                parentId: 6
            },
            {
                id: 18,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/',
                parentId: 6
            },
            {
                id: 19,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/',
                parentId: 6
            },
            {
                id: 20,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/',
                parentId: 6
            },
            {
                id: 21,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/',
                parentId: 6
            },
            {
                id: 22,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/',
                parentId: 6
            },
            {
                id: 23,
                label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
                link: '/',
                parentId: 6
            },
        ]
    },
    {
        id: 24,
        label: 'MENUITEMS.APPS.TEXT',
        icon: 'bx-customize',
        subItems: [
            {
                id: 25,
                label: 'MENUITEMS.CALENDAR.TEXT',
                link: '/',
                parentId: 24
            },
            {
                id: 26,
                label: 'MENUITEMS.CHAT.TEXT',
                link: '/',
                parentId: 24
            },
            {
                id: 27,
                label: 'MENUITEMS.FILEMANAGER.TEXT',
                link: '/',
                parentId: 24
            },
            {
                id: 28,
                label: 'MENUITEMS.EMAIL.TEXT',
                subItems: [
                    {
                        id: 29,
                        label: 'MENUITEMS.EMAIL.LIST.INBOX',
                        link: '/',
                        parentId: 28
                    },
                    {
                        id: 30,
                        label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                        link: '/',
                        parentId: 28
                    },
                    {
                        id: 31,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
                        parentId: 28,
                        subItems: [
                            {
                                id:32 ,
                                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
                                link: '/',
                                parentId:31 
                            },
                            {
                                id:33 ,
                                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
                                link: '/',
                                parentId:31 
                            },
                            {
                                id:34 ,
                                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
                                link: '/',
                                parentId:31 
                            }
                        ]
                    }
                ]
            },
            {
                id: 35,
                label: 'MENUITEMS.ECOMMERCE.TEXT',
                subItems: [
                    {
                        id: 36,
                        label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 37,
                        label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 38,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 39,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 40,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 41,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 42,
                        label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 43,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                        link: '/',
                        parentId: 35
                    },
                ]
            },
            {
                id: 44,
                label: 'MENUITEMS.CRYPTO.TEXT',
                icon: 'bx-bitcoin',
                subItems: [
                    {
                        id: 45,
                        label: 'MENUITEMS.CRYPTO.LIST.WALLET',
                        link: '/',
                        parentId: 44
                    },
                    {
                        id: 46,
                        label: 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
                        link: '/',
                        parentId: 44
                    },
                    {
                        id: 47,
                        label: 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
                        link: '/',
                        parentId: 44
                    },
                    {
                        id: 48,
                        label: 'MENUITEMS.CRYPTO.LIST.LENDING',
                        link: '/',
                        parentId: 44
                    },
                    {
                        id: 49,
                        label: 'MENUITEMS.CRYPTO.LIST.ORDERS',
                        link: '/',
                        parentId: 44
                    },
                    {
                        id: 50,
                        label: 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
                        link: '/',
                        parentId: 44
                    },
                    {
                        id: 51,
                        label: 'MENUITEMS.CRYPTO.LIST.ICOLANDING',
                        link: '/',
                        parentId: 44
                    }
                ]
            },
            {
                id: 52,
                label: 'MENUITEMS.PROJECTS.TEXT',
                subItems: [
                    {
                        id: 53,
                        label: 'MENUITEMS.PROJECTS.LIST.GRID',
                        link: '/',
                        parentId: 52
                    },
                    {
                        id: 54,
                        label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
                        link: '/',
                        parentId: 52
                    },
                    {
                        id: 55,
                        label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
                        link: '/',
                        parentId: 52
                    },
                    {
                        id: 56,
                        label: 'MENUITEMS.PROJECTS.LIST.CREATE',
                        link: '/',
                        parentId: 52
                    }
                ]
            },
            {
                id: 57,
                label: 'MENUITEMS.TASKS.TEXT',
                subItems: [
                    {
                        id: 58,
                        label: 'MENUITEMS.TASKS.LIST.TASKLIST',
                        link: '/',
                        parentId: 57
                    },
                    {
                        id: 59,
                        label: 'MENUITEMS.TASKS.LIST.KANBAN',
                        link: '/',
                        parentId: 57
                    },
                    {
                        id: 60,
                        label: 'MENUITEMS.TASKS.LIST.CREATETASK',
                        link: '/',
                        parentId: 57
                    }
                ]
            },
            {
                id: 61,
                label: 'MENUITEMS.CONTACTS.TEXT',
                icon: 'bxs-user-detail',
                subItems: [
                    {
                        id: 62,
                        label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                        link: '/',
                        parentId: 61
                    },
                    {
                        id: 63,
                        label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                        link: '/',
                        parentId: 61
                    },
                    {
                        id: 64,
                        label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                        link: '/',
                        parentId: 61
                    }
                ]
            },
            {
                id: 65,
                label: 'MENUITEMS.BLOG.TEXT',
                subItems: [
                    {
                        id: 66,
                        label: 'MENUITEMS.BLOG.LIST.BLOGLIST',
                        link: '/',
                        parentId: 65
                    },
                    {
                        id: 67,
                        label: 'MENUITEMS.BLOG.LIST.BLOGGRID',
                        link: '/',
                        parentId: 65
                    },
                    {
                        id: 68,
                        label: 'MENUITEMS.BLOG.LIST.DETAIL',
                        link: '/',
                        parentId: 65
                    },
                ]
            },
        ]
    },
    {
        id: 69,
        icon: 'bx-collection',
        label: 'MENUITEMS.COMPONENTS.TEXT',
        subItems: [
            {
                id: 70,
                label: 'MENUITEMS.FORMS.TEXT',
                subItems: [
                    {
                        id: 71,
                        label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 72,
                        label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 73,
                        label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 74,
                        label: 'MENUITEMS.FORMS.LIST.EDITOR',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 75,
                        label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 76,
                        label: 'MENUITEMS.FORMS.LIST.REPEATER',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 77,
                        label: 'MENUITEMS.FORMS.LIST.WIZARD',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 78,
                        label: 'MENUITEMS.FORMS.LIST.MASK',
                        link: '/',
                        parentId: 70
                    }
                ]
            },
            {
                id: 79,
                label: 'MENUITEMS.TABLES.TEXT',
                subItems: [
                    {
                        id: 80,
                        label: 'MENUITEMS.TABLES.LIST.BASIC',
                        link: '/',
                        parentId: 79
                    },
                    {
                        id: 81,
                        label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                        link: '/',
                        parentId: 79
                    }
                ]
            },
            {
                id: 82,
                label: 'MENUITEMS.CHARTS.TEXT',
                subItems: [
                    {
                        id: 83,
                        label: 'MENUITEMS.CHARTS.LIST.APEX',
                        link: '/',
                        parentId: 82
                    },
                    {
                        id: 84,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                        link: '/',
                        parentId: 82
                    },
                    {
                        id: 85,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                        link: '/',
                        parentId: 82
                    },
                    {
                        id: 86,
                        label: 'MENUITEMS.CHARTS.LIST.ECHART',
                        link: '/',
                        parentId: 82
                    }
                ]
            },
            {
                id: 87,
                label: 'MENUITEMS.ICONS.TEXT',
                subItems: [
                    {
                        id: 88,
                        label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                        link: '/',
                        parentId: 87
                    },
                    {
                        id: 89,
                        label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                        link: '/',
                        parentId: 87
                    },
                    {
                        id: 90,
                        label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                        link: '/',
                        parentId: 87
                    },
                    {
                        id: 91,
                        label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                        link: '/',
                        parentId: 87
                    },
                ]
            },
            {
                id: 92,
                label: 'MENUITEMS.MAPS.TEXT',
                subItems: [
                    {
                        id: 93,
                        label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                        link: '/',
                        parentId: 92
                    }
                ]
            }
        ]
    },
    {
        id: 94,
        label: 'HEADER.EXTRA_PAGES.TITLE',
        icon: 'bx-file',
        subItems: [
            {
                id: 95,
                label: 'MENUITEMS.INVOICES.TEXT',
                subItems: [
                    {
                        id: 96,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                        link: '/',
                        parentId: 95
                    },
                    {
                        id: 97,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                        link: '/',
                        parentId: 95
                    },
                ]
            },
            {
                id: 98,
                label: 'MENUITEMS.AUTHENTICATION.TEXT',
                subItems: [
                    {
                        id: 99,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 100,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN2',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 101,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 102,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER2',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 103,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 104,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 105,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 106,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 107,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 108,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 109,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 110,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 111,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 112,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2',
                        link: '/',
                        parentId: 98
                    }
                ]
            },
            {
                id: 113,
                label: 'MENUITEMS.UTILITY.TEXT',
                icon: 'bx-file',
                subItems: [
                    {
                        id: 114,
                        label: 'MENUITEMS.UTILITY.LIST.STARTER',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 115,
                        label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 116,
                        label: 'Coming Soon',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 116,
                        label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 117,
                        label: 'MENUITEMS.UTILITY.LIST.FAQS',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 118,
                        label: 'MENUITEMS.UTILITY.LIST.PRICING',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 119,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 120,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                        link: '/',
                        parentId: 113
                    },
                ]
            }
        ]
    }
];

