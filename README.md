# Index Citations Plugin

The Index Citations Plugin will find all `<cite>` tags and replace them with a link to a references section. This can be useful if you want to use inline citations in your HTML document.

To illustrate here is an HTML document with inline citations.

```
<p>Here we present knowledge about the biological effects of plant polyphenols in the context of
relevance to human health. <cite><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2835915/
">Pandey, Kanti Bhooshan, and Syed Ibrahim Rizvi. “Plant polyphenols as dietary antioxidants in
human health and disease.” Oxidative medicine and cellular longevity vol. 2,5 (2009): 270-8.
doi:10.4161/oxim.2.5.9498</a></cite></p>

<p>The numbers in the table below have been pulled from the <a target="_blank" href="http://
phenol-explorer.eu/">Phenol-Explorer</a> <cite><a href="http://database.oxfordjournals.org/content/
2010/bap024.full">Neveu V, Perez-Jiménez J, Vos F, Crespy V, du Chaffaut L, Mennen L, Knox C, 
Eisner R, Cruz J, Wishart D, Scalbert A. (2010) Phenol-Explorer: an online comprehensive database 
on polyphenol contents in foods. Database, doi: 10.1093/database/bap024.</a></cite>.</p>

<h2>Citations</h2>

<div id="citations"></div>
```

The Index Citation Plugin will transform this markup into the following...

```html
<p>
Here we present knowledge about the biological effects of plant polyphenols in the context of relevance to human health. <sup><a class="citationLink" href="#citation1">1</a></sup>
</p>

<p>The numbers in the table below have been pulled from the <a target="_blank" href="http://
phenol-explorer.eu/">Phenol-Explorer</a> <sup><a class="citationLink" href="#citation2">2</a></
sup>.</p>

<h2>References</h2>

<div id="references">
  <ol>
    <li>
      <span id="citation1"></span>
      <cite><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2835915/">Pandey, Kanti Bhooshan, 
      and Syed Ibrahim Rizvi. “Plant polyphenols as dietary antioxidants in human health and 
      disease.” Oxidative medicine and cellular longevity vol. 2,5 (2009): 270-8. doi:10.4161/
      oxim.2.5.9498</a></cite>
    </li>
    <li>
      <span id="citation2"></span><cite><a href="http://database.oxfordjournals.org/content/2010/
      bap024.full">Neveu V, Perez-Jiménez J, Vos F, Crespy V, du Chaffaut L, Mennen L, Knox C, 
      Eisner R, Cruz J, Wishart D, Scalbert A. (2010) Phenol-Explorer: an online comprehensive 
      database on polyphenol contents in foods. Database, doi: 10.1093/database/bap024.</a></cite>
    </li>
  </ol>
</div>
```

# Usage

The plugin can be used in the browser or nodejs. See webpack.config.js for the various output formats. It's fairly simple to add other targets using webpack's [libraryTarget option](https://webpack.js.org/configuration/output/#outputlibrarytarget).

# Configuration
```javascript
IndexCitations({
  // Required referenceId - Selector for the reference area of the document
  referenceId : '#references',

  // Optional document - The Document object to operate on. If used in nodejs,
  // you can use a jsdom document object.
  document : window.document
});
```
