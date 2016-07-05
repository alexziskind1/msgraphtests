export let invokeOnRunLoop = (function() {
    var runloop = CFRunLoopGetMain();

    return function(func) {
        CFRunLoopPerformBlock(runloop, kCFRunLoopDefaultMode, func);
        CFRunLoopWakeUp(runloop);
    }
}());