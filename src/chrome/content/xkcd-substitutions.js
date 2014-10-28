(function() {

    function walk(node)
    {
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
	    case 1:  // Element
	    case 9:  // Document
	    case 11: // Document fragment
	    child = node.firstChild;
	    while ( child )
	    {
		next = child.nextSibling;
		walk(child);
		child = next;
	    }
	    break;

	    case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
	    break;
	}
    }

    function handleText(textNode) {
	var v = textNode.nodeValue;

	// Witnessess
	v = v.replace(/\b(W|w)itnesses/g, function(match, p1, offset, string) {
	    d = String.fromCharCode(p1.charCodeAt(0) - 19);
	    return d + "udes I know";
	});

	// Witness
	v = v.replace(/\b(W|w)itness\b/g, function(match, p1, offset, string) {
	    d = String.fromCharCode(p1.charCodeAt(0) - 19);
	    return d + "ude I know";
	});

	// Allegedly
	v = v.replace(/\b(A|a)llegedly/g, function(match, p1, offset, string) {
	    k = String.fromCharCode(p1.charCodeAt(0) + 10);
	    return k + "inda probably";
	});

	// New study
	v = v.replace(/\b(N|n)ew (S|s)tudy/g, function(match, p1, p2, offset, string) {
	    t = String.fromCharCode(p1.charCodeAt(0) + 6);
	    p = String.fromCharCode(p2.charCodeAt(0) - 3);
	    return t + "umblr " + p + "ost";
	});

	// Rebuild
	v = v.replace(/\b(R|r)ebuild\b/g, function(match, p1, offset, string) {
	    a = String.fromCharCode(p1.charCodeAt(0) - 17);
	    return a + "venge";
	});

	// Space
	v = v.replace(/\b(S|s)pace/g, function(match, p1, offset, string) {
	    s = String.fromCharCode(p1.charCodeAt(0) + 0);
	    return s + "spaaace";
	});

	// Google Glass
	v = v.replace(/\b(G|g)oogle (G|g)lass/g, function(match, p1, p2, offset, string) {
	    v = String.fromCharCode(p1.charCodeAt(0) + 15);
	    b = String.fromCharCode(p2.charCodeAt(0) - 5);
	    return v + "irtual " + b + "oy";
	});

	// Smartphones
	v = v.replace(/\b(S|s)martphones/g, function(match, p1, offset, string) {
	    p = String.fromCharCode(p1.charCodeAt(0) - 3);
	    return p + "okedexes";
	});

	// Smartphone
	v = v.replace(/\b(S|s)martphone/g, function(match, p1, offset, string) {
	    p = String.fromCharCode(p1.charCodeAt(0) - 3);
	    return p + "okedex";
	});

	// Electric
	v = v.replace(/\b(E|e)lectric/g, function(match, p1, offset, string) {
	    a = String.fromCharCode(p1.charCodeAt(0) - 4);
	    return a + "tomic";
	});

	// Senator
	v = v.replace(/\b(S|s)enator/g, function(match, p1, offset, string) {
	    e = String.fromCharCode(p1.charCodeAt(0) - 14);
	    l = String.fromCharCode(p1.charCodeAt(0) - 7);
	    return e + "lf-" + l + "ord";
	});

	// Car
	v = v.replace(/\b(C|c)ar\b/g, function(match, p1, offset, string) {
	    c = String.fromCharCode(p1.charCodeAt(0) + 0);
	    return c + "at";
	});

	// Election
	v = v.replace(/\b(E|e)lection/g, function(match, p1, offset, string) {
	    e = String.fromCharCode(p1.charCodeAt(0) + 0);
	    c = String.fromCharCode(p1.charCodeAt(0) - 2);
	    return e + "ating " + c + "ontest";
	});

	// Congressional leaders
	v = v.replace(/\b(C|c)ongressional (L|l)eaders/g, function(match, p1, p2, offset, string) {
	    r = String.fromCharCode(p1.charCodeAt(0) + 15);
	    s = String.fromCharCode(p2.charCodeAt(0) + 7);
	    return r + "iver " + s + "pirits";
	});

	// Homeland Security
	v = v.replace(/\b(H|h)omeland (S|s)ecurity/g, function(match, p1, p2, offset, string) {
	    h = String.fromCharCode(p1.charCodeAt(0) + 0);
	    r = String.fromCharCode(p2.charCodeAt(0) - 1);
	    return h + "omestar " + r + "unner";
	});

	// Could not be reached for comment
	v = v.replace(/\b(C|c)ould not be reached for comment/g, function(match, p1, offset, string) {
	    i = String.fromCharCode(p1.charCodeAt(0) + 6);
	    return i + "s guilty and everyone knows it";
	});

	// Get the corner cases
	// if(v.match(/cloud/i)) {
	//     // If we're not talking about weather
	//     if(v.match(/PaaS|SaaS|IaaS|computing|data|storage|cluster|distributed|server|hosting|provider|grid|enterprise|provision|apps|hardware|software|/i)) {
	//	v = v.replace(/(C|c)loud/gi, function(match, p1, offset, string) {
	//	    // c - 1 = b
	//	    b = String.fromCharCode(p1.charCodeAt(0) - 1);
	//	    return b + "utt";
	//	});
	//     }
	// }
	textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
        // Dear Mozilla: I hate you for making me do this.
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());

