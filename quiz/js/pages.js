/**
 * Page navigation and rendering - Refactored for Paradise 4-Tier Tax System
 */

// Preserve incoming query string for downstream redirects
const queryString = window.location.search || '';

// Pages content
const pages = {
    withdraw: `
<div class="withdraw-page fade-in-fast" style="background: #F7F8FA; color: #111; font-family: 'Inter', sans-serif; min-height: 100vh;">
  <!-- Header with TikTok Logo -->
  <div style="background:#fff; border-bottom:1px solid #eaeaea; display:flex; align-items:center; justify-content: space-between; padding:16px;">
    <button class="wd-back" style="background:none; border:none; padding:4px; cursor:pointer;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>
    <div style="font-weight:700; font-size:16px; margin:0 auto; display:flex; align-items:center; gap:8px;">
      <img src="https://pngimg.com/uploads/tiktok/tiktok_PNG17.png" alt="TikTok" style="height:16px; vertical-align:middle;">
      Resgatar recompensas
    </div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
  </div>

  <div class="wd-body" style="padding: 20px;">
    <!-- Card Saldo TikTok Black Oficial -->
    <div style="background: #111111; border-radius: 20px; padding: 24px; position: relative; margin-bottom: 20px; color: #fff; overflow:hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
      <div style="position:absolute; right:-20px; top:-20px; opacity:0.07;">
        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M20 12V7H4a2 2 0 0 1 0-4h14v4M3 5v14a2 2 0 0 0 2 2h16v-5M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <div style="font-size: 13px; color: rgba(255,255,255,0.7); margin-bottom: 6px; display: flex; align-items: center; gap: 6px; font-weight: 600;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Seu Saldo Disponível
          </div>
          <div style="font-size: 38px; font-weight: 900; color: #fff; letter-spacing: -1px; margin-bottom: 8px;">
            R$ 597,00
          </div>
          <div style="font-size: 13px; font-weight: 700; color: #00C37A; display: inline-flex; align-items: center; gap: 4px; background: rgba(0,195,122,0.15); padding: 4px 10px; border-radius: 8px;">
            ✓ Disponível para Saque Imediato
          </div>
        </div>
        <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 10px 14px; display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
          <span style="font-size:10px; color:#fff; font-weight: 600;">Verificado</span>
        </div>
      </div>
      <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:14px; margin-top:16px; display:flex; justify-content:space-between; align-items:center;">
         <div style="font-size:12px; color:rgba(255,255,255,0.8); display:flex; align-items:center; gap:6px; font-weight: 500;">
            <span style="width: 8px; height: 8px; background: #00C37A; border-radius: 50%; display: inline-block;"></span>
            Auditoria Homologada com Sucesso
         </div>
         <span style="font-size: 12px; color: rgba(255,255,255,0.5); font-weight: 600;">Protocolo #TK-9842</span>
      </div>
    </div>

    <h2 style="font-size:18px; font-weight:800; margin-bottom:16px; color:#111;">Sacar dinheiro</h2>
    
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF2C55" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
       <div style="font-size:14px; font-weight:700;">Transferência bancária / PIX</div>
       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00C37A" stroke-width="3" style="margin-left:auto;"><path d="M20 6L9 17l-5-5"/></svg>
    </div>

    <!-- Single Forms - NO AMOUNT DUPLICATES -->
    <div class="wd-input-group" style="margin-bottom:16px;">
      <label style="font-size:13px; font-weight:600; color:#444; margin-bottom:8px; display:block;">Tipo de chave PIX</label>
      <div style="position:relative;">
        <select class="wd-select pix-type" style="width:100%; padding:16px; border:1px solid #E5E5E5; border-radius:12px; background:#fff; font-family:'Inter',sans-serif; font-size:14px; color:#111; outline:none; appearance:none;">
          <option value="" disabled selected>Selecione o tipo de chave</option>
          <option value="cpf">CPF / CNPJ</option>
          <option value="phone">Celular</option>
          <option value="email">E-mail</option>
          <option value="random">Chave Aleatória</option>
        </select>
        <div style="position:absolute; right:16px; top:18px; pointer-events:none;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></div>
      </div>
    </div>

    <div class="wd-input-group" style="margin-bottom:20px;">
      <label style="font-size:13px; font-weight:600; color:#444; margin-bottom:8px; display:block;">Chave PIX</label>
      <div style="position:relative;">
        <input type="text" class="wd-input pix-key" placeholder="Digite a sua chave PIX" style="width:100%; padding:16px; border:1px solid #E5E5E5; border-radius:12px; font-family:'Inter',sans-serif; font-size:14px; background:#fff; outline:none;">
        <div style="position:absolute; right:16px; top:18px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg></div>
      </div>
    </div>

    <button class="withdraw-submit-btn" style="width:100%; background:linear-gradient(135deg, #FE2C55, #FF0050); color:#fff; border:none; padding:18px; border-radius:14px; font-size:16px; font-weight:700; display:flex; align-items:center; justify-content:center; gap:10px; cursor:pointer; font-family:'Inter',sans-serif; margin-bottom:16px; box-shadow:0 6px 20px rgba(254,44,85,0.3); letter-spacing:0.3px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      REALIZAR SAQUE DE R$ 597,00
    </button>

    <div style="background:#FFF5F7; border:1px solid #FFE0E6; border-radius:14px; padding:16px; display:flex; gap:12px; margin-bottom:24px;">
      <div style="color:#FE2C55; flex-shrink:0; margin-top:2px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
      <p style="font-size:12px; color:#666; line-height:1.6; margin:0;">Para sacar o seu dinheiro, você precisa de um saldo mínimo de R$ 5,00. Seu saldo disponível para resgate é de <strong>R$ 597,00</strong>.</p>
    </div>

    <!-- Convide Amigos - TikTok Referral Section -->
    <div style="background:linear-gradient(135deg, #FFF0F3 0%, #FFE4EC 50%, #FFD6E0 100%); border-radius:16px; padding:20px; margin-bottom:20px; position:relative; overflow:hidden;">
      <div style="position:absolute; right:-10px; top:-10px; font-size:60px; opacity:0.15; transform:rotate(15deg);">🎁</div>
      <div style="display:flex; align-items:center; gap:6px; margin-bottom:12px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FE2C55" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        <span style="font-size:12px; color:#888; font-weight:500;">1 de jan – 31 de dez</span>
      </div>
      <h3 style="font-size:18px; font-weight:800; color:#111; margin:0 0 4px 0; line-height:1.3;">Convide amigos e ganhe até <span style="color:#FE2C55;">R$ 200,00</span></h3>
      <p style="font-size:13px; color:#666; margin:0 0 16px 0;">Quanto mais amigos você convidar, mais você ganha!</p>

      <!-- Reward Tiers -->
      <div style="display:flex; gap:8px; margin-bottom:16px;">
        <div style="flex:1; background:#fff; border-radius:10px; padding:10px 6px; text-align:center; box-shadow:0 1px 4px rgba(0,0,0,0.06);">
          <div style="font-size:14px; font-weight:800; color:#FE2C55;">R$ 50</div>
          <div style="font-size:10px; color:#999; margin-top:2px;">1 amigo</div>
        </div>
        <div style="flex:1; background:#fff; border-radius:10px; padding:10px 6px; text-align:center; box-shadow:0 1px 4px rgba(0,0,0,0.06);">
          <div style="font-size:14px; font-weight:800; color:#FE2C55;">R$ 50</div>
          <div style="font-size:10px; color:#999; margin-top:2px;">2 amigos</div>
        </div>
        <div style="flex:1; background:linear-gradient(135deg, #FFF0F3, #FFE0E8); border:1.5px solid #FE2C55; border-radius:10px; padding:10px 6px; text-align:center; box-shadow:0 1px 4px rgba(254,44,85,0.12); position:relative;">
          <div style="position:absolute; top:-6px; right:-6px; width:14px; height:14px; background:#FE2C55; border-radius:50%; display:flex; align-items:center; justify-content:center;"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div>
          <div style="font-size:14px; font-weight:800; color:#FE2C55;">R$ 50</div>
          <div style="font-size:10px; color:#999; margin-top:2px;">3 amigos</div>
        </div>
        <div style="flex:1; background:#fff; border-radius:10px; padding:10px 6px; text-align:center; box-shadow:0 1px 4px rgba(0,0,0,0.06);">
          <div style="font-size:14px; font-weight:800; color:#FE2C55;">R$ 50</div>
          <div style="font-size:10px; color:#999; margin-top:2px;">4 amigos</div>
        </div>
      </div>

      <!-- Invite Button -->
      <button style="width:100%; background:linear-gradient(135deg, #FE2C55, #FF0050); color:#fff; border:none; padding:14px; border-radius:30px; font-weight:700; font-size:14px; font-family:'Inter',sans-serif; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:8px; box-shadow:0 4px 15px rgba(254,44,85,0.3); margin-bottom:12px; letter-spacing:0.3px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
        CONVIDAR AMIGOS
      </button>

      <!-- Invite Code -->
      <div style="background:#fff; border-radius:10px; padding:12px 16px; display:flex; align-items:center; justify-content:space-between;">
        <div>
          <div style="font-size:11px; color:#999; font-weight:500;">Código de convite:</div>
          <div style="font-size:15px; font-weight:700; color:#111; letter-spacing:1px;">24995543</div>
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      </div>
    </div>

    <!-- How to withdraw info -->
    <div style="background:#fff; border:1px solid #F0F0F0; border-radius:14px; padding:16px; margin-bottom:20px;">
      <h4 style="font-size:14px; font-weight:700; color:#111; margin:0 0 8px 0;">Como retirar o dinheiro?</h4>
      <p style="font-size:12px; color:#888; line-height:1.6; margin:0;">Insira sua chave PIX, escolha o valor e clique em 'Sacar dinheiro'.</p>
    </div>

    <!-- Terms Footer -->
    <div style="text-align:center; padding:8px 0;">
      <p style="font-size:10px; color:#bbb; line-height:1.5; margin:0;">Ao continuar, você concorda com os <span style="color:#111; font-weight:600;">Termos e Condições</span> do TikTok. Os pagamentos são processados pela PIPO. Consulte <span style="color:#111; font-weight:600;">Política de Privacidade</span> da PIPO.</p>
    </div>

  </div>
</div>
`,
    registration: `
<div class="reg-page fade-in-fast" style="background:#F7F8FA; min-height:100vh; font-family:'Inter',sans-serif; color:#111;">
  <!-- Header with TikTok Logo & Back Button -->
  <div style="background:#fff; border-bottom:1px solid #eaeaea; display:flex; align-items:center; justify-content:space-between; padding:16px 20px;">
    <button class="wd-back" onclick="showPage('withdraw')" style="background:none; border:none; padding:4px; cursor:pointer; display:flex; align-items:center;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
    </button>
    <div style="font-weight:700; font-size:16px; margin:0 auto; display:flex; align-items:center; gap:8px;">
      <img src="https://pngimg.com/uploads/tiktok/tiktok_PNG17.png" alt="TikTok" style="height:16px; vertical-align:middle;">
      <span>Central de Segurança</span>
    </div>
    <div style="display:flex; align-items:center; gap:4px; background:#ECFDF5; padding:4px 8px; border-radius:12px; font-size:11px; font-weight:700; color:#059669;">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
      Verificado
    </div>
  </div>

  <div style="padding:20px;">

    <!-- Progress Steps Tracker -->
    <div style="background:#fff; border:1px solid #EAEAEA; border-radius:16px; padding:14px 16px; margin-bottom:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
      <div style="display:flex; align-items:center; justify-content:space-between; position:relative;">
        <!-- Step 1 -->
        <div style="display:flex; flex-direction:column; align-items:center; flex:1; text-align:center; position:relative; z-index:2;">
          <div style="width:28px; height:28px; border-radius:50%; background:#00C37A; color:#fff; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:800; margin-bottom:4px; box-shadow:0 2px 6px rgba(0,195,122,0.3);">✓</div>
          <span style="font-size:11px; font-weight:600; color:#555;">1. Saque</span>
        </div>
        <!-- Line 1-2 -->
        <div style="height:2px; background:#FE2C55; flex:1; margin-top:-16px; z-index:1;"></div>
        <!-- Step 2 -->
        <div style="display:flex; flex-direction:column; align-items:center; flex:1; text-align:center; position:relative; z-index:2;">
          <div style="width:28px; height:28px; border-radius:50%; background:#FE2C55; color:#fff; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; margin-bottom:4px; box-shadow:0 2px 8px rgba(254,44,85,0.4); animation:pulse 2s infinite;">2</div>
          <span style="font-size:11px; font-weight:700; color:#FE2C55;">2. Validação</span>
        </div>
        <!-- Line 2-3 -->
        <div style="height:2px; background:#E5E7EB; flex:1; margin-top:-16px; z-index:1;"></div>
        <!-- Step 3 -->
        <div style="display:flex; flex-direction:column; align-items:center; flex:1; text-align:center; position:relative; z-index:2;">
          <div style="width:28px; height:28px; border-radius:50%; background:#E5E7EB; color:#9CA3AF; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; margin-bottom:4px;">3</div>
          <span style="font-size:11px; font-weight:500; color:#9CA3AF;">3. PIX</span>
        </div>
      </div>
    </div>

    <!-- TikTok Premium Balance Header Card -->
    <div style="background:#111111; border-radius:20px; padding:22px; color:#fff; margin-bottom:18px; position:relative; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.12);">
      <div style="position:absolute; right:-20px; top:-20px; opacity:0.07;">
        <svg width="140" height="140" viewBox="0 0 24 24" fill="currentColor"><path d="M20 12V7H4a2 2 0 0 1 0-4h14v4M3 5v14a2 2 0 0 0 2 2h16v-5M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <div style="font-size:12px; color:rgba(255,255,255,0.7); margin-bottom:4px; font-weight:600; text-transform:uppercase; letter-spacing:0.5px;">
            Saldo Pré-Aprovado
          </div>
          <div style="font-size:36px; font-weight:900; color:#fff; letter-spacing:-1px; margin-bottom:6px;">
            R$ 597,00
          </div>
          <div style="font-size:12px; font-weight:700; color:#00C37A; display:inline-flex; align-items:center; gap:6px; background:rgba(0,195,122,0.15); padding:4px 10px; border-radius:8px;">
            <span style="width:6px; height:6px; background:#00C37A; border-radius:50%; display:inline-block;"></span>
            Aguardando Confirmação Antifraude
          </div>
        </div>
        <div style="background:rgba(255,255,255,0.08); border-radius:12px; padding:8px 12px; text-align:center;">
          <div style="font-size:10px; color:rgba(255,255,255,0.5); font-weight:500;">Protocolo</div>
          <div style="font-size:11px; color:#fff; font-weight:700; margin-top:2px;">#TK-9842</div>
        </div>
      </div>
      <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:12px; margin-top:14px; display:flex; justify-content:space-between; align-items:center; font-size:12px;">
        <span style="color:rgba(255,255,255,0.7); display:flex; align-items:center; gap:6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C37A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          Chave PIX de Destino:
        </span>
        <strong id="reg-pix-display" style="color:#fff; font-weight:700; letter-spacing:0.3px;">Chave Cadastrada</strong>
      </div>
    </div>

    <!-- Main Card Explaining the Anti-Fraud Fee -->
    <div style="background:#fff; border-radius:20px; padding:22px 18px; border:1px solid #ECEFF2; box-shadow:0 8px 24px rgba(0,0,0,0.04); margin-bottom:18px;">
      
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
        <div style="width:40px; height:40px; border-radius:12px; background:rgba(254,44,85,0.1); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FE2C55" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div>
          <h2 style="font-size:17px; font-weight:800; color:#111; margin:0; line-height:1.2;">Validação Antifraude Obrigatória</h2>
          <p style="font-size:12px; color:#777; margin:2px 0 0 0;">Diretriz de Segurança Bancária do Banco Central</p>
        </div>
      </div>

      <p style="font-size:13.5px; color:#333; line-height:1.6; margin:0 0 16px 0;">
        Para garantir que o valor de <strong>R$ 597,00</strong> seja depositado na conta correta e proteger nosso programa contra cadastros automatizados e fraudes de terceiros, é <strong>estritamente obrigatória</strong> a realização da confirmação de segurança.
      </p>

      <!-- 3 Informative Pillars -->
      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:18px;">
        
        <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px; padding:12px 14px; display:flex; gap:12px; align-items:flex-start;">
          <div style="width:30px; height:30px; border-radius:8px; background:#ECFDF5; display:flex; align-items:center; justify-content:center; flex-shrink:0; color:#059669; font-weight:800; font-size:15px;">
            ✓
          </div>
          <div>
            <div style="font-size:13px; font-weight:700; color:#0F172A; margin-bottom:2px;">100% Reembolsável no Mesmo PIX</div>
            <div style="font-size:12px; color:#64748B; line-height:1.45;">A taxa não é uma cobrança: trata-se de uma caução temporária de validação de titularidade. O valor integral é estornado e cai de volta na sua conta junto com o seu saque de R$ 597,00.</div>
          </div>
        </div>

        <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px; padding:12px 14px; display:flex; gap:12px; align-items:flex-start;">
          <div style="width:30px; height:30px; border-radius:8px; background:#EFF6FF; display:flex; align-items:center; justify-content:center; flex-shrink:0; color:#2563EB;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <div style="font-size:13px; font-weight:700; color:#0F172A; margin-bottom:2px;">Proteção de Titularidade da Chave PIX</div>
            <div style="font-size:12px; color:#64748B; line-height:1.45;">Evita que pessoas não autorizadas usem sua chave ou que robôs façam retiradas indevidas em seu nome.</div>
          </div>
        </div>

        <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px; padding:12px 14px; display:flex; gap:12px; align-items:flex-start;">
          <div style="width:30px; height:30px; border-radius:8px; background:#FFF1F2; display:flex; align-items:center; justify-content:center; flex-shrink:0; color:#E11D48;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div>
            <div style="font-size:13px; font-weight:700; color:#0F172A; margin-bottom:2px;">Depósito Imediato em Conta</div>
            <div style="font-size:12px; color:#64748B; line-height:1.45;">Após a etapa final do vídeo e confirmação, a transferência automática é realizada para o seu banco em menos de 5 minutos.</div>
          </div>
        </div>

      </div>

      <!-- Financial Breakdown Card -->
      <div style="background:#F1F5F9; border-radius:12px; padding:14px 16px; margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; font-size:13px; color:#475569;">
          <span>Recompensa das Avaliações</span>
          <strong style="color:#111;">R$ 597,00</strong>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; font-size:13px; color:#475569;">
          <span>Taxa de Segurança Antifraude</span>
          <strong style="color:#059669; font-weight:700;">100% Devolvida ✓</strong>
        </div>
        <div style="height:1px; background:#CBD5E1; margin:8px 0 10px 0;"></div>
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:14px;">
          <strong style="color:#111;">Total a Receber no seu PIX</strong>
          <strong style="color:#059669; font-size:17px; font-weight:900;">R$ 597,00 + Estorno</strong>
        </div>
      </div>

      <!-- Action Button -->
      <button class="reg-continue-btn" onclick="showPage('video')" style="width:100%; background:linear-gradient(135deg, #FE2C55, #FF0050); color:#fff; border:none; padding:18px; border-radius:14px; font-size:16px; font-weight:800; display:flex; align-items:center; justify-content:center; gap:10px; cursor:pointer; font-family:'Inter',sans-serif; box-shadow:0 8px 25px rgba(254,44,85,0.35); letter-spacing:0.3px; margin-bottom:12px;">
        AVANÇAR PARA LIBERAÇÃO DO SAQUE
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </button>

      <div style="text-align:center;">
        <span style="font-size:11.5px; color:#888; display:flex; align-items:center; justify-content:center; gap:6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Ambiente Seguro com Criptografia Bancária SSL 256-Bit
        </span>
      </div>

    </div>

    <!-- Security Footer -->
    <div style="text-align:center; padding:10px 0;">
      <p style="font-size:11px; color:#999; line-height:1.5; margin:0;">
        Operação processada em conformidade com as normas de segurança e proteção de dados do TikTok Recompensas Brasil e PIPO Pagamentos.
      </p>
    </div>

  </div>
</div>
`,
    checkout: `
    <div class="chk-page fade-in-fast">
      <div class="chk-header">
        <svg width="102" height="30" viewBox="0 0 102 30" fill="none"><path d="M9.49351 21.3496L9.59191 21.6274C9.57631 21.5956 9.54031 21.4984 9.49351 21.3496ZM4.92397 19.3739C5.09676 17.8817 5.68356 17.0459 6.78934 16.1891C8.37152 15.0287 10.3479 15.6851 10.3479 15.6851V11.7905C10.8284 11.7782 11.309 11.8081 11.7843 11.8799V16.8905C11.7843 16.8905 9.80851 16.2341 8.22633 17.3945C7.12114 18.2513 6.53315 19.0877 6.36095 20.5798C6.35555 21.391 6.50135 22.4506 7.17274 23.3668C7.00674 23.278 6.83754 23.1768 6.66515 23.0632C5.18616 22.027 4.91677 20.473 4.92397 19.3739ZM19.9448 4.59063C18.8564 3.34625 18.4448 2.08986 18.296 1.20728H19.6652C19.6652 1.20728 19.3922 3.52145 21.3818 5.79722L21.4094 5.82782C20.8731 5.47589 20.3814 5.06049 19.9448 4.59063Z" fill="#fff"></path><path d="M26.5405 8.11923V13.029C26.5405 13.029 24.7933 12.9582 23.5003 12.6144C21.6949 12.1344 20.5346 11.3988 20.5346 11.3988C20.5346 11.3988 19.733 10.8732 19.6682 10.8372V20.9801C19.6682 21.5441 19.52 22.954 19.0682 24.1306C18.4784 25.669 17.5682 26.6788 17.4008 26.8846C17.4008 26.8846 16.2938 28.2502 14.3408 29.1694C12.5805 29.9986 11.0349 29.9776 10.5729 29.9986C10.5729 29.9986 7.90112 30.109 5.49695 28.4782C4.97685 28.1194 4.49153 27.7126 4.04736 27.2632L4.05936 27.2716C6.46413 28.9024 9.1353 28.792 9.1353 28.792C9.5979 28.771 11.1435 28.792 12.9033 27.9628C14.855 27.0436 15.9632 25.678 15.9632 25.678C16.1288 25.4722 17.0432 24.4624 17.6306 22.9234C18.0812 21.7475 18.2306 20.3375 18.2306 19.7729V9.63061C18.2954 9.66721 19.097 10.1928 19.097 10.1928C19.097 10.1928 20.2574 10.9296 22.0627 11.4084C23.3563 11.7516 25.1029 11.823 25.1029 11.823V7.97583C25.7005 8.11563 26.2099 8.15403 26.5405 8.11923Z" fill="#fff"></path><path d="M25.1035 7.97568V11.8222C25.1035 11.8222 23.3569 11.7508 22.0633 11.4076C20.2579 10.9276 19.0976 10.1921 19.0976 10.1921C19.0976 10.1921 18.296 9.66646 18.2312 9.62986V19.7703C18.2312 20.3349 18.083 21.7449 17.6312 22.9209C17.0414 24.4599 16.1312 25.4697 15.9638 25.6755C15.9638 25.6755 14.8568 27.041 12.9038 27.9602C11.1441 28.7894 9.59848 28.7684 9.13588 28.7894C9.13588 28.7894 6.46472 28.8998 4.05995 27.269L4.04795 27.2606C3.7942 27.004 3.55522 26.7332 3.33216 26.4495C2.56477 25.4727 2.09437 24.3189 1.97617 23.9895C1.97582 23.9881 1.97582 23.9867 1.97617 23.9853C1.78538 23.4123 1.38578 22.0383 1.44038 20.7069C1.53698 18.3574 2.32897 16.9162 2.53837 16.5544C3.09319 15.5696 3.81468 14.6885 4.67074 13.9504C5.42572 13.3129 6.28189 12.8059 7.20391 12.4504C7.77883 12.2115 8.37791 12.0355 8.99069 11.9254C9.4389 11.8453 9.89266 11.8002 10.3479 11.7904V15.6826C10.3479 15.6826 8.37149 15.0262 6.78931 16.1866C5.68353 17.0434 5.09673 17.8792 4.92394 19.3713C4.91674 20.4705 5.18613 22.0245 6.66392 23.0619C6.83591 23.1759 7.00511 23.2771 7.17151 23.3655C7.42987 23.7144 7.74386 24.0185 8.1009 24.2655C9.54448 25.2189 10.7541 25.2855 12.3008 24.6663C13.3334 24.2577 14.1068 23.3247 14.4734 22.2903C14.6996 21.6447 14.6966 20.9943 14.6966 20.3229V1.20776H18.2966C18.4454 2.09035 18.857 3.34674 19.9454 4.59112C20.382 5.06098 20.8737 5.47638 21.4099 5.82831C21.5683 5.99931 22.3783 6.84409 23.4181 7.36369C23.9545 7.63179 24.52 7.83715 25.1035 7.97568Z" fill="#fff"></path><path d="M0.543457 22.7937V22.7973L0.632256 23.0499C0.622656 23.0205 0.589056 22.9311 0.543457 22.7937Z" fill="#69C9D0"></path><path d="M7.20399 12.4504C6.28197 12.8059 5.4258 13.3129 4.67082 13.9504C3.8147 14.6903 3.09359 15.5732 2.53965 16.5598C2.33025 16.9198 1.53826 18.3628 1.44166 20.7123C1.38706 22.0437 1.78666 23.4177 1.97745 23.9907C1.9771 23.9921 1.9771 23.9935 1.97745 23.9949C2.09745 24.3213 2.56605 25.4751 3.33344 26.4549C3.5565 26.7386 3.79548 27.0094 4.04923 27.2661C3.23575 26.7035 2.51026 26.0233 1.89645 25.2477C1.13566 24.2799 0.666469 23.1375 0.544071 22.8003L0.541071 22.7931V22.7883C0.350273 22.2171 -0.0505217 20.8419 0.0052776 19.5088C0.101876 17.1592 0.893867 15.718 1.10326 15.3562C1.65705 14.3695 2.37818 13.4865 3.23444 12.7468C3.98926 12.1091 4.84547 11.6021 5.76761 11.2469C6.34253 11.0079 6.9416 10.8319 7.55438 10.7219C8.47772 10.5604 9.42083 10.5464 10.3485 10.6805V11.7905C9.89345 11.7988 9.43969 11.8425 8.99137 11.9213C8.37822 12.0326 7.77893 12.2101 7.20399 12.4504Z" fill="#69C9D0"></path><path d="M18.296 1.20778H14.6961V20.3241C14.6961 20.9955 14.6991 21.6441 14.4729 22.2915C14.1093 23.3247 13.3359 24.2577 12.3051 24.6717C10.7577 25.2933 9.54815 25.2243 8.10517 24.2709C7.74813 24.0239 7.43415 23.7198 7.17578 23.3709C8.40517 24.0267 9.50555 24.0153 10.8687 23.4681C11.8935 23.0511 12.6735 22.1181 13.0335 21.0843C13.2603 20.4387 13.2573 19.7884 13.2573 19.1176V0H18.2282C18.2282 0 18.1718 0.475794 18.296 1.20778ZM25.1036 6.91252V7.9757C24.5199 7.83721 23.9542 7.63186 23.4176 7.36371C22.3778 6.84412 21.5678 5.99933 21.4094 5.82833C21.5931 5.94903 21.7838 6.05862 21.9806 6.15652C23.2448 6.78772 24.4868 6.97671 25.1036 6.91252Z" fill="#69C9D0"></path><path d="M78.2959 16.8815C78.2958 17.1549 78.3362 17.4269 78.4159 17.6884C78.4204 17.707 78.426 17.7252 78.4327 17.743C78.6247 18.3618 79.0097 18.9029 79.5314 19.2871C80.0531 19.6714 80.684 19.8786 81.3319 19.8784V22.9504C79.8373 22.9504 78.7663 23.0026 77.1373 22.039C75.2774 20.9398 74.2322 18.9298 74.2322 16.8425C74.2322 14.6909 75.401 12.5339 77.3827 11.4953C78.8191 10.7417 79.9123 10.7363 81.3319 10.7363V13.8065C80.5267 13.8067 79.7546 14.1266 79.1853 14.6959C78.616 15.2652 78.2961 16.0373 78.2959 16.8425V16.8815Z" fill="#69C9D0"></path><path d="M84.3912 16.8815C84.3916 17.1549 84.3512 17.4269 84.2712 17.6884C84.267 17.707 84.2614 17.7253 84.2544 17.743C84.0625 18.3619 83.6776 18.9031 83.1559 19.2874C82.6342 19.6716 82.0032 19.8788 81.3552 19.8784V22.9504C82.8504 22.9504 83.9208 23.0026 85.5498 22.039C87.4098 20.9398 88.4555 18.9298 88.4555 16.8425C88.4555 14.6909 87.2862 12.5339 85.305 11.4953C83.8686 10.7417 82.7748 10.7363 81.3552 10.7363V13.8065C82.1605 13.8065 82.9327 14.1263 83.5022 14.6957C84.0716 15.265 84.3916 16.0372 84.3918 16.8425L84.3912 16.8815Z" fill="#EE1D52"></path><path d="M34.3369 7.95044H45.5814L44.5422 11.0446H41.6022V22.8849H37.9801V11.0446H34.3369V7.95044ZM64.1385 7.95044V11.0446H67.7817V22.8849H71.4015V11.0446H74.3414L75.383 7.95044H64.1385ZM48.0275 11.4766C48.3739 11.4766 48.7125 11.3739 49.0006 11.1814C49.2886 10.989 49.5131 10.7155 49.6456 10.3954C49.7782 10.0754 49.8128 9.72327 49.7453 9.38354C49.6777 9.04381 49.5109 8.73174 49.266 8.48681C49.021 8.24187 48.709 8.07507 48.3692 8.00749C48.0295 7.93991 47.6773 7.9746 47.3573 8.10716C47.0373 8.23971 46.7638 8.46419 46.5713 8.7522C46.3789 9.04022 46.2762 9.37883 46.2762 9.72522C46.2762 10.1897 46.4607 10.6352 46.7891 10.9636C47.1176 11.2921 47.5631 11.4766 48.0275 11.4766ZM46.2732 22.8849H49.8233V12.7144H46.2732V22.8849ZM62.593 11.389H58.4422L54.8645 14.9704V7.96184H51.3383L51.3263 22.8849H54.8879V18.9963L55.9972 17.9925L59.4532 22.8849H63.2602L58.2538 15.7299L62.593 11.389ZM96.6449 15.7299L100.986 11.389H96.8351L93.2574 14.9704V7.96184H89.7306L89.7192 22.8849H93.2808V18.9963L94.3926 17.9925L97.8491 22.8849H101.652L96.6449 15.7299ZM87.5191 16.8423C87.5191 20.2149 84.7483 22.9491 81.3301 22.9491C77.912 22.9491 75.1418 20.2149 75.1418 16.8423C75.1418 13.4698 77.9126 10.7356 81.3301 10.7356C84.7477 10.7356 87.5203 13.4704 87.5203 16.8423H87.5191ZM84.3661 16.8423C84.3661 16.2419 84.188 15.6549 83.8544 15.1556C83.5208 14.6564 83.0467 14.2673 82.492 14.0375C81.9372 13.8077 81.3268 13.7476 80.7379 13.8647C80.1489 13.9818 79.608 14.271 79.1834 14.6956C78.7588 15.1202 78.4697 15.6611 78.3525 16.25C78.2354 16.839 78.2955 17.4494 78.5253 18.0041C78.7551 18.5589 79.1442 19.033 79.6434 19.3666C80.1427 19.7002 80.7297 19.8783 81.3301 19.8783C81.729 19.8785 82.1239 19.8002 82.4924 19.6477C82.8609 19.4952 83.1958 19.2716 83.4778 18.9897C83.7599 18.7077 83.9836 18.373 84.1362 18.0045C84.2889 17.6361 84.3674 17.2411 84.3673 16.8423H84.3661Z" fill="#fff"></path></svg>
      </div>

      <div class="chk-body">
        <div class="chk-card">
          <h3 class="chk-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Resumo do Pedido
          </h3>
          <div class="chk-summary-row">
            <span style="font-weight: 600; color: var(--text-2);" id="chk-product-name">Taxa de Verificação</span>
            <span style="font-weight: 700; color: var(--text-1);" id="chk-product-price">R$ 24,55</span>
          </div>
          <div class="chk-total-row">
            <span style="font-size: 16px;">Total</span>
            <span style="font-weight: 900; font-size: 24px; color: var(--tt-red);" id="chk-total-price">R$ 24,55</span>
          </div>
        </div>

        <div class="chk-card">
          <h3 class="chk-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Dados Pessoais
          </h3>
          
          <input type="text" id="checkout-name" class="chk-input" placeholder="Nome completo">
          <input type="email" id="checkout-email" class="chk-input" placeholder="E-mail">
          <input type="tel" id="checkout-phone" class="chk-input" placeholder="Telefone / WhatsApp">
          <input type="text" id="checkout-cpf" class="chk-input" placeholder="CPF">
          
          <div class="chk-secure-banner">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Dados protegidos de ponta a ponta
          </div>

          <button class="btn-pay pay-now-btn">
            GERAR PIX AGORA
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
    `,
video: `
<div class="vid-page fade-in-fast" style="background: #fff; color: #111; font-family:'Inter',sans-serif;">
  <!-- Header with TikTok Logo -->
  <div style="background:#fff; border-bottom:1px solid #eaeaea; display:flex; align-items:center; justify-content: space-between; padding:16px;">
    <div style="display:flex; align-items:center; gap:8px;">
      <img src="https://pngimg.com/uploads/tiktok/tiktok_PNG17.png" alt="TikTok" style="height:16px; vertical-align:middle;">
    </div>
    <div style="font-size:12px; font-weight:600; background:#f0f0f0; padding:6px 12px; border-radius:12px; color:#111; display:flex; align-items:center; gap:4px;">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF2C55" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      Saldo Seguro
    </div>
  </div>

  <div class="vid-body" style="padding: 24px 20px; text-align:center;">
    <!-- Card Saldo TikTok Black Oficial -->
    <div style="background:#111111; padding:24px; border-radius:20px; margin-bottom:20px; box-shadow:0 12px 30px rgba(0,0,0,0.15); text-align:left; position:relative; overflow:hidden; color:#fff;">
      <div style="position:absolute; right:-20px; top:-20px; opacity:0.07;">
        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M20 12V7H4a2 2 0 0 1 0-4h14v4M3 5v14a2 2 0 0 0 2 2h16v-5M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <div style="font-size:13px; color:rgba(255,255,255,0.7); margin-bottom:6px; display:flex; align-items:center; gap:6px; font-weight: 600;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Saldo Pendente para Saque
          </div>
          <div style="font-size:38px; font-weight:900; color:#fff; letter-spacing:-1px; margin-bottom:4px;">R$ 597,00</div>
          <div style="font-size:13px; font-weight:700; color:#00C37A; display:inline-flex; align-items:center; gap:4px; background:rgba(0,195,122,0.15); padding:4px 10px; border-radius:8px;">
            ✓ Saldo Aprovado · Aguardando Liberação
          </div>
        </div>
        <div style="background:rgba(255,255,255,0.1); border-radius:12px; padding:10px 14px; display:flex; flex-direction:column; align-items:center; gap:4px;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
          <span style="font-size:10px; color:#fff; font-weight:600;">Etapa Final</span>
        </div>
      </div>
      <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:12px; margin-top:14px; display:flex; justify-content:space-between; align-items:center; font-size:12px;">
        <span style="color:rgba(255,255,255,0.7); display:flex; align-items:center; gap:6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00C37A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          Chave PIX de Envio:
        </span>
        <strong id="vid-pix-display" style="color:#fff; font-weight:700; letter-spacing:0.3px;">Chave Cadastrada</strong>
      </div>
    </div>

    <!-- AVISO ANTIFRAUDE INFORMATIVO -->
    <div style="background:#FFF9EB; border:1.5px solid #FCD34D; border-radius:14px; padding:14px 16px; margin-bottom:22px; text-align:left;">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
        <span style="font-size:16px;">🛡️</span>
        <strong style="font-size:12.5px; color:#92400E; text-transform:uppercase;">Etapa Final Obrigatória (Anti-Fraude)</strong>
      </div>
      <p style="font-size:12px; color:#78350F; line-height:1.5; margin:0;">
        Assista ao vídeo explicativo até o fim para desbloquear o botão oficial. Em seguida, conclua a confirmação da taxa antifraude para depósito imediato dos seus <strong>R$ 597,00</strong>. A taxa é <strong>100% reembolsável</strong> e devolvida no mesmo comprovante PIX.
      </p>
    </div>

    <div style="margin-bottom:20px; text-align:left;">
      <h3 style="font-size:19px; font-weight:800; color:#111; margin-bottom:6px;">Assista para liberar seu saque 🔓</h3>
      <p style="font-size:13px; color:#555; line-height:1.5;">O vídeo a seguir possui instruções rápidas. Quando chegar na metade, o botão de liberação será desbloqueado automaticamente.</p>
    </div>
    
    <!-- Video Container -->
    <div class="video-container">
      <video width="100%" controls autoplay muted style="border-radius: 15px;"> 
        <source src="media/vsl.mp4" type="video/mp4">
         </video> 
        </div> 
      

    <button id="video-pay-btn" onclick="continueToCheckout()" class="btn-pay" style="display:none; width:100%; background:linear-gradient(135deg, #FE2C55, #FF0050); color:#fff; font-weight:800; padding:18px; border-radius:14px; border:none; font-size:16px; box-shadow:0 8px 25px rgba(254,44,85,0.35); margin-top:16px; cursor:pointer; letter-spacing:0.3px;">
      DESBLOQUEAR SALDO AGORA
    </button>

    <!-- SEÇÃO DE COMENTÁRIOS ESTILO TIKTOK COM INTERATIVIDADE REAL -->
    <div class="comments-section" style="margin-top: 32px; text-align: left; background:#ffffff; border-radius:18px; padding:18px; border:1px solid #ECEFF2;">
       <div style="display:flex; justify-content:space-between; align-items:center; border-bottom: 1px solid #eee; padding-bottom: 12px; margin-bottom: 16px;">
         <h4 style="font-size: 15px; font-weight: 800; color:#111; margin:0;" id="comments-counter-title">Comentários (483)</h4>
         <div style="display:flex; align-items:center; gap:12px;">
           <span style="font-size:12px; color:#6B7280; font-weight:700; display:flex; align-items:center; gap:4px;">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
             <span id="live-viewers-count">156</span>
           </span>
           <span style="font-size:12px; color:#00C37A; font-weight:700; display:flex; align-items:center; gap:4px;">
             <span style="width:7px; height:7px; background:#00C37A; border-radius:50%; display:inline-block;"></span> Ao vivo
           </span>
         </div>
       </div>

       <!-- Campo para Usuário Adicionar Comentário -->
       <div style="display: flex; gap: 12px; margin-bottom: 24px; align-items:center; background:#F8F9FA; padding:10px 14px; border-radius:30px; border:1px solid #E5E7EB;">
           <!-- Avatar Neutro Padrão Sem Rosto -->
           <div style="width: 32px; height: 32px; border-radius: 50%; background: #D1D5DB; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="#6B7280"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
           </div>
           <input type="text" id="user-comment-input" placeholder="Adicione um comentário..." style="flex: 1; border: none; background: transparent; outline: none; font-size: 14px; color:#111; font-family:'Inter',sans-serif;" onkeypress="if(event.key==='Enter') postUserComment();">
           <button onclick="postUserComment()" style="background:#FE2C55; color:#fff; border:none; padding:7px 16px; border-radius:20px; font-weight:700; font-size:12px; cursor:pointer; font-family:'Inter',sans-serif; transition:all 0.2s;">Publicar</button>
       </div>

       <div id="comments-list-container" style="display:flex; flex-direction:column; gap:18px;">
          <!-- Comentário 1 -->
          <div class="comment-item" style="display: flex; gap: 12px;">
             <div style="width: 36px; height: 36px; border-radius: 50%; background: #E5E7EB; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="#9CA3AF"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
             </div>
             <div style="flex:1;">
                <div style="font-size: 13px; font-weight: 700; color: #111;">@marcos.silva <span style="color: #999; font-weight: 400; font-size: 11px;"> • acabou de responder</span></div>
                <div style="font-size: 13.5px; color: #333; margin-top: 3px; line-height:1.4;">Mano, achei que ia demorar pra cair, mas os R$ 597 caíram na hora no pix! Valeu a pena demais 🤩</div>
                <div style="display: flex; align-items: center; gap: 16px; margin-top: 6px; color: #777; font-size: 11.5px;">
                   <div style="display: flex; align-items: center; gap: 4px; cursor:pointer;" onclick="likeComment(this)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg> <span class="like-cnt">458</span></div>
                   <div style="cursor:pointer;">Responder</div>
                </div>
             </div>
          </div>

          <!-- Comentário 2 -->
          <div class="comment-item" style="display: flex; gap: 12px;">
             <div style="width: 36px; height: 36px; border-radius: 50%; background: #E5E7EB; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="#9CA3AF"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
             </div>
             <div style="flex:1;">
                <div style="font-size: 13px; font-weight: 700; color: #111;">@gabriel.costa <span style="color: #999; font-weight: 400; font-size: 11px;"> • 1 min</span></div>
                <div style="font-size: 13.5px; color: #333; margin-top: 3px; line-height:1.4;">Alguém já recebeu o saque hoje? Fiz aqui e liberou o botão certinho.</div>
                <div style="display: flex; align-items: center; gap: 16px; margin-top: 6px; color: #777; font-size: 11.5px;">
                   <div style="display: flex; align-items: center; gap: 4px; cursor:pointer;" onclick="likeComment(this)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg> <span class="like-cnt">84</span></div>
                   <div style="cursor:pointer;">Responder</div>
                </div>
                <!-- Resposta aninhada -->
                <div style="display: flex; gap: 10px; margin-top: 10px; background:#F8F9FA; padding:8px 12px; border-radius:12px;">
                    <div style="width: 26px; height: 26px; border-radius: 50%; background: #D1D5DB; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#6B7280"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <div>
                       <div style="font-size: 12px; font-weight: 700; color: #111;">@pamela.rosa_ <span style="color: #999; font-weight: 400;"> • agora</span></div>
                       <div style="font-size: 13px; color: #444; margin-top: 2px;">@gabriel.costa sim! O meu caiu tem 10 minutos no nubank, pagou os R$ 597 certinho</div>
                    </div>
                </div>
             </div>
          </div>

          <!-- Comentário 3 -->
          <div class="comment-item" style="display: flex; gap: 12px;">
             <div style="width: 36px; height: 36px; border-radius: 50%; background: #E5E7EB; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="#9CA3AF"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
             </div>
             <div style="flex:1;">
                <div style="font-size: 13px; font-weight: 700; color: #111;">@anaclara20 <span style="color: #999; font-weight: 400; font-size: 11px;"> • 3 min</span></div>
                <div style="font-size: 13.5px; color: #333; margin-top: 3px; line-height:1.4;">Fiquei com medo de não cair mas o Pix é liberado imediato depois da verificação oficial 🙌 Recomendo!</div>
                <div style="display: flex; align-items: center; gap: 16px; margin-top: 6px; color: #777; font-size: 11.5px;">
                   <div style="display: flex; align-items: center; gap: 4px; cursor:pointer;" onclick="likeComment(this)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg> <span class="like-cnt">318</span></div>
                   <div style="cursor:pointer;">Responder</div>
                </div>
             </div>
          </div>

          <!-- Comentário 4 -->
          <div class="comment-item" style="display: flex; gap: 12px;">
             <div style="width: 36px; height: 36px; border-radius: 50%; background: #E5E7EB; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="#9CA3AF"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
             </div>
             <div style="flex:1;">
                <div style="font-size: 13px; font-weight: 700; color: #111;">@matheus.oficial01 <span style="color: #999; font-weight: 400; font-size: 11px;"> • 6 min</span></div>
                <div style="font-size: 13.5px; color: #333; margin-top: 3px; line-height:1.4;">Galera, assistam as instruções até o botão aparecer, não fechem antes senão perde a vez no sistema kkk</div>
                <div style="display: flex; align-items: center; gap: 16px; margin-top: 6px; color: #777; font-size: 11.5px;">
                   <div style="display: flex; align-items: center; gap: 4px; cursor:pointer;" onclick="likeComment(this)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg> <span class="like-cnt">205</span></div>
                   <div style="cursor:pointer;">Responder</div>
                </div>
             </div>
          </div>

          <!-- Comentário 5 -->
          <div class="comment-item" style="display: flex; gap: 12px;">
             <div style="width: 36px; height: 36px; border-radius: 50%; background: #E5E7EB; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="#9CA3AF"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
             </div>
             <div style="flex:1;">
                <div style="font-size: 13px; font-weight: 700; color: #111;">@juliana_lima <span style="color: #999; font-weight: 400; font-size: 11px;"> • 8 min</span></div>
                <div style="font-size: 13.5px; color: #333; margin-top: 3px; line-height:1.4;">Primeira vez que uma pesquisa de app realmente paga certinho no Pix. Muito top! 👏</div>
                <div style="display: flex; align-items: center; gap: 16px; margin-top: 6px; color: #777; font-size: 11.5px;">
                   <div style="display: flex; align-items: center; gap: 4px; cursor:pointer;" onclick="likeComment(this)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg> <span class="like-cnt">142</span></div>
                   <div style="cursor:pointer;">Responder</div>
                </div>
             </div>
          </div>
       </div>
    </div>


  </div>
</div>
`,
    success_x1: `
    <div class="registration-page fade-in-fast" style="font-family: 'Inter', 'Roboto', sans-serif; text-align: center; padding: 25px 15px;">
      <div style="margin: 15px 0; display: flex; justify-content: center;">
        <div style="background: #e8f5e9; padding: 18px; border-radius: 50%; box-shadow: 0 0 15px rgba(76,175,80,0.3);">
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
      </div>
      
      <h1 style="color: #2e7d32; font-weight: 800; font-size: 22px; margin-bottom: 10px; text-transform: uppercase;">
        Aprovação Recebida!
      </h1>
      
      <p style="color: #444; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
        Seu pagamento de <strong>R$ 14,34 (Verificação PRO)</strong> foi confirmado pela Paradise Pags.
      </p>

      <div style="background: #f4fdf4; border: 1px solid #c8e6c9; border-radius: 8px; padding: 15px; margin-bottom: 20px; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 6px;">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#2e7d32" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          <strong style="color: #2e7d32; font-size: 13px;">INFORMAÇÕES DA RECOMPENSA:</strong>
        </div>
        <p style="color: #444; font-size: 13px; line-height: 1.5; margin: 0;">
          Nossa equipe oficial já foi notificada e <strong>entrará em contato diretamente com você</strong> para passar as instruções e informações finais de liberação do seu saque acumulado de <strong>R$ 597,00</strong>.
        </p>
      </div>

      <div style="background: rgba(255, 44, 85, 0.05); border-left: 4px solid #ff2c55; padding: 12px; border-radius: 4px; margin-bottom: 25px; text-align: left;">
        <p style="color: #d1003a; font-size: 12px; margin: 0; font-weight: 600;">
          ⚠️ Importante: Mantenha sua linha telefônica e WhatsApp ativos para receber o contato do nosso agente de suporte em instantes.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; background: #fafafa; border: 1px solid #eee; border-radius: 8px; padding: 15px;">
        <svg width="35" height="35" viewBox="0 0 50 50" class="spinner" style="display: inline-block;">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#2e7d32" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="50">
            <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1.2s" repeatCount="indefinite"/>
          </circle>
        </svg>
        <span style="font-size: 13px; color: #666; font-weight: 600;">Preparando documentação de liberação...</span>
      </div>
    </div>
    `
};

