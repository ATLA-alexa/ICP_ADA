# QUATRO SPRINT 1, DEFINITIVE STORAGE ALLOCATION

Scope: the ten bar drinks only. Signatures: Lychee Siren, Forest Fairy, The Hulk, Hibiscus Royale. Classics: Spicy Jalapeño Mule, Ocean Mojito, Cosmopolitan, Amsterdam Sunrise, Tropical Velvet, Piña Colada. Every ingredient below is read from the builds in quatro.html. F2B, F2C, F3A, F3B, F3C receive nothing.

---

## TASK 1: THE DEFINITIVE STORAGE ALLOCATION TABLE

| Ingredient | Allocation | Used In (Drink names) | Specific Location Notes |
|---|---|---|---|
| Lime juice (squeezed at open) | F1A | Lychee Siren, The Hulk, Jalapeño Mule, Ocean Mojito, Cosmopolitan, Tropical Velvet | Rail slot 1, green cap |
| Lemon juice (squeezed at open) | F1A | Forest Fairy, Hibiscus Royale | Rail slot 2, yellow cap |
| Simple syrup (open bottle) | F1A | The Hulk, Jalapeño Mule, Cosmopolitan | Rail slot 3, white cap |
| Orange juice (squeezed at open) | F1A | Hibiscus Royale, Cosmopolitan, Amsterdam Sunrise | Rail slot 4, orange cap |
| Apple-pear juice (open) | F1A | The Hulk, Tropical Velvet | Rail slot 5, brown cap |
| Vanilla syrup (open) | F1A | Hibiscus Royale, Tropical Velvet | Rail slot 6, black-white cap |
| Lychee juice (open) | F1A | Lychee Siren | Rail slot 7, pink cap |
| Butterfly pea tea (batch) | F1B | Lychee Siren, Ocean Mojito | F1B prebatch, shelf removed |
| Butterfly pea strong infusion (batch) | F1B | Lychee Siren | F1B prebatch, shelf removed |
| Hibiscus tea strong (batch, 2 L) | F1B | Hibiscus Royale | F1B prebatch, shelf removed |
| Rosemary-thyme maple cordial (batch) | F1B | Forest Fairy | F1B prebatch, shelf removed |
| Fresh mint syrup, Jade's (batch) | F1B | Ocean Mojito | F1B prebatch, shelf removed |
| Lychee cordial (batch, 700 ml) | F1B | Lychee Siren | F1B prebatch. WRITE THE FIFO ROW: it has no yield, keep window or method in the file |
| Ginger beer 1 L bottles | F1B | Jalapeño Mule | F1B back row. 300 mm tall, does not stand under the 297 mm pitch anywhere else |
| Mint syrup squeeze (20 ml dose) | F1C | Ocean Mojito | Squeeze bottle, bottom tier |
| Lychee cordial squeeze (20 ml dose) | F1C | Lychee Siren | Squeeze bottle, bottom tier |
| Strawberry puree, open tub | F1C | Hibiscus Royale | Top tier tubs row |
| Strawberry puree squeeze (30 ml dose) | F1C | Hibiscus Royale | Squeeze bottle, bottom tier. 2-day life once decanted |
| Passionfruit puree, open tub | F1C | Tropical Velvet | Top tier tubs row |
| Passionfruit puree squeeze (20 ml dose) | F1C | Tropical Velvet | Squeeze bottle, bottom tier |
| Cassis, open tubs (2 x 500 g) | F1C | Ocean Mojito | Top tier tubs row. STAINS: dedicated vessel, never rotated |
| Cassis squeeze (20 ml dose) | F1C | Ocean Mojito | Squeeze bottle, bottom tier, dedicated |
| Grenadine squeeze (20 ml dose) | F1C | Amsterdam Sunrise | Squeeze bottle, bottom tier, dedicated, STAINS. The Monin 1 L bottle is 320 mm and does NOT fit F1C: it stays DRY, decant from it |
| Condensed milk squeeze | F1C | Piña Colada | Wide-mouth, large-bore squeeze only. 2-day life once decanted |
| Coconut cream, open can | F1C | Piña Colada | Top tier tubs row, lidded |
| Cocktail cherries, open jar | F1C | Piña Colada | Top tier tubs row |
| Cranberry juice, open carton | F1C | Cosmopolitan | Bottom tier cartons row |
| Pineapple juice, open carton | F1C | Piña Colada | Bottom tier cartons row |
| Passionfruit juice, open bottle | F1C | Tropical Velvet | Bottom tier cartons row |
| Lychee juice, open spare carton | F1C | Lychee Siren | Bottom tier, refills rail slot 7 |
| Coconut water, open carton | F1C | Lychee Siren | Bottom tier. NOT ON THE BUY LIST: buy it or Lychee Siren is off the menu on night one |
| Soda water, SPA Rood 330 ml cold stock | F1C | Forest Fairy, Ocean Mojito | Bottom tier front, 7 bottles |
| Limes, whole | F2A | Siren, Hulk, Mule, Ocean, Cosmo, Velvet | Bottom tier, biggest share |
| Lemons, whole | F2A | Forest Fairy, Hibiscus Royale | Bottom tier |
| Oranges, whole (juice and zest) | F2A | Hibiscus, Cosmo, Sunrise | Bottom tier. Zest cut to order from these |
| Strawberries | F2A | Hibiscus Royale | Top tier |
| Green grapes | F2A | The Hulk | Top tier |
| Mint | F2A | Jalapeño Mule, Ocean Mojito | Top tier, damp cloth |
| Basil | F2A | The Hulk | Top tier, damp cloth |
| Rosemary | F2A | Forest Fairy | Top tier, damp cloth. First out to DRY damp cloth if F2A tightens |
| Thyme | F2A | Forest Fairy | Top tier, damp cloth. Second out to DRY damp cloth if F2A tightens |
| Jalapeños | F2A | Spicy Jalapeño Mule | Top tier |
| Pears + caramelised pear garnish tub | F2A | The Hulk | Top tier. Old home F2B is full, garnish tub moves here |
| Passion fruit, fresh (garnish) | F2A | Tropical Velvet | Top tier |
| Same-day cut garnish tubs (pear, jalapeño) | F2A | Hulk, Mule | Top tier front. Old home F2B is full |
| Simple syrup, sealed bottles | DRY | backup | Ambient shelf |
| Vanilla syrup, sealed Monin | DRY | backup | Ambient shelf |
| Grenadine, Monin 1 L bottle | DRY | Amsterdam Sunrise | Ambient shelf. Working dose lives in the F1C squeeze |
| Maple syrup, 4 x 250 ml | DRY | Forest Fairy (cordial) | Ambient shelf |
| Cartons, sealed: cranberry, pineapple, apple-pear, lychee, passionfruit, coconut water | DRY | backups | Ambient shelf, unopened is shelf-stable |
| Coconut cream cans, sealed | DRY | Piña Colada backup | Ambient shelf |
| Condensed milk tins, sealed | DRY | Piña Colada backup | Ambient shelf |
| Canned lychees (cordial base) | DRY | Lychee Siren | Ambient shelf |
| Ginger beer, sealed spares | DRY | Jalapeño Mule backup | Ambient shelf, chill before service |
| SPA Rood, sealed spares | DRY | backup | Ambient shelf, chill before service |
| Cocktail cherries, sealed jars | DRY | backup | Ambient shelf |
| Butterfly pea flower, dried | DRY | tea base | Airtight, ambient shelf |
| Hibiscus, dried | DRY | tea base | Airtight, ambient shelf |
| Crystal sugar | DRY | syrups | Ambient shelf |
| Fee Foam | DRY | Hibiscus Royale | Station 3 dry store. This is the foam: no eggs are stocked |
| Sea salt + rosemary-lemon salt rim mix | DRY | Forest Fairy | Station 3 dry store, rim mix airtight, 1-week life |

