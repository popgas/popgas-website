import { Resend } from 'resend';
import {
  renderEnterpriseLeadEmail,
  type EnterpriseLeadEmailData,
} from './email-templates/enterprise-lead';

const RECIPIENTS_ENTERPRISE = [
  'leonardo.ferreira.caldas@gmail.com',
  'leonardo@popgas.com.br',
  'uelliton@popgas.com.br',
  'uellitonevangelista@gmail.com',
];

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
    to: RECIPIENTS_ENTERPRISE,
    subject,
    html,
    text,
    replyTo: data.email,
  });
}