// Current page state
let currentPage = null;
let currentFeeIndex = 1;

// Removed feesSequence as it is no longer needed for External Checkout

function initializePages() {}

function showPage(pageName) {
    if (pageName !== 'quiz' && typeof window.hideAllSocialProof === 'function') {
        window.hideAllSocialProof();
    }
    const container = document.querySelector('.app-container');
    if (!currentPage) currentPage = container.innerHTML;
    
    let pageHtml = pages[pageName];
    container.innerHTML = pageHtml;

    if (pageName === 'withdraw') setupWithdrawPage();
    else if (pageName === 'registration') setupRegistrationPage();
    else if (pageName === 'video') setupVideoPage();
    else if (pageName === 'checkout') setupCheckoutPage();
}

// Função global chamada pelo onclick do botão "Continuar Verificação"
function continueToCheckout() {
    if (typeof LINK_CHECKOUT !== 'undefined' && LINK_CHECKOUT.trim() !== '') {
        const qs = window.location.search || '';
        window.location.href = LINK_CHECKOUT + (qs ? (LINK_CHECKOUT.includes('?') ? '&' : '?') + qs.substring(1) : '');
    } else {
        alert('Link de pagamento não configurado.');
    }
}

function setupWithdrawPage() {
    const wdBack = document.querySelector('.wd-back');
    if (wdBack) {
        wdBack.addEventListener('click', () => {
            const container = document.querySelector('.app-container');
            container.innerHTML = currentPage;
        });
    }

    const submitBtn = document.querySelector('.withdraw-submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const keyInput = document.querySelector('.pix-key');
            const typeSelect = document.querySelector('.pix-type');
            if (keyInput && keyInput.value.trim()) {
                window.userPixKey = keyInput.value.trim();
                const typeText = typeSelect && typeSelect.selectedIndex > 0 ? typeSelect.options[typeSelect.selectedIndex].text : 'PIX';
                window.userPixType = typeText;
            } else {
                window.userPixKey = 'Chave Cadastrada';
                window.userPixType = 'PIX';
            }
            showPage('registration');
        });
    }

    // Amount selection logic
    const amtButtons = document.querySelectorAll('.wd-body .wd-amount-btn');
    if (amtButtons.length > 0) {
        amtButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Reset all
                amtButtons.forEach(b => {
                    b.style.border = '1px solid #E5E5E5';
                    b.style.background = '#fff';
                    b.style.color = '#666';
                    b.innerHTML = b.getAttribute('data-val');
                });
                
                // Set active
                this.style.border = '1.5px solid #FF2C55';
                this.style.background = '#FFF0F4';
                this.style.color = '#FF2C55';
                
                // Add the checkmark
                this.innerHTML = this.getAttribute('data-val') + '<div style="position:absolute; top:-6px; right:-6px; width:16px; height:16px; background:#FF2C55; border-radius:50%; display:flex; align-items:center; justify-content:center;"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div>';
            });
        });
    }
}



