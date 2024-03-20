import './bootstrap'

import focus from '@alpinejs/focus'
import notifications from 'alpinejs-notify'
import Sortable from 'sortablejs'
import { Livewire, Alpine } from '../../vendor/livewire/livewire/dist/livewire.esm'

window.Alpine = Alpine
window.Sortable = Sortable

Alpine.plugin(focus)
Alpine.plugin(notifications)

Alpine.magic('clipboard', () => {
    return subject => navigator.clipboard.writeText(subject)
})

Alpine.directive('sortable', (el) => {
    el.sortable = Sortable.create(el, {
        draggable: '[x-sortable-item]',
        handle: '[x-sortable-handle]',
        dataIdAttr: 'x-sortable-item',
        animation: 300,
        ghostClass: 'opacity-30',
    })
})

import { shareProfile } from './share-profile.js'
Alpine.data('shareProfile', shareProfile)

import { copyUrl } from './copy-url.js'
Alpine.data('copyUrl', copyUrl)

Livewire.start()