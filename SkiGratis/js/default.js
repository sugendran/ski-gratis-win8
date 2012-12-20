﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var world;
    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
                world = skigratis("canvas");
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
                //world.resume();
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };


    //app.oncheckpoint = function (args) {
    //    // TODO: This application is about to be suspended. Save any state
    //    // that needs to persist across suspensions here. You might use the
    //    // WinJS.Application.sessionState object, which is automatically
    //    // saved and restored across suspension. If you need to complete an
    //    // asynchronous operation before your application is suspended, call
    //    // args.setPromise().
    //    world.pause();
    //};

    //Windows.UI.WebUI.WebUIApplication.addEventListener("resuming", function (args) {
    //    world.resume();
    //});

    app.start();
})();