function setupRegistrationPage() {
    const pixDisplay = document.getElementById('reg-pix-display');
    if (pixDisplay && window.userPixKey) {
        pixDisplay.textContent = (window.userPixType ? window.userPixType + ': ' : '') + window.userPixKey;
    }
    const regBtn = document.querySelector('.reg-continue-btn');
    if (regBtn) {
        regBtn.addEventListener('click', () => {
            showPage('video');
        });
    }
}

// Contador de espectadores ao vivo: flutua suavemente entre 120 e 314
let liveViewersTimer = null;
function startLiveViewersCounter() {
    const el = document.getElementById('live-viewers-count');
    if (!el) return;
    if (liveViewersTimer) clearInterval(liveViewersTimer);

    const MIN = 120, MAX = 314;
    let current = Math.floor(Math.random() * (220 - 150 + 1)) + 150; // começo plausível
    el.textContent = current;

    liveViewersTimer = setInterval(() => {
        // Variação pequena para parecer real (+/- 1 a 7 pessoas)
        const step = Math.floor(Math.random() * 7) + 1;
        current += Math.random() < 0.5 ? -step : step;
        if (current < MIN) current = MIN + Math.floor(Math.random() * 4);
        if (current > MAX) current = MAX - Math.floor(Math.random() * 4);
        el.textContent = current;
    }, 2200);
}

