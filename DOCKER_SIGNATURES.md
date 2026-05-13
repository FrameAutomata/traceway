# Docker Image Signatures

All official Traceway Docker images are cryptographically signed using [Cosign](https://docs.sigstore.dev/cosign/overview/), a CNCF tool for container image signing and verification.

## Why Image Signatures Matter

Signed images provide:
- **Authenticity**: Verify the image comes from the official Traceway project
- **Integrity**: Ensure the image hasn't been modified or tampered with
- **Transparency**: Signatures are publicly verifiable using GitHub's OIDC token

## Available Images

Traceway publishes two Docker images to GitHub Container Registry (GHCR):

| Image | Purpose | Size | Best For |
|-------|---------|------|----------|
| `ghcr.io/tracewayapp/traceway:v*` | **Full** — includes ClickHouse, PostgreSQL, supervisord | ~600MB | All-in-one self-hosted deployments |
| `ghcr.io/tracewayapp/traceway:v*-minimal` | **Minimal** — backend + frontend only | ~20-30MB | External ClickHouse/PostgreSQL, resource-constrained environments |

Both images are signed. Latest release:

```bash
docker pull ghcr.io/tracewayapp/traceway:latest           # Full image
docker pull ghcr.io/tracewayapp/traceway:minimal          # Minimal image
```

## Verifying Signatures

### Install Cosign

**macOS:**
```bash
brew install cosign
```

**Linux:**
```bash
wget https://github.com/sigstore/cosign/releases/latest/download/cosign-linux-amd64
sudo mv cosign-linux-amd64 /usr/local/bin/cosign
sudo chmod +x /usr/local/bin/cosign
```

**Windows (PowerShell):**
```powershell
Invoke-WebRequest -Uri "https://github.com/sigstore/cosign/releases/latest/download/cosign-windows-amd64.exe" -OutFile cosign.exe
# Add cosign.exe to your PATH
```

### Verify Signature

```bash
# Full image
cosign verify \
  --certificate-identity-regexp '.*' \
  --certificate-oidc-issuer 'https://token.actions.githubusercontent.com' \
  ghcr.io/tracewayapp/traceway:latest

# Minimal image
cosign verify \
  --certificate-identity-regexp '.*' \
  --certificate-oidc-issuer 'https://token.actions.githubusercontent.com' \
  ghcr.io/tracewayapp/traceway:minimal
```

### Example Output

A successful verification looks like:
```
Verification successful!
```

If verification fails, the image may have been tampered with and should not be used.

## How Signatures Are Generated

1. **Build & Push**: GitHub Actions builds the Docker image and pushes it to GHCR
2. **Sign**: Cosign signs the image using GitHub's OIDC token (keyless signing)
3. **Store**: Signature is stored in GHCR alongside the image

## Using in Docker Compose

```yaml
version: '3.8'

services:
  traceway:
    image: ghcr.io/tracewayapp/traceway:latest
    # Optionally verify the signature before running:
    # Run: cosign verify ... ghcr.io/tracewayapp/traceway:latest
    ports:
      - "80:80"
      - "8082:8082"
    volumes:
      - clickhouse_data:/var/lib/clickhouse
      - postgres_data:/var/lib/postgresql/data
    environment:
      GIN_MODE: release

volumes:
  clickhouse_data:
  postgres_data:
```

## Minimal Image with External Databases

For the minimal image with external ClickHouse/PostgreSQL:

```yaml
version: '3.8'

services:
  traceway:
    image: ghcr.io/tracewayapp/traceway:minimal
    ports:
      - "80:80"
      - "8082:8082"
    environment:
      GIN_MODE: release
      CLICKHOUSE_SERVER: clickhouse:9000
      POSTGRES_HOST: postgres
      POSTGRES_PORT: 5432
      # ... other env vars

  clickhouse:
    image: clickhouse/clickhouse-server:latest
    # ... configuration

  postgres:
    image: postgres:15
    # ... configuration
```

## Troubleshooting

**"Verification failed" error:**
- Ensure you're using the correct image URI (with version tag or `latest`)
- Check your internet connection (Cosign needs to fetch OIDC tokens)
- Try verifying a different version tag

**"cosign not found":**
- Ensure Cosign is installed and in your `$PATH`
- Run `cosign version` to verify installation

**"Certificate verification failed":**
- This indicates the image signature is invalid
- Do not use this image — report it to the Traceway team

## More Information

- [Cosign Documentation](https://docs.sigstore.dev/cosign/overview/)
- [Traceway Self-Hosting Guide](https://docs.tracewayapp.com/server)
- [SBOM (Software Bill of Materials)](https://docs.sigstore.dev/cosign/sbom/)

## Questions?

If you have questions about Docker image security or signatures, [open an issue](https://github.com/tracewayapp/traceway/issues) or ask in the [Traceway Discord](https://discord.gg/9tPn2SB3).
