const slides = [

{
  id: '1',
  title: 'Ember.js: Die&nbsp;größten Stützräder der&nbsp;Welt'
},
{
  id: '234523525',
  title: '@<a href="https://twitter.com/fredericmarx" rel="author">fredericmarx</a>'
},
{
  id: '235634634',
  title: 'Schnelleinstieg in die Entwicklung modularer Webapps mit <strike>ES6</strike> ES2015 und Ember.js'
},
{
  id: '967345789',
  title: 'Schnelleinstieg in die <em>Entwicklung modularer Webapps</em> mit <strike>ES6</strike> ES2015 und Ember.js'
},
{
  id: '235623464',
  title: 'Was macht eine Website zur Webapp?'
},
{
  id: '463474574',
  title: 'UX',
  main: `
  <ul>
  </ul>
  `
},
{
  id: '235626784',
  title: 'UX',
  main:`
  <ul>
    <li>Input / Output</li>
  </ul>
  `
},
{
  id: '2647856774',
  title: 'UX',
  main:`
  <ul>
    <li>Input / Output</li>
    <li>Asynchronität</li>
  </ul>
  `
},
{
  id: '2352352367',
  title: 'Infrastruktur',
  main:`
  <ul>
  </ul>
  `
},
{
  id: '6345673775',
  title: 'Infrastruktur',
  main:`
  <ul>
    <li>Bound Templates</li>
  </ul>
  `
},
{
  id: '534634673',
  title: 'Infrastruktur',
  main:`
  <ul>
    <li>Bound Templates</li>
    <li>Data Models</li>
  </ul>
  `
},
{
  id: '12412451',
  title: 'Infrastruktur',
  main:`
  <ul>
    <li>Bound Templates</li>
    <li>Data Models</li>
    <li>Routing</li>
  </ul>
  `
},
{
  id: '23464673',
  title: 'Infrastruktur',
  main:`
  <ul>
    <li>Bound Templates</li>
    <li>Data Models</li>
    <li>Routing</li>
    <li>API</li>
  </ul>
  `
},
{
  id: '643523424',
  main:`
  <blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">web developer (n)&#10;&#10;Someone who is paid to repeatedly reimplement a web browser in JavaScript to avoid page reloads.</p>&mdash; Ross Penman (@PenmanRoss) <a href="https://twitter.com/PenmanRoss/status/579778675865993216">March 22, 2015</a></blockquote>
  `
},
{
  id: '123123144',
  main:'<iframe src="//giphy.com/embed/jGa1qMM9EM944" width="480" height="314" frameBorder="0" style="max-width: 100%" class="giphy-embed" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
},
{
  id: '45745678',
  title: 'Deswegen gibt es Frameworks.',
},
{
  id: '12344346',
  title: 'Frameworks considered harmful!',
},
{
  id: '85673456',
  main:`
  <blockquote ><p>If initial load times are an important criteria in your consideration of tools, you may not be able to use many of these tools today.</p>&mdash; Filamentgroup (@filamentgroup) <a href="http://www.filamentgroup.com/lab/mv-initial-load-times.html">Dec 12, 2014</a></blockquote>
  `
},
{
  id: '23423562',
  main:`
  <blockquote ><p>If you’re OK putting all your eggs in a single point-of-failure basket, use Ember.</p>&mdash; Jeremy Keith (@adactio) <a href="https://twitter.com/zeldman/status/582943520714948608">Mar 31, 2015</a></blockquote>
  `
},
{
  id: '34685678',
  main:`
  <blockquote ><p>Tools don’t solve problems any more, they have become the problem.</p>&mdash; PPK (@ppk) <a href="http://www.quirksmode.org/blog/archives/2015/05/tools_dont_solv.html">May 14, 2015</a></blockquote>
  `
},
{
  id: '34632473',
  title: 'Welche Probleme löst Ember.js?',
},
{
  id: '74563457',
  title: 'Webapp Infrastruktur',
  main:`
  <ul>
    <li>Bound Templates</li>
    <li>Data Models</li>
    <li>Routing</li>
    <li>API</li>
  </ul>
  `
},
{
  id: '34578456',
  title: 'Ember.js Infrastruktur',
  main:`
  <ul>
    <li>Bound Templates</li>
    <li>Data Models</li>
    <li>Routing</li>
    <li>Anwendungsarchitektur</li>
    <li>Build Tools</li>
  </ul>
  `
},
{
  id: 'magic',
  main:'<iframe src="//giphy.com/embed/n0WvhHFTpihk4" width="480" height="274" frameBorder="0" style="max-width: 100%" class="giphy-embed" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
},
{
  id: 'clarke',
  title: '„Any sufficiently advanced technology is indistinguishable from magic.“',
  subtitle: 'Arthur C. Clarke'
},
{
  id: 'binding1',
  code:
`
<p>{{input type="text" value=name}}</p>
<p>My name is {{name}} and I want to learn Ember!</p>
`
},
{
  id: 'templates',
  title: 'Bound Templates mit <strike>Handlebars</strike> Htmlbars'
},
{
  id: '8456465734',
  code:
`// application.hbs

<header></header>
<main>{{outlet}}</main>
<footer></footer>
`
},
{
  id: '234685646',
  code:
`// application.hbs
// named outlets

<header></header>
<main>{{outlet 'main'}}</main>
<aside>{{outlet 'sidebar'}}</aside>
<footer></footer>
`
},
{
  id: '07883658445',
  title: 'Nested Templates'
},
{
  id: '9346845623',
  code:
`// articles.hbs
<h1>Artikel</h1>
{{outlet}}
`
},
{
  id: '93465892674',
  code:
`// articles.hbs
<h1>Artikel</h1>
{{outlet}}

// articles/index.hbs
<h2>Übersicht</h2>
`
},
{
  id: '9128946838',
  code:
`// articles.hbs
<h1>Artikel</h1>
{{outlet}}

// articles/index.hbs
<h2>Übersicht</h2>

// articles/article.hbs
<h2>{{title}}</h2>
`
},
{
  id: 'helpers',
  title: 'Helpers'
},
{
  id: '7234765734345',
  code:
`// Outlet Helper
{{outlet}}

// Action Helper
<button {{action 'actionName'}}>
  click me
</button>

// Input Helper
{{input value='Test'}}`
},
{
  id: '874562346477',
  code:
`// If helper

{{#if person}}
  Willkommen zurück, {{person.name}}!
{{else}}
  Kennen wir uns?
{{/if}}
`
},
{
  id: '745234637345',
  code:
`// Each helper

{{#each person}}
  {{person.name}}
{{else}}
  Keine Personen vorhanden
{{/each}}
`
},
{
  id: '257238703423',
  title: 'Anwendungslogik mit Helpern implementieren ist keine gute Idee.'
},
{
  id: 'custom-helpers',
  title: 'Custom Helpers'
},
{
  id: '98883870248',
  title: 'Wiederverwendbare Einwegtransformationen auf Templateebene'
},
{
  id: 'components',
  title: 'Components'
},
{
  id: '02676077256',
  title: 'Users over authors over implementors over specifiers over theoretical purity.',
  subtitle: 'W3C HTML Design Principles'
},
{
  id: '263679563683',
  title: '<em>Users</em> over authors <em>over implementors</em> over specifiers <em>over theoretical purity.</em>',
  subtitle: 'W3C HTML Design Principles'
},
{
  id: '45745845463',
  title: 'Wenn du mit geringem Aufwand die Produktqualität ohne kritische Nachteile verbessern kannst, tu es.'
}
];

export default slides;
