(function () {
  var menuButton = document.querySelector(".menu-toggle");
  var navigation = document.querySelector(".site-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      var isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuButton.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
      });
    });
  }

  var searchInputs = document.querySelectorAll("[data-post-search]");
  if (!searchInputs.length) return;

  searchInputs.forEach(function (input) {
    var scope = input.closest(".archive-page, .latest-section");
    if (!scope) return;

    var items = Array.prototype.slice.call(scope.querySelectorAll("[data-search-item]"));
    var clearButton = scope.querySelector("[data-search-clear]");
    var status = scope.querySelector("[data-search-status]");
    var emptyState = scope.querySelector("[data-search-empty]");
    var years = Array.prototype.slice.call(scope.querySelectorAll(".archive-year"));

    function updateResults() {
      var query = input.value.trim().toLocaleLowerCase();
      var visibleCount = 0;

      items.forEach(function (item) {
        var content = (item.getAttribute("data-search-value") || "").toLocaleLowerCase();
        var matches = !query || content.indexOf(query) !== -1;
        item.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      years.forEach(function (year) {
        year.hidden = !year.querySelector("[data-search-item]:not([hidden])");
      });

      if (clearButton) clearButton.disabled = query.length === 0;
      if (status) {
        status.textContent = query
          ? "找到 " + visibleCount + " 篇文章"
          : "共 " + items.length + " 篇文章";
      }
      if (emptyState) emptyState.hidden = visibleCount !== 0;
    }

    input.addEventListener("input", updateResults);
    input.addEventListener("compositionend", updateResults);

    if (clearButton) {
      clearButton.addEventListener("click", function () {
        input.value = "";
        updateResults();
        input.focus();
      });
    }
  });
})();
