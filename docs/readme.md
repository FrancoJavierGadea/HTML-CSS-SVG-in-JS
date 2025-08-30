
## `/*html*/`

### Modifing the `text.html.basic` grammar

**Visual Studio Code**  -..................... defines the `text.html.basic` grammar for `html` here:

[html.tmLanguage.json](https://github.com/microsoft/vscode/blob/main/extensions/html/syntaxes/html.tmLanguage.json)

This grammar not support `${}` js expressions but default.

I create my self `text.html.withjs` grammar forking the deafult `text.html.basic` grammar and adding:

```json
{
    "include": "source.js#template-substitution-element"
}
```

This define how process the `${}` expressions inside template literals, you can show it here:

[JavaScript.tmLanguage.json source.js#template-substitution-element](https://github.com/microsoft/vscode/blob/e83d239a0a21214360b355038c6a71a301e4b344/extensions/javascript/syntaxes/JavaScript.tmLanguage.json#L4809)


<br><br>

## `/*svg*/` and `/*xml*/`


[how text.html.basic capture the `<style>` tag](https://github.com/microsoft/vscode/blob/e83d239a0a21214360b355038c6a71a301e4b344/extensions/html/syntaxes/html.tmLanguage.json#L1752)