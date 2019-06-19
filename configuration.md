# Configuration

La configuration disponible est la même que celle offerte par [le thème par défaut de VuePress](https://vuepress.vuejs.org/default-theme-config/).

## Bandeau blanc
Si le bandeau bleu et rouge vous déplaît, vous pouvez opter pour un bandeau blanc plus sobre.

Modifiez votre fichier de configuration VuePress à l'emplacement `.vuepress/config.js` dans la clé `themeConfig`.

```js
module.exports = {
  themeConfig: {
    variation: 'white',
  }
}
```

Voici un aperçu.

![Démonstration de la variation](/img/variation-white.png)


## Marianne
Si vous avez besoin de faire apparaitre la Marianne dans votre site, vous pouvez la mettre dans votre *header* avec la configuration suivante.

Modifiez votre fichier de configuration VuePress à l'emplacement `.vuepress/config.js` dans la clé `themeConfig`.

```js
module.exports = {
  themeConfig: {
    useMarianne: true,
  }
}
```

Voici un aperçu.

![Démonstration avec la Marianne](/img/marianne.png)


## Page sans marge
Pour avoir une page sans marge, qui prend tout l'espace disponible, vous pouvez ajouter ceci au début de votre fichier Markdown.


```yaml
---
pageClass: full_page
---
```
