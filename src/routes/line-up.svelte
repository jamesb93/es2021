<script>
    import { artists } from '$lib/artists';
</script>

<div class="artists">
    {#each $artists as x}
    <div class='artist' target='_blank'>
        <div class="day">{x.day}</div>
        {#each x.act as act, i}
            <a class="act" href={act.link}>{act.name}</a>
            {#if x.act.length > 1 && i == x.act.length-2}
            +
            {/if}
        {/each}
    </div>
    {/each}
</div>
<style>
</style>
