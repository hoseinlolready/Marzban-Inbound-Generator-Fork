
const { createApp, ref, computed, watch } = Vue;

createApp({
  setup() {
    const wallets = ref([
      {
        name: "Toncoin (TON)",
        address: "UQCtWbj6w5pXICYfRmgg2NssMvral-khYWCKWV83vK-ShJcw",
      },
      {
        name: "TRON (TRX)",
        address: "TJWnK1fCcxwsemyYgYjebKnsBfofCFy3Pc",
      },
      {
        name: "Dogecoin (DOGE)",
        address: "DRXjceAoxBRzNsNgVR3GduPSau4xiv179y",
      },
      {
        name: "Litecoin (LTC)",
        address: "ltc1qz6f9aqmm9w86l7jva0ljvh35gxw80u8yplx6px",
      },
      {
        name: "Ethereum (ETH)",
        address: "0xFA231ce9128AC097F70F5efcfFb3d918645e1Ca9",
      },
    ]);

    const copyWalletAddress = (address) => {
      navigator.clipboard.writeText(address);
      alert(`Copied ${address} to clipboard!`);
    };
    const config = ref({
      tag: "inbound-8080",
      listen: "0.0.0.0",
      port: 8080,
      protocol: "vless",
      settings: { clients: [], decryption: "none" },
      streamSettings: { network: "tcp", security: "none" },
    });

    const isFallbacksEnabled = ref(false);
    const fallbacks = ref([]);
    const isHttpObfuscationEnabled = ref(false);
    const requestPath = ref("/path");
    const requestHeaders = ref([]);
    const responseHeaders = ref([]);
    const tcpSettings = ref({
      acceptProxyProtocol: false,
      header: {
        type: "http",
        request: {
          version: "1.1",
          method: "GET",
          path: ["/path"],
          headers: {},
        },
        response: {
          version: "1.1",
          status: "200",
          reason: "OK",
          headers: {},
        },
      },
    });
    const wsSettings = ref({
      path: "/path",
      host: "google.com",
      acceptProxyProtocol: false,
    });
    const wsHeaders = ref([]);
    const httpupgradeSettings = ref({
      path: "/path",
      host: "google.com",
      acceptProxyProtocol: false,
    });
    const httpupgradeHeaders = ref([]);
    const splithttpSettings = ref({
      path: "/",
      host: "",
      scMaxConcurrentPosts: "100-200",
      scMaxEachPostBytes: "1000000-2000000",
      scMinPostsIntervalMs: "10-50",
      noSSEHeader: false,
      xPaddingBytes: "100-1000",
      xmux: {
        maxConcurrency: "16-32",
        maxConnections: 0,
        cMaxReuseTimes: "64-128",
        cMaxLifetimeMs: 0,
      },
      mode: "auto",
      noGRPCHeader: false,
    });
    const splithttpHeaders = ref([]);
    const xhttpSettings = ref({
      path: "/path",
      host: "hostname",
      scMaxBufferedPosts: 30,
      scMaxEachPostBytes: "1000000",
      scMinPostsIntervalMs: 30,
      noSSEHeader: false,
      noGRPCHeader: false,
      xPaddingBytes: "100-1000",
      mode: "auto",
    });
    const xhttpHeaders = ref([]);
    const grpcSettings = ref({
      serviceName: "yourServiceName",
      multiMode: false,
    });
    const httpSettings = ref({
      path: "/yourpath",
      hostInput: "example1.com, example2.com",
    });
    const kcpSettings = ref({
      mtu: 1350,
      tti: 50,
      uplinkCapacity: 5,
      downlinkCapacity: 20,
      congestion: false,
      readBufferSize: 2,
      writeBufferSize: 2,
      header: {
        type: "none",
        domain: "example.com",
      },
      seed: "Password",
    });
    const tlsSettings = ref({
      serverName: "example.com",
      minVersion: "1.0",
      maxVersion: "1.1",
      cipherSuites:
        "RSA_AES_128_CBC:RSA_AES_256_CBC:RSA_AES_128_GCM:RSA_AES_256_GCM:AES_128_GCM:AES_256_GCM:CHACHA20_POLY1305:ECDHE_ECDSA_AES_128_CBC:ECDHE_ECDSA_AES_256_CBC:ECDHE_RSA_AES_128_CBC:ECDHE_RSA_AES_256_CBC:ECDHE_ECDSA_AES_128_GCM:ECDHE_ECDSA_AES_256_GCM:ECDHE_RSA_AES_128_GCM:ECDHE_RSA_AES_256_GCM:ECDHE_ECDSA_CHACHA20_POLY1305:ECDHE_RSA_CHACHA20_POLY1305",
      rejectUnknownSni: false,
      disableSystemRoot: false,
      enableSessionResumption: false,
      alpn: { h3: false, h2: true, http11: true },
      certificates: [
        {
          certificateFile: "/root/Public_Key.crt",
          keyFile: "/root/Private_Key.key",
          ocspStapling: 3600,
          usage: "encipherment",
          buildChain: false,
        },
      ],
      settings: { allowInsecure: false, fingerprint: "chrome" },
    });

    const keyPairs = ref([]);
    fetch("./keys.json")
      .then((response) => response.json())
      .then((data) => {
        keyPairs.value = data.keys;
      })
      .catch((error) => {
        console.error("Error loading keys.json:", error);
        keyPairs.value = [
          {
            privateKey: "-Lt-RAto4AqRQU71x4ZtwpbJsSv2NTKRaOyJd-mGw0A",
            publicKey: "asi35kzvsZypOSGoeuCsHCoDWD0q8NSK1IVGF0bo82Y",
          },
          {
            privateKey: "-FOFFSPZCW8eqR_g6sd-hZf9fLWrjd0MlVbirgGHQCc",
            publicKey: "pp_BqOyK3Hullsa4lIx9goiJl78JdC7j_SducHR9tAI",
          },
          {
            privateKey: "6PkSaCr69MYWO4JhEoDbjtEPer0bEyW2A8tj_abYhwQ",
            publicKey: "fPHG-kdaR1-ghTPsy0Pa-zjiN9-D84p_gy8QUzfe4nI",
          },
        ];
      });

    const realitySettings = ref({
      show: false,
      dest: "example.com:443",
      xver: 0,
      serverNames: "example.com,www.example.com",
      privateKey: "YourPvKey",
      publicKey: "YourPubKey",
      shortIds: "YouShortIds",
      spiderX: "/",
      fingerprint: "chrome",
    });

    const shadowsocksSettings = ref({
      method: "2022-blake3-aes-256-gcm",
      password: "3F4W6f27iIIUaD91u3jGI16uL4sudZ1uykuhzFOmlAc=",
      network: "tcp,udp",
      ivCheck: false,
    });
    const socksSettings = ref({
      auth: "password",
      accounts: [{ user: "username1", pass: "password1" }],
      udp: false,
      ip: "127.0.0.1",
    });
    const httpProtocolSettings = ref({
      accounts: [{ user: "Enterusername1", pass: "pass1" }],
      allowTransparent: false,
    });
    const wireguardSettings = ref({
      mtu: 1420,
      secretKey: "sHbdow9HAufNxeyVj4fv1Rxmw8dFEkQ9PEENnTAlKVw=",
      peers: [
        {
          privateKey: "KBsQIzwvEdbcM3x2FtKwzT3gJqZ/89TG+wnsLXIh028=",
          publicKey: "tpbBoo0+3u1opPYgyJKmGMAWwtqrtEjWQBKYZ96QARo=",
          preSharedKey: "jtXaJT4957ZU0QNVFqY5dBhto72IlBAyxObgC13DHts=",
          allowedIPsInput: "10.0.0.2/32",
          allowedIPs: ["10.0.0.2/32"],
          keepAlive: 0,
        },
      ],
      noKernelTun: false,
    });
    const sniffingEnabled = ref(true);
    const destOverride = ref({
      http: true,
      tls: true,
      quic: true,
      fakedns: true,
    });
    const sniffingMetadataOnly = ref(false);
    const sniffingRouteOnly = ref(false);

    const needsProtocolSettings = computed(() =>
      ["vless", "trojan"].includes(config.value.protocol)
    );

    const canUseFallbacks = computed(
      () =>
        ["vless", "trojan"].includes(config.value.protocol) &&
        config.value.streamSettings?.network === "tcp"
    );

    const updateTag = () => {
      const protocol = config.value.protocol.toUpperCase();
      const port = config.value.port;
      let tag = `${protocol}`;

      if (
        config.value.streamSettings &&
        ![
          "dokodemo-door",
          "shadowsocks",
          "socks",
          "http",
          "wireguard",
        ].includes(config.value.protocol)
      ) {
        const network = config.value.streamSettings.network.toUpperCase();
        const security =
          config.value.streamSettings.security.toUpperCase();
        tag = `${protocol}+${network}+${security}`;
      }

      config.value.tag = `${tag}+${port}`;
    };

    watch(
      () => [
        config.value.protocol,
        config.value.port,
        config.value.streamSettings?.network,
        config.value.streamSettings?.security,
      ],
      () => {
        updateTag();
      },
      { deep: true }
    );

    updateTag();

    watch(
      () => [config.value.protocol, config.value.streamSettings?.network],
      ([newProtocol, newNetwork]) => {
        if (
          !["vless", "trojan"].includes(newProtocol) ||
          newNetwork !== "tcp"
        ) {
          isFallbacksEnabled.value = false;
          fallbacks.value = [];
        }
      }
    );

    const allSecurityOptions = ["none", "tls", "reality"];
    const allNetworkOptions = [
      "tcp",
      "kcp",
      "ws",
      "httpupgrade",
      "splithttp",
      "http",
      "grpc",
      "xhttp",
    ];

    const availableSecurityOptions = computed(() => {
      const protocol = config.value.protocol;
      if (["vless", "trojan"].includes(protocol)) {
        return allSecurityOptions;
      }
      return allSecurityOptions.filter((opt) => opt !== "reality");
    });

    const availableNetworkOptions = computed(() => {
      const security = config.value.streamSettings?.security;
      if (security === "reality") {
        return ["tcp", "grpc", "splithttp", "xhttp"];
      }
      return allNetworkOptions;
    });

    const generateRandomPort = () => {
      const minPort = 1024;
      const maxPort = 65535;
      config.value.port =
        Math.floor(Math.random() * (maxPort - minPort + 1)) + minPort;
    };

    const generateShortId = () => {
      const array = new Uint8Array(8);
      crypto.getRandomValues(array);
      const shortId = Array.from(array)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      realitySettings.value.shortIds = shortId;
    };

    // const generateKeys = () => {
    //   const randomIndex = Math.floor(
    //     Math.random() * keyPairs.value.length
    //   );
    //   const selectedPair = keyPairs.value[randomIndex];
    //   realitySettings.value.privateKey = selectedPair.privateKey;
    //   realitySettings.value.publicKey = selectedPair.publicKey;
    // };

    const generatedConfig = computed(() => {
      const output = {
        tag: config.value.tag,
        listen: config.value.listen,
        port: config.value.port,
        protocol: config.value.protocol,
        settings: {},
      };

      if (config.value.protocol === "dokodemo-door") {
        output.settings = {
          address: config.value.settings.address || "127.0.0.1",
          port: config.value.settings.port || 1080,
          network: config.value.settings.network || ["tcp", "udp"],
          followRedirect: config.value.settings.followRedirect || false,
        };
      } else if (config.value.protocol === "shadowsocks") {
        output.settings = {
          method: shadowsocksSettings.value.method,
          password: shadowsocksSettings.value.password || "",
          network: shadowsocksSettings.value.network || "tcp,udp",
          clients: config.value.settings.clients || [],
          ivCheck: shadowsocksSettings.value.ivCheck,
        };
      } else if (config.value.protocol === "socks") {
        output.settings = {
          auth: socksSettings.value.auth,
          accounts:
            socksSettings.value.auth === "password"
              ? socksSettings.value.accounts
              : undefined,
          udp: socksSettings.value.udp,
          ip: socksSettings.value.ip,
        };
        if (!output.settings.accounts) delete output.settings.accounts;
      } else if (config.value.protocol === "http") {
        output.settings = {
          accounts: httpProtocolSettings.value.accounts,
          allowTransparent: httpProtocolSettings.value.allowTransparent,
        };
      } else if (config.value.protocol === "wireguard") {
        output.settings = {
          mtu: wireguardSettings.value.mtu,
          secretKey: wireguardSettings.value.secretKey,
          peers: wireguardSettings.value.peers.map((peer) => ({
            privateKey: peer.privateKey,
            publicKey: peer.publicKey,
            preSharedKey: peer.preSharedKey,
            allowedIPs: peer.allowedIPsInput
              ? peer.allowedIPsInput.split(",").map((ip) => ip.trim())
              : peer.allowedIPs,
            keepAlive: peer.keepAlive,
          })),
          noKernelTun: wireguardSettings.value.noKernelTun,
        };
      } else {
        output.settings = {
          clients: config.value.settings.clients || [],
          decryption:
            config.value.protocol === "vless" ? "none" : undefined,
        };

        if (isFallbacksEnabled.value && fallbacks.value.length > 0) {
          output.settings.fallbacks = fallbacks.value.map((fb) => ({
            name: fb.name || "",
            alpn: fb.alpn || "",
            path: fb.path || "",
            dest: fb.dest || "",
            xver: fb.xver || 0,
          }));
        }

        if (!output.settings.decryption)
          delete output.settings.decryption;

        if (config.value.streamSettings) {
          const streamSettings = {
            network: config.value.streamSettings.network,
            security: config.value.streamSettings.security,
          };

          if (config.value.streamSettings.network === "tcp") {
            streamSettings.tcpSettings = {
              acceptProxyProtocol: tcpSettings.value.acceptProxyProtocol,
            };
            if (isHttpObfuscationEnabled.value) {
              streamSettings.tcpSettings.header = {
                type: "http",
                request: {
                  version: tcpSettings.value.header.request.version,
                  method: tcpSettings.value.header.request.method,
                  path: requestPath.value.split(",").map((p) => p.trim()),
                  headers: requestHeaders.value.reduce((acc, h) => {
                    acc[h.name] = h.value.split(",").map((v) => v.trim());
                    return acc;
                  }, {}),
                },
                response: {
                  version: tcpSettings.value.header.response.version,
                  status: tcpSettings.value.header.response.status,
                  reason: tcpSettings.value.header.response.reason,
                  headers: responseHeaders.value.reduce((acc, h) => {
                    acc[h.name] = h.value.split(",").map((v) => v.trim());
                    return acc;
                  }, {}),
                },
              };
            } else {
              streamSettings.tcpSettings.header = { type: "none" };
            }
          }

          if (config.value.streamSettings.network === "ws") {
            streamSettings.wsSettings = {
              acceptProxyProtocol: wsSettings.value.acceptProxyProtocol,
              path: wsSettings.value.path,
              host: wsSettings.value.host,
              headers:
                wsHeaders.value.length > 0
                  ? wsHeaders.value.reduce((acc, h) => {
                      acc[h.name] = h.value;
                      return acc;
                    }, {})
                  : {},
            };
          }

          if (config.value.streamSettings.network === "httpupgrade") {
            streamSettings.httpupgradeSettings = {
              acceptProxyProtocol:
                httpupgradeSettings.value.acceptProxyProtocol,
              path: httpupgradeSettings.value.path,
              host: httpupgradeSettings.value.host,
              headers:
                httpupgradeHeaders.value.length > 0
                  ? httpupgradeHeaders.value.reduce((acc, h) => {
                      acc[h.name] = h.value;
                      return acc;
                    }, {})
                  : {},
            };
          }

          if (config.value.streamSettings.network === "splithttp") {
            streamSettings.splithttpSettings = {
              path: splithttpSettings.value.path,
              host: splithttpSettings.value.host,
              headers:
                splithttpHeaders.value.length > 0
                  ? splithttpHeaders.value.reduce((acc, h) => {
                      acc[h.name] = h.value;
                      return acc;
                    }, {})
                  : {},
              scMaxConcurrentPosts:
                splithttpSettings.value.scMaxConcurrentPosts,
              scMaxEachPostBytes:
                splithttpSettings.value.scMaxEachPostBytes,
              scMinPostsIntervalMs:
                splithttpSettings.value.scMinPostsIntervalMs,
              noSSEHeader: splithttpSettings.value.noSSEHeader,
              xPaddingBytes: splithttpSettings.value.xPaddingBytes,
              xmux: {
                maxConcurrency:
                  splithttpSettings.value.xmux.maxConcurrency,
                maxConnections:
                  splithttpSettings.value.xmux.maxConnections,
                cMaxReuseTimes:
                  splithttpSettings.value.xmux.cMaxReuseTimes,
                cMaxLifetimeMs:
                  splithttpSettings.value.xmux.cMaxLifetimeMs,
              },
              mode: splithttpSettings.value.mode,
              noGRPCHeader: splithttpSettings.value.noGRPCHeader,
            };
          }

          if (config.value.streamSettings.network === "xhttp") {
            streamSettings.xhttpSettings = {
              path: xhttpSettings.value.path,
              host: xhttpSettings.value.host,
              headers:
                xhttpHeaders.value.length > 0
                  ? xhttpHeaders.value.reduce((acc, h) => {
                      acc[h.name] = h.value;
                      return acc;
                    }, {})
                  : {},
              scMaxBufferedPosts:
                xhttpSettings.value.mode === "packet-up"
                  ? xhttpSettings.value.scMaxBufferedPosts
                  : undefined,
              scMaxEachPostBytes:
                xhttpSettings.value.mode === "packet-up"
                  ? xhttpSettings.value.scMaxEachPostBytes
                  : undefined,
              scMinPostsIntervalMs:
                xhttpSettings.value.mode === "packet-up"
                  ? xhttpSettings.value.scMinPostsIntervalMs
                  : undefined,
              noSSEHeader: xhttpSettings.value.noSSEHeader,
              noGRPCHeader: ["stream-up", "stream-one"].includes(
                xhttpSettings.value.mode
              )
                ? xhttpSettings.value.noGRPCHeader
                : undefined,
              xPaddingBytes: xhttpSettings.value.xPaddingBytes,
              mode: xhttpSettings.value.mode,
            };
          }

          if (config.value.streamSettings.network === "grpc") {
            streamSettings.grpcSettings = {
              serviceName: grpcSettings.value.serviceName || "",
              multiMode: grpcSettings.value.multiMode,
            };
          }

          if (config.value.streamSettings.network === "http") {
            streamSettings.httpSettings = {
              path: httpSettings.value.path || "",
              host: httpSettings.value.hostInput
                ? httpSettings.value.hostInput
                    .split(",")
                    .map((h) => h.trim())
                : [],
            };
          }

          if (config.value.streamSettings.network === "kcp") {
            streamSettings.kcpSettings = {
              mtu: kcpSettings.value.mtu,
              tti: kcpSettings.value.tti,
              uplinkCapacity: kcpSettings.value.uplinkCapacity,
              downlinkCapacity: kcpSettings.value.downlinkCapacity,
              congestion: kcpSettings.value.congestion,
              readBufferSize: kcpSettings.value.readBufferSize,
              writeBufferSize: kcpSettings.value.writeBufferSize,
              header: {
                type: kcpSettings.value.header.type,
                domain: kcpSettings.value.header.domain || "",
              },
              seed: kcpSettings.value.seed || "",
            };
          }

          if (config.value.streamSettings.security === "tls") {
            const alpnList = [];
            if (tlsSettings.value.alpn.h3) alpnList.push("h3");
            if (tlsSettings.value.alpn.h2) alpnList.push("h2");
            if (tlsSettings.value.alpn.http11) alpnList.push("http/1.1");

            streamSettings.tlsSettings = {
              serverName: tlsSettings.value.serverName,
              minVersion: tlsSettings.value.minVersion,
              maxVersion: tlsSettings.value.maxVersion,
              cipherSuites: tlsSettings.value.cipherSuites,
              rejectUnknownSni: tlsSettings.value.rejectUnknownSni,
              disableSystemRoot: tlsSettings.value.disableSystemRoot,
              enableSessionResumption:
                tlsSettings.value.enableSessionResumption,
              alpn: alpnList.length > 0 ? alpnList : undefined,
              certificates: tlsSettings.value.certificates,
              settings: {
                allowInsecure: tlsSettings.value.settings.allowInsecure,
                fingerprint: tlsSettings.value.settings.fingerprint || "",
              },
            };
          }

          if (config.value.streamSettings.security === "reality") {
            streamSettings.realitySettings = {
              show: realitySettings.value.show,
              dest: realitySettings.value.dest || "",
              xver: realitySettings.value.xver || 0,
              serverNames: realitySettings.value.serverNames
                ? realitySettings.value.serverNames
                    .split(",")
                    .map((s) => s.trim())
                : [],
              privateKey: realitySettings.value.privateKey || "",
              publicKey: realitySettings.value.publicKey || "",
              shortIds: realitySettings.value.shortIds
                ? realitySettings.value.shortIds
                    .split(",")
                    .map((id) => id.trim())
                : [],
              spiderX: realitySettings.value.spiderX || "/",
              fingerprint: realitySettings.value.fingerprint || "",
            };
          }

          output.streamSettings = streamSettings;
        }
      }

      output.sniffing = {
        enabled: sniffingEnabled.value,
      };
      if (sniffingEnabled.value) {
        const selectedDestOverride = Object.entries(destOverride.value)
          .filter(([_, enabled]) => enabled)
          .map(([key]) => key);
        if (selectedDestOverride.length > 0) {
          output.sniffing.destOverride = selectedDestOverride;
        }
        output.sniffing.metadataOnly = sniffingMetadataOnly.value;
        output.sniffing.routeOnly = sniffingRouteOnly.value;
      }

      return JSON.stringify(output, null, 2);
    });

    watch(isFallbacksEnabled, (newVal) => {
      if (!newVal) {
        fallbacks.value = [];
      } else if (fallbacks.value.length === 0) {
        addFallback();
      }
    });

    watch(
      () => config.value.protocol,
      (newVal) => {
        if (newVal === "dokodemo-door") {
          config.value.settings = {
            address: "127.0.0.1",
            port: 1080,
            network: ["tcp", "udp"],
            followRedirect: false,
          };
          config.value.streamSettings = null;
          isFallbacksEnabled.value = false;
          fallbacks.value = [];
        } else if (newVal === "shadowsocks") {
          config.value.settings = { clients: [] };
          config.value.streamSettings = null;
          isFallbacksEnabled.value = false;
          fallbacks.value = [];
        } else if (newVal === "socks") {
          config.value.settings = {};
          config.value.streamSettings = null;
          isFallbacksEnabled.value = false;
          fallbacks.value = [];
        } else if (newVal === "http") {
          config.value.settings = {};
          config.value.streamSettings = null;
          isFallbacksEnabled.value = false;
          fallbacks.value = [];
        } else if (newVal === "wireguard") {
          config.value.settings = {};
          config.value.streamSettings = null;
          isFallbacksEnabled.value = false;
          fallbacks.value = [];
        } else {
          config.value.settings = { clients: [], decryption: "none" };
          config.value.streamSettings = {
            network: "tcp",
            security: "none",
          };
          if (!["vless", "trojan"].includes(newVal)) {
            isFallbacksEnabled.value = false;
            fallbacks.value = [];
          }
        }
        if (!["vless", "trojan"].includes(newVal)) {
          if (config.value.streamSettings?.security === "reality") {
            config.value.streamSettings.security = "none";
            config.value.streamSettings.network = "tcp";
          }
        }
      }
    );

    watch(
      () => config.value.streamSettings?.network,
      (newVal) => {
        if (newVal === "kcp" && config.value.streamSettings) {
          config.value.streamSettings.security = "none";
        }
      }
    );

    watch(
      () => config.value.streamSettings?.security,
      (newSecurity) => {
        const currentNetwork = config.value.streamSettings?.network;
        if (
          newSecurity === "reality" &&
          !["tcp", "grpc", "splithttp", "xhttp"].includes(currentNetwork)
        ) {
          config.value.streamSettings.network = "tcp";
        }
      }
    );

    watch(sniffingEnabled, (newVal) => {
      if (!newVal) {
        sniffingMetadataOnly.value = false;
        sniffingRouteOnly.value = false;
        destOverride.value = {
          http: false,
          tls: false,
          quic: false,
          fakedns: false,
        };
      }
    });

    const addFallback = () => {
      fallbacks.value.push({
        name: "",
        alpn: "",
        path: "",
        dest: "",
        xver: 0,
      });
    };

    const removeFallback = (index) => {
      fallbacks.value.splice(index, 1);
    };

    const addRequestHeader = () => {
      requestHeaders.value.push({ name: "", value: "" });
    };

    const removeRequestHeader = (index) => {
      requestHeaders.value.splice(index, 1);
    };

    const addResponseHeader = () => {
      responseHeaders.value.push({ name: "", value: "" });
    };

    const removeResponseHeader = (index) => {
      responseHeaders.value.splice(index, 1);
    };

    const addWsHeader = () => {
      wsHeaders.value.push({ name: "", value: "" });
    };

    const removeWsHeader = (index) => {
      wsHeaders.value.splice(index, 1);
    };

    const addHttpupgradeHeader = () => {
      httpupgradeHeaders.value.push({ name: "", value: "" });
    };

    const removeHttpupgradeHeader = (index) => {
      httpupgradeHeaders.value.splice(index, 1);
    };

    const addSplithttpHeader = () => {
      splithttpHeaders.value.push({ name: "", value: "" });
    };

    const removeSplithttpHeader = (index) => {
      splithttpHeaders.value.splice(index, 1);
    };

    const addXhttpHeader = () => {
      xhttpHeaders.value.push({ name: "", value: "" });
    };

    const removeXhttpHeader = (index) => {
      xhttpHeaders.value.splice(index, 1);
    };

    const addCertificate = () => {
      tlsSettings.value.certificates.push({
        certificateFile: "",
        keyFile: "",
        ocspStapling: 0,
        usage: "encipherment",
        buildChain: false,
      });
    };

    const removeCertificate = (index) => {
      tlsSettings.value.certificates.splice(index, 1);
    };

    const addSocksAccount = () => {
      socksSettings.value.accounts.push({ user: "", pass: "" });
    };

    const removeSocksAccount = (index) => {
      socksSettings.value.accounts.splice(index, 1);
    };

    const addHttpAccount = () => {
      httpProtocolSettings.value.accounts.push({ user: "", pass: "" });
    };

    const removeHttpAccount = (index) => {
      httpProtocolSettings.value.accounts.splice(index, 1);
    };

    const addWireguardPeer = () => {
      wireguardSettings.value.peers.push({
        privateKey: "",
        publicKey: "",
        preSharedKey: "",
        allowedIPsInput: "",
        allowedIPs: [],
        keepAlive: 0,
      });
    };

    const removeWireguardPeer = (index) => {
      wireguardSettings.value.peers.splice(index, 1);
    };

    const copyToClipboard = () => {
      navigator.clipboard.writeText(generatedConfig.value);
      alert("Copied to clipboard!");
    };

    const downloadJSON = () => {
      const blob = new Blob([generatedConfig.value], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "config.json";
      a.click();
      URL.revokeObjectURL(url);
    };

    return {
      config,
      availableSecurityOptions,
      availableNetworkOptions,
      needsProtocolSettings,
      canUseFallbacks,
      generatedConfig,
      isFallbacksEnabled,
      fallbacks,
      isHttpObfuscationEnabled,
      requestPath,
      requestHeaders,
      responseHeaders,
      tcpSettings,
      wsSettings,
      wsHeaders,
      httpupgradeSettings,
      httpupgradeHeaders,
      splithttpSettings,
      splithttpHeaders,
      xhttpSettings,
      xhttpHeaders,
      grpcSettings,
      httpSettings,
      kcpSettings,
      tlsSettings,
      realitySettings,
      shadowsocksSettings,
      socksSettings,
      httpProtocolSettings,
      wireguardSettings,
      sniffingEnabled,
      destOverride,
      sniffingMetadataOnly,
      sniffingRouteOnly,
      addFallback,
      removeFallback,
      addRequestHeader,
      removeRequestHeader,
      addResponseHeader,
      removeResponseHeader,
      addWsHeader,
      removeWsHeader,
      addHttpupgradeHeader,
      removeHttpupgradeHeader,
      addSplithttpHeader,
      removeSplithttpHeader,
      addXhttpHeader,
      removeXhttpHeader,
      addCertificate,
      removeCertificate,
      addSocksAccount,
      removeSocksAccount,
      addHttpAccount,
      removeHttpAccount,
      addWireguardPeer,
      removeWireguardPeer,
      copyToClipboard,
      downloadJSON,
      generateShortId,
      generateRandomPort,
      wallets,
      copyWalletAddress,
    };
  },
}).mount("#app");
