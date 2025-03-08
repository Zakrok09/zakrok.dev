<script lang="ts">

    let {className, children} = $props();
</script>

<section class="py-20 px-4 md:px-20 lg:px-40 xl:px-96 {className}">
	{@render children?.()}
</section>