import { NextResponse } from 'next/server';

// Códigos das Séries do Banco Central do Brasil (SGS)
const SERIES_BCB_MENSAL: Record<string, number> = {
  'IPCA': 433,
  'INPC': 188,
  'IGP-M': 189,
  'INCC': 192,
};

// Next.js Route Handler Cache configurado para 12 horas (43200 segundos)
export const revalidate = 43200;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const indice = searchParams.get('indice');

  if (!indice || !SERIES_BCB_MENSAL[indice]) {
    return NextResponse.json({ error: 'Índice inválido' }, { status: 400 });
  }

  const codigo = SERIES_BCB_MENSAL[indice];

  try {
    const response = await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.${codigo}/dados/ultimos/12?formato=json`);
    
    if (!response.ok) {
      return NextResponse.json({ error: `Erro na API do BCB: ${response.status}` }, { status: response.status });
    }

    const data = await response.json();
    
    if (data && Array.isArray(data) && data.length > 0) {
      let fatorAcumulado = 1;
      for (const item of data) {
        const taxaMensal = parseFloat(item.valor) / 100;
        if (!isNaN(taxaMensal)) {
          fatorAcumulado *= (1 + taxaMensal);
        }
      }
      
      const taxaAnualPercent = (fatorAcumulado - 1) * 100;
      const resultadoFinal = Number(taxaAnualPercent.toFixed(2));
      
      return NextResponse.json({ valor: resultadoFinal });
    }
    
    return NextResponse.json({ error: 'Formato inesperado retornado pela API' }, { status: 500 });
  } catch (error) {
    console.error(`Erro ao buscar índice ${indice}:`, error);
    return NextResponse.json({ error: 'Falha de rede ao acessar BCB' }, { status: 500 });
  }
}
