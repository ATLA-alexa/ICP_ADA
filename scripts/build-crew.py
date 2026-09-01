# -*- coding: utf-8 -*-
"""Build quatro-crew.html from quatro-WORKING.html.

One codebase, two outputs. The crew file is the working file plus a flag that
the patch block reads, so a change to prep or inventory lands in both and the
two can never drift apart.
"""
import io

w = io.open('quatro-WORKING.html', encoding='utf-8').read()

FLAG = '''<script>
/* ==========================================================================
   CREW BUILD. This is quatro-WORKING.html with one flag set. The patch block
   reads it and shows only Prep and FIFO, Inventory, and the Order of
   operations: what someone covering the bar needs, without the guest menu,
   the drink reference or the price book. Everything else is identical, and
   generated from the same source, so the two files cannot drift apart.
   ========================================================================== */
window.QUATRO_CREW = true;
</script>
'''

# the flag has to be set before the patch block runs, so it goes right after
# the opening body tag
i = w.index('<body')
i = w.index('>', i) + 1
out = w[:i] + '\n' + FLAG + w[i:]

out = out.replace('<title>Quatro</title>',
                  '<title>Quatro · Prep, FIFO and inventory</title>', 1)

io.open('quatro-crew.html', 'w', encoding='utf-8').write(out)
print('quatro-crew.html built: %d bytes' % len(out))
