const slides = [

{
  id: '1',
  title: 'Ember.js 2.0: Old hamster, new tricks'
},
{
  id: '234523525',
  title: '@<a href="https://twitter.com/fredericmarx" rel="author">fredericmarx</a>'
},
{
  id: '34657456345345',
  title: 'Frameworks'
},
{
  id: '643523424',
  main:`
  <blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">web developer (n)&#10;&#10;Someone who is paid to repeatedly reimplement a web browser in JavaScript to avoid page reloads.</p>&mdash; Ross Penman (@PenmanRoss) <a href="https://twitter.com/PenmanRoss/status/579778675865993216">March 22, 2015</a></blockquote>
  `
},
{
  id: '123123144',
  main:'<iframe src="//giphy.com/embed/jGa1qMM9EM944" width="480" height="314" frameBorder="0" style="max-width: 100%" class="giphy-embed full-width" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
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
    <li>RESTful API</li>
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
    <li>RESTful API</li>
    <li>Anwendungsarchitektur</li>
    <li>Build Tools</li>
  </ul>
  `
},
{
  id: 'magic',
  main:'<iframe src="//giphy.com/embed/n0WvhHFTpihk4" width="480" height="274" frameBorder="0" style="max-width: 100%" class="giphy-embed full-width" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
},
{
  id: 'gravatar',
  example: 'my-gravatar'
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
  id: '9682646944876',
  code:
`// String encoded output
{{myString}}

// Html output
{{{myString}}}`
},
{
  id: 'render',
  title: 'DOM-Diffing Rendering'
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
  id: 'custom-helpers',
  title: 'Custom Helpers'
},
{
  id: '98883870248',
  title: 'Wiederverwendbare Einwegtransformationen auf Templateebene'
},
{
  id: 'example-helper',
  example: 'example-helper'
},
{
  id: '90238970458476662',
  code:
`import Ember from 'ember'; // ES6 module import
import moment from 'npm:moment'; // ember-browserify

export function myDate() {
  return moment(this.get('date'))
  .format('dddd, MMM Do YYYY');
}

// ES6 module export
export default Ember.HTMLBars.makeBoundHelper(myDate);`
},
{
  id: 'example-markdown',
  example: 'example-markdown'
},
{
  id: '23546345345345',
  title: 'UX-Win von Bound Helpers: Unmittelbares Feedback bei komplexen Zusammenhängen'
},
{
  id: '396868997263',
  main: `
<p>Helper sind Web Components für Arme.</p>
`
},
{
  id: '999476662245',
  main: `
<p>Helper sind Web Components für Arme.</p>
<p>Components sind Helper mit Superkräften.</p>
`
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
<p>Können im Gegensatz zu Helpern stateful, asynchron und interaktiv sein</p>
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
  <p>Sie eignen sich auch zum deklarativen Einbinden von Funktionalität in einen View (zum Beispiel um auf Events zu reagieren).</p>
  `
},
{
  id: '655783364433684',
  code:
`// application.hbs
{{my-hotkey action="skipSong" key="39"}}`
},
{
  id: '027973683826284',
  code:
`// application.hbs
{{my-hotkey action="skipSong" key="39"}}

// components/my-hotkey.js
init: function() { ... }`
},
{
  id: '01874792917491',
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
  id: '88364787362378599',
  main:`
  <p>Komponenten haben standardmäßig keinen Zugriff auf ihren Kontext.</p>
  <p>Dieser kann aber als Property übergeben werden.</p>
  `
},
{
  id: '3355335535643',
  code:
`// application.hbs
{{my-event action="someAction" context=myView}}`
},
{
  id: 'routing',
  title: 'Routing'
},
{
  id: '8456467543433455',
  title: 'router.js, die .htaccess der Ember.js&nbsp;App'
},
{
  id: '88846746766342',
  code:
`// router.js
import Ember from 'ember';

Router.map(function() {
  this.resource('articles', function() {
    this.resource('article', { path: '/:article_id'}, function() {
      this.route('edit')
    });
  });
});

export default Router;`
},
{
  id: '456457457456',
  title: 'Resource: Nomen, Route: Verb'
},
{
  id: '3423346345353645',
  code:
`// router.js
Router.map(function() {
  this.resource('article');
});

// template/article.hbs
// routes/article.js
// controllers/article.js`
},
{
  id: '845763252354753',
  code:
`// routes/article.js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // Ember Data
    this.store.find('article', params.article_id);
  }
});`
},
{
  id: '8457345723452934',
  title: 'Die Route ist der Ort für Initialisierung des Models, Weiterleitung,&nbsp;etc.'
},
{
  id: '784563456345',
  title: 'Convention over Configuration'
},
{
  id: '5645786789664545',
  title: 'Ember CLI verdrahtet anhand von Namenskonventionen automatisch Models, Routen und Controller'
},
{
  id: 'data',
  title: 'Data Models'
},
{
  id: '6345645645345',
  title: 'API → Ember.js'
},
{
  id: '6734523534345345',
  title: 'API → Adapter → Serializer → EmberData → Ember.js'
},
{
  id: '3457654345345346',
  title: 'API ← Adapter ← Serializer ← EmberData ← Ember.js'
},
{
  id: '45345346346345345',
  title: 'No-Backend offline first mit Ember.js'
},
{
  id: '45664564564543455',
  title: 'CouchDB ◇ PouchDB → Adapter → Serializer → EmberData → Ember.js'
},
{
  id: 'ds-model',
  title: 'DS.Model'
},
{
  id: '6323434634958',
  code:
`// models/user.js
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  verified: attr('boolean', {defaultValue: false}),
  born: DS.attr('date'),
  articles: DS.hasMany('article'),
  organisation: DS.belongsTo('organisation'),
  age: function() {
    return [...];
  }.property('born')
});`
},
{
  id: '246927608946275',
  title: 'Häufig benötigte Transformationen als computed properties definieren'
},
{
  id: 'controller',
  title: 'Controller'
},
{
  id: '34534634545234234',
  title: 'Anwendungslogik und lokale Variablen für den View'
},
{
  id: '67896442345234234',
  code:
`// controllers/article/edit.js
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveArticle: function() {}
  }
});`
},
{
  id: 'architektur',
  title: 'Anwendungsarchitektur'
},
{
  id: '645487456345464456',
  main:
  `<ul>
    <li>app</li>
    <li>bower_components</li>
    <li>config</li>
    <li>dist</li>
    <li>node_modules</li>
    <li>tests</li>
  </ul>`
},
{
  id: '96834635372350ß',
  main:
  `<ul>
    <li>app
      <ul>
        <li>adapters</li>
        <li>components</li>
        <li>controllers</li>
        <li>models</li>
        <li>serializers</li>
        <li>templates</li>
        <li>index.html</li>
        <li>router.js</li>
      </ul>
    </li>
  </ul>`
},
{
  id: '34534763452344',
  title: 'Optional: Pods'
},
{
  id: 'cli',
  title: 'Ember CLI'
},
{
  id: '34534345345345345',
  main:
  `<ul>
    <li>Ember Generator</li>
  </ul>`
},
{
  id: '34567967348948',
  title: 'ember new myapp'
},
{
  id: '463426805836834',
  title: 'ember g route articles'
},
{
  id: '63462398363453',
  title: 'ember g component my-navigation'
},
{
  id: '543789679553278952',
  main:
  `<ul>
    <li>Ember Generator</li>
    <li>Module Resolver</li>
    <li>Broccoli</li>
    <li>babel.js</li>
    <li>QUnit</li>
    <li>jshint</li>
    <li>Live Reload</li>
  </ul>`
},
{
  id: '3463473463453745',
  title: 'ember serve'
},
{
  id: '496784759345445',
  title: 'ember build'
},
{
  id: '97834757345856',
  title: 'ember build<br>--environment=production'
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
  title: 'You should be using open source projects that align with your&nbsp;interests.',
  subtitle: 'Tom Dale'
},
{
  id: '78456745846529',
  main:`
  <p>Ember hat den Ruf, monolithisch zu sein.</p>
  `
},
{
  id: '45934867234235',
  main:'<img src="http://upload.wikimedia.org/wikipedia/commons/7/74/Line0534.jpg" class="full-width">'
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
  <p>Neue Module hinzuzufügen ist leicht, bestehende auszutauschen oft schwierig</p>
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
  id: '234563492375',
  title: 'Darunter leidet als erstes die Dokumentation.',
  subtitle: '(Auch wenn diese eine hohe Priorität hat)'
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
  id: '23423562',
  main:`
  <blockquote ><p>If you’re OK putting all your eggs in a single point-of-failure basket, use Ember.</p>&mdash; Jeremy Keith (@adactio) <a href="https://twitter.com/zeldman/status/582943520714948608">Mar 31, 2015</a></blockquote>
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
    <li>Wenig Zeit oder Kapazitäten für Anwendungsarchitektur</li>
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
  title: 'Spielwiese für ES6'
},
{
  id: 'spacecat',
  main:'<iframe src="//giphy.com/embed/OTOXNsMqmoNEI" width="480" height="441" frameBorder="0" style="max-width: 100%" class="giphy-embed full-width" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
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
  id: '8456903123344',
  main:`
  <blockquote lang="en"><p>If it’s not curlable, it’s not on the web.</p>&mdash; Tantek Çelik (@t) <a href="http://tantek.com/2015/069/t1/js-dr-javascript-required-dead">Mar 11, 2015</a></blockquote>
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
  id: 'beispiele',
  title: 'Beispiele für Ember.js Anwendungen'
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
},
{
  id: 'links-2',
  main: '<p><a href="https://github.com/fredericmarx/emberdeck">github.com/fredericmarx/emberdeck</a></p><p><a href="https://twitter.com/fredericmarx">@fredericmarx</a></p>'
},
];

export default slides;
