<script lang="ts">
  import {onMount} from "svelte";

  let {buttonText} = $props();
  let theme:"light"|"dark" = $state("dark");

  onMount(() => {
    theme = localStorage.getItem("theme") as "light"|"dark" || "light"
  })

  /**
   * Toggle the theme between light and dark.
   * Save the theme to localStorage.
   */
  function toggleTheme() {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
</script>

<button onclick={toggleTheme} data-testid="theme-switch">
    {buttonText} {theme === "light" ? "🌞" : "🌙"}
</button>