# Personal Blog & Portfolio — Self-Hosted on a Linux VPS

A self-hosted blog and portfolio website built from scratch as a hands-on exercise in web development, Linux server administration, and network configuration.

**Live at:** [https://yiannileon.com](https://yiannileon.com)

---

## Built With

**Front-end**  
- HTML5, CSS3 (responsive, mobile-first, semantic markup)

**Server**  
- Debian 12 (Bookworm)  
- Nginx  
- Certbot / Let's Encrypt

**Infrastructure**  
- Vultr VPS  
- Porkbun (domain registrar)  
- OpenSSH, UFW

**Workflow**  
- Git

---

## Prerequisites

If you want to replicate this setup, you’ll need:

- A Linux VPS (Linode, DigitalOcean, Vultr, etc.)
- A registered domain with DNS management access (Porkbun, Namecheap, etc.)
- Local machine with Git and an SSH client
- Basic familiarity with the command line

---

## What I Did (Key Tasks)

- Provisioned and configured a Debian 12 VPS on Vultr  
- Registered a custom domain and configured A and AAAA DNS records (IPv4 + IPv6)  
- Hardened SSH access using key-based authentication  
- Installed and configured Nginx with a custom server block  
- Obtained an SSL/TLS certificate using Certbot and Let's Encrypt  
- Configured UFW firewall rules (allow SSH, HTTP, HTTPS only)  
- Set up a Git-based deployment workflow  
- Built the front-end with responsive design and semantic HTML/CSS  

---

## Deployment (How to Update the Live Site)

Clone the repository onto the server (one-time setup):

    git clone https://github.com/yiannii/yianniblog.git /var/www/yiannileon.com

> **Note:** The repository is named `yianniblog` but is cloned into `/var/www/yiannileon.com` to match the domain name. This is intentional and does not affect functionality.

To update the live site after pushing changes from your local machine:

    cd /var/www/yiannileon.com
    git pull

For a full step‑by‑step guide (initial Nginx config, Certbot, firewall, etc.), see the detailed tutorial on my blog *(link to be added)*.

---

## Future Goals

- Build and maintain a self‑hosted email server
- Configure MX, SPF, DKIM, and DMARC records
- Expand server hardening and security practices
- Document the full project as a tutorial on the site

---

## Author

Yianni Leontakianakos  
[Live site](https://yiannileon.com) | [LinkedIn](https://linkedin.com/in/yiannisl) | [GitHub](https://github.com/yiannii)
