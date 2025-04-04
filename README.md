# Vulnerable pnpm Project

This project demonstrates several known vulnerabilities in popular npm packages. It is intended for educational purposes only to understand security vulnerabilities in dependencies.

## Vulnerabilities Demonstrated

1. **lodash (4.17.15)**
   - CVE-2020-8203: Prototype pollution vulnerability
   - Affects the `merge` function

2. **serialize-javascript (2.1.2)**
   - CVE-2020-7660: Cross-site Scripting (XSS) vulnerability
   - Affects the `serialize` function

3. **minimist (1.2.0)**
   - CVE-2020-7598: Prototype pollution vulnerability
   - Affects argument parsing

4. **yargs-parser (13.1.1)**
   - CVE-2020-7608: Prototype pollution vulnerability
   - Affects argument parsing

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Run the project:
```bash
pnpm start
```

## Warning

⚠️ This project contains known security vulnerabilities and should not be used in production. It is for educational purposes only.