import { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, MapPin } from 'lucide-react';

// Mock data
const violenceTypeData = [
  { type: 'Psicológica', cases: 3420 },
  { type: 'Física', cases: 2890 },
  { type: 'Moral', cases: 1560 },
  { type: 'Patrimonial', cases: 890 },
  { type: 'Sexual', cases: 670 },
];

const ageRangeData = [
  { range: '18-25', value: 22, cases: 1540 },
  { range: '26-35', value: 35, cases: 2450 },
  { range: '36-45', value: 28, cases: 1960 },
  { range: '46-60', value: 12, cases: 840 },
  { range: '60+', value: 3, cases: 210 },
];

const relationshipData = [
  { relation: 'Cônjuge', cases: 2340 },
  { relation: 'Ex-cônjuge', cases: 1890 },
  { relation: 'Namorado', cases: 1240 },
  { relation: 'Ex-namorado', cases: 980 },
  { relation: 'Familiar', cases: 750 },
  { relation: 'Desconhecido', cases: 430 },
];

const regionData = [
  { region: 'Centro', cases: 1850 },
  { region: 'Zona Norte', cases: 2120 },
  { region: 'Zona Sul', cases: 1560 },
  { region: 'Zona Leste', cases: 1940 },
  { region: 'Zona Oeste', cases: 1160 },
];

const recurrenceData = [
  { label: 'Primeira ocorrência', value: 42, cases: 2940 },
  { label: 'Reincidência', value: 58, cases: 4060 },
];

const timeOfDayData = [
  { period: 'Madrugada', cases: 890 },
  { period: 'Manhã', cases: 1240 },
  { period: 'Tarde', cases: 1680 },
  { period: 'Noite', cases: 3190 },
];

const COLORS = ['#9333ea', '#c026d3', '#db2777', '#ec4899', '#f472b6', '#f9a8d4'];

