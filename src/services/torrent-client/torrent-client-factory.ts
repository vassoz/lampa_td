import type { ITorrentClient } from '../../../types/torrent-client'
import { URL_KEY, LOGIN_KEY, PASSWORD_KEY } from '../../settings'
import { QBittorrentWebApiClient } from './qbit/qbittorrent-webapi-client'

export class TorrentClientFactory {
    private static client?: ITorrentClient

    public static isConnected: boolean = false

    public static getClient(): ITorrentClient {
        if (!this.client) {
            const url = Lampa.Storage.field(URL_KEY)

            const urls = url.split(';')
            if (urls.length === 1) {
                TorrentClientFactory.buildClient(url)
            }

            if (urls.length > 1) {
                TorrentClientFactory.selectUrl(urls)
            }
        }
        return this.client!
    }

    public static reset(): void {
        this.client = undefined
    }

    private static buildClient(url: any) {
        const login = Lampa.Storage.field(LOGIN_KEY)
        const password = Lampa.Storage.field(PASSWORD_KEY)
        this.client = new QBittorrentWebApiClient(url, login, password)
    }

    private static async selectUrl(urls: string[]) {
        const attempts = urls.map((url) => fetch(url + '/ping', { cache: 'no-cache' }).then((res) => (res.ok ? url : Promise.reject())))

        return new Promise<void>((resolve) => {
            let failed = 0
            let done = false

            attempts.forEach((p) =>
                p
                    .then((url) => {
                        if (!done) {
                            done = true
                            this.buildClient(url)
                            resolve()
                        }
                    })
                    .catch(() => {
                        if (++failed === attempts.length && !done) {
                            this.buildClient(urls[0])
                            resolve()
                        }
                    })
            )
        })
    }
}
