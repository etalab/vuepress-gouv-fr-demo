# Contribuer

Les contributions sont appréciées !

Pas de panique, la quasi totalité des fichiers proviennent du thème de base de VuePress. Les seuls fichiers modifiés sont :

- [styles/config.styl](https://github.com/etalab/vuepress-theme-gouv-fr/blob/master/styles/config.styl) : pour les couleurs
- [styles/custom.styl](https://github.com/etalab/vuepress-theme-gouv-fr/blob/master/styles/custom.styl) : pour le surchargement des classes CSS existantes.

Voir [le dépôt Git](https://github.com/etalab/vuepress-theme-gouv-fr).

## Développement en local
Il est conseillé d'utiliser [le dépôt de démonstration](https://github.com/etalab/vuepress-gouv-fr-demo) pour proposer des modifications sur [le dépôt du thème](https://github.com/etalab/vuepress-theme-gouv-fr).

La procédure de développement en local est la suivante :
- Clôner les dépôts de démonstration et du thème
- Installer les dépendances dans chaque dossier : `yarn install`
- Dans le dossier du thème, lancer la commande `yarn link`
- Dans le dossier de démonstration, lancer la commande `yarn link vuepress-theme-gouv-fr`. Cette procédure indique à Yarn d'utiliser la version locale du thème plutôt que celle publiée sur npm.
- Dans le dossier de démonstration, lancer le serveur web `yarn run vuepress dev`
- Modifier le code du thème
- Proposer une *pull-request* sur le dépôt du thème