const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const statCards = [
  {
    value: '7.000',
    label: 'Total de casos',
    gradient: 'from-purple-600/80 to-purple-900/90',
    image: 'https://images.unsplash.com/photo-1672088491419-33f6f85a7c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm93ZCUyMHBlb3BsZSUyMGdhdGhlcmluZyUyMHN0YXRpc3RpY3N8ZW58MXx8fHwxNzc2NDM5MTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    value: '58%',
    label: 'Reincidência',
    gradient: 'from-pink-600/80 to-purple-900/90',
    image: 'https://images.unsplash.com/photo-1753024678669-461e2df81cd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsZSUyMHJlcGVhdCUyMHBhdHRlcm4lMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzY0MzkxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    value: '49%',
    label: 'Violência psicológica',
    gradient: 'from-purple-700/80 to-pink-900/90',
    image: 'https://images.unsplash.com/photo-1610729733460-4a284ab02ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWQlMjB3b21hbiUyMHNpbGhvdWV0dGUlMjBlbW90aW9uYWwlMjBkaXN0cmVzc3xlbnwxfHx8fDE3NzY0MzkxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    value: '46%',
    label: 'Noite',
    gradient: 'from-pink-700/80 to-purple-950/90',
    image: 'https://images.unsplash.com/photo-1660332765349-fce6331b16aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMGNpdHklMjBkYXJrJTIwc2t5JTIwbW9vbnxlbnwxfHx8fDE3NzY0MzkxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

function MapChart() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  // São Paulo municipality regions as SVG paths (simplified but recognizable)
  const spRegions = [
    {
      id: 'norte',
      name: 'Zona Norte',
      cases: 2120,
      color: '#9333ea',
      // Northern region
      path: 'M 180,30 L 220,25 260,35 300,30 340,40 360,60 370,90 350,120 320,130 280,125 240,130 200,120 170,100 160,70 Z',
      labelX: 265,
      labelY: 80,
    },
    {
      id: 'oeste',
      name: 'Zona Oeste',
      cases: 1160,
      color: '#c026d3',
      // Western region
      path: 'M 60,120 L 100,110 140,115 170,100 200,120 240,130 230,160 220,190 200,210 170,200 130,190 90,170 60,150 Z',
      labelX: 148,
      labelY: 160,
    },
    {
      id: 'centro',
      name: 'Centro',
      cases: 1850,
      color: '#7c3aed',
      // Central region (smaller)
      path: 'M 240,130 L 280,125 320,130 310,160 290,175 260,180 230,170 230,160 Z',
      labelX: 273,
      labelY: 155,
    },
    {
      id: 'leste',
      name: 'Zona Leste',
      cases: 1940,
      color: '#db2777',
      // Eastern region (largest)
      path: 'M 320,130 L 350,120 370,90 400,100 440,110 470,130 490,160 480,200 460,230 430,240 400,235 370,220 340,200 310,180 310,160 Z',
      labelX: 400,
      labelY: 170,
    },
    {
      id: 'sul',
      name: 'Zona Sul',
      cases: 1560,
      color: '#ec4899',
      // Southern region (large)
      path: 'M 200,210 L 220,190 230,170 260,180 290,175 310,180 340,200 370,220 380,250 370,290 340,320 300,340 260,350 220,340 190,310 170,280 160,250 170,230 Z',
      labelX: 270,
      labelY: 270,
    },
  ];

  const metropolitanRegions = [
    { id: 'guarulhos', name: 'Guarulhos', cases: 890, x: 420, y: 60, path: 'M 360,40 L 400,30 450,40 470,65 460,90 440,100 400,100 370,90 360,60 Z' },
    { id: 'osasco', name: 'Osasco', cases: 720, x: 75, y: 130, path: 'M 30,100 L 60,90 100,100 100,110 60,120 60,150 40,140 25,120 Z' },
    { id: 'abcdm', name: 'ABC Paulista', cases: 1340, x: 400, y: 280, path: 'M 370,220 L 400,235 430,240 460,260 450,290 420,310 380,300 370,290 380,250 Z' },
  ];

  const maxCases = 2120;

  return (
    <motion.div
      className="bg-white rounded-3xl p-8 shadow-lg border border-purple-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl text-gray-800">Mapa de Ocorrências</h3>
          <p className="text-gray-500 text-sm mt-1">Município de São Paulo e Região Metropolitana</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin size={16} className="text-purple-500" />
          <span>8 regiões monitoradas</span>
        </div>
      </div>

      {/* Map container */}
      <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-gray-50 via-purple-50/20 to-gray-50 rounded-2xl overflow-hidden border border-purple-100/50">
        <svg viewBox="0 0 520 370" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          {/* Background water / subtle grid */}
          <defs>
            <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e9d5ff" strokeWidth="0.3" />
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="shadow">
              <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#9333ea" floodOpacity="0.15"/>
            </filter>
          </defs>
          <rect width="520" height="370" fill="url(#mapGrid)" />

          {/* Metropolitan regions (lighter, behind) */}
          {metropolitanRegions.map((region) => {
            const isHovered = hoveredRegion === region.id;
            const intensity = region.cases / maxCases;
            return (
              <g
                key={region.id}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                className="cursor-pointer"
              >
                <path
                  d={region.path}
                  fill={isHovered ? `rgba(147, 51, 234, 0.2)` : `rgba(147, 51, 234, 0.08)`}
                  stroke={isHovered ? '#9333ea' : '#d8b4fe'}
                  strokeWidth={isHovered ? 2 : 1}
                  strokeDasharray={isHovered ? 'none' : '4 2'}
                  style={{ transition: 'all 0.3s ease' }}
                />
                <text x={region.x} y={region.y - 8} textAnchor="middle" fill="#9333ea" fontSize="9" opacity={0.6}>{region.name}</text>
                <text x={region.x} y={region.y + 6} textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="600">{region.cases.toLocaleString('pt-BR')}</text>
              </g>
            );
          })}

          {/* Main SP municipality regions */}
          {spRegions.map((region) => {
            const isHovered = hoveredRegion === region.id;
            const intensity = region.cases / maxCases;
            const fillOpacity = isHovered ? 0.35 : 0.12 + intensity * 0.15;
            return (
              <g
                key={region.id}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                className="cursor-pointer"
                filter={isHovered ? 'url(#shadow)' : undefined}
              >
                <path
                  d={region.path}
                  fill={`${region.color}`}
                  fillOpacity={fillOpacity}
                  stroke={isHovered ? region.color : '#d8b4fe'}
                  strokeWidth={isHovered ? 2.5 : 1.2}
                  style={{ transition: 'all 0.3s ease' }}
                />
                {/* Region label */}
                <text x={region.labelX} y={region.labelY - 10} textAnchor="middle" fill={isHovered ? region.color : '#6b21a8'} fontSize="10" opacity={isHovered ? 1 : 0.7}>{region.name}</text>
                {/* Case count */}
                <text x={region.labelX} y={region.labelY + 6} textAnchor="middle" fill={isHovered ? region.color : '#7c3aed'} fontSize="13" fontWeight="700">{region.cases.toLocaleString('pt-BR')}</text>
                {/* Pulsing dot */}
                <circle cx={region.labelX} cy={region.labelY + 18} r={isHovered ? 5 : 3} fill={region.color} opacity={isHovered ? 0.8 : 0.4}>
                  <animate attributeName="r" values={isHovered ? '5;8;5' : '3;5;3'} dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values={isHovered ? '0.8;0.3;0.8' : '0.4;0.15;0.4'} dur="2s" repeatCount="indefinite" />
                </circle>
              </g>
            );
          })}

          {/* Major roads overlay */}
          <g opacity="0.15" stroke="#6b21a8" strokeWidth="1" fill="none">
            {/* Marginal Tietê approximation */}
            <path d="M 60,120 Q 150,105 270,128 Q 370,115 460,100" strokeDasharray="6 3" />
            {/* Marginal Pinheiros approximation */}
            <path d="M 180,120 Q 200,170 220,230 Q 240,280 260,330" strokeDasharray="6 3" />
            {/* Radial roads */}
            <path d="M 270,150 L 420,60" strokeDasharray="4 4" />
            <path d="M 270,150 L 480,180" strokeDasharray="4 4" />
            <path d="M 270,150 L 100,160" strokeDasharray="4 4" />
          </g>

          {/* Compass */}
          <g transform="translate(485, 30)">
            <circle cx="0" cy="0" r="14" fill="white" stroke="#d8b4fe" strokeWidth="1" />
            <text x="0" y="-3" textAnchor="middle" fill="#7c3aed" fontSize="8" fontWeight="700">N</text>
            <path d="M 0,-1 L 3,6 0,4 -3,6 Z" fill="#9333ea" />
          </g>
        </svg>

        {/* Tooltip */}
        {hoveredRegion && (() => {
          const all = [...spRegions.map(r => ({ ...r, labelX: r.labelX, labelY: r.labelY })), ...metropolitanRegions.map(r => ({ ...r, labelX: r.x, labelY: r.y }))];
          const region = all.find(r => r.id === hoveredRegion);
          if (!region) return null;
          return (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 left-4 bg-white rounded-xl shadow-xl border border-purple-100 px-5 py-3 z-30"
            >
              <div className="text-gray-800">{region.name}</div>
              <div className="text-purple-600 text-lg">{region.cases.toLocaleString('pt-BR')} casos</div>
              <div className="text-gray-400 text-xs mt-1">{((region.cases / 11620) * 100).toFixed(1)}% do total</div>
            </motion.div>
          );
        })()}

        {/* Legend */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-100/50">
          <div className="text-[10px] text-gray-500 mb-1.5">Intensidade</div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-purple-300/30" />
            <div className="w-3 h-3 rounded-sm bg-purple-500/50" />
            <div className="w-3 h-3 rounded-sm bg-purple-700/70" />
            <span className="text-[10px] text-gray-400 ml-1">Baixo → Alto</span>
          </div>
        </div>

        {/* Total badge */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-purple-100/50">
          <div className="text-[10px] text-gray-500">Total geral</div>
          <div className="text-purple-700">11.620 casos</div>
        </div>
      </div>
    </motion.div>
  );
}

export function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState('Todos os meses');

  return (
    null
  );
}