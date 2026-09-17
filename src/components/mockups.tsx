import { cn } from "@/lib/cn";

/* =========================================================
   MOCKUPS SVG DOS APLICATIVOS
   ---------------------------------------------------------
   Cada mockup é uma representação estilizada da interface
   do app. Não é uma captura real. Quando você tiver as
   screenshots reais, substitua pelo PNG em /public/apps/<slug>/.
   O componente <Screenshot /> abaixo resolve isso: se for
   uma imagem (PNG/JPG), renderiza <img>; se for SVG mockup,
   renderiza este componente.
   ========================================================= */

const W = 360;
const H = 720;

export function IgrejaMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <defs>
        <linearGradient id="igreja-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1542" />
          <stop offset="100%" stopColor="#04081a" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill="url(#igreja-bg)" />
      {/* status bar */}
      <rect x="20" y="22" width="40" height="6" rx="3" fill="#ffffff" opacity="0.6" />
      <rect x={W - 60} y="22" width="40" height="6" rx="3" fill="#ffffff" opacity="0.4" />

      {/* header */}
      <text x="24" y="80" fill="#f8fafc" fontSize="20" fontWeight="700">
        Kairós Igreja
      </text>
      <text x="24" y="100" fill="#94a3b8" fontSize="11">
        Igreja Sede · 248 membros
      </text>

      {/* summary cards */}
      <g transform="translate(24, 130)">
        <rect width="148" height="80" rx="14" fill="#101a4d" stroke="#3b5998" strokeOpacity="0.4" />
        <text x="14" y="26" fill="#94a3b8" fontSize="10">Membros ativos</text>
        <text x="14" y="58" fill="#00ffa3" fontSize="26" fontWeight="700">248</text>
      </g>
      <g transform="translate(188, 130)">
        <rect width="148" height="80" rx="14" fill="#101a4d" stroke="#3b5998" strokeOpacity="0.4" />
        <text x="14" y="26" fill="#94a3b8" fontSize="10">Eventos do mês</text>
        <text x="14" y="58" fill="#1e6dff" fontSize="26" fontWeight="700">12</text>
      </g>

      {/* agenda */}
      <text x="24" y="246" fill="#f8fafc" fontSize="13" fontWeight="600">
        Próximos eventos
      </text>
      {[
        { t: "Culto de domingo", d: "Hoje · 19h", c: "#1e6dff" },
        { t: "Reunião de líderes", d: "Qua · 20h", c: "#00ffa3" },
        { t: "Visita pastoral", d: "Sex · 15h", c: "#9333ea" },
        { t: "Ensaio do louvor", d: "Sáb · 17h", c: "#f59e0b" },
      ].map((ev, i) => (
        <g key={i} transform={`translate(24, ${262 + i * 56})`}>
          <rect width="312" height="48" rx="12" fill="#0d1640" stroke="#1f2c66" />
          <circle cx="22" cy="24" r="6" fill={ev.c} />
          <text x="40" y="20" fill="#f8fafc" fontSize="12" fontWeight="600">
            {ev.t}
          </text>
          <text x="40" y="36" fill="#94a3b8" fontSize="10">
            {ev.d}
          </text>
        </g>
      ))}

      {/* bottom nav */}
      <rect x="0" y={H - 70} width={W} height="70" fill="#08113a" />
      {["Início", "Agenda", "Membros", "Docs"].map((n, i) => (
        <text
          key={n}
          x={50 + i * 80}
          y={H - 30}
          fill={i === 0 ? "#00ffa3" : "#94a3b8"}
          fontSize="11"
          fontWeight={i === 0 ? "600" : "400"}
          textAnchor="middle"
        >
          {n}
        </text>
      ))}
    </svg>
  );
}

