sidebar = [
  {
    title: "L'essentiel",
    collapsable: false,
    children: [
      'installation',
      'markdown',
      'contribuer'
    ]
  },
  {
    title: "Le superflu",
    collapsable: true,
    children: [
      'vide',
    ]
  },
]

module.exports = {
  theme: 'gouv-fr',
  title: 'Démo VuePress Gouv Fr',
  description: "Démonstration du thème VuePress Gouv Fr.",
  head: [
    ['meta', { name: 'theme-color', content: '#0053b3' }]
  ],
  themeConfig: {
    sidebar: sidebar,
    sidebarDepth: 1,
    docsDir: ".",
    repo: 'etalab/vuepress-gouv-fr-demo',
    repoLabel: 'Dépôt Git',
    editLinks: true,
    editLinkText: 'Modifier cette page',
    nav: [
      { text: 'Site web Etalab', link: 'https://etalab.gouv.fr' },
    ]
  }
}
