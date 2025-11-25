import icon from '../../icon.svg'
import { BackgroundWorker } from '../../services/background-worker'
import { TorrentClientFactory } from '../../services/torrent-client/torrent-client-factory'
import { TorrentsDataStorage } from '../../services/torrents-data-storage'
import { formatBytes, formatTorrent } from '../formatters'
import { openActions, openTorrent } from '../open-actions'
import rowHtml from './downloads-row.html'
import tabHtml from './downloads-tab.html'
import scss from './downloads-tab.scss'
import btnHtml from './menu-button.html'

class DownloadsTabComponent {
    private scroll!: Lampa.Scroll
    private html = $('<div></div>')
    private checkInterval: any

    public create(): void {
        if (!TorrentClientFactory.isConnected) {
            BackgroundWorker.start()
        }

        this.scroll = new Lampa.Scroll({ mask: true, over: true, step: 200 })

        const data: TorrentsData = TorrentsDataStorage.getData()

        const server = TorrentClientFactory.isConnected
            ? Lampa.Lang.translate('downloads-tab.connected') + ' (' + TorrentClientFactory.getClient().url + ')'
            : Lampa.Lang.translate('downloads-tab.disconnected')


        const page = $(
            Lampa.Template.get('downloads-tab', {
                server,
                freeSpace: Lampa.Lang.translate('downloads-tab.freespace') + formatBytes(data.info.freeSpace),
            })
        )

        const rowsContainer = page.find('.downloads-tab__rows')

        data.torrents.forEach((torrent) => {
            const fmt = formatTorrent(torrent)
            const $row = $(
                Lampa.Template.get('downloads-row', fmt)
            )
                .on('hover:focus', (e) => {
                    this.lastFocusedElement = e.currentTarget as HTMLElement
                    this.scroll.update(e.currentTarget as HTMLElement, true)
                })
                .on('hover:enter', () => openTorrent('downloads-tab', torrent))
                .on('hover:long', () => openActions('downloads-tab', torrent))

            rowsContainer.append($row)
        })

        this.scroll.minus()
        this.scroll.append(page.get(0)!)

        this.html.append(this.scroll.render())
    }

    public render(js: boolean = false): HTMLElement | JQuery {
        return this.html
    }



    private lastFocusedElement: HTMLElement | null = null
    public start(): void {
        Lampa.Controller.add('downloads-tab', {
            toggle: () => {
                Lampa.Controller.collectionSet(this.scroll.render())

                if (this.lastFocusedElement) {
                    const inDoc = document.contains(this.lastFocusedElement)
                    const inComponent = this.html[0].contains(this.lastFocusedElement)
                    const isVis = $(this.lastFocusedElement).is(':visible')

                    if (!inDoc && !inComponent) {
                        this.lastFocusedElement = null
                    }
                }

                if (!this.lastFocusedElement) {
                    this.lastFocusedElement = this.html.find('.downloads-tab__item').first()[0]
                }

                Lampa.Controller.collectionFocus(this.lastFocusedElement ?? false, this.scroll.render())
            },
            left: () => {
                if ((Navigator as any).canmove('left')) {
                    (Navigator as any).move('left')
                } else {
                    Lampa.Controller.toggle('menu')
                }
            },
            right: () => {
                ; (Navigator as any).move('right')
            },
            up: () => {
                ; (Navigator as any).canmove('up') ? (Navigator as any).move('up') : Lampa.Controller.toggle('head')
            },
            down: () => {
                ; (Navigator as any).canmove('down') && (Navigator as any).move('down')
            },
            back: () => Lampa.Activity.backward(),
        })

        Lampa.Controller.toggle('downloads-tab')

        this.checkInterval = setInterval(() => {
            if (Lampa.Activity.active().component === 'downloads-tab') {
                const enabled = Lampa.Controller.enabled().name

                if (enabled !== 'downloads-tab' && enabled !== 'menu' && enabled !== 'modal' && enabled !== 'keyboard') {
                    Lampa.Controller.toggle('downloads-tab')
                }

                if (Lampa.Controller.enabled().name === 'downloads-tab') {
                    const activeElement = document.activeElement
                    const isBody = activeElement === document.body
                    const isItem = activeElement && this.html[0].contains(activeElement)

                    if (isBody || !isItem) {
                        let target = this.lastFocusedElement
                        if (!target || !this.html[0].contains(target)) {
                            target = this.html.find('.downloads-tab__item').first()[0]
                        }

                        if (target) {
                            Lampa.Controller.collectionFocus(target, this.scroll.render())
                        }
                    }
                }
            }
        }, 200)
    }

    public build(data?: any): void { }
    public bind(data?: any): void { }
    public empty(): void { }
    public next(): void { }
    public append(data?: any, append?: boolean): void { }
    public limit(): void { }
    public refresh(): void { }
    public pause(): void { }
    public stop(): void { }
    public destroy(): void {
        clearInterval(this.checkInterval)
        $('#dt-debug').remove()
        this.scroll.destroy()
        this.html.remove()
    }
}

export function updateDownloadsTab(torrent: TorrentInfo): void {
    const fmt = formatTorrent(torrent)

    const $row = $(document).find(`.downloads-tab__item[data-id="${fmt.id}"]`)
    if (!$row.length) return

    $row.removeClass('downloading completed paused').addClass(fmt.status)
    $row.find('.downloads-tab__progress-fill').css('width', fmt.percent)
    $row.find('.downloads-tab__poster').css('background-image', `url(${fmt.poster})`)

    Object.keys(fmt).forEach((key) => {
        $row.find(`[data-field="${key}"]`).each(function () {
            $(this).text((fmt as any)[key])
        })
    })
}

export function syncDownloadsTab(torrents: TorrentInfo[]): void {
    const $container = $('.downloads-tab__rows')
    if (!$container.length) return

    const existingIds = new Set<number>()

    torrents.forEach((torrent) => {
        const fmt = formatTorrent(torrent)
        existingIds.add(fmt.id)

        const $row = $container.find(`.downloads-tab__item[data-id="${fmt.id}"]`)

        if ($row.length) {
            updateDownloadsTab(torrent)
        } else {
            const $newRow = $(Lampa.Template.get('downloads-row', fmt))
                .on('hover:focus', (e) => {
                    // We can't easily access the component instance here to update scroll
                    // But Lampa might handle it if we trigger the right events
                    // For now, just binding the click actions
                })
                .on('hover:enter', () => openTorrent('downloads-tab', torrent))
                .on('hover:long', () => openActions('downloads-tab', torrent))

            $container.append($newRow)
        }
    })

    // Remove items that are no longer in the list
    $container.find('.downloads-tab__item').each(function () {
        const id = $(this).data('id')
        if (!existingIds.has(id)) {
            $(this).remove()
        }
    })
}

export default function () {
    Lampa.Template.add('menu-button', btnHtml)
    Lampa.Template.add('downloads-row', rowHtml)
    Lampa.Template.add('downloads-tab', tabHtml)

    $('body').append(`<style>${scss}</style>`)

    Lampa.Component.add('downloads-tab', DownloadsTabComponent)

    const text = Lampa.Lang.translate('downloads')

    const button = $(Lampa.Template.get('menu-button', { icon, text }))

    button.on('hover:enter', function () {
        Lampa.Activity.push({
            url: '',
            title: text,
            component: 'downloads-tab',
            page: 1,
        })
    })
    $('.menu .menu__list').eq(0).append(button)
}
