# Configuração — Google Sheets para captura de leads

**Planilha:** https://docs.google.com/spreadsheets/d/1diks3qd1lhtj8M-TUtGkNzBopWQQBzPdp4t4pjncxQ4

---

## Passo a passo (5 minutos)

### 1. Abra o Apps Script na planilha

1. Abra a planilha acima
2. No menu superior clique em **Extensões → Apps Script**
3. Uma nova aba vai abrir com o editor de código

---

### 2. Cole o script abaixo

Apague tudo que estiver no editor e cole exatamente isso:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Cria cabeçalhos se a planilha estiver vazia
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data/Hora', 'Nome', 'Email', 'Fonte']);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
    }

    sheet.appendRow([
      Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'dd/MM/yyyy HH:mm:ss'),
      data.name  || '',
      data.email || '',
      data.source || 'ebook-ansiedade'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função de teste — rode manualmente para verificar
function testar() {
  doPost({
    postData: {
      contents: JSON.stringify({
        name:   'Maria Teste',
        email:  'teste@email.com',
        source: 'ebook-ansiedade-hero'
      })
    }
  });
}
```

Clique em **Salvar** (ícone de disquete ou Ctrl+S).

---

### 3. Publique como Web App

1. Clique em **Implantar → Nova implantação**
2. Em "Selecione o tipo" escolha **App da Web**
3. Configure:
   - **Descrição:** Lead capture ebook Ale Vencato
   - **Executar como:** Eu (seu email)
   - **Quem tem acesso:** Qualquer pessoa
4. Clique em **Implantar**
5. Autorize as permissões quando solicitado
6. **Copie a URL** que aparecer — ela tem formato parecido com:
   `https://script.google.com/macros/s/AKfycb.../exec`

---

### 4. Adicione a URL ao `.env.local`

Abra o arquivo `.env.local` na raiz do projeto e substitua o placeholder:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/SUA_URL_AQUI/exec
```

---

### 5. Teste a função manualmente

De volta ao Apps Script:
1. No menu suspenso de funções (onde diz `doPost`), selecione **testar**
2. Clique em **Executar**
3. Volte para a planilha — deve aparecer uma linha com "Maria Teste"

---

### 6. Adicione o PDF do ebook

Coloque o arquivo PDF em:
```
/public/ebook-ansiedade.pdf
```

O botão de download na página `/ebook/obrigada` já aponta para esse caminho.

---

## URLs das páginas criadas

| Página | URL |
|---|---|
| Landing page do ebook | `alevencatoreiki.com.br/ebook` |
| Página de download | `alevencatoreiki.com.br/ebook/obrigada` |

---

## Colunas da planilha

| Coluna | Conteúdo |
|---|---|
| A — Data/Hora | Data e hora do cadastro (fuso Sao_Paulo) |
| B — Nome | Primeiro nome informado |
| C — Email | Email (sempre em minúsculo) |
| D — Fonte | De onde veio: `ebook-ansiedade-hero` ou `ebook-ansiedade-bottom` |
