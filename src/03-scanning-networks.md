# Module 3: Scanning Networks

## Learning Objectives

After completing this module, you will be able to:

- Understand network scanning concepts and techniques
- Identify different types of network scans
- Learn port scanning methodologies
- Use various scanning tools effectively
- Implement scanning countermeasures

## What is Network Scanning?

Network scanning is the process of identifying active hosts, open ports, and services running on a target network. It's the second phase of the ethical hacking methodology, following reconnaissance.

### Scanning Objectives

- **Host Discovery:** Identify live systems on the network
- **Port Discovery:** Find open ports and services
- **Operating System Detection:** Determine target OS versions
- **Service Enumeration:** Identify running services and versions
- **Vulnerability Identification:** Discover potential security weaknesses

## Types of Scanning

### Host Discovery Scanning

**Techniques:**
- ICMP Echo Requests (Ping)
- TCP SYN/ACK Scanning
- UDP Scanning
- ARP Scanning (Local network)

**Tools:**
- ping
- fping
- hping3
- nmap

### Port Scanning

**TCP Port Scanning:**
- **TCP Connect Scan:** Complete three-way handshake
- **TCP SYN Scan:** Half-open scanning
- **TCP FIN Scan:** Stealth scanning technique
- **TCP Xmas Scan:** Uses FIN, PSH, and URG flags
- **TCP Null Scan:** No flags set

**UDP Port Scanning:**
- More challenging than TCP
- Relies on ICMP unreachable messages
- Slower than TCP scanning

### Service Detection

**Banner Grabbing:**
- Application layer information gathering
- Service version identification
- Operating system fingerprinting

**Service Enumeration:**
- NetBios enumeration
- SNMP enumeration
- LDAP enumeration
- NTP enumeration

## Nmap - Network Mapper

### Basic Nmap Commands

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

### Unicornscan

**Features:**
- Asynchronous stateless TCP scanning
- UDP protocol scanning
- Active/passive remote OS identification
- Application protocol detection

### Zmap

**Features:**
- Internet-wide network scanner
- Single port scanning across entire IPv4 space
- High-speed scanning capabilities
- Research-oriented tool

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

### Manual Vulnerability Assessment

**Process:**
1. Service identification
2. Version enumeration
3. Vulnerability database lookup
4. Exploit availability check
5. Impact assessment

## Mobile and Wireless Scanning

### Mobile Device Scanning

**Considerations:**
- Network connectivity changes
- Battery life impact
- Detection avoidance
- Legal implications

### Wireless Network Scanning

**Tools:**
- airodump-ng
- Kismet
- InSSIDer
- Wigle WiFi

**Information Gathered:**
- Access point names (SSIDs)
- MAC addresses (BSSIDs)
- Signal strength
- Encryption types
- Channel information

## Countermeasures

### Network-Level Protections

**Firewalls:**
- Packet filtering
- Stateful inspection
- Application layer filtering
- Rate limiting

**Intrusion Detection Systems (IDS):**
- Signature-based detection
- Anomaly-based detection
- Network behavior analysis
- Real-time alerting

### Host-Level Protections

**Port Security:**
- Close unnecessary ports
- Service hardening
- Regular updates
- Access controls

**Monitoring:**
- Log analysis
- Network monitoring
- Behavior baselines
- Incident response

### Detection and Response

**Scan Detection:**
- Multiple connection attempts
- Port sweep patterns
- Unusual traffic patterns
- Geographic anomalies

**Response Strategies:**
- Automated blocking
- Rate limiting
- Honeypots/Honeynets
- Legal action

## Best Practices

### Ethical Scanning Guidelines

- Always obtain proper authorization
- Respect rate limits and timing
- Document all activities
- Report findings responsibly
- Follow disclosure protocols

### Technical Considerations

- Use appropriate timing templates
- Implement proper logging
- Consider network impact
- Plan for incident response
- Maintain tool updates

## Review Questions

1. What is the difference between TCP Connect and TCP SYN scanning?
2. Name three Nmap timing templates and their use cases.
3. What are the main categories of Nmap Scripting Engine scripts?
4. How can fragmented packets help evade detection?
5. What are the key components of an effective scanning countermeasure strategy?

## Key Takeaways

- Network scanning is essential for security assessment
- Different scan types serve different purposes
- Nmap is the industry standard for network scanning
- Stealth techniques help avoid detection
- Proper countermeasures can effectively detect and prevent scanning
- Always follow ethical guidelines and legal requirements

---

**Previous:** [Module 2: Footprinting and Reconnaissance](./02-footprinting-and-reconnaissance.md) | **Next:** [Module 4: Enumeration](./04-enumeration.md)