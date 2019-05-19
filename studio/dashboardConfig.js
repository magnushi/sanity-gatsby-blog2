export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5ce1ccf56bc0d7ef5458d60d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog2-studio-3mctyefz',
                  apiId: '9aafd6cf-0f73-4403-b0fc-0ea59cbf2bba'
                },
                {
                  buildHookId: '5ce1ccf597442637a21838d2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog2-web-7ztiacy8',
                  apiId: '2816cacf-a4dc-4ba0-ad3f-72583f1cd332'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog2-web-7ztiacy8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
