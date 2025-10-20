# Module 2: Footprinting and Reconnaissance

## Learning Objectives

After completing this module, you will be able to:

- Understand the concept of footprinting and reconnaissance
- Identify different types of footprinting
- Learn various information gathering techniques
- Use footprinting tools and techniques
- Understand countermeasures against reconnaissance

## What is Footprinting?

Footprinting is the technique of gathering information about a target system or network. It's the first phase of ethical hacking where you collect as much information as possible about the target.

### Objectives of Footprinting

- **Know Security Posture:** Understand the target's security infrastructure
- **Reduce Focus Area:** Narrow down the range of IP addresses, network ranges, domain names
- **Identify Vulnerabilities:** Discover potential security weaknesses
- **Draw Network Map:** Create a blueprint of the target's network topology

## Types of Footprinting

### Passive Footprinting

- Information gathering without directly accessing the target
- Uses publicly available information
- Difficult to detect by the target
- Examples: Search engines, social media, public records

### Active Footprinting

- Direct interaction with the target system
- More intrusive and detectable
- Provides more detailed information
- Examples: Port scanning, banner grabbing, DNS enumeration

## Information Gathering Techniques

### Search Engine Footprinting

**Google Dorking (Advanced Google Search):**

- `site:` - Search specific websites
- `filetype:` - Search for specific file types
- `intitle:` - Search page titles
- `inurl:` - Search URLs
- `cache:` - View cached versions

**Examples:**

```
site:example.com filetype:pdf
intitle:"index of" site:example.com
inurl:admin site:example.com
```

### Social Media Footprinting

**Platforms to investigate:**

- LinkedIn (employee information)
- Facebook (personal details, relationships)
- Twitter (real-time updates, opinions)
- Instagram (location data, activities)

**Information to gather:**

- Employee names and roles
- Company structure
- Technologies used
- Personal interests and habits

### Website Footprinting

**Web crawling tools:**

- HTTrack
- Wget
- Scrapy

**Information to extract:**

- Directory structure
- File names and extensions
- Comments in source code
- Hidden directories
- Technology stack

### Email Footprinting

**Techniques:**

- Email header analysis
- Email tracking
- Email harvesting from websites
- Social engineering via email

**Tools:**

- theHarvester
- Maltego
- EmailTracker

### Whois Footprinting

**Information available:**

- Domain registration details
- Administrative contacts
- Technical contacts
- DNS information
- Registration and expiry dates

**Tools:**

- whois command
- Online whois databases
- DomainTools

### DNS Footprinting

**DNS Record Types:**

- **A Records:** IP addresses
- **AAAA Records:** IPv6 addresses
- **MX Records:** Mail servers
- **NS Records:** Name servers
- **CNAME Records:** Aliases
- **TXT Records:** Text information

**DNS Enumeration Tools:**

- nslookup
- dig
- host
- fierce
- dnsrecon

### Network Range Information

**Regional Internet Registries (RIRs):**

- ARIN (North America)
- RIPE (Europe, Middle East, Central Asia)
- APNIC (Asia Pacific)
- LACNIC (Latin America)
- AFRINIC (Africa)

## Footprinting Tools

### Automated Tools

**Maltego:**

- Visual link analysis
- OSINT data gathering
- Relationship mapping

**theHarvester:**

- Email harvesting
- Subdomain discovery
- Virtual host detection

**Recon-ng:**

- Modular reconnaissance framework
- Database-driven approach
- Automated report generation

**Shodan:**

- Internet-connected device search engine
- Banner information
- Vulnerability data

### Manual Techniques

**Google Hacking:**

- Advanced search operators
- Cached pages analysis
- Image metadata extraction

**Social Engineering:**

- Phone calls to employees
- Physical site visits
- Dumpster diving

## Advanced Footprinting

### Metadata Extraction

**File metadata contains:**

- Author information
- Creation/modification dates
- Software versions
- System information

**Tools:**

- ExifTool
- FOCA (Fingerprinting Organizations with Collected Archives)
- Metagoofil

### Competitive Intelligence

**Sources:**

- Company websites
- Press releases
- Job postings
- Financial reports
- Patent databases

### Physical Security Assessment

**Areas to examine:**

- Building security
- Entry points
- Security cameras
- Employee badges
- Visitor procedures

## Countermeasures

### Organizational Measures

- **Information Security Policy:** Clear guidelines on information sharing
- **Employee Training:** Awareness about social engineering
- **Physical Security:** Controlled access to facilities
- **Incident Response:** Procedures for handling security incidents

### Technical Measures

**Web Security:**

- Remove sensitive information from websites
- Implement robots.txt properly
- Use meta tags to prevent indexing
- Regular security audits

**DNS Security:**

- Limit DNS zone transfers
- Use split DNS architecture
- Monitor DNS queries
- Implement DNS security extensions (DNSSEC)

**Network Security:**

- Firewall configuration
- Intrusion detection systems
- Network monitoring
- Access control lists

### Privacy Protection

**Personal Information:**

- Review social media privacy settings
- Limit personal information disclosure
- Use separate personal/professional accounts
- Regular privacy audits

## Review Questions

1. What is the difference between passive and active footprinting?
2. Name five Google dorking operators and their uses.
3. What information can be gathered from Whois databases?
4. List three automated footprinting tools and their primary functions.
5. What are the main countermeasures against footprinting attacks?

## Key Takeaways

- Footprinting is the foundation of any security assessment
- Both passive and active techniques have their place in reconnaissance
- Information is available from numerous public sources
- Proper countermeasures can significantly reduce information leakage
- Regular audits help identify and minimize information exposure

---

**Previous:** [Module 1: Introduction to Ethical Hacking](./01-introduction-to-ethical-hacking.md) | **Next:** [Module 3: Scanning Networks](./03-scanning-networks.md)
