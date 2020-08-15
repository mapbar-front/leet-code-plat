export default {
  name: 'QlRouteView',
  render () {
    const { $route: { meta }, $store: { getters } } = this

    const inKeep = (
      <keep-alive>
        <router-view />
      </keep-alive>
    )
    const notKeep = (
      <router-view />
    )
    return meta.keepAlive || getters.multiTab ? inKeep : notKeep
  }
}
