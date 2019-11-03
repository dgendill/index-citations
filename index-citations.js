module.exports = function IndexCitations(config) {

    if (config.document) {
        var doc = config.document;
    } else {
        var doc = document;
    }

    if (config.awaitDocumentReady) {
        if (doc.readyState != 'loading') {
            run();
        } else {
            doc.addEventListener('DOMContentLoaded', run);
        }
    } else {
        run();
    }
    
    function run() {
        
        if (process.env.NODE_ENV === 'development') {
            // Only validate params in development build
            if (!config.referenceId) {
                throw new TypeError('config is missing "referenceId" which is the selector of the element where you want citations listed.');
            }
        }

        // Development Version Normalize Step
        let citationElement = config.citeElement || 'cite';

        let $cites = doc.querySelectorAll(citationElement);
        let $citationArea = doc.querySelector(config.referenceId);

        function $insertBefore($target, $new){
            $target.parentNode.insertBefore($new, $target);
        }

        var $citationList = doc.createElement('ol');

        Array.prototype.forEach.apply($cites, [function($cite, index) {
            let citationNumber = index + 1;
            let linkTargetId = "citation" + citationNumber;

            let $link = doc.createElement('a');
            $link.innerHTML = citationNumber;
            $link.setAttribute('class', 'citationLink');
            $link.href = "#" + linkTargetId;
            let $sup = doc.createElement('sup');
            $sup.appendChild($link);

            $insertBefore($cite, $sup);
            $cite.parentNode.removeChild($cite);

            let $linkTarget = doc.createElement('span');
            $linkTarget.id = linkTargetId;
            let $li = doc.createElement('li');
            $li.appendChild($linkTarget);
            $li.appendChild($cite);
            $citationList.appendChild($li);
            
            $insertBefore($cite, $linkTarget);
        }]);

        $citationArea.appendChild($citationList);
    }
}
