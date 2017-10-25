window.demoLibs = {};

const ulList = document.createElement('ul');
ulList.setAttribute('id', 'parent-list');
ulList.addEventListener("click", function(e) {
	if(e.target && e.target.nodeName === 'A') {
		window.demoLibs[e.target.id] && window.demoLibs[e.target.id]();
	}
});

document.body.appendChild(ulList);

[
  {
    key: 'func-prog',
    name: 'Functional Programming',
    src: './func-prog/index.js',
  },{
    key: 'array-func',
    name: 'Array Functions',
    src: './array-func/index.js',
  },{
    key: 'arrow-func',
    name: 'Arrow Functions',
    src: './arrow-func/index.js',
  },{
    key: 'bind-call-apply',
    name: 'Bind Call Apply',
    src: './bind-call-apply/index.js',
  },{
    key: 'bind',
    name: 'Bind In Class',
    src: './bind-in-es5class/index.js',
  },{
    key: 'let-const-var',
    name: 'Let Const Var',
    src: './let-const-var/index.js',
  },{
    key: 'destruct',
    name: 'Destructuring',
    src: './destruct/index.js',
  },{
    key: 'spread',
    name: 'Spread',
    src: './spread/index.js',
  },{
    key: 'promises',
    name: 'Promises',
    src: './promises/index.js',
  },{
    key: 'default-params',
    name: 'Default Parameters',
    src: './default-params/index.js',
  },{
    key: 'template-literals',
    name: 'Template Literals',
    src: './template-literals/index.js',
  },{
    key: 'object-literals',
    name: 'Object Literals',
    src: './object-literals/index.js',
  },{
    key: 'func-curry',
    name: 'Function Currying',
    src: './func-curry/index.js',
  },{
    key: 'closures',
    name: 'Closures',
    src: './closures/index.js',
  },
].sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  else if (nameA > nameB) return 1;
  else return 0;
  
}).forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.setAttribute('id', item.key);
  a.setAttribute('href', '#');
  a.text = item.name;
  li.appendChild(a);
  ulList.appendChild(li);
  if (item.src) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = item.src;
    document.body.appendChild(script);
  }
});
