# Module 3: Scanning Networks

## Course Outline

Learn different network scanning techniques and countermeasures.

**Hands-on Labs:**

- Perform host, port, service, and OS discovery on the target network
- Perform scanning on the target network beyond IDS and Firewall
- Perform scanning using AI

**Key topics covered:**

- Network Scanning
- Scanning Tools
- Host Discovery Techniques
- Port Scanning Techniques
- Host Discovery and Port Scanning with AI
- Service Version Discovery
- OS Discovery/Banner Grabbing
- Scanning Beyond IDS and Firewall
- Scanning Detection and Prevention

## Basic Nmap Commands

```bash
# Basic host discovery
nmap -sn 192.168.1.0/24

# TCP SYN scan
nmap -sS target_ip

# UDP scan
nmap -sU target_ip

# Service version detection
nmap -sV target_ip

# Operating system detection
nmap -O target_ip

# Aggressive scan
nmap -A target_ip

# Scan specific ports
nmap -p 80,443,22 target_ip

# Scan port ranges
nmap -p 1-1000 target_ip
```

### Nmap Timing Templates

- **-T0 (Paranoid):** Very slow, IDS evasion
- **-T1 (Sneaky):** Slow, IDS evasion
- **-T2 (Polite):** Slow, less bandwidth
- **-T3 (Normal):** Default timing
- **-T4 (Aggressive):** Fast scan
- **-T5 (Insane):** Very fast, may miss results

### Nmap Scripting Engine (NSE)

**Script Categories:**

- **auth:** Authentication scripts
- **broadcast:** Network broadcast discovery
- **brute:** Brute force attacks
- **default:** Default safe scripts
- **discovery:** Network/service discovery
- **dos:** Denial of service testing
- **exploit:** Exploitation scripts
- **external:** External resource queries
- **fuzzer:** Fuzzing scripts
- **intrusive:** Intrusive scripts
- **malware:** Malware detection
- **safe:** Safe scripts
- **version:** Version detection
- **vuln:** Vulnerability detection

**NSE Usage:**

```bash
# Run default scripts
nmap -sC target_ip

# Run specific script category
nmap --script vuln target_ip

# Run specific script
nmap --script http-enum target_ip

# Update script database
nmap --script-updatedb
```

## Other Scanning Tools

### Masscan

**Features:**

- High-speed port scanner
- Can scan millions of ports per second
- Asynchronous transmission
- Custom packet crafting

**Usage:**

```bash
# Basic scan
masscan -p1-1000 192.168.1.0/24

# Fast scan with rate limiting
masscan -p80,443 --rate=10000 192.168.1.0/24
```

## Advanced Scanning Techniques

### Stealth Scanning

**Techniques:**

- **Fragmented Packets:** Split packets to evade detection
- **Source Port Manipulation:** Use common source ports (53, 20)
- **Decoy Scanning:** Use multiple fake source IPs
- **Timing Manipulation:** Slow scanning to avoid detection

**Nmap Stealth Options:**

```bash
# Fragment packets
nmap -f target_ip

# Use decoys
nmap -D RND:10 target_ip

# Source port manipulation
nmap --source-port 53 target_ip

# Timing template
nmap -T1 target_ip
```

### Firewall and IDS Evasion

**Techniques:**

- **Packet Fragmentation**
- **Source Routing**
- **Proxy Servers**
- **Anonymizers**

**Nmap Evasion:**

```bash
# MTU specification
nmap --mtu 24 target_ip

# Bad checksum
nmap --badsum target_ip

# Append random data
nmap --data-length 25 target_ip

# Spoof MAC address
nmap --spoof-mac Dell target_ip
```

### IPv6 Scanning

**Challenges:**

- Larger address space
- Different protocols (ICMPv6)
- Link-local addresses
- Neighbor discovery

**Nmap IPv6:**

```bash
# IPv6 host discovery
nmap -6 -sn 2001:db8::/32

# IPv6 port scan
nmap -6 -sS 2001:db8::1
```

## Vulnerability Scanning

### Automated Vulnerability Scanners

**Commercial Tools:**

- Nessus
- Qualys VMDR
- Rapid7 Nexpose
- Greenbone (OpenVAS)

**Open Source Tools:**

- OpenVAS
- Nuclei
- Nikto (Web vulnerability)

## Practice Questions

### Question 1

**Which of the following Nmap options is used to control the timing and speed of a scan?**

- ✅ **nmap -T** _(Correct)_
- ❌ nmap -sV
- ❌ nmap -A
- ❌ nmap -O
