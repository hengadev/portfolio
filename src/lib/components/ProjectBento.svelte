<script lang="ts">
    type BentoSlot = {
        image?: string;
        alt?: string;
    };

    type Props = {
        gradient: string;
        slots?: [BentoSlot?, BentoSlot?, BentoSlot?, BentoSlot?, BentoSlot?];
    };

    let { gradient, slots = [] }: Props = $props();

    function slotStyle(index: number): string {
        const slot = slots[index];
        const base = `background: ${gradient};`;
        if (slot?.image) {
            return base + ` background-image: url(${slot.image}); background-size: cover; background-position: center;`;
        }
        return base;
    }
</script>

<div class="bento">
    <div class="cell cell--1" style={slotStyle(0)}></div>
    <div class="cell cell--2" style={slotStyle(1)}></div>
    <div class="cell cell--3" style={slotStyle(2)}></div>
    <div class="cell cell--4" style={slotStyle(3)}></div>
    <div class="cell cell--5" style={slotStyle(4)}></div>
</div>

<style>
    .bento {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
        border-radius: 0.75rem;
        overflow: hidden;
    }

    .cell {
        border-radius: 0.5rem;
        overflow: hidden;
        opacity: 0.9;
    }

    /* Card 1: large, top-left, spans 2 cols × 2 rows */
    .cell--1 {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
    }

    /* Card 2: top-right */
    .cell--2 {
        grid-column: 3;
        grid-row: 1;
    }

    /* Card 3: middle-right */
    .cell--3 {
        grid-column: 3;
        grid-row: 2;
    }

    /* Cards 4 & 5: bottom row spanning under the large card */
    /* Achieved by a second bento row via a sub-grid feel — using a 3-col, 3-row grid */
    .bento {
        grid-template-rows: 200px 200px 160px;
    }

    .cell--1 {
        grid-row: 1 / 3;
    }

    .cell--4 {
        grid-column: 1;
        grid-row: 3;
    }

    .cell--5 {
        grid-column: 2 / 4;
        grid-row: 3;
    }
</style>
