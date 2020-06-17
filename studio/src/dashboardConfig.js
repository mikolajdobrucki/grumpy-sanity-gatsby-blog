export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ee9c3fed065b102b8c5ebf3',
                  title: 'Sanity Studio',
                  name: 'grumpy-sanity-gatsby-blog-studio',
                  apiId: 'ea56ac8a-0d16-41b9-9bf5-1935507ee900'
                },
                {
                  buildHookId: '5ee9c3fed065b11319c5e6d3',
                  title: 'Blog Website',
                  name: 'grumpy-sanity-gatsby-blog',
                  apiId: '6642d8e8-e2b4-49e3-b06e-6db75f6cd74f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikolajdobrucki/grumpy-sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://grumpy-sanity-gatsby-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
