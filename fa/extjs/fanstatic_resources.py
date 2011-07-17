from fanstatic import Library, Resource, Group
from js import extjs

UX_FILES = ['ux/DynamicEditorGridPanel.js',]

library = Library('fa.extjs', 'js')

ux = Group([Resource(library, file) for file in UX_FILES])
js = Resource(library, 'grid.js', depends=[ux])
fa_extjs = Resource(library, 'main.js', depends=[extjs.basic_with_ux, js])