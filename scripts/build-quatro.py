# -*- coding: utf-8 -*-
"""Build quatro-WORKING.html: the base page, then the bar photos, then the
patch block, all spliced in just before </body>. Run from the repo root, then
run scripts/build-crew.py for the crew file."""
import io

base = io.open('quatro.html', encoding='utf-8').read()
photos = io.open('quatro-photos.html', encoding='utf-8').read()
patch = io.open('quatro-patch.html', encoding='utf-8').read()
i = base.rindex('</body>')
out = base[:i] + photos + patch + '\n' + base[i:]
io.open('quatro-WORKING.html', 'w', encoding='utf-8').write(out)
print('quatro-WORKING.html built: %d bytes' % len(out))