export function IgrejaMembrosMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#0b1542" />
      <text x="24" y="60" fill="#f8fafc" fontSize="18" fontWeight="700">
        Membros
      </text>
      <rect x="24" y="80" width={W - 48} height="40" rx="10" fill="#0d1640" />
      <text x="40" y="105" fill="#94a3b8" fontSize="11">
        🔍 Buscar por nome ou congregação…
      </text>
      {[
        { n: "Ana Beatriz", r: "Líder de célula", c: "#22c55e" },
        { n: "Carlos Souza", r: "Membro", c: "#3b82f6" },
        { n: "Maria Lima", r: "Diaconisa", c: "#a855f7" },
        { n: "João Pedro", r: "Membro", c: "#3b82f6" },
        { n: "Sara Mendes", r: "Obreira", c: "#f59e0b" },
        { n: "Paulo Henrique", r: "Membro", c: "#3b82f6" },
      ].map((m, i) => (
        <g key={i} transform={`translate(24, ${140 + i * 64})`}>
          <rect width={W - 48} height="52" rx="12" fill="#0d1640" stroke="#1f2c66" />
          <circle cx="28" cy="26" r="14" fill={m.c} />
          <text x="28" y="31" fill="#fff" fontSize="11" fontWeight="700" textAnchor="middle">
            {m.n[0]}
          </text>
          <text x="52" y="22" fill="#f8fafc" fontSize="12" fontWeight="600">
            {m.n}
          </text>
          <text x="52" y="38" fill="#94a3b8" fontSize="10">
            {m.r}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function IgrejaAgendaMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#0b1542" />
      <text x="24" y="60" fill="#f8fafc" fontSize="18" fontWeight="700">
        Agenda Pastoral
      </text>
      <text x="24" y="80" fill="#94a3b8" fontSize="11">
        Setembro 2026
      </text>
      {/* calendar grid */}
      <g transform="translate(24, 100)">
        {Array.from({ length: 35 }).map((_, i) => {
          const day = i - 4;
          const valid = day > 0 && day <= 30;
          const highlight = [5, 12, 19, 26].includes(day);
          return (
            <g key={i} transform={`translate(${(i % 7) * 44}, ${Math.floor(i / 7) * 40})`}>
              <rect width="40" height="36" rx="8" fill={highlight ? "#1e6dff" : "transparent"} opacity={highlight ? 0.18 : 1} />
              <text
                x="20"
                y="22"
                fill={highlight ? "#1e6dff" : valid ? "#f8fafc" : "#475569"}
                fontSize="11"
                fontWeight={highlight ? "700" : "500"}
                textAnchor="middle"
              >
                {valid ? day : ""}
              </text>
            </g>
          );
        })}
      </g>
      <text x="24" y="376" fill="#f8fafc" fontSize="13" fontWeight="600">
        Eventos do dia
      </text>
      <g transform="translate(24, 392)">
        <rect width={W - 48} height="56" rx="12" fill="#0d1640" stroke="#1f2c66" />
        <text x="14" y="22" fill="#f8fafc" fontSize="12" fontWeight="600">
          Culto da família
        </text>
        <text x="14" y="40" fill="#94a3b8" fontSize="10">
          19h · Templo principal
        </text>
      </g>
    </svg>
  );
}

export function CrmMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#04081a" />
      <text x="24" y="60" fill="#f8fafc" fontSize="18" fontWeight="700">
        Pipeline
      </text>
      <text x="24" y="80" fill="#94a3b8" fontSize="11">
        47 oportunidades · R$ 218k
      </text>
      {[
        { label: "Novos", count: 12, color: "#22d3ee", x: 0 },
        { label: "Qualificados", count: 9, color: "#1e6dff", x: 84 },
        { label: "Proposta", count: 6, color: "#a855f7", x: 168 },
        { label: "Fechados", count: 4, color: "#00ffa3", x: 252 },
      ].map((col) => (
        <g key={col.label} transform={`translate(${24 + col.x}, 110)`}>
          <rect width="80" height="560" rx="12" fill="#0a1230" stroke="#1f2c66" />
          <text x="40" y="22" fill={col.color} fontSize="11" fontWeight="700" textAnchor="middle">
            {col.label.toUpperCase()}
          </text>
          <text x="40" y="38" fill="#94a3b8" fontSize="10" textAnchor="middle">
            {col.count}
          </text>
          {Array.from({ length: Math.min(col.count, 4) }).map((_, i) => (
            <g key={i} transform={`translate(8, ${56 + i * 90})`}>
              <rect width="64" height="78" rx="8" fill="#101a4d" stroke="#1f2c66" />
              <circle cx="14" cy="16" r="6" fill={col.color} />
              <rect x="6" y="32" width="50" height="6" rx="3" fill="#f8fafc" opacity="0.7" />
              <rect x="6" y="44" width="40" height="5" rx="2.5" fill="#475569" />
              <rect x="6" y="56" width="30" height="5" rx="2.5" fill="#475569" />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

export function CrmConversaMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#04081a" />
      <text x="24" y="50" fill="#f8fafc" fontSize="14" fontWeight="700">
        Conversa com cliente
      </text>
      <text x="24" y="68" fill="#94a3b8" fontSize="10">
        WhatsApp · João da Silva
      </text>
      {/* chat */}
      {[
        { m: "Oi, viu a proposta?", i: false, c: "#101a4d" },
        { m: "Vi sim, vou analisar com a equipe.", i: true, c: "#1e6dff" },
        { m: "Posso te ligar amanhã 14h?", i: false, c: "#101a4d" },
        { m: "Perfeito, estarei disponível.", i: true, c: "#1e6dff" },
        { m: "Combinado ✅", i: false, c: "#101a4d" },
      ].map((b, i) => (
        <g key={i} transform={`translate(${b.i ? 200 : 24}, ${100 + i * 60})`}>
          <rect
            width="136"
            height="42"
            rx="10"
            fill={b.c}
            stroke={b.i ? "#1e6dff" : "#1f2c66"}
          />
          <text x="10" y="18" fill="#f8fafc" fontSize="10">
            {b.m}
          </text>
          <text x="10" y="32" fill="#94a3b8" fontSize="8">
            14:32 ✓✓
          </text>
        </g>
      ))}
    </svg>
  );
}

export function CrmFunilMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#04081a" />
      <text x="24" y="50" fill="#f8fafc" fontSize="16" fontWeight="700">
        Funil de vendas
      </text>
      {[
        { l: "Lead", w: 280, h: 32, c: "#22d3ee" },
        { l: "Qualificado", w: 240, h: 32, c: "#1e6dff" },
        { l: "Proposta", w: 190, h: 32, c: "#a855f7" },
        { l: "Negociação", w: 140, h: 32, c: "#f59e0b" },
        { l: "Ganho", w: 90, h: 32, c: "#00ffa3" },
      ].map((s, i) => (
        <g key={s.l} transform={`translate(${(W - s.w) / 2}, ${90 + i * 60})`}>
          <rect width={s.w} height={s.h} rx="8" fill={s.c} opacity="0.85" />
          <text x={s.w / 2} y="22" fill="#04081a" fontSize="12" fontWeight="700" textAnchor="middle">
            {s.l}
          </text>
        </g>
      ))}
      <text x="180" y="430" fill="#94a3b8" fontSize="11" textAnchor="middle">
        Conversão: 17,4%
      </text>
    </svg>
  );
}

export function DentalMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#04081a" />
      <text x="24" y="50" fill="#f8fafc" fontSize="16" fontWeight="700">
        Agenda
      </text>
      <text x="24" y="68" fill="#94a3b8" fontSize="10">
        Hoje, 17 de Setembro
      </text>
      {[
        { h: "08:00", n: "Maria Souza", s: "Limpeza", c: "#22d3ee" },
        { h: "09:30", n: "Carlos Lima", s: "Canal", c: "#1e6dff" },
        { h: "11:00", n: "Ana Beatriz", s: "Avaliação", c: "#00ffa3" },
        { h: "14:00", n: "Roberto Alves", s: "Implante", c: "#a855f7" },
        { h: "15:30", n: "Patrícia Rocha", s: "Limpeza", c: "#22d3ee" },
      ].map((p, i) => (
        <g key={i} transform={`translate(24, ${90 + i * 80})`}>
          <rect width={W - 48} height="68" rx="14" fill="#0a1230" stroke="#1f2c66" />
          <rect width="6" height="68" rx="3" fill={p.c} />
          <text x="20" y="22" fill="#94a3b8" fontSize="10">{p.h}</text>
          <text x="20" y="42" fill="#f8fafc" fontSize="13" fontWeight="700">{p.n}</text>
          <text x="20" y="58" fill="#94a3b8" fontSize="10">{p.s}</text>
        </g>
      ))}
    </svg>
  );
}

export function DentalPacienteMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#04081a" />
      <text x="24" y="50" fill="#f8fafc" fontSize="16" fontWeight="700">
        Paciente
      </text>
      <g transform="translate(24, 76)">
        <rect width={W - 48} height="100" rx="14" fill="#0a1230" stroke="#1f2c66" />
        <circle cx="40" cy="50" r="26" fill="#22d3ee" />
        <text x="40" y="58" fill="#04081a" fontSize="18" fontWeight="700" textAnchor="middle">M</text>
        <text x="80" y="44" fill="#f8fafc" fontSize="14" fontWeight="700">Maria Souza</text>
        <text x="80" y="62" fill="#94a3b8" fontSize="10">34 anos · Última consulta 10/08</text>
        <text x="80" y="80" fill="#94a3b8" fontSize="10">(61) 9 9999-9999</text>
      </g>
      <text x="24" y="200" fill="#f8fafc" fontSize="13" fontWeight="600">
        Histórico
      </text>
      {["Limpeza · 10/08", "Canal · 22/06", "Avaliação · 04/05"].map((h, i) => (
        <g key={i} transform={`translate(24, ${216 + i * 40})`}>
          <rect width={W - 48} height="32" rx="8" fill="#0a1230" stroke="#1f2c66" />
          <text x="14" y="20" fill="#94a3b8" fontSize="11">{h}</text>
        </g>
      ))}
    </svg>
  );
}