Ice is not an allocation: it comes from the machine into the insulated bin at station 2, filled at open and midpoint.

---

## TASK 2: F1C CAPACITY AND OVERFLOW CHECK

Must live in F1C, open items only: cranberry 1 L, pineapple 1 L, passionfruit juice 0.5 L, lychee carton 1 L, coconut water 1 L, soda 7 x 0.33 L, strawberry tub 1 kg, passionfruit tub 1 kg, cassis 2 x 0.5 kg, coconut cream 0.4 L, cherries jar 0.2 L, plus 7 squeeze bottles at 0.5 L. **Total volume: about 13.4 litres.**

F1C capacity: 2 tiers, 403 mm wide, 380 mm deep, 340 mm usable after the 40 mm hand gap, 297 mm clear height per tier.
- Bottles and cartons at 70-80 mm: 5 across x 4 deep = **20 slots on the bottom tier**.
- Tubs, cans and jars at 110 mm: 3 across x 3 deep = **9 slots on the top tier**.

Demand: top tier 6 of 9 slots (2 cassis, 2 puree tubs, cream, cherries). Bottom tier 19 of 20 slots (5 cartons and bottles, 7 soda, 7 squeeze bottles). **It fits. Nothing moves out.** Keep exactly one open unit of each item in F1C. Every sealed second unit goes to DRY: a second open carton of anything in F1C is a mistake, bin or merge it.

---

## TASK 3: PREBATCH BOTTLE MATH (SPRINT 1)

