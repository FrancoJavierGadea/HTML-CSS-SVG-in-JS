

## Grammar inyection

```json
{
    "injectionSelector": "L:source.js -comment -(string -meta.embedded)"
}
```

`L`: Indica que la gramática que estás inyectando se debe aplicar a la izquierda (Left) de las reglas existentes del lenguaje. Es decir:

    > Tu gramática se evaluará antes que las reglas ya definidas del lenguaje base.

    Esto significa que si hay un conflicto entre lo que tu gramática quiere resaltar y lo que ya está definido en la gramática original (por ejemplo, la de JavaScript), tu gramática tiene prioridad.

<br>

`-comment`: excluir comentarios, excluye todos los nodos que tengan el scope `comment`

<br>

`-(string -meta.embedded)`: excluir todos los `strings` que tengan el scope `meta.embedded`

    `-(A B)` significa: excluir cuando ambos scopes `A` y `B` están presentes al mismo tiempo.


    Evita que se aplique el highlighting a los strings dentro de `${}` dentro de un template literal

    ```js
    /*html*/`
    <h1>HTML in JS</h1>
    ${
        /*html*/`
            <h1>HTML in JS</h1>
            ${template}
        `
    }
    `
    ```



## Grammar reference

- [text.html.basic](https://github.com/microsoft/vscode/blob/main/extensions/html/syntaxes/html.tmLanguage.json)
- [source.css](https://github.com/microsoft/vscode/blob/main/extensions/css/syntaxes/css.tmLanguage.json)
- [text.xml](https://github.com/microsoft/vscode/blob/main/extensions/xml/syntaxes/xml.tmLanguage.json)

#### JavaScript grammar

- [source.js](https://github.com/microsoft/vscode/blob/main/extensions/javascript/syntaxes/JavaScript.tmLanguage.json)
- [source.js.jsx](https://github.com/microsoft/vscode/blob/main/extensions/javascript/syntaxes/JavaScriptReact.tmLanguage.json)

#### TypeScript grammar

- [source.ts](https://github.com/microsoft/vscode/blob/main/extensions/typescript-basics/syntaxes/TypeScript.tmLanguage.json)
- [source.tsx](https://github.com/microsoft/vscode/blob/main/extensions/typescript-basics/syntaxes/TypeScriptReact.tmLanguage.json)