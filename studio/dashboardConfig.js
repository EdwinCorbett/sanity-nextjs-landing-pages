export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f65164a60963e00a673bebe',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-c7vrtcwm',
                  apiId: '280e2645-e332-4c74-85de-85dea807086f'
                },
                {
                  buildHookId: '5f65164b4e977c00fb9dbb1c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-u3x1tp4v',
                  apiId: '5516baba-6f4b-4a6e-8018-80835245c8ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/EdwinCorbett/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-u3x1tp4v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