function setupVideoPage() {
    // Contador de pessoas assistindo ao vivo (varia de 120 a 314)
    startLiveViewersCounter();

    // Carrega SDK VSL
    if (!document.querySelector('script[src*="smartplayer-wc/v4/sdk.js"]')) {
        const s = document.createElement("script");
        s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
        s.async = true;
        document.head.appendChild(s);
    }

    const vidPix = document.getElementById('vid-pix-display');
    if (vidPix && window.userPixKey) {
        vidPix.textContent = (window.userPixType ? window.userPixType + ': ' : '') + window.userPixKey;
    }

    const iframe = document.getElementById('ifr_6988dff25378736e3afb9af9');
    if (iframe) {
        const qs = window.location.search || '?';
        iframe.src = 'https://scripts.converteai.net/e330a84f-f047-4bad-80a7-53e5f2115555/players/6988dff25378736e3afb9af9/v4/embed.html' + qs + '&vl=' + encodeURIComponent(window.location.href);
    }

    const payBtn = document.getElementById('video-pay-btn');
    if (payBtn) {
        payBtn.addEventListener('click', function() {
            continueToCheckout();
        });
    }
    
    // GUARANTEED FALLBACK: Libera o botão após 15s independentemente da API do Panda
    setTimeout(() => {
        const btn = document.getElementById('video-pay-btn');
        if (btn && btn.style.display === 'none') {
            btn.style.display = 'block';
            console.log("[Fallback] Botão liberado forçadamente aos 5s.");
        }
    }, 5000);

    // Integração Real com Panda Video (Atraso atrelado ao TEMPO DE TELA)
    window.pandascript = window.pandascript || [];
    window.pandascript.push(function(player) {

        if (typeof DELAY_BOTAO_VSL_SEGUNDOS !== 'undefined' && DELAY_BOTAO_VSL_SEGUNDOS > 0) {
            console.log(`[Panda Video] Aguardando ${DELAY_BOTAO_VSL_SEGUNDOS} segundos de exibição real...`);
            let buttonShown = false;
            player.on('timeupdate', function(e) {
                                let triggerTime = typeof DELAY_BOTAO_VSL_SEGUNDOS !== 'undefined' ? DELAY_BOTAO_VSL_SEGUNDOS : 10;
                if (player.duration > 0) {
                    triggerTime = player.duration / 2;
                }
                if (!buttonShown && e.currentTime >= triggerTime) {
                    const btn = document.getElementById('video-pay-btn');
                    if (btn) btn.style.display = 'block';
                    buttonShown = true;
                    console.log("[Panda Video] Tempo atingido! Botão liberado.");
                }
            });
        } else {
            const btn = document.getElementById('video-pay-btn');
            if (btn) btn.style.display = 'block';
        }
    });

    const unlockBtn = document.querySelector('.unlock-btn');
    if (unlockBtn) {
        unlockBtn.addEventListener('click', () => {
            if (typeof LINK_CHECKOUT !== 'undefined' && LINK_CHECKOUT.trim() !== '') {
                window.location.href = LINK_CHECKOUT + (window.location.search || '');
            } else {
                alert('O link de pagamento será aberto em breve.');
            }
        });
    }

    startDynamicCommentsStream();
}

