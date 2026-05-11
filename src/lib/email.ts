import { Resend } from 'resend';
import {
  renderEnterpriseLeadEmail,
  type EnterpriseLeadEmailData,
} from './email-templates/enterprise-lead';

const DEFAULT_RECIPIENTS = ['leads@popgas.com.br'];

function getEnterpriseRecipients(): string[] {
  const raw = process.env.RESEND_TO_EMAILS;
  if (!raw) return DEFAULT_RECIPIENTS;
  const list = raw
    .split(',')
    .map(e => e.trim())
    .filter(e => e.length > 0 && e.includes('@'));
  return list.length > 0 ? list : DEFAULT_RECIPIENTS;
}

let resendClient: Resend | null = null;

function getResend(): Resend {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error('RESEND_API_KEY missing');
    resendClient = new Resend(key);
  }
  return resendClient;
}

export async function sendEnterpriseLeadEmail(data: EnterpriseLeadEmailData): Promise<void> {
  const from = process.env.RESEND_FROM_EMAIL ?? 'leads@popgas.com.br';
  const { subject, html, text } = renderEnterpriseLeadEmail(data);

  await getResend().emails.send({
    from,
    to: getEnterpriseRecipients(),
    subject,
    html,
    text,
    replyTo: data.email,
  });
}
