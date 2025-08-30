
# HTML CSS SVG in JS – Making Of

## `/*html*/`

#### Modifing the `text.html.basic` grammar

**Visual Studio Code**  defines the `text.html.basic` grammar for `html` here:
[html.tmLanguage.json](https://github.com/microsoft/vscode/blob/main/extensions/html/syntaxes/html.tmLanguage.json)

By default, this grammar does not support **JavaScript template substitutions** (`${}`) inside template literals.

To fix this, I created my own grammar:
[`text.html.withjs`](../syntaxes/languages/html-with-js.tmLanguage.json]

which is a fork of the default `text.html.basic` grammar with the following addition:

```json
{
    "include": "source.js#template-substitution-element"
}
```

This defines how ${} expressions are processed inside template literals.

Reference: [JavaScript.tmLanguage.json source.js#template-substitution-element](https://github.com/microsoft/vscode/blob/e83d239a0a21214360b355038c6a71a301e4b344/extensions/javascript/syntaxes/JavaScript.tmLanguage.json#L4809)


<br><br>

## `/*svg*/` and `/*xml*/`

Since Visual Studio Code does not provide a dedicated `svg` grammar by default, it relies on the `xml` grammar for highlighting.

#### Modifing the `text.xml` grammar

I forked the `text.xml` grammar defined here:
[xml.tmLanguage.json - text.xml](https://github.com/microsoft/vscode/blob/main/extensions/xml/syntaxes/xml.tmLanguage.json)

to create my custom grammar: [`text.xml.withjs`](../syntaxes/languages/xml-with-js.tmLanguage.json)

<br>

I added support for embedding `<style>` blocks, similar to how the `html` grammar (`text.html.basic`) handles them:

[See how `text.html.basic` captures `<style>`](https://github.com/microsoft/vscode/blob/main/extensions/html/syntaxes/html.tmLanguage.json#L1752)


<br>

Additionally, I enabled support for ${} expressions by including: `source.js#template-substitution-element`


<br><br>

## `/*css*/`

#### Modifing the `source.css` grammar

I forked the `source.css` grammar defined here:
[css.tmLanguage.json - source.css](https://github.com/microsoft/vscode/blob/main/extensions/css/syntaxes/css.tmLanguage.json)

to create my custom grammar:
[`source.css.withjs`](../syntaxes/languages/css-with-js.tmLanguage.json)

This grammar adds support for ${} expressions using: `source.js#template-substitution-element`


<br>

#### Updating embedded CSS in HTML and XML

Inside my custom grammars (`text.html.withjs` and `text.xml.withjs`), I replaced the reference to the default `source.css` grammar with `source.css.withjs`.

This ensures full support for `${}` expressions in embedded `CSS` inside both `HTML` and `XML`.