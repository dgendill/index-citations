const IndexCitations = require('../dist/index-citations-node.js');
const JSDOM = require('jsdom').JSDOM;

var dom = new JSDOM(`<html><body>
        
<h1>Which foods have the most Polyphenols?</h1>

<p>
Polyphenols are secondary metabolites of plants and are generally involved in defense against ultraviolet radiation or aggression by pathogens. In the last decade, there has been much interest in the potential health benefits of dietary plant polyphenols as antioxidant. Epidemiological studies and associated meta-analyses strongly suggest that long term consumption of diets rich in plant polyphenols offer protection against development of cancers, cardiovascular diseases, diabetes, osteoporosis and neurodegenerative diseases. Here we present knowledge about the biological effects of plant polyphenols in the context of relevance to human health. <cite><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2835915/">Pandey, Kanti Bhooshan, and Syed Ibrahim Rizvi. “Plant polyphenols as dietary antioxidants in human health and disease.” Oxidative medicine and cellular longevity vol. 2,5 (2009): 270-8. doi:10.4161/oxim.2.5.9498</a></cite>
</p>

<p>The numbers in the table below have been pulled from the <a target="_blank" href="http://phenol-explorer.eu/">Phenol-Explorer</a> <cite><a href="http://database.oxfordjournals.org/content/2010/bap024.full">Neveu V, Perez-Jiménez J, Vos F, Crespy V, du Chaffaut L, Mennen L, Knox C, Eisner R, Cruz J, Wishart D, Scalbert A. (2010) Phenol-Explorer: an online comprehensive database on polyphenol contents in foods. Database, doi: 10.1093/database/bap024.</a></cite>. The purpose of this tool is to give a general idea of what foods are high in polyphenols and which foods have the greatest variety of polyphenol compounds.</p>


<h2>Citations</h2>

<div id="citations"></div>

</body></html>`);

IndexCitations({
    referenceId : '#citations',
    document : dom.window.document
});

console.log( dom.window.document.querySelector('body').innerHTML);