export function StudioMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#0a0a1f" />
      <text x="24" y="50" fill="#f8fafc" fontSize="16" fontWeight="700">
        Agenda de hoje
      </text>
      {[
        { h: "09:00", s: "Corte + escova", c: "#a855f7" },
        { h: "10:30", s: "Coloração", c: "#f472b6" },
        { h: "13:00", s: "Manicure", c: "#f59e0b" },
        { h: "15:00", s: "Hidratação", c: "#22d3ee" },
        { h: "16:30", s: "Corte masculino", c: "#00ffa3" },
      ].map((p, i) => (
        <g key={i} transform={`translate(24, ${80 + i * 80})`}>
          <rect width={W - 48} height="68" rx="14" fill="#0f0f2c" stroke="#2a1a4d" />
          <circle cx="32" cy="34" r="20" fill={p.c} opacity="0.2" />
          <circle cx="32" cy="34" r="14" fill={p.c} />
          <text x="32" y="38" fill="#04081a" fontSize="10" fontWeight="700" textAnchor="middle">
            {p.h.split(":")[0]}
          </text>
          <text x="68" y="34" fill="#f8fafc" fontSize="13" fontWeight="700">{p.s}</text>
          <text x="68" y="52" fill="#94a3b8" fontSize="10">Profissional: Carla</text>
        </g>
      ))}
    </svg>
  );
}

