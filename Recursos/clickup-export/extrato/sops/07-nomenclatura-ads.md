# SOP: Nomenclatura de Ads e Criativos

**Fonte:** Nomes de tasks em GPS Teste Criativos e Pools Ads

## Formato Principal (Ads de Video)

```
[hook][versao]-[editor]-[copy]-[funil]-[remessa]-[projeto]-[status]
```

### Exemplos

```
h5-vr1-Dan-Enrik-F01-R514-GPS-ON
h1-vr4-Kayke-Kelvin-F01-R554-GPS-ON
vr8-Romany-Kelvin-F01-R519-GPS-ON
G1H1-vr3-Kayke-Jorge-F01-R544-GPS-ON
G2H5-vr1-Kayke-Jorge-F01-R544-GPS-ON
```

### Campos

| Campo | Significado | Exemplos |
|-------|-------------|----------|
| `h[N]` | Hook numero N | h1, h5 |
| `G[N]H[N]` | Grupo N, Hook N | G1H1, G2H5 |
| `vr[N]` | Versao N do ad | vr1, vr8 |
| `[editor]` | Nome do editor | Kayke, Dan, Romany |
| `[copy]` | Nome do copywriter | Enrik, Kelvin, Jorge |
| `F[NN]` | Funil numero | F01, F03 |
| `R[NNN]` | Remessa numero | R514, R554 |
| `[projeto]` | Codigo do projeto | GPS |
| `[status]` | ON (ativo) ou OFF | ON |
| `IMG` | Se ad e imagem (nao video) | IMG |

## Formato de Ads para Edicao

```
[NumAd]-[NumRemessa]-[Projeto]-[Formato]
Exemplo: AD1-R1-RAP-4x5
```

## Formato de TypeBot/Funil

```
TB-V[NN]              TypeBot versao simples
TBA-V[NN]             TypeBot variante A
TBA2-V[NN]            TypeBot variante A2
TB-V[NN]-VSL[N]       TypeBot com VSL especifica
```

### Exemplos

```
TB-V91-VSL20
TB-V86-VSL17
TBA2-V49-VSL8-GG
TB-V42-397            (com ticket no nome)
```

## Formato de Pools Ads (Winners)

Mesmo formato principal. Status sempre `controle ads`.
Tasks descritivas como `Tela dividida remessa xpto`, `CPC`, `novo cta` tambem aparecem como categorias.
