import api from 'axios'

export const axiosRequests = {
  ping () {
    return api.get('?url=ping')
  },
  v1_blink () {
    return api.get('?url=v1/blink')
  },
  update (force: boolean) {
    return api.post('?url=v1/update', { cmd: force })
  }
}