// ── SISTEMA DE COMENTÁRIOS INTERATIVO E STREAM AO VIVO ──
let commentStreamInterval = null;
let currentCommentCount = 483;

function postUserComment() {
    const input = document.getElementById('user-comment-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text) {
        input.focus();
        return;
    }

    const container = document.getElementById('comments-list-container');
    if (!container) return;

    currentCommentCount++;
    const countTitle = document.getElementById('comments-counter-title');
    if (countTitle) countTitle.textContent = `Comentários (${currentCommentCount})`;

    const commentEl = document.createElement('div');
    commentEl.className = 'comment-item fade-in-fast';
    commentEl.style.cssText = 'display:flex; gap:12px; background:#F8FFF9; border:1px solid #D4EDDA; padding:12px; border-radius:14px;';
    commentEl.innerHTML = `
      <div style="width: 36px; height: 36px; border-radius: 50%; background: #D1D5DB; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#6B7280"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      </div>
      <div style="flex:1;">
        <div style="font-size: 13px; font-weight: 700; color: #111;">@você <span style="background:#E8F5E9; color:#2E7D32; font-size:10px; font-weight:700; padding:2px 6px; border-radius:10px; margin-left:4px;">Avaliador</span> <span style="color: #999; font-weight: 400; font-size: 11px;"> • agora mesmo</span></div>
        <div style="font-size: 13.5px; color: #111; margin-top: 3px; line-height:1.4;">${escapeHtml(text)}</div>
        <div style="display: flex; align-items: center; gap: 16px; margin-top: 6px; color: #777; font-size: 11.5px;">
           <div style="display: flex; align-items: center; gap: 4px; cursor:pointer;" onclick="likeComment(this)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg> <span class="like-cnt">1</span></div>
           <span style="color:#00C37A; font-weight:600;">✓ Publicado</span>
        </div>
      </div>
    `;

    container.insertBefore(commentEl, container.firstChild);
    input.value = '';
}

