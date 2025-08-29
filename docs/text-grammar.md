

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


#### Markdown grammar

- [text.html.markdown](https://github.com/microsoft/vscode/blob/main/extensions/markdown-basics/syntaxes/markdown.tmLanguage.json)


```json
{
    "repository": {
        "fenced_code_block_css": {
			"begin": "(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(css|css.erb)((\\s+|:|,|\\{|\\?)[^`]*)?$)",
			"name": "markup.fenced_code.block.markdown",
			"end": "(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$",
			"beginCaptures": {
				"3": {
					"name": "punctuation.definition.markdown"
				},
				"4": {
					"name": "fenced_code.block.language.markdown"
				},
				"5": {
					"name": "fenced_code.block.language.attributes.markdown"
				}
			},
			"endCaptures": {
				"3": {
					"name": "punctuation.definition.markdown"
				}
			},
			"patterns": [
				{
					"begin": "(^|\\G)(\\s*)(.*)",
					"while": "(^|\\G)(?!\\s*([`~]{3,})\\s*$)",
					"contentName": "meta.embedded.block.css",
					"patterns": [
						{
							"include": "source.css"
						}
					]
				}
			]
		}
    }
}
```

```json
 "grammars": [
    {
        "language": "markdown",
        "scopeName": "text.html.markdown",
        "path": "./syntaxes/markdown.tmLanguage.json",
        "embeddedLanguages": {
            "meta.embedded.block.html": "html",
            "source.js": "javascript",
            "source.css": "css",
            "meta.embedded.block.xml": "xml",
            "meta.embedded.block.javascript": "javascript",
            "meta.embedded.block.json": "json",
        },
    }
```