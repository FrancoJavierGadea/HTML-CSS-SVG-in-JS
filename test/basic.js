
let color = '#ffffff';
let attribute = 'fill';
let value = 'red';

const css = /*css*/`
    .box {
        color: ${color};
    }
`;

const html = /*html*/`
    <div class="box" value="${value}" >Hola Mundo ${css}</div>
`;

const svg = /*svg*/`
    <svg width="50" height="50">
      	<circle cx="25" cy="25" r="20" fill="red"  fill="${css}" ${attribute}="${value}" />

        <style>
        
        </style>

        <f>
        </f>
    </svg>
`;


