# HTML CSS SVG in JS

![preview](./assets/preview.webp)

Highlight **template strings** in `JavaScript` and `TypeScript` files with `HTML`, `CSS`, `SVG` or `XML` syntax highlighting using **tagged comments**.

> [**VS Code Marketplace**](https://marketplace.visualstudio.com/items?itemName=FrancoJavierGadea.HTML-CSS-SVG-in-JS)

> [**Github**](https://github.com/FrancoJavierGadea/HTML-CSS-SVG-in-JS)

<br>

## ✨ Features

Colorizes template strings that start with:

- `/*html*/` highlighted as `HTML`
- `/*css*/` highlighted as `CSS`
- `/*svg*/` highlighted as `SVG`
- `/*xml*/` highlighted as `XML`

Works in `.js`, `.ts`, `.jsx`, and `.tsx` files.

No extra setup required — just install and start coding.

### 📝 Snippets

Quickly insert template literals for `HTML`, `CSS`, `SVG` and `XML` using the following snippets:

- `html template block`:

    ```js
    /*html*/``
    ```

- `css template block`:

    ```js
    /*css*/``
    ```

- `svg template block`:

    ```js
    /*svg*/``
    ```

- `xml template block`:

    ```js
    /*xml*/``
    ```

<br>

## 🖼️ Example

```js
const button = /*html*/`
    <button class="primary">
      ${'Click me !'}
    </button>
`;

const styles = /*css*/`
    .primary {
        background: #007bff;
        color: ${white};
        padding: 8px 12px;
        border-radius: 4px;
    }
`;

const icon = /*svg*/`
	<svg viewBox="0 0 24 24">
		<circle cx="12" cy="12" r="10" fill="${'#007bff'}" />
	</svg>
`;

const xml = /*xml*/`
    <?xml version="1.0"?>
    <customers>
        <customer id="55000">
            <name>Charter Group</name>
            <address>
                <street>100 Main</street>
                <city>Framingham</city>
                <state>MA</state>
                <zip>01701</zip>
            </address>
        </customer>
    </customers>
`;
```

<br>

## 📦 Installation

#### Install from VS Code Marketplace

- Open Extensions View in `VS Code`.

- Search for `"HTML CSS SVG in JS"`.

- Click Install.

#### Install from GitHub

- Download the `.vsix` file from [releases](https://github.com/FrancoJavierGadea/HTML-CSS-SVG-in-JS/releases).

- Open `VS Code`.

- Open command palette (`Ctrl+Shift+P`).

- Type `Extensions: Install Extension` and select the `.vsix` file.

#### Install from command line

- Download the `.vsix` file from [releases](https://github.com/FrancoJavierGadea/HTML-CSS-SVG-in-JS/releases).

- Open a terminal.

- Run

	```shell
	code --install-extension html-css-svg-in-js-0.0.1.vsix
	```

<br>

## 💖 Support This Project

If you find this extension helpful and would like to support its development, consider buying me a coffee!

Your support helps me keep improving and maintaining this project. Every little bit is appreciated 🙌

☕ [Buy me a coffee](https://buymeacoffee.com/1812)

<br>

## 📄 License

```text
MIT License
```