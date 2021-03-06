function visit(node:Node, cb:(node:Node)=>void): void
function visit(node:NodeList, cb:(node:Node)=>void): void
function visit(node:Node|NodeList, cb:(node:Node)=>void): void {
	if(node instanceof NodeList) {
		return Array.prototype.forEach.call(node, n => {
			visit(n, cb);
		});
	}
	else {
		if((<any>node).dontVisit)
			return;
		cb(<Node>node);
		if((<Node>node).hasChildNodes()) {
			Array.prototype.forEach.call((<Node>node).childNodes, n => {
				visit(n, cb);
			});
		}
	}
}

export default visit;