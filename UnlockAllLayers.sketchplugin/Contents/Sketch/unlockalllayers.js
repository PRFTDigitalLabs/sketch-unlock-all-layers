function onRun(context) {
    var doc = context.document;
    var page = [doc currentPage];
    var artboard = [page currentArtboard];
    var numUnlocked = 0;

    if (artboard != null) {
    	unlockLayers([artboard layers]);
    } else {
    	unlockLayers([page children]);
    }

    function unlockLayers(layers) {
    	for (var i = 0; i < [layers count]; i++) {
    		var layer = [layers objectAtIndex:i];

    		if ([layer isLocked]) {
    			[layer setIsLocked: false];
    			numUnlocked++;
    		}

    		if ([layer isMemberOfClass:[MSLayerGroup class]]) {
    			unlockLayers([layer layers]);
    		}
    	}

    	[doc showMessage: numUnlocked + " unlocked"];
    }
}
