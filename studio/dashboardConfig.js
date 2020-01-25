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
                  buildHookId: '5e2cd64864aa8566f179d86c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8otqwsty',
                  apiId: '9124c7f9-e0d2-4c3a-af8b-cba15e04446a'
                },
                {
                  buildHookId: '5e2cd64822392dee7cb27c89',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-f5df4691',
                  apiId: '3ee2419e-a8bb-4b1c-b080-893963abff30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/M4L0UK4/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-f5df4691.netlify.com', category: 'apps'}
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