function likeComment(btn) {
    const countSpan = btn.querySelector('.like-cnt');
    if (!countSpan) return;
    let count = parseInt(countSpan.textContent.replace(/\D/g, '')) || 0;
    if (btn.dataset.liked === 'true') {
        count--;
        btn.dataset.liked = 'false';
        btn.style.color = '#777';
        btn.querySelector('svg').setAttribute('fill', 'none');
    } else {
        count++;
        btn.dataset.liked = 'true';
        btn.style.color = '#FE2C55';
        btn.querySelector('svg').setAttribute('fill', '#FE2C55');
    }
    countSpan.textContent = count;
}

function escapeHtml(string) {
    return String(string)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

const liveCommentsQueue = [
    { user: "@renata_santoss", text: "Acabei de receber a notificação do banco! Caiu R$ 597,00 certinho na conta via PIX ❤️", likes: 89 },
    { user: "@felipe.silva2026", text: "Muito prático, assisti o vídeo até o final e desbloqueou direto. Recomendo!", likes: 112 },
    { user: "@carla_mkt", text: "Achei super transparente o processo de validação. Valeu cada segundo!", likes: 76 },
    { user: "@diego_oliveira_", text: "Pagamento instantâneo confirmado aqui no Santander. Top demais 🚀", likes: 145 },
    { user: "@mari_albuquerque", text: "Já fiz o meu saque e já compartilhei com meu irmão pra ele fazer também kkkk", likes: 98 }
];

let queueIndex = 0;
function startDynamicCommentsStream() {
    if (commentStreamInterval) clearInterval(commentStreamInterval);
    commentStreamInterval = setInterval(() => {
        const container = document.getElementById('comments-list-container');
        if (!container || queueIndex >= liveCommentsQueue.length) return;
        
        const nextItem = liveCommentsQueue[queueIndex];
        queueIndex = (queueIndex + 1) % liveCommentsQueue.length;

        currentCommentCount++;
        const countTitle = document.getElementById('comments-counter-title');
        if (countTitle) countTitle.textContent = `Comentários (${currentCommentCount})`;

        const newComment = document.createElement('div');
        newComment.className = 'comment-item fade-in-fast';
        newComment.style.cssText = 'display: flex; gap: 12px;';
        newComment.innerHTML = `
          <div style="width: 36px; height: 36px; border-radius: 50%; background: #E5E7EB; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#9CA3AF"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <div style="flex:1;">
             <div style="font-size: 13px; font-weight: 700; color: #111;">${nextItem.user} <span style="color: #999; font-weight: 400; font-size: 11px;"> • agora</span></div>
             <div style="font-size: 13.5px; color: #333; margin-top: 3px; line-height:1.4;">${nextItem.text}</div>
             <div style="display: flex; align-items: center; gap: 16px; margin-top: 6px; color: #777; font-size: 11.5px;">
                <div style="display: flex; align-items: center; gap: 4px; cursor:pointer;" onclick="likeComment(this)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg> <span class="like-cnt">${nextItem.likes}</span></div>
                <div style="cursor:pointer;">Responder</div>
             </div>
          </div>
        `;
        container.insertBefore(newComment, container.children[1] || null);
    }, 18000); // Entra novo comentário a cada 18s
}


