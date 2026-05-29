/*
 * Code for expanding and collapsing sections on the about page.
 * This file is included in the no_title.html and default.html layouts.
 */
(function() {
    function initialiseAboutAccordion() {
        var accordion = document.querySelector(".about-accordion-container");

        if (!accordion) {
            return;
        }

        var toggles = accordion.querySelectorAll(".about-accordion-toggle");

        function setPanelState(toggle, isExpanded) {
            var panelId = toggle.getAttribute("aria-controls");
            var panel = document.getElementById(panelId);

            toggle.setAttribute("aria-expanded", isExpanded ? "true" : "false");
            toggle.classList.toggle("current", isExpanded);

            if (panel) {
                panel.hidden = !isExpanded;
            }
        }

        toggles.forEach(function(toggle) {
            setPanelState(toggle, toggle.getAttribute("aria-expanded") === "true");

            toggle.addEventListener("click", function() {
                var isExpanded = toggle.getAttribute("aria-expanded") === "true";
                setPanelState(toggle, !isExpanded);
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initialiseAboutAccordion);
        return;
    }

    initialiseAboutAccordion();
})();