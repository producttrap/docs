import {defaultTheme, defineUserConfig} from 'vuepress'

export default defineUserConfig({
    lang: 'en-GB',
    title: 'ProductTrap',
    description: 'A driver-based product tracking library for PHP.',
    base: '/producttrap',
    markdown: {
        code: {
            lineNumbers: false
        }
    },
    theme: defaultTheme({
        repo: 'producttrap/producttrap',
        docsRepo: 'producttrap/docs',
        lastUpdated: false,
        contributors: false,
        navbar: [
            {
                text: 'Getting Started',
                link: '/getting-started'
            },
            {
                text: 'Drivers',
                link: '/drivers'
            },
            {
                text: 'Guides',
                children: [
                    {
                        text: 'Creating a Driver',
                        link: '/guides/creating-drivers'
                    },
                    {
                        text: 'Handling Exceptions',
                        link: '/guides/handling-exceptions'
                    }
                ]
            }
        ],
    }),
    plugins: [],
})