export function StudioClienteMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#0a0a1f" />
      <text x="24" y="50" fill="#f8fafc" fontSize="16" fontWeight="700">
        Cliente
      </text>
      <g transform="translate(24, 76)">
        <rect width={W - 48} height="120" rx="16" fill="#0f0f2c" stroke="#2a1a4d" />
        <circle cx="48" cy="50" r="28" fill="#a855f7" />
        <text x="48" y="58" fill="#04081a" fontSize="18" fontWeight="700" textAnchor="middle">B</text>
        <text x="92" y="44" fill="#f8fafc" fontSize="14" fontWeight="700">Bruna Oliveira</text>
        <text x="92" y="62" fill="#94a3b8" fontSize="10">Cliente desde 2023</text>
        <text x="92" y="80" fill="#94a3b8" fontSize="10">12 serviços realizados</text>
        <text x="92" y="100" fill="#f8fafc" fontSize="11" fontWeight="600">Aniversariante do mês ✨</text>
      </g>
    </svg>
  );
}

export function EngenhariaMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#04081a" />
      <text x="24" y="50" fill="#f8fafc" fontSize="16" fontWeight="700">
        Projetos
      </text>
      {[
        { t: "Resid. Vila Nova", s: "Em andamento · 65%", c: "#00ffa3" },
        { t: "Comerc. Asa Sul", s: "Aguardando assinatura", c: "#f59e0b" },
        { t: "Reforma Taguatinga", s: "Concluído", c: "#1e6dff" },
        { t: "Lote Águas Claras", s: "Planejamento", c: "#a855f7" },
      ].map((p, i) => (
        <g key={i} transform={`translate(24, ${80 + i * 96})`}>
          <rect width={W - 48} height="84" rx="14" fill="#0a1230" stroke="#1f2c66" />
          <text x="16" y="24" fill="#f8fafc" fontSize="13" fontWeight="700">{p.t}</text>
          <text x="16" y="42" fill="#94a3b8" fontSize="10">{p.s}</text>
          <rect x="16" y="58" width={W - 80} height="6" rx="3" fill="#1f2c66" />
          <rect x="16" y="58" width={(W - 80) * 0.65} height="6" rx="3" fill={p.c} />
        </g>
      ))}
    </svg>
  );
}

