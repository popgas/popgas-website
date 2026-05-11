import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from './ContactForm';

describe('<ContactForm>', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, id: 'abc123' }),
    } as Response);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders all required fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Empresa/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tipo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar/i })).toBeInTheDocument();
  });

  it('shows validation errors on empty submit', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole('button', { name: /Enviar/i }));
    expect(await screen.findByText(/Nome obrigatório/i)).toBeInTheDocument();
    expect(screen.getByText(/E-mail inválido/i)).toBeInTheDocument();
    expect(screen.getByText(/Mensagem muito curta/i)).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('submits a valid payload and shows success state', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/Nome/i), 'João Silva');
    await user.type(screen.getByLabelText(/E-mail/i), 'joao@empresa.com.br');
    await user.type(screen.getByLabelText(/Mensagem/i), 'Quero conhecer o sistema PopGás.');

    await user.click(screen.getByRole('button', { name: /Enviar/i }));

    await waitFor(() => {
      expect(screen.getByText(/Mensagem enviada/i)).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledOnce();
    const [url, options] = (global.fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    expect(url).toBe('/api/contact');
    expect(options?.method).toBe('POST');
  });

  it('maps "sales" type to ENTERPRISE in API payload', async () => {
    const user = userEvent.setup();
    render(<ContactForm defaultType="sales" />);

    await user.type(screen.getByLabelText(/Nome/i), 'Maria');
    await user.type(screen.getByLabelText(/E-mail/i), 'maria@x.com');
    await user.type(screen.getByLabelText(/Mensagem/i), 'Mensagem de teste para vendas.');

    await user.click(screen.getByRole('button', { name: /Enviar/i }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    const [, options] = (global.fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    const body = JSON.parse(options.body as string);
    expect(body.type).toBe('ENTERPRISE');
    expect(body.source).toBe('/contato');
  });

  it('maps "support" type to SUPPORT in API payload', async () => {
    const user = userEvent.setup();
    render(<ContactForm defaultType="support" />);

    await user.type(screen.getByLabelText(/Nome/i), 'Carlos');
    await user.type(screen.getByLabelText(/E-mail/i), 'carlos@x.com');
    await user.type(screen.getByLabelText(/Mensagem/i), 'Preciso de suporte com o sistema.');

    await user.click(screen.getByRole('button', { name: /Enviar/i }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    const [, options] = (global.fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    const body = JSON.parse(options.body as string);
    expect(body.type).toBe('SUPPORT');
  });

  it('maps "general" (default) type to GENERAL in API payload', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/Nome/i), 'Ana');
    await user.type(screen.getByLabelText(/E-mail/i), 'ana@x.com');
    await user.type(screen.getByLabelText(/Mensagem/i), 'Tenho uma dúvida sobre planos.');

    await user.click(screen.getByRole('button', { name: /Enviar/i }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    const [, options] = (global.fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    const body = JSON.parse(options.body as string);
    expect(body.type).toBe('GENERAL');
  });

  it('shows error message when API returns non-ok', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({ ok: false } as Response);

    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText(/Nome/i), 'Erro');
    await user.type(screen.getByLabelText(/E-mail/i), 'erro@x.com');
    await user.type(screen.getByLabelText(/Mensagem/i), 'Vai dar erro propositalmente.');
    await user.click(screen.getByRole('button', { name: /Enviar/i }));

    await waitFor(() => {
      expect(screen.getByText(/Falha ao enviar/i)).toBeInTheDocument();
    });
    expect(screen.queryByText(/Mensagem enviada/i)).not.toBeInTheDocument();
  });
});
