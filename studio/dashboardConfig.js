export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '611db46792fa07629707149e',
                  title: 'Sanity Studio',
                  name: 'classics-studio',
                  apiId: '0a88e75a-222a-4a3a-83cc-3c19e17f489d'
                },
                {
                  buildHookId: '611db46717dd2a52d87367e4',
                  title: 'Portfolio Website',
                  name: 'classics-web',
                  apiId: '33974703-90b8-4291-8d8f-3d3c5690b25c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HarmanSran/classics',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://classics-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
