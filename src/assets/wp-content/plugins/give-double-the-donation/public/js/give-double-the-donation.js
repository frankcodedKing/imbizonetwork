(() => {
    if (window.doublethedonation) {
        var e = function() {
            document.querySelectorAll(".dd-company-name-input").forEach((function(e) {
                e.hasAttribute("data-doublethedonation-widget-id") || window.doublethedonation.plugin.load_streamlined_input(e)
            }))
        };
        document.addEventListener("give_gateway_loaded", e), e()
    }
})();