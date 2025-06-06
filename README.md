## Project: Secure, Performant, and Resilient Static Website on Google Cloud Platform

### Live Demo

You can view the live project at: **[https://cloudsite.jaron-s.com](https://www.google.com/search?q=https://cloudsite.jaron-s.com)**

### 1\. Project Summary

In this project, I set out to demonstrate how to deploy a secure, fast, and cost-efficient static website using a modern, production-grade architecture on Google Cloud Platform (GCP). My goal was to go beyond simple hosting and build a robust infrastructure that includes a global Content Delivery Network (CDN), SSL/TLS encryption, layered security with a Web Application Firewall (WAF), and comprehensive monitoring.

The final architecture showcases my skills with core GCP services and my ability to solve complex, real-world networking and security challenges.

**Core Technologies I Used:**

  * **Hosting:** Google Cloud Storage (GCS)
  * **Networking & CDN:** Global External HTTP(S) Load Balancer, Cloud CDN
  * **Security:** Google Cloud Armor, Google-managed SSL Certificates, Cloudflare (Proxy & DNS)
  * **Monitoring:** Google Cloud Monitoring & Cloud Logging

### 2\. Final Architecture Overview

I designed the architecture so that a user request flows through multiple layers of security and caching before reaching the static content, ensuring a fast and secure experience.

  * **User Request** -\> **Cloudflare DNS/Proxy** -\> **Google Cloud Load Balancer** (with SSL) -\> **Google Cloud Armor** -\> **Cloud CDN** -\> **Google Cloud Storage**

### 3\. Key Features Implemented

  * **Global Content Delivery:** I implemented Cloud CDN to cache website assets at Google's edge locations worldwide, dramatically reducing latency for all users.
  * **End-to-End Encryption:** I secured the site with HTTPS, handling SSL with Cloudflare at the outer edge and a Google-managed SSL certificate on the Load Balancer to ensure traffic is always encrypted.
  * **HTTP to HTTPS Redirection:** I configured the Load Balancer to issue a permanent redirect (301) for all insecure HTTP traffic to the secure HTTPS version.
  * **Layered Security:**
      * I used Cloudflare for initial DDoS mitigation and proxy services.
      * I configured Google Cloud Armor with IP-based and Geo-location-based blocking rules at the edge of Google's network.
  * **Resilient Static Hosting:** I used Google Cloud Storage for durable, scalable, and cost-effective hosting of the static Next.js site files.
  * **Centralized Monitoring:** I set up Cloud Monitoring and Cloud Logging to get a single pane of glass for observing traffic, performance metrics, CDN hit rates, and security policy enforcement.

### 4\. My Implementation Journey

This section details the process I followed to build the infrastructure, including the challenges I encountered and the solutions I engineered.

#### Phase 1: Static Content Hosting

1.  **Bucket Creation:** I began by provisioning a Google Cloud Storage bucket to host the static files (HTML, CSS, JS) generated from a Next.js (`next export`) build.
2.  **Public Access & Website Config:** I configured the bucket for static website hosting by setting the `index.html` and `404.html` pages and making the objects publicly readable.

#### Phase 2: Global Delivery & SSL (Load Balancer, CDN, HTTPS)

1.  **Load Balancer Setup:** To enable global delivery and HTTPS, I introduced a Global External HTTP(S) Load Balancer, for which I reserved a Global static IP address on the Premium Network Tier.
2.  **Backend Configuration:** I configured a **Backend Bucket** to point to the Cloud Storage bucket and enabled **Cloud CDN** on this backend.
3.  **HTTPS Enablement:** I provisioned a Google-managed SSL certificate for my domain, `cloudsite.jaron-s.com`, and added an HTTPS frontend to the Load Balancer on port 443.
4.  **DNS Configuration:** I created an `A` record in my Cloudflare DNS settings, pointing `cloudsite.jaron-s.com` to the Load Balancer's static IP.
5.  **Redirection:** Finally, I configured the Load Balancer to automatically redirect all HTTP traffic to the secure HTTPS frontend.

#### Phase 3: Security Hardening (Cloud Armor)

1.  **Policy Creation:** I created an **Edge Security Policy** in Cloud Armor.
2.  **Rule Implementation:** I configured the policy with rules to enhance security, including a geo-blocking rule to deny traffic from a list of countries known for high levels of malicious activity.
3.  **Policy Attachment:** I attached the Edge Security Policy to the Backend Bucket target.

#### Phase 4: Monitoring

1.  **Log Analysis:** I used Cloud Logging's Logs Explorer to filter and view the detailed access logs from the Load Balancer, allowing me to inspect individual requests, status codes, and actions taken by my security policy.
2.  **Dashboarding:** I utilized Cloud Monitoring to view the automatically generated dashboard for the Load Balancer, which visualizes key metrics like request count, latency, error rate, and CDN cache hit ratio.

### 5\. Troubleshooting & Key Learnings (My Real-World Experience)

This project presented several challenges that required deep investigation and problem-solving, which were fantastic learning opportunities.

  * **Challenge: Next.js Asset Paths**

      * When first deployed to GCS, the site's CSS and JS failed to load. This led me to investigate the Next.js build process and the `assetPrefix` configuration. I learned how to adjust it for different hosting environments, first to work with the direct GCS URL and later removing it for the final Load Balancer setup.

  * **Challenge: SSL Certificate Stuck "Provisioning"**

      * My Google-managed SSL certificate remained stuck in the "PROVISIONING" state for hours. I diagnosed this using DNS analysis tools like `whatsmydns.net`, which revealed that my domain was resolving to Cloudflare's IPs instead of my Load Balancer's IP due to the active proxy. The solution was to temporarily disable the Cloudflare proxy ("DNS only") to allow Google's validation to complete, then re-enabling it after the certificate became "ACTIVE".

  * **Challenge: Infinite Redirect Loop**

      * After configuring the HTTP-to-HTTPS redirect, the site became inaccessible. I quickly realized this was a classic conflict between an origin-level redirect (on my GCP LB) and Cloudflare's "Flexible" SSL/TLS mode. I resolved this by setting the Cloudflare mode to **"Full (Strict)"**, ensuring a secure, end-to-end encrypted connection without loops.

  * **Challenge: Cloud Armor WAF Rule Limitation**

      * The project initially inteded to use advanced WAF rules (SQLi, XSS). However, all attempts to apply them failed with errors. Through persistent troubleshooting and deep research into GCP's documentation, I uncovered a key architectural limitation: **Backend Security Policies** (which support WAF) **cannot be attached to Backend Buckets**. Conversely, **Edge Security Policies** (which can be attached to Backend Buckets) **do not support WAF rules**. This discovery forced a strategic pivot. I made the architectural decision to stick with the more efficient Backend Bucket setup and implement an Edge Security Policy with the supported IP and Geo-based rules, demonstrating an ability to work within platform constraints and make informed architectural trade-offs.

### 7\. Conclusion

Through this project, I demonstrated my skills in cloud architecture, network configuration, security hardening, and troubleshooting on Google Cloud Platform. I built a complete, production-ready solution from the ground up and navigated complex, real-world challenges to deliver a final product that is secure, performant, and resilient.
