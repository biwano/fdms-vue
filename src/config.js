export default {
  api: {
    baseURL: "http://localhost:5000/",
    timeout: 30000,
    headers: { "X-Custom-Header": "foobar" },
    tenant_master: "__root",
    tenant_all_id: "*",
    withCredentials: true,
    cache_ttl: 100000,
    use_cache: true,
    on401() {
      this.globalError("Please authenticate");
      this.$router.push("/login");
    }
  },
  log: {
    ERROR: true, WARNING: true, INFO: true, DEBUG: true, TRACE: true
  }
};
