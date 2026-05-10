# yiannileon.com — Self-Hosted Personal Website

A personal blog and portfolio website built and hosted from scratch as a hands-on exercise in web development, Linux server administration, and network configuration.

The site is live at [yiannileon.com](https://yiannileon.com)

---

## Purpose

This project exists to develop and demonstrate practical skills in web hosting and systems administration..

A secondary goal is to use the site as a personal blog to document ongoing projects and learning.

---

## Built With

**Front-end**
- HTML5
- CSS3

**Server**
- Debian 12 (Bookworm)
- Nginx
- Let's Encrypt SSL via Certbot

**Infrastructure**
- Vultr VPS (Shared CPU, New York region)
- Porkbun domain registrar
- Custom DNS configuration (A and AAAA records)
- SSH key authentication

**Workflow**
- Git for version control and deployment

---

## Features

- Fully self-hosted on a Linux VPS
- Served over HTTPS with a valid SSL certificate
- Responsive layout supporting desktop and mobile
- Deployed via Git — updates pushed to GitHub are pulled directly onto the server
- Custom domain with IPv4 and IPv6 support

---

## What I Did

- Provisioned and configured a Debian 12 VPS on Vultr
- Registered a custom domain and configured DNS records on Porkbun
- Hardened SSH access using key-based authentication
- Installed and configured Nginx to serve static files via a custom server block
- Obtained and configured an SSL/TLS certificate using Certbot and Let's Encrypt
- Configured UFW firewall rules to allow web and SSH traffic
- Set up a Git-based deployment workflow for updating the live site
- Built the front-end from scratch using HTML and CSS, applying responsive design principles and semantic markup

---

## Deployment

The site is deployed by cloning this repository directly onto the server:

```
git clone https://github.com/yiannii/yianniblog.git /var/www/yiannileon.com
```

To update the live site after pushing changes to GitHub:

```
cd /var/www/yiannileon.com
git pull
```

---

## Lessons Learned

- How DNS resolution works and how to configure A and AAAA records
- How Nginx server blocks work and how to configure one from scratch
- How SSL/TLS certificates work and how Certbot automates their issuance and renewal
- How UFW manages firewall rules on Linux
- How SSH key authentication works and why it is preferable to password login
- Semantic HTML structure and CSS layout fundamentals including flexbox, responsive design with media queries, and the cascade
- The importance of separating concerns — structure in HTML, presentation in CSS
- How to read and interpret server logs and error messages to diagnose issues

---

## Author

Yianni Leontakianakos
[yiannileon.com](https://yiannileon.com) · [LinkedIn](https://www.linkedin.com/in/yiannisl/) · [GitHub](https://github.com/yiannii)

---
