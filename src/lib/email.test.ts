import { describe, it, expect } from 'vitest';
import { renderEnterpriseLeadEmail } from './email-templates/enterprise-lead';

describe('enterprise lead template', () => {
  it('renders subject with company and name', () => {
    const r = renderEnterpriseLeadEmail({
      name: 'João',
      email: 'joao@x.com',
      phone: '11999999999',
      company: 'Distribuidora X',
      message: 'Quero conhecer',
      createdAt: new Date(),
    });
    expect(r.subject).toContain('Distribuidora X');
    expect(r.subject).toContain('João');
  });

  it('escapes HTML in fields', () => {
    const r = renderEnterpriseLeadEmail({
      name: '<script>alert(1)</script>',
      email: 'x@x.com',
      phone: '1',
      company: 'X',
      message: 'msg',
      createdAt: new Date(),
    });
    expect(r.html).not.toContain('<script>alert(1)</script>');
    expect(r.html).toContain('&lt;script&gt;');
  });

  it('includes plain text version', () => {
    const r = renderEnterpriseLeadEmail({
      name: 'João',
      email: 'joao@x.com',
      phone: '11999999999',
      company: 'X',
      message: 'msg',
      createdAt: new Date(),
    });
    expect(r.text).toContain('Lead Enterprise');
    expect(r.text).toContain('joao@x.com');
  });
});
