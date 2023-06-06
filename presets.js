module.exports = {
    presets: [
        {
            name: "refine-antd",
            type: "refine-react",
            answers: {
                "ui-framework": "antd",
                "router-provider": "react-router-v6",
                "data-provider": "data-provider-custom-json-rest",
                "auth-provider": "none",
                "antd-example-pages": "no",
                "mui-example-pages": "no",
                "i18n-no": "no",
                "i18n-antd": "no",
                "i18n-mui": "no",
                "inferencer": "no",
            },
        },
        {
            name: "refine-headless",
            type: "refine-react",
            answers: {
                "ui-framework": "no",
                "router-provider": "react-router-v6",
                "data-provider": "data-provider-custom-json-rest",
                "auth-provider": "none",
                "antd-example-pages": "no",
                "mui-example-pages": "no",
                "i18n-no": "no",
                "i18n-antd": "no",
                "i18n-mui": "no",
                "inferencer": "no",
            },
        },
        {
            name: "refine-mui",
            type: "refine-react",
            answers: {
                "ui-framework": "mui",
                "router-provider": "react-router-v6",
                "data-provider": "data-provider-custom-json-rest",
                "auth-provider": "none",
                "antd-example-pages": "no",
                "mui-example-pages": "no",
                "i18n-no": "no",
                "i18n-antd": "no",
                "i18n-mui": "no",
                "inferencer": "no",
            },
        },
        {
            name: "refine-mantine",
            type: "refine-react",
            answers: {
                'ui-framework': 'mantine',
                'router-provider': 'react-router-v6',
                'data-provider': 'data-provider-custom-json-rest',
                'auth-provider': 'none',
                'antd-example-pages': 'no',
                'mui-example-pages': 'no',
                'mantine-example-pages': 'no',
                'i18n-no': 'no',
                'i18n-antd': 'no',
                'i18n-mui': 'no',
                'i18n-mantine': 'no',
                "inferencer": "no",
            }
        },
        {
            name: "refine-chakra-ui",
            type: "refine-react",
            answers: {
                'ui-framework': 'chakra',
                'router-provider': 'react-router-v6',
                'data-provider': 'data-provider-custom-json-rest',
                'auth-provider': 'none',
                'antd-example-pages': 'no',
                'mui-example-pages': 'no',
                'mantine-example-pages': 'no',
                'chakra-example-pages': 'no',
                'i18n-no': 'no',
                'i18n-antd': 'no',
                'i18n-mui': 'no',
                'i18n-mantine': 'no',
                'i18n-chakra': 'no',
                "inferencer": "no",
            }
        },
        {
            name: "refine-headless-remix",
            type: "refine-remix",
            answers: {
                "ui-framework": "no",
                "data-provider": "data-provider-custom-json-rest",
                "auth-provider": "none",
                "antd-example-pages": "no",
                "mui-example-pages": "no",
                "inferencer": "no",
            },
        },
        {
            name: "refine-antd-nextjs",
            type: "refine-nextjs",
            answers: {
                "ui-framework": "antd",
                "data-provider": "data-provider-custom-json-rest",
                "auth-provider": "none",
                "antd-example-pages": "no",
                "mui-example-pages": "no",
                "i18n-no": "no",
                "i18n-antd": "no",
                "i18n-mui": "no",
                "inferencer": "no",
            },
        },
        {
            name: "refine-antd-supabase",
            type: "refine-react",
            answers: {
                "ui-framework": "antd",
                "router-provider": "react-router-v6",
                "data-provider": "data-provider-supabase",
                "auth-provider": "none",
                "antd-example-pages": "no",
                "mui-example-pages": "no",
                "i18n-no": "no",
                "i18n-antd": "no",
                "i18n-mui": "no",
            },
        },
        {
            name: 'refine-supabase',
            type: 'refine-vite',
            answers: {
               'ui-framework': 'no',
                'router-provider': 'react-router-v6',
                'data-provider': 'data-provider-supabase',
                'i18n-no': 'no',
                'inferencer': 'no',
            }
        }
    ],
};