| Batch | Volume | 2 L bottles |
|---|---|---|
| Butterfly pea tea | 500 ml | 1 |
| Butterfly pea strong infusion | 250 ml | 1 |
| Hibiscus tea, strong | 2 L | 1 |
| Rosemary-thyme maple cordial | 1 L | 1 |
| Fresh mint syrup, Jade's | 500 ml | 1 |
| Lychee cordial | 700 ml | 1 |
| **In service** | **4.95 L** | **6** |
| Overlap, the three 5-day keeps re-batch before the old batch is empty | | +3 |
| Wash allowance | | +2 |
| **Total needed** | | **11** |

**12 x 2 L bottles held. 11 needed. Enough, with 1 spare. Buy nothing.**

**Remove the shelf in F1B to make room for the 2L bottles.** The 297 mm pitch does not clear a 2 L bottle; the shelf-out tier is 600 mm and clears everything. Grid at 100 mm diameter: 4 across x 3 deep = 12 standing slots. Reserve 9 for filled prebatch bottles (6 in service plus up to 3 overlap) and 3 for the 1 L ginger beers, which are 300 mm tall and fit nowhere else cold. Wash bottles are empty and live at the sink, not in the fridge.

---

## TASK 4: FRESH PRODUCE (F2A) MAPPING

Everything fresh goes to F2A, one door, two tiers, about 40 usable litres.

- **Bottom tier, citrus:** limes 5 kg, lemons 1.5 kg, oranges 3 kg. About 17 litres.
- **Top tier:** strawberries 2 kg, grapes 2 kg, mint, basil, rosemary, thyme in damp cloth, jalapeños, pears, fresh passion fruit, plus the same-day garnish tubs at the front. About 18 litres.

Total about 35 litres into 40. **It fits.** If a delivery tightens the door, rosemary goes first and thyme second to DRY in a damp cloth at room temperature; they serve one drink and tolerate ambient for a day. Flag it on the prep sheet when it happens. The garnish tubs were homed in F2B in the file; F2B is full, they live in F2A now.

---

## TASK 5: DRY STORE MAXIMIZATION LIST

Shelf-stable until opened. None of this enters a fridge sealed.

1. Sealed cartons: cranberry, pineapple, apple-pear, lychee, passionfruit juice, coconut water
2. Monin bottles sealed: vanilla, sugar (simple), and the open grenadine 1 L (decant-only, too tall for F1C)
3. Maple syrup, 4 x 250 ml
4. Coconut cream cans, condensed milk tins, canned lychees
5. Ginger beer and SPA Rood spares (move to fridge only to chill for the next service)
6. Cocktail cherry jars, sealed
7. Dried butterfly pea flower, dried hibiscus, airtight
8. Crystal sugar, sea salt, rosemary-lemon salt rim mix (airtight), Fee Foam
9. Empty wash-allowance bottles and spare squeeze bottles

Two shelves of 600 x 400 mm cover the roughly 25 sealed units. Top of the back bar and under-counter both qualify as DRY.

---

## TASK 6: FINAL SUMMARY, THE CHEAT SHEET

- **F1A**: Speed rail refills, bottles 1-7. Green lime, yellow lemon, white simple, orange OJ, brown apple-pear, black-white vanilla, pink lychee. Nothing else.
- **F1B**: SHELF REMOVED. 12 standing slots: up to 9 filled 2 L prebatch bottles (pea tea, pea strong, hibiscus, maple cordial, mint syrup, lychee cordial) + 3 x 1 L ginger beer at the back.
- **F1C**: 13 open working units + 7 squeeze bottles. Top tier: cassis x2, strawberry tub, passionfruit tub, coconut cream, cherries. Bottom tier: cranberry, pineapple, passionfruit juice, lychee, coconut water, 7 soda, and the squeeze bottles (grenadine and cassis dedicated, condensed milk wide-bore).
- **F2A**: ALL fresh. Citrus below (limes, lemons, oranges), soft fruit, herbs in damp cloth, jalapeños, pears, passion fruit and the day's garnish tubs above.
- **DRY**: about 25 sealed backups: all cartons, all cans and tins, Monin and maple bottles, sugar, salt and rim mix, Fee Foam, dried teas, cherry jars, soda and ginger beer spares. If it is sealed, it is here. No exceptions.
- **F2B, F2C, F3A, F3B, F3C**: full. Put nothing in them.

---

Three flags, then done: **coconut water is not on the buy list**, so Lychee Siren cannot be served until it is bought. **Lychee cordial has no FIFO row** in the file: write yield, keep window and method before anyone batches it. **Grenadine and cassis squeeze bottles are dedicated for life**: they stain and never get rotated onto another product.