export function EngenhariaDocMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#04081a" />
      <text x="24" y="50" fill="#f8fafc" fontSize="14" fontWeight="700">
        Documento técnico
      </text>
      <g transform="translate(24, 76)">
        <rect width={W - 48} height="500" rx="12" fill="#f8fafc" />
        <rect x="20" y="20" width={W - 88} height="14" rx="4" fill="#04081a" />
        <rect x="20" y="44" width={W - 120} height="6" rx="3" fill="#475569" />
        {Array.from({ length: 22 }).map((_, i) => (
          <rect
            key={i}
            x="20"
            y={70 + i * 16}
            width={W - 88 - (i % 4) * 12}
            height="5"
            rx="2"
            fill="#cbd5e1"
          />
        ))}
      </g>
    </svg>
  );
}

export function PontoMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#04081a" />
      <text x="24" y="50" fill="#f8fafc" fontSize="14" fontWeight="700">
        Registrar ponto
      </text>
      <g transform="translate(24, 80)">
        <rect width={W - 48} height="180" rx="16" fill="#0a1230" stroke="#1f2c66" />
        <text x={W / 2 - 24} y="80" fill="#f59e0b" fontSize="44" fontWeight="800" textAnchor="middle">
          14:32
        </text>
        <text x={W / 2 - 24} y="110" fill="#94a3b8" fontSize="11" textAnchor="middle">
          Quarta-feira, 17 de Setembro
        </text>
        <rect x="32" y="130" width={W - 112} height="36" rx="10" fill="#f59e0b" />
        <text x={W / 2 - 24} y="153" fill="#04081a" fontSize="13" fontWeight="700" textAnchor="middle">
          Registrar agora
        </text>
      </g>
      <text x="24" y="290" fill="#f8fafc" fontSize="13" fontWeight="600">
        Marcações de hoje
      </text>
      {[
        { t: "Entrada", h: "08:01" },
        { t: "Saída almoço", h: "12:04" },
        { t: "Volta almoço", h: "13:30" },
        { t: "Saída", h: "17:25" },
      ].map((p, i) => (
        <g key={i} transform={`translate(24, ${310 + i * 44})`}>
          <rect width={W - 48} height="36" rx="10" fill="#0a1230" stroke="#1f2c66" />
          <text x="14" y="22" fill="#f8fafc" fontSize="11">{p.t}</text>
          <text x={W - 60} y="22" fill="#94a3b8" fontSize="11" textAnchor="end">{p.h}</text>
        </g>
      ))}
    </svg>
  );
}

export function PontoAdminMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#04081a" />
      <text x="24" y="50" fill="#f8fafc" fontSize="14" fontWeight="700">
        Equipe hoje
      </text>
      {[
        { n: "Ana Beatriz", s: "Trabalhando", c: "#00ffa3" },
        { n: "Carlos Souza", s: "Em almoço", c: "#f59e0b" },
        { n: "Maria Lima", s: "Trabalhando", c: "#00ffa3" },
        { n: "João Pedro", s: "Falta", c: "#ef4444" },
        { n: "Sara Mendes", s: "Trabalhando", c: "#00ffa3" },
        { n: "Paulo Henrique", s: "Trabalhando", c: "#00ffa3" },
      ].map((p, i) => (
        <g key={i} transform={`translate(24, ${80 + i * 60})`}>
          <rect width={W - 48} height="48" rx="10" fill="#0a1230" stroke="#1f2c66" />
          <circle cx="22" cy="24" r="10" fill={p.c} />
          <text x="22" y="28" fill="#04081a" fontSize="9" fontWeight="700" textAnchor="middle">
            {p.n[0]}
          </text>
          <text x="42" y="20" fill="#f8fafc" fontSize="11" fontWeight="600">{p.n}</text>
          <text x="42" y="36" fill={p.c} fontSize="10">{p.s}</text>
        </g>
      ))}
    </svg>
  );
}

