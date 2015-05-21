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
  id: '8934557568346',
  main: `
<p>Kernfeature für gekapselte, wiederverwendbare Einzelkomponenten in&nbsp;Ember.js</p>
`
},
{
  id: '0238344754344',
  main: `
<p>Kernfeature für gekapselte, wiederverwendbare Einzelkomponenten in&nbsp;Ember.js</p>
<p>Besitzen Template und Controller</p>
`
},
{
  id: '934856839039035',
  main: `
<p>Kernfeature für gekapselte, wiederverwendbare Einzelkomponenten in&nbsp;Ember.js</p>
<p>Besitzen Template und Controller</p>
<p>Sind im Gegensatz zu Helpern stateful, asynchron und interaktiv</p>
`
},
{
  id: '023777345634424',
  code:
`// Standard Web Component
<google-map latitude="37.77493" ↩
longitude="-122.41942"></google-map>`
},
{
  id: '563456346345563',
  code:
`// Standard Web Component
<google-map latitude="37.77493" ↩
longitude="-122.41942"></google-map>

// Ember Component
{{google-map latitude="37.77493" ↩
longitude="-122.41942"}}`
},
{
  id: '43534357342357944',
  title: 'Aha-Erlebnis 1:',
  main:`
  <p>Ember Components akzeptieren Variablen als Attribute</p>
  `
},
{
  id: '2334856745634345',
  title: 'Aha-Erlebnis 1:',
  main:`
  <p>Ember Components akzeptieren Variablen als Attribute</p>
  <p>Variablen können alles sein: Arrays, Objekte, Funktionen, Langtexte…</p>
  `
},
{
  id: '7846456347564',
  code:
`// application.hbs
{{my-nav pages=pageList}}

// components/my-nav.hbs
{{#each page in pages}}
  <a href="{{page.url}}">{{page.title}}</a>
{{/each}}`
},
{
  id: '0003849572834990',
  title: 'Aha-Erlebnis 2:',
  main:`
  <p>(Ember) Components müssen nicht sichtbar gerendert werden.</p>
  <p>Sie eignen sich auch zum deklarativen Einbinden von Code in einen View</p>
  `
},
{
  id: '655783364433684',
  code:
`// application.hbs
{{my-hotkey action="skipSong" key="39"}}

// components/my-hotkey.js
init: function() { ... }

// controllers/application.js
actions: {
  nextSlide: function() { ... }
}`
},
{
  id: 'routing',
  title: 'Routing'
},
{
  id: 'architektur',
  title: 'Anwendungsarchitektur'
},
{
  id: '784563456345',
  title: 'Convention over Configuration'
},
{
  id: 'data',
  title: 'Data Models'
},
{
  id: 'ember-way',
  title: 'The Ember Way'
},
{
  id: 'opinionated',
  title: 'Opinionated'
},
{
  id: '2346457823526',
  title: 'You should be using open source projects that align with your interests.',
  subtitle: 'Tom Dale'
},
{
  id: '78456745846529',
  main:`
  <p>Ember hat den Ruf, monolithisch zu sein.</p>
  `
},
{
  id: '89778234824873',
  main:`
  <p>Ember hat den Ruf, monolithisch zu sein.</p>
  <p>Dabei handelt es sich um eine sorgfältig abgestimmte Sammlung von unabhängigen Modulen.</p>
  `
},
{
  id: '05893487579469',
  main:`
  <p>Ember hat den Ruf, monolithisch zu sein.</p>
  <p>Dabei handelt es sich um eine sorgfältig abgestimmte Sammlung von unabhängigen Modulen.</p>
  <p>Neue Module hinzufügen ist leicht, bestehende austauschen oft schwierig</p>
  `
},
{
  id: '42354634573423',
  title: 'Wenn es ungewöhnlich lange dauert, ans Ziel zu kommen, nutzt du den falschen Weg.'
},
{
  id: '03459346783456',
  title: 'Der falsche Weg kann hierbei auch die Tatsache sein, dass du überhaupt Ember.js benutzt.'
},
{
  id: '357946752578',
  title: 'Das Ember Ökosystem ist sehr&nbsp;agil.'
},
{
  id: '3254237345456',
  title: 'Schutzmechanismen gegen Day&nbsp;Zero&nbsp;Rewrites'
},
{
  id: '444842562343',
  title: '6 Wochen Releasezyklus',
  subtitle: 'Canary → Beta → Stable'
},
{
  id: 'progressive-enhancement',
  title: 'Progressive Enhancement'
},
{
  id: '34534634673456345',
  title: '„Progressive Enhancement is dead.“',
  subtitle: 'Tom Dale, 2013'
},
{
  id: '346575433345745544',
  main:`
  <blockquote lang="en"><p lang="en" dir="ltr">The Web is a platform, and there are basically three major pillars that prop it up.  There's HTML, there's CSS, and there's JavaScript.  For some reason, people decide that they're just going to disable JavaScript and decide that that is some arbitrary hoop that people have to jump through.</p>&mdash; Tom Dale (@tomdale) <a href="http://shoptalkshow.com/episodes/147-tom-dale/">December 22, 2014</a></blockquote>
  `
},
{
  id: '234235236563465',
  main:`
  <blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">My major complaint about progressive enhancement is it puts too much of a complexity burden on developers. If you get it for free, however…</p>&mdash; Tom Dale (@tomdale) <a href="https://twitter.com/tomdale/status/536222428771659776">November 22, 2014</a></blockquote>
  `
},
{
  id: '32423653463456345',
  title: 'Progressive Enhancement (wie jedes Paradigma) ist in Ember.js nur sinnvoll umsetzbar, wenn von Haus aus unterstützt.'
},
{
  id: '345358923572348823',
  title: 'Sollte ich Ember.js einsetzen?'
},
{
  id: '894563453456345345',
  title: 'Es gibt keine klare Antwort, nur Indikatoren.'
},
{
  id: '84636356355334552',
  title: 'Indikatoren für Ember.js',
  main: `
  <ul>
    <li>Dashboard-Anwendung</li>
    <li>Bestehende RESTful API</li>
    <li>Fluktuation im Entwicklungsteam</li>
    <li>Wenig Ressourcen für Anwendungsarchitektur</li>
  </ul>
  `
},
{
  id: '574576895447774',
  title: 'Indikatoren gegen Ember.js',
  main: `
  <ul>
    <li>Content-Website</li>
    <li>Mikrooptimierung der Performance</li>
    <li>Mikrooptimierung der Architektur</li>
    <li>Mikrooptimierung der Build Tools</li>
    <li>Progressive Enhancement einer statischen Seite</li>
  </ul>
  `
},
{
  id: 'fazit',
  title: 'Fazit:'
},
{
  id: '534745784545',
  title: 'Es spricht einiges dagegen,<br>Ember.js einzusetzen.'
},
{
  id: '345745745764',
  title: 'Es spricht <em>noch</em> einiges dagegen, Ember.js <em>produktiv</em> einzusetzen.'
},
{
  id: '23463462134',
  title: 'Trotzdem lohnt es sich, sich mit Ember.js zu beschäftigen.'
},
{
  id: '8578377945623',
  title: 'Experimentierkasten, um ein Gefühl für Webapps zu bekommen'
},
{
  id: '925569487936',
  title: 'Schnelles, kostengünstiges Prototyping'
},
{
  id: '345636745746',
  title: 'Es tut nicht weh, einen Ember-Prototypen einzustampfen.'
},
{
  id: '73345306234683',
  title: 'Tests und Module können in Produktion übernommen werden.'
},
{
  id: 'es2015',
  title: 'Spielwiese für ES2015'
},
{
  id: '456745868456722',
  code:
`// Nützliche ES2015 Features

const, let
\`template strings &&
tagged templates\`
import foo from 'module'
promise.then(onSuccess, onFail)`
},
{
  id: 'spacecat',
  main:'<iframe src="//giphy.com/embed/OTOXNsMqmoNEI" width="480" height="441" frameBorder="0" style="max-width: 100%" class="giphy-embed" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
},
{
  id: 'zukunft',
  title: 'Zukunftstechnologie'
},
{
  id: 'isemberfastyet',
  title: '<a href="https://www.isemberfastyet.com/">isemberfastyet.com</a>'
},
{
  id: 'glimmer',
  title: 'Glimmer',
  subtitle: 'Von React inspirierte Renderingengine<br>mit unidirektionalem Datenfluss'
},
{
  id: 'fastboot',
  title: '<a href="https://github.com/tildeio/ember-cli-fastboot">FastBoot</a>'
},
{
  id: '533442362365',
  main:`
  <blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Our goal is for people to take the Ember CLI apps they write today and have them &quot;just work&quot; for the SEO case.</p>&mdash; Tom Dale (@tomdale) <a href="https://twitter.com/tomdale/status/544582581237190657">December 15, 2014</a></blockquote>
  `
},
{
  id: '6346582354526',
  title: 'Das initiale Rendering erfolgt auf dem Server in node.js'
},
{
  id: '6845234637534',
  title: 'FastBoot ≠ Meteor',
  main: '<p>Serverseitiges Rendering bedeutet nicht, dass Ember.js das Backend stellt.</p><p>Eine FastBoot App ist immer noch Client einer API.</p>'
},
{
  id: '323572334634',
  main:`
  <blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Our goal is for people to take the Ember CLI apps they write today and have them &quot;just work&quot; for the SEO case.</p>&mdash; Tom Dale (@tomdale) <a href="https://twitter.com/tomdale/status/544582581237190657">December 15, 2014</a></blockquote>
  `
},
{
  id: 'beispiele',
  title: 'Beispiele'
},
{
  id: 'ghost',
  title: '<a href="https://ghost.org/">Ghost Admin UI</a>'
},
{
  id: 'discourse',
  title: '<a href="http://try.discourse.org/">discourse.org</a>'
},
{
  id: 'dockyard',
  title: '<a href="http://dockyard.com/">dockyard.com</a>'
},
{
  id: '645784623534',
  title: 'Zum guten Schluss:'
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
  id: 'links',
  title: 'Linktipps',
  main: `
  <p><small>
  <a href="http://www.emberaddons.com">emberaddons.com</a><br>
  <a href="http://eloquentjavascript.net/">Eloquent Javascript</a> von <a href="https://twitter.com/marijnjh">@marijnjh</a><br>
    <a href="https://www.youtube.com/watch?v=2b1vcg_XSR8">Test Driven Development Talk</a> von <a href="https://twitter.com/toranb">@toranb</a><br>
  <a href="http://shoptalkshow.com/episodes/147-tom-dale/">ShopTalk Show Episode 147</a> mit <a href="https://twitter.com/tomdale">@tomdale</a>
  </small></p>
  <footer>
  <p><small>
    <a href="https://twitter.com/emberjs">@emberjs</a>,
    <a href="https://twitter.com/emberconf">@emberconf</a>,
    <a href="https://twitter.com/tildeio">@tildeio</a>,
    <a href="https://twitter.com/tomdale">@tomdale</a>,
    <a href="https://twitter.com/wykatz">@wykatz</a>,
    <a href="https://twitter.com/ebryn">@ebryn</a>,
    <a href="https://twitter.com/stefanpenner">@stefanpenner</a>,
    <a href="https://twitter.com/dockyard">@dockyard</a>,
    <a href="https://twitter.com/bcardarella">@bcardarella</a>
  </small></p>
  </footer>
  `
}
];

export default slides;
