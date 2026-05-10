export interface EnterpriseLeadEmailData {
  name: string;
  email: string;
  phone: string;
  company: string;
  cnpj?: string;
  message: string;
  modules?: string;
  billing?: string;
  source?: string;
  createdAt: Date;
}

export function renderEnterpriseLeadEmail(d: EnterpriseLeadEmailData): {
  subject: string;
  html: string;
  text: string;
} {
  const subject = `[Lead Enterprise] ${d.company} — ${d.name}`;
  const text = [
    `Novo Lead Enterprise em popgas.com.br`,
    ``,
    `Nome: ${d.name}`,
    `Empresa: ${d.company}`,
    `CNPJ: ${d.cnpj ?? '—'}`,
    `E-mail: ${d.email}`,
    `Telefone: ${d.phone}`,
    `Origem: ${d.source ?? '—'}`,
    `Módulos selecionados: ${d.modules ?? '—'}`,
    `Cobrança: ${d.billing ?? '—'}`,
    ``,
    `Mensagem:`,
    d.message,
    ``,
    `Recebido em ${d.createdAt.toLocaleString('pt-BR')}`,
  ].join('\n');

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>[Lead Enterprise] ${escapeHtml(d.company)} — ${escapeHtml(d.name)}</title></head>
<body style="font-family:-apple-system,system-ui,sans-serif;background:#f5f5f5;padding:24px;margin:0;">
  <div style="max-width:600px;margin:0 auto;background:white;border-radius:12px;padding:32px;border:1px solid #e2e8f0;">
    <div style="font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:1.5px;font-weight:700;margin-bottom:8px">Lead Enterprise</div>
    <h1 style="font-size:24px;color:#0f172a;margin:0 0 4px;letter-spacing:-0.02em;">${escapeHtml(d.company)}</h1>
    <p style="color:#475569;margin:0 0 24px">${escapeHtml(d.name)}</p>

    <table style="width:100%;border-collapse:collapse;margin:0 0 24px;font-size:14px;">
      <tr><td style="padding:6px 0;color:#94a3b8;width:120px">CNPJ</td><td style="color:#0f172a">${escapeHtml(d.cnpj ?? '—')}</td></tr>
      <tr><td style="padding:6px 0;color:#94a3b8">E-mail</td><td style="color:#0f172a"><a href="mailto:${encodeURIComponent(d.email)}" style="color:#06b6d4;text-decoration:none">${escapeHtml(d.email)}</a></td></tr>
      <tr><td style="padding:6px 0;color:#94a3b8">Telefone</td><td style="color:#0f172a"><a href="tel:${encodeURIComponent(d.phone)}" style="color:#06b6d4;text-decoration:none">${escapeHtml(d.phone)}</a></td></tr>
      <tr><td style="padding:6px 0;color:#94a3b8">Módulos</td><td style="color:#0f172a">${escapeHtml(d.modules ?? '—')}</td></tr>
      <tr><td style="padding:6px 0;color:#94a3b8">Cobrança</td><td style="color:#0f172a">${escapeHtml(d.billing ?? '—')}</td></tr>
      <tr><td style="padding:6px 0;color:#94a3b8">Origem</td><td style="color:#0f172a">${escapeHtml(d.source ?? '—')}</td></tr>
    </table>

    <div style="font-size:12px;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px">Mensagem</div>
    <div style="background:#fafafa;padding:16px;border-radius:8px;color:#0f172a;font-size:14px;white-space:pre-wrap;border:1px solid #e2e8f0">${escapeHtml(d.message)}</div>

    <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8">
      Recebido em ${d.createdAt.toLocaleString('pt-BR')} via popgas.com.br
    </div>
  </div>
</body>
</html>`;

  return { subject, html, text };
}

function escapeHtml(s: string | null | undefined): string {
  if (!s) return '';
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