export function LeitorMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#04081a" />
      <text x="24" y="50" fill="#f8fafc" fontSize="14" fontWeight="700">
        Minha biblioteca
      </text>
      {[
        { t: "Introdução à Teologia Sistemática", a: "Wayne Grudem", c: "#1e6dff" },
        { t: "O Custo do Discipulado", a: "Dietrich Bonhoeffer", c: "#a855f7" },
        { t: "Mere Christianity", a: "C. S. Lewis", c: "#22d3ee" },
        { t: "Confissões", a: "Agostinho", c: "#00ffa3" },
      ].map((b, i) => (
        <g key={i} transform={`translate(24, ${80 + i * 100})`}>
          <rect width="72" height="84" rx="8" fill={b.c} opacity="0.2" />
          <rect x="6" y="6" width="60" height="6" rx="2" fill={b.c} />
          <rect x="6" y="20" width="40" height="3" rx="1.5" fill={b.c} />
          <rect x="6" y="28" width="50" height="3" rx="1.5" fill={b.c} />
          <text x="84" y="22" fill="#f8fafc" fontSize="11" fontWeight="700">{b.t}</text>
          <text x="84" y="38" fill="#94a3b8" fontSize="9">{b.a}</text>
          <rect x="84" y="56" width="200" height="5" rx="2.5" fill="#1f2c66" />
          <rect x="84" y="56" width={60 + i * 30} height="5" rx="2.5" fill={b.c} />
        </g>
      ))}
    </svg>
  );
}

export function TeologiaMockup() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <rect width={W} height={H} fill="#04081a" />
      <text x="24" y="50" fill="#f8fafc" fontSize="14" fontWeight="700">
        Estudos em andamento
      </text>
      {[
        { t: "Romanos 8 — Vida no Espírito", p: 72 },
        { t: "Soteriologia — A obra de Cristo", p: 45 },
        { t: "Eclesiologia — A Igreja", p: 88 },
      ].map((s, i) => (
        <g key={i} transform={`translate(24, ${80 + i * 100})`}>
          <rect width={W - 48} height="86" rx="12" fill="#0a1230" stroke="#1f2c66" />
          <text x="16" y="22" fill="#f8fafc" fontSize="12" fontWeight="700">{s.t}</text>
          <text x="16" y="38" fill="#94a3b8" fontSize="10">Módulo {i + 1} · 4 aulas</text>
          <rect x="16" y="56" width={W - 80} height="6" rx="3" fill="#1f2c66" />
          <rect x="16" y="56" width={(W - 80) * (s.p / 100)} height="6" rx="3" fill="#1e6dff" />
          <text x={W - 60} y="22" fill="#1e6dff" fontSize="11" fontWeight="700" textAnchor="end">{s.p}%</text>
        </g>
      ))}
    </svg>
  );
}

// ---------------------------------------------------------
//  REGISTRY — usado por <Screenshot />
// ---------------------------------------------------------

export const mockupRegistry: Record<string, React.FC> = {
  igreja: IgrejaMockup,
  "igreja-membros": IgrejaMembrosMockup,
  "igreja-agenda": IgrejaAgendaMockup,
  crm: CrmMockup,
  "crm-conversa": CrmConversaMockup,
  "crm-funil": CrmFunilMockup,
  dental: DentalMockup,
  "dental-paciente": DentalPacienteMockup,
  studio: StudioMockup,
  "studio-cliente": StudioClienteMockup,
  engenharia: EngenhariaMockup,
  "engenharia-doc": EngenhariaDocMockup,
  ponto: PontoMockup,
  "ponto-admin": PontoAdminMockup,
  leitor: LeitorMockup,
  teologia: TeologiaMockup,
};

export function Mockup({ name, className }: { name: string; className?: string }) {
  const Cmp = mockupRegistry[name];
  if (!Cmp) {
    return (
      <div className={cn("w-full h-full grid place-items-center bg-[#04081a] text-white/40 text-xs", className)}>
        mockup: {name}
      </div>
    );
  }
  return <Cmp />;
